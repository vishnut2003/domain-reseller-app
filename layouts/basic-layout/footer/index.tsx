import DefaultSection from "@/layouts/default-section";

export default async function BasicFooter () {
    return (
        <DefaultSection
            className="text-center"
            outerClassName="bg-theme-dark-black/5 py-5 px-8"
        >
            <p>© 2026 Eversoft Domains. All rights reserved.</p>
        </DefaultSection>
    )
}