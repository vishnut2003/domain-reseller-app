'use client';

import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import DefaultSection from "@/layouts/default-section";
import { RiSearchLine } from "@remixicon/react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { DomainSearchResultInterface, NameComSingleDomainSearchResult } from "../api/domains/search-domain-availibility/route";
import { ErrorType } from "@/types/error";
import { handleCatchBlock } from "@/functions/common";
import { DomainSearchResultUi } from "./(components)/search-result";

export default function DomainNameSearchPageClient() {

    const searchParams = useSearchParams();
    const router = useRouter();

    const [error, setError] = useState<ErrorType>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [searchKeyword, setSearchKeyword] = useState<string>("");
    const [searchResult, setSearchResult] = useState<NameComSingleDomainSearchResult[]>([]);

    async function searchDomains(searchDomain: string): Promise<DomainSearchResultInterface> {
        const response = await axios.get<DomainSearchResultInterface>(
            "/api/domains/search-domain-availibility",
            {
                params: {
                    domain: searchDomain,
                }
            }
        );

        return response.data;
    }

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            setError(null);
            try {
                const domain = searchParams.get("domain");
                if (domain) {
                    setSearchKeyword(domain);
                    const { results } = await searchDomains(domain)
                    setSearchResult(results);
                }
            } catch (err) {
                const message = handleCatchBlock(err);
                setError(message);
            }
            setIsLoading(false);
        })();
    }, [searchParams])

    return (
        <Fragment>
            <DefaultSection
                outerClassName="py-10"
            >
                <div
                    className="max-w-xl mx-auto space-y-4"
                >
                    <h1
                        className="text-4xl font-light text-center"
                    >Find your domain name</h1>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            if (searchKeyword) {
                                router.push(`/domain-name-search?domain=${searchKeyword}`)
                            }
                        }}
                    >
                        <InputGroup
                            className="h-14 border-theme-primary"
                        >
                            <InputGroupInput
                                placeholder="Type the domain you want"
                                className="pl-5"
                                value={searchKeyword}
                                onChange={(e) => {
                                    setSearchKeyword(e.target.value)
                                }}
                            />

                            <InputGroupAddon
                                align={"inline-end"}
                            >
                                <Button
                                    variant={"default"}
                                    className="h-12 w-12 rounded-md"
                                >
                                    <RiSearchLine />
                                </Button>
                            </InputGroupAddon>

                        </InputGroup>
                    </form>
                </div>
            </DefaultSection>

            <DefaultSection
                outerClassName="min-h-[60dvh] pb-10"
                className="max-w-5xl!"
            >
                <DomainSearchResultUi
                    domains={searchResult}
                    error={error}
                    isLoading={isLoading}
                />
            </DefaultSection>

        </Fragment>
    )
}