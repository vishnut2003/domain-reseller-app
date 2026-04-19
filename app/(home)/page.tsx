import { BasicLayout } from "@/layouts/basic-layout";
import HeroSection from "./(components)/hero-section";
import PopularTldsSection from "./(components)/popular-tlds";
import { WhyChooseUsSection } from "./(components)/why-choose-us";

export default function Home() {
  return (
    <BasicLayout>
      <HeroSection />
      <PopularTldsSection />
      <WhyChooseUsSection />
    </BasicLayout>
  );
}
