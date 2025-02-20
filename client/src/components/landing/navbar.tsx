import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">Zanger</span>
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
            <Link href="#features">
              <Button variant="link">Features</Button>
            </Link>
            <Link href="#testimonials">
              <Button variant="link">Testimonials</Button>
            </Link>
            <Link href="#pricing">
              <Button variant="link">Pricing</Button>
            </Link>
            <Link href="#faq">
              <Button variant="link">FAQ</Button>
            </Link>

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
            <Link href="#features">
              <Button variant="ghost" className="w-full justify-start">Features</Button>
            </Link>
            <Link href="#testimonials">
              <Button variant="ghost" className="w-full justify-start">Testimonials</Button>
            </Link>
            <Link href="#pricing">
              <Button variant="ghost" className="w-full justify-start">Pricing</Button>
            </Link>
            <Link href="#faq">
              <Button variant="ghost" className="w-full justify-start">FAQ</Button>
            </Link>
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