import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="attached_assets/zanne-removebg-preview.png"
              alt="Zanger Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            <Button variant="link" onClick={() => scrollToSection('features')}>
              Features
            </Button>
            <Button variant="link" onClick={() => scrollToSection('testimonials')}>
              Testimonials
            </Button>
            <Button variant="link" onClick={() => scrollToSection('pricing')}>
              Pricing
            </Button>
            <Button variant="link" onClick={() => scrollToSection('faq')}>
              FAQ
            </Button>

            {/* CTA Buttons */}
            <Button asChild variant="ghost" size="sm">
              <Link href="/demo">Schedule Demo</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/trial">Join Beta</Link>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start" onClick={() => scrollToSection('features')}>
              Features
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => scrollToSection('testimonials')}>
              Testimonials
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => scrollToSection('pricing')}>
              Pricing
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => scrollToSection('faq')}>
              FAQ
            </Button>
            <div className="pt-2 space-y-2">
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link href="/demo">Schedule Demo</Link>
              </Button>
              <Button asChild className="w-full justify-start">
                <Link href="/trial">Join Beta</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}