'use client';

import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { RiSearchLine } from "@remixicon/react"

export default function HeaderDomainSearchBar() {
    return (
        <div
            className="w-full"
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
                />

            </InputGroup>
        </div>
    )
}