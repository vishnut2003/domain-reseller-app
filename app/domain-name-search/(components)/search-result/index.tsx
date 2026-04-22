'use client';

import { NameComSingleDomainSearchResult } from "@/app/api/domains/search-available-domain/route";
import ErrorMessageElement from "@/components/message-elements/error-message";
import { ErrorType } from "@/types/error";
import { Fragment } from "react/jsx-runtime";
import SingleDomainResultItem from "./single-domain-item";

export function DomainSearchResultUi({
    domains,
    isLoading,
    error
}: {
    domains: NameComSingleDomainSearchResult[],
    isLoading: boolean,
    error: ErrorType,
}) {

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

                    <SingleDomainResultItem
                        domain={domain}
                    />
                    
                </Fragment>
            ))}
        </div>
    )
}