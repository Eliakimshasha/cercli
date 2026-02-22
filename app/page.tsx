import CtaSection from "./components/CtaSection";
import CountingsSection from "./components/CountingsSection";
import EmpowerSection from "./components/EmpowerSection";
import FaqsSection from "./components/FaqsSection";
import HeroSection from "./components/HeroSection";
import IntegrationsSection from "./components/IntegrationsSection";
import IntoSection from "./components/into";
import NoFragmentationsSection from "./components/NoFragmentationsSection";
import ResourcesSection from "./components/ResourcesSection";
import ServicesSection from "./components/ServicesSection";
import SolutionsSection from "./components/SolutionsSection";
import StoriesSection from "./components/StoriesSection";
import SwitchSection from "./components/SwitchSection";
import WhyUsSection from "./components/WhyUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntoSection />
      <CountingsSection />
      <SolutionsSection /> 
      <WhyUsSection />
      <NoFragmentationsSection />
      <IntegrationsSection />
      <SwitchSection />
      <StoriesSection />
      <ResourcesSection />
      <FaqsSection />
      <EmpowerSection />
    </>
  );
}
