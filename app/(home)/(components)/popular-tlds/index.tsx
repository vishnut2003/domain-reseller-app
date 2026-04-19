import DefaultSection from "@/layouts/default-section";
import Image, { StaticImageData } from "next/image";
import ComImage from "./assets/tld-images/com.png";
import InImage from "./assets/tld-images/in.png";
import NetImage from "./assets/tld-images/net.png";
import OrgImage from "./assets/tld-images/org.png";
import { Fragment } from "react/jsx-runtime";

export default async function PopularTldsSection() {

    const tldsList: {
        tld: string,
        price: string,
        image: StaticImageData,
        description: string,
    }[] = [
            {
                tld: ".com",
                price: "1,299",
                image: ComImage,
                description: "The most trusted and widely used domain extension, perfect for businesses and brands to build a strong online presence.",
            },
            {
                tld: "in",
                price: "1,499",
                image: InImage,
                description: "India’s official domain extension, perfect for businesses and individuals targeting an Indian audience.",
            },
            {
                tld: ".net",
                price: "1,599",
                image: NetImage,
                description: "Originally meant for networks, .net is a reliable and widely recognized domain extension, ideal for tech platforms, startups, and online services.",
            },
            {
                tld: ".org",
                price: "2,988",
                image: OrgImage,
                description: "Commonly used by organizations, communities, and nonprofits, .org is a trusted domain extension that builds credibility and purpose.",
            },
        ]

    return (
        <DefaultSection
            className="flex items-stretch overflow-hidden"
            outerClassName="py-20 bg-theme-dark mt-10"
        >

            {tldsList.map((item, index) => (
                <Fragment
                    key={index}
                >

                    <div
                        className={
                            "w-full space-y-3 flex py-5 px-8 gap-6 rounded-xl"
                            + ` ${index % 2 === 0 ? "bg-linear-to-r from-theme-primary to-theme-dark" : ""}`
                        }
                    >
                        <Image
                            alt={item.tld}
                            src={item.image}
                            className="w-15 shrink-0 h-max rounded-full"
                        />
                        <div
                            className="space-y-2 w-full text-white"
                        >
                            <p
                                className="text-2xl leading-15 font-bold"
                            >{item.price} INR</p>
                            <p
                                className="text-white/70"
                            >{item.description}</p>
                        </div>
                    </div>
                </Fragment>
            ))}

        </DefaultSection>
    )
}