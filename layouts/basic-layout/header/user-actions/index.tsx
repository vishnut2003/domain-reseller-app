'use client';

import { Button } from "@/components/ui/button";
import { RiUser4Line } from "@remixicon/react";

export default function HeaderUserAction() {
    return (
        <div>
            <Button
                variant={"ghost"}
                size={"lg"}
            >
                <RiUser4Line />
                <p>Sign In</p>
            </Button>
        </div>
    )
}