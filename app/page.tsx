import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { PainPointsSection } from "@/components/pain-points-section"
import { TransformationSection } from "@/components/transformation-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { CurriculumSection } from "@/components/curriculum-section"
import { ToolsSection } from "@/components/tools-section"
import { OfferSection } from "@/components/offer-section"
import { CoachingSection } from "@/components/coaching-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { UrgencyCTASection } from "@/components/urgency-cta-section"
import { FAQSection } from "@/components/faq-section"
import { ApplicationForm } from "@/components/application-form"
import { Footer } from "@/components/footer"
import ROISection from "@/components/ROISection"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] ">
      <Navbar />

      <HeroSection />
      <PainPointsSection />
      <TransformationSection />
      <PortfolioSection />
      <CurriculumSection />
      <ToolsSection />
      <ROISection/>
      <OfferSection />
      <CoachingSection />
      <GuaranteeSection />
      <SocialProofSection />
      <UrgencyCTASection />
      <FAQSection />
      <ApplicationForm />
      <Footer />
    </main>
  )
}
