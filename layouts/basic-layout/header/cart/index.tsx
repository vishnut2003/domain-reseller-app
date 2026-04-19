'use client';

import { Button } from "@/components/ui/button";
import { RiShoppingBasket2Line } from "@remixicon/react";

export default function HeaderCart() {
    return (
        <div>
            <Button
                variant={"default"}
                size={"lg"}
            >
                <RiShoppingBasket2Line
                    size={30}
                />

                <p>Cart(0)</p>

            </Button>
        </div>
    )
}