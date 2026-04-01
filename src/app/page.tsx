"use client";

import { useSmoothScroll } from "@/hooks/useGsap";
import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import VulnerabilitiesSection from "@/components/VulnerabilitiesSection";
import SolutionsSection from "@/components/SolutionsSection";
import ContextSection from "@/components/ContextSection";
import FlowSection from "@/components/FlowSection";
import BenefitsSection from "@/components/BenefitsSection";
import RoadmapSection from "@/components/RoadmapSection";
import ConclusionSection from "@/components/ConclusionSection";

export default function Home() {
  const { goToSection } = useSmoothScroll();

  return (
    <main>
      <Nav />
      <HeroSection />
      <ProblemSection />
      <VulnerabilitiesSection />
      <SolutionsSection />
      <ContextSection />
      <FlowSection />
      <BenefitsSection />
      <RoadmapSection />
      <ConclusionSection />
    </main>
  );
}
