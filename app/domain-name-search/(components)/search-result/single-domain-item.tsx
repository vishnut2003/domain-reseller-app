'use client';

import { NameComSingleDomainSearchResult } from "@/app/api/domains/search-domain-availibility/route";
import { Button } from "@/components/ui/button";
import { getStoreCurrencySymbol } from "@/config/store-settings";
import { RiShoppingBasket2Line } from "@remixicon/react";

export default function SingleDomainResultItem({ domain }: {
    domain: NameComSingleDomainSearchResult,
}) {

    const currencySymbol = getStoreCurrencySymbol();

    return (
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
                className="text-right space-y-2"
            >
                {
                    domain.purchasePrice && (
                        <p
                            className="font-bold"
                        >
                            {currencySymbol} {domain.purchasePrice}
                        </p>
                    )
                }

                <div
                    className="flex items-center gap-1"
                >
                    <Button
                        variant={"default"}
                        disabled={!domain.purchasable}
                    >
                        Buy Now
                    </Button>

                    <Button
                        variant={"default"}
                        className="bg-theme-primary/10 text-theme-primary hover:bg-theme-primary hover:text-white"
                        size={"sm"}
                    >
                        <RiShoppingBasket2Line />
                    </Button>
                </div>

            </div>
        </div>
    )
}