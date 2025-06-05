import BeforeAfterSection from "@/components/BeforeAfterSection";
import CompanyLogos from "@/components/CompanyLogos";
import ExamplesSection from "@/components/ExamplesSection";
import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SocialMediaGallery from "@/components/SocialMediaGallery";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CompanyLogos />
      <ExamplesSection />
      <ServicesSection />
      <SocialMediaGallery />
      <TestimonialsSection />
      <BeforeAfterSection />
      <FeaturesSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
