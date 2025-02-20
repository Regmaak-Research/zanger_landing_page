import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import Testimonials from "@/components/landing/testimonials";
import Pricing from "@/components/landing/pricing";
import ContactForm from "@/components/landing/contact-form";
import FAQ from "@/components/landing/faq";
import Newsletter from "@/components/landing/newsletter";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <ScrollArea className="h-screen w-full">
      <main className="min-h-screen">
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <ContactForm />
        <FAQ />
        <Newsletter />
      </main>
    </ScrollArea>
  );
}
