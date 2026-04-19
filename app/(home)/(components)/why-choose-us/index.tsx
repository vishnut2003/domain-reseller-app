import DefaultSection from "@/layouts/default-section";
import WhyUsImage from "./assets/why-us-image.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export async function WhyChooseUsSection() {
    return (
        <DefaultSection
            className="py-15 max-w-6xl! space-y-10"
        >
            <div
                className="space-y-3 max-w-100 mx-auto"
            >
                <h2
                    className="text-4xl font-light text-center text-theme-primary"
                >Why Choose Us</h2>
                <p
                    className="text-lg text-center text-theme-dark font-light"
                >Everything you need to find, secure, and manage your perfect domain</p>
            </div>

            <div
                className="w-full flex items-stretch gap-15"
            >
                <div
                    className="w-full flex flex-col justify-between"
                >
                    <div
                        className="space-y-8"
                    >
                        {
                            [
                                {
                                    heading: "Affordable & Transparent Pricing",
                                    content: "We offer competitive domain prices with no hidden fees, so you always know exactly what you’re paying. Whether you're registering a new domain or renewing an existing one, our pricing is designed to give you maximum value without compromising on quality.",
                                },
                                {
                                    heading: "Fast, Secure & Easy Management",
                                    content: "Get your domain instantly with a smooth and secure checkout process. Our intuitive dashboard makes it easy to manage DNS, renew domains, and handle transfers—all in one place, with complete control and reliability.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="space-y-4"
                                >
                                    <h3
                                        className="text-3xl font-semibold"
                                    >{item.heading}</h3>
                                    <p>{item.content}</p>
                                </div>
                            ))
                        }
                    </div>

                    <div>
                        <Button
                            variant={"default"}
                            className="py-5 px-8"
                        >Know More</Button>
                    </div>

                </div>
                <div
                    className="w-[80%]"
                >
                    <Image
                        alt="Why Choose Us"
                        src={WhyUsImage}
                        className="w-full rounded-xl"
                    />
                </div>
            </div>

        </DefaultSection>
    )
}