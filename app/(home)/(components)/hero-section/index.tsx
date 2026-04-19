import { Button } from "@/components/ui/button";
import DefaultSection from "@/layouts/default-section";
import { RiSearchLine } from "@remixicon/react";
import BgImage from "./assets/hero-bg-image.jpg";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

export default async function HeroSection() {
    return (
        <DefaultSection
            className="flex items-stretch min-h-150 gap-10"
        >
            <div
                className="relative w-full rounded-3xl flex gap-5 items-center justify-center bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url(${BgImage.src})` }}
            >

                <div
                    className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-theme-primary to-theme-dark opacity-80 z-0"
                />

                <div
                    className="flex gap-5 flex-col items-center justify-center z-10"
                >
                    <h1
                        className="text-5xl leading-14 max-w-170 text-center text-white font-light"
                    >Find the Perfect Domain Name for Your Next Big Idea</h1>
                    <p
                        className="max-w-150 text-center text-white/70"
                    >Search and register domains instantly at the best prices. Launch your online presence with ease—fast, secure, and hassle-free.</p>

                    <div
                        className="flex items-center w-full gap-3"
                    >
                        <InputGroup
                            className="bg-white h-12 px-2"
                        >

                            <InputGroupAddon>
                                <RiSearchLine />
                            </InputGroupAddon>

                            <InputGroupInput
                                placeholder="Search your domain..."
                            />
                        </InputGroup>
                        <Button
                            variant={"default"}
                            className="py-6 px-10"
                            size={"lg"}
                        >
                            <p>Search Domain</p>
                        </Button>
                    </div>
                </div>

            </div>
        </DefaultSection>
    )
}