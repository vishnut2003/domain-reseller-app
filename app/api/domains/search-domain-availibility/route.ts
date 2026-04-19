import { NameComApi } from "@/class/name_com";
import { generateErrorResponse, handleCatchBlock } from "@/functions/common"
import { NextRequest, NextResponse } from "next/server";

export interface NameComSingleDomainSearchResult {
    domainName: string,
    purchasable: boolean,
    sld: string,
    tld: string,
    premium: boolean,
    purchasePrice: number,
    purchaseType: string,
    renewalPrice: number,
    reason: string,
}

export type DomainSearchResultInterface = {
    results: NameComSingleDomainSearchResult[],
}

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const search = searchParams.get("domain");

        if (!search) throw new Error("search text is required.");

        const namecom = new NameComApi();
        const searchResult = await namecom.searchAvailableDomains({
            keyword: search,
        });

        return NextResponse.json(searchResult);

    } catch (err) {
        const message = handleCatchBlock(err);
        console.log(message);
        const response = generateErrorResponse(message);
        return response;
    }
}