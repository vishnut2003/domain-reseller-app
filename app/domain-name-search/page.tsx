import { BasicLayout } from "@/layouts/basic-layout";
import DomainNameSearchPageClient from "./client";
import { Suspense } from "react";

export default async function DomainNameSearchPage() {
    return (
        <BasicLayout>
            <Suspense>
                <DomainNameSearchPageClient />
            </Suspense>
        </BasicLayout>
    )
}