import { PropsWithChildren } from "react";
import { BasicHeader } from "./header";
import BasicFooter from "./footer";

export async function BasicLayout({
    children,
}: PropsWithChildren) {
    return (
        <div>
            <BasicHeader />
            <div>{children}</div>
            <BasicFooter />
        </div>
    )
}