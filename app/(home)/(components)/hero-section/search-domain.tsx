'use client';

import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { RiSearchLine } from "@remixicon/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchDomainForm() {

    const router = useRouter();
    const [keyword, setKeyword] = useState<string>("");

    return (
        <form
            className="flex items-center w-full gap-3"
            onSubmit={(e) => {
                e.preventDefault();
                router.push(`/domain-name-search?domain=${keyword}`)
            }}
        >
            <InputGroup
                className="bg-white h-12 px-2"
            >

                <InputGroupAddon>
                    <RiSearchLine />
                </InputGroupAddon>

                <InputGroupInput
                    placeholder="Search your domain..."
                    value={keyword}
                    onChange={e => setKeyword(e.target.value)}
                />
            </InputGroup>
            <Button
                variant={"default"}
                className="py-6 px-10"
                size={"lg"}
            >
                <p>Search Domain</p>
            </Button>
        </form>
    )
}