import DefaultSection from "@/layouts/default-section";
import { Logo } from "@/layouts/logo";
import HeaderUserAction from "./user-actions";
import HeaderDomainSearchBar from "./domain-search-bar";
import HeaderCart from "./cart";
import { Suspense } from "react";

export async function BasicHeader() {
    return (
        <DefaultSection
            className="py-3"
        >

            <div
                className="flex items-center justify-between gap-10"
            >
                <div
                    className="w-50 shrink-0"
                >
                    <Logo type="dark" />
                </div>

                <div
                    className="w-full"
                >
                    <Suspense>
                        <HeaderDomainSearchBar />
                    </Suspense>
                </div>

                <div
                    className="flex items-center justify-end gap-5"
                >
                    <HeaderUserAction />
                    <HeaderCart />
                </div>

            </div>

        </DefaultSection>
    )
}