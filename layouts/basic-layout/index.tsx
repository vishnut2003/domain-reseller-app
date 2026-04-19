import { PropsWithChildren } from "react";
import { BasicHeader } from "./header";

export async function BasicLayout({
    children,
}: PropsWithChildren) {
    return (
        <div>
            <BasicHeader />
            <div>{children}</div>
        </div>
    )
}