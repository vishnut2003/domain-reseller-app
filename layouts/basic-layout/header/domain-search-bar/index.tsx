'use client';

import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { RiSearchLine } from "@remixicon/react"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function HeaderDomainSearchBar() {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        const domain = searchParams.get("domain");
        if (domain) {
            setSearch(domain);
        }
    }, [searchParams]);

    if (pathname === "/domain-name-search") {
        return;
    }

    return (
        <form
            className="w-full"
            onSubmit={(e) => {
                e.preventDefault();
                if (search) {
                    router.push(`/domain-name-search?domain=${search}`);
                }
            }}
        >
            <InputGroup
                className="w-full h-10 px-1 border-theme-dark"
            >

                <InputGroupAddon>
                    <RiSearchLine
                        className="text-theme-dark"
                    />
                </InputGroupAddon>

                <InputGroupInput
                    placeholder="Search your perfect domain name..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />

            </InputGroup>
        </form>
    )
}