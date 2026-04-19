import { BasicLayout } from "@/layouts/basic-layout";
import HeroSection from "./(components)/hero-section";
import PopularTldsSection from "./(components)/popular-tlds";

export default function Home() {
  return (
    <BasicLayout>
      <HeroSection />
      <PopularTldsSection />
    </BasicLayout>
  );
}
