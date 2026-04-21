'use client';

import { NameComSingleDomainSearchResult } from "@/app/api/domains/search-domain-availibility/route";
import ErrorMessageElement from "@/components/message-elements/error-message";
import { Button } from "@/components/ui/button";
import { getStoreCurrency } from "@/config/store-settings";
import { ErrorType } from "@/types/error";
import { Fragment } from "react/jsx-runtime";

export function DomainSearchResultUi({
    domains,
    isLoading,
    error
}: {
    domains: NameComSingleDomainSearchResult[],
    isLoading: boolean,
    error: ErrorType,
}) {

    const currency = getStoreCurrency();

    if (error) {
        return (
            <ErrorMessageElement
                text={error}
            />
        )
    }

    if (isLoading) {
        return (
            <div
                className="space-y-5"
            >
                {
                    [1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            className="flex gap-5 animate-pulse"
                            key={i}
                        >
                            <div
                                className="w-full space-y-2"
                            >
                                <p
                                    className="py-3 bg-theme-dark-black/5 rounded-lg max-w-100"
                                ></p>
                                <p
                                    className="py-2 bg-theme-dark-black/5 rounded-lg max-w-60"
                                ></p>
                            </div>

                            <div
                                className="w-20"
                            >
                                <p
                                    className="py-4 bg-theme-dark-black/5 rounded-lg"
                                ></p>
                            </div>

                        </div>
                    ))
                }
            </div>
        )
    }

    return (
        <div>
            {domains.map((domain, index) => (
                <Fragment
                    key={index}
                >

                    {index !== 0 && (
                        <hr className="opacity-50" />
                    )}

                    <div
                        className={
                            "flex items-center justify-between py-3 px-5 hover:bg-theme-dark-black/10 rounded-lg"
                            + ` ${!domain.purchasable && "opacity-30"}`
                        }
                    >
                        <div>
                            <p
                                className="text-lg font-semibold"
                            >{domain.domainName}</p>
                            <p
                                className="text-sm"
                            >.{domain.tld}
                                {!domain.purchasable && (
                                    <>(Domain is already taken.)</>
                                )}
                            </p>
                        </div>

                        <div
                            className="text-right"
                        >
                            <p
                                className="font-bold"
                            >{domain.purchasePrice} {currency}</p>
                            <Button
                                variant={"default"}
                                disabled={!domain.purchasable}
                            >
                                Buy Now
                            </Button>
                        </div>
                    </div>
                </Fragment>
            ))}
        </div>
    )
}