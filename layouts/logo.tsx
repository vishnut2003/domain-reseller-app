import Image from "next/image";
import Link from "next/link";
import LogoImageLight from "@/public/images/logos/light-logo.png";
import LogoImageDark from "@/public/images/logos/dark-logo.png";

export async function Logo({ type }: {
    type: "dark" | "light",
}) {
    return (
        <div
            className="w-full"
        >
            <Link
                href={"/"}
                className="w-full block"
            >
                <Image
                    alt="Dot Buy Domains"
                    src={type === "dark" ? LogoImageDark : LogoImageLight}
                    className="w-full"
                />
            </Link>
        </div>
    )
}