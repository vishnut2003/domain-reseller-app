import { BasicLayout } from "@/layouts/basic-layout";
import DomainNameSearchPageClient from "./client";

export default async function DomainNameSearchPage() {
    return (
        <BasicLayout>
            <DomainNameSearchPageClient />
        </BasicLayout>
    )
}