import { DomainSearchResultInterface } from "@/app/api/domains/search-domain-availibility/route";
import { handleCatchBlock } from "@/functions/common";
import axios, { AxiosInstance } from "axios";

export class NameComApi {
    private caller: AxiosInstance;

    constructor() {
        const NAMECOM_USERNAME = process.env.NAMECOM_USERNAME;
        const NAMECOM_TOKEN = process.env.NAMECOM_TOKEN;
        const NAMECOM_BASEURL = process.env.NAMECOM_BASEURL;

        if (!NAMECOM_USERNAME) throw new Error("NAMECOM_USERNAME is required.");
        if (!NAMECOM_TOKEN) throw new Error("NAMECOM_TOKEN is required.");
        if (!NAMECOM_BASEURL) throw new Error("NAMECOM_BASEURL is required.");

        this.caller = axios.create({
            baseURL: NAMECOM_BASEURL,
            auth: {
                username: NAMECOM_USERNAME,
                password: NAMECOM_TOKEN,
            },
        });
    }

    async testApi(): Promise<boolean> {
        try {
            const response = await this.caller.get<{ message: string }>(
                "/core/v1/hello"
            );

            return response.status === 200;
            // eslint-disable-next-line
        } catch (error: any) {
            throw new Error(
                `name.com API failed: ${error.response?.data?.message || error.message}`
            );
        }
    }

    async searchAvailableDomains({
        keyword,
    }: {
        keyword: string,
    }): Promise<DomainSearchResultInterface> {
        try {
            const response = await this.caller.post<DomainSearchResultInterface>(
                "/core/v1/domains:search",
                { keyword },
            );

            if (!response.data.results) {
                return ({
                    results: [],
                });
            }

            let priceUpdatedDomains = await this.convertUsdToInr(response.data);
            priceUpdatedDomains = this.updateDomainPrice(priceUpdatedDomains);

            return priceUpdatedDomains;

        } catch (err) {
            const message = handleCatchBlock(err);
            throw new Error("name.com API failed:" + message);
        }
    }

    private async convertUsdToInr({ results: domains }: DomainSearchResultInterface): Promise<DomainSearchResultInterface> {
        try {
            const { data } = await axios.get<{
                provider: string,
                WARNING_UPGRADE_TO_V6: string,
                terms: string,
                base: string,
                date: string,
                time_last_updated: number,
                rates: {
                    [key: string]: number,
                }
            }>(
                "https://api.exchangerate-api.com/v4/latest/USD",
            );

            const inrRate = data.rates?.["INR"];
            if (!data.rates) throw new Error("Not rates includes.");
            else if (typeof inrRate !== "number") {
                throw new Error("INR currency value deos not exist.");
            }

            const updatedDomains: DomainSearchResultInterface["results"] = [];
            for (const domain of domains) {
                if (!domain.purchasePrice) {
                    updatedDomains.push(domain);
                    continue;
                }

                const inrPrice = domain.purchasePrice * inrRate;
                updatedDomains.push({
                    ...domain,
                    purchasePrice: inrPrice,
                })
            }

            return ({
                results: updatedDomains,
            })

        } catch (err) {
            const message = handleCatchBlock(err);
            throw new Error(`Error while converting currency: ${message}`);
        }
    }

    private updateDomainPrice({ results: domains }: DomainSearchResultInterface): DomainSearchResultInterface {
        const updatedDomains: DomainSearchResultInterface["results"] = [];
        for (const domain of domains) {
            const purchasePrice = domain.purchasePrice;
            if (!purchasePrice) {
                updatedDomains.push(domain);
                continue;
            }

            const profitPercent = 0.2; // 20%
            const profit = purchasePrice * profitPercent;
            const salePrice = Math.ceil(purchasePrice + profit);

            updatedDomains.push({
                ...domain,
                purchasePrice: salePrice,
            })
        }

        return ({
            results: updatedDomains,
        });
    }
}