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

            return response.data;

        } catch (err) {
            const message = handleCatchBlock(err);
            throw new Error("name.com API failed:" + message);
        }
    }
}