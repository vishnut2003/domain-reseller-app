'use client';

import { NameComSingleDomainSearchResult } from "@/app/api/domains/search-available-domain/route";
import { Button } from "@/components/ui/button";
import { getStoreCurrencySymbol } from "@/config/store-settings";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addDomainToCart } from "@/store/slices/cart";
import { RiShoppingBasket2Line } from "@remixicon/react";
import Link from "next/link";

export default function SingleDomainResultItem({ domain }: {
    domain: NameComSingleDomainSearchResult,
}) {

    const storeDispatch = useAppDispatch();
    const domainAlreadyInCart = useAppSelector(s => {
        const exist = s.cart.items.find(d => d.domainName === domain.domainName);
        return exist;
    })

    const currencySymbol = getStoreCurrencySymbol();

    function _addDomainToCart() {
        if (domain.purchasable) {
            storeDispatch(
                addDomainToCart({
                    domain,
                })
            )
        }
    }

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

            <div>
                <div
                    className="text-right space-y-2"
                >
                    {domain.purchasePrice && (
                        <p
                            className="font-bold"
                        >
                            {currencySymbol} {domain.purchasePrice}
                        </p>
                    )}

                    {
                        domain.purchasable && !domainAlreadyInCart && (

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
                                    type="button"
                                    onClick={_addDomainToCart}
                                >
                                    <RiShoppingBasket2Line />
                                </Button>
                            </div>
                        )
                    }

                    {
                        domainAlreadyInCart && (
                            <div>
                                <Link
                                    href={"/cart"}
                                >
                                    <Button
                                        variant={"default"}
                                    >Continue to Cart</Button>
                                </Link>
                            </div>
                        )
                    }

                </div>

            </div>
        </div>
    )
}