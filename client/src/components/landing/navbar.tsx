import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHomePage = location === "/";

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.scrollBy(0, -offset);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/zanger-logo.png"
              alt="Zanger Logo"
              className="h-24 w-auto"
            />
          </Link>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            {isHomePage && (
              <>
                <Button variant="link" onClick={() => scrollToSection('features')}>
                  Features
                </Button>
                <Button variant="link" onClick={() => scrollToSection('testimonials')}>
                  Testimonials
                </Button>
                <Button variant="link" onClick={() => scrollToSection('consultation')}>
                  Consultation
                </Button>
                <Button variant="link" onClick={() => scrollToSection('faq')}>
                  FAQ
                </Button>
              </>
            )}

            {/* CTA Buttons */}
            <Button asChild size="sm">
              <Link href="/trial">Join Beta</Link>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2">
            {isHomePage && (
              <>
                <Button variant="ghost" className="w-full justify-start" onClick={() => scrollToSection('features')}>
                  Features
                </Button>
                <Button variant="ghost" className="w-full justify-start" onClick={() => scrollToSection('testimonials')}>
                  Testimonials
                </Button>
                <Button variant="ghost" className="w-full justify-start" onClick={() => scrollToSection('consultation')}>
                  Consultation
                </Button>
                <Button variant="ghost" className="w-full justify-start" onClick={() => scrollToSection('faq')}>
                  FAQ
                </Button>
              </>
            )}
            <div className="pt-2">
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