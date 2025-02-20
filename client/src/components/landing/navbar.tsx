import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <Button variant="ghost" size="sm">
              Menu
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
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="sm">
              <Link href="/demo">Schedule Demo</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/trial">Join Beta</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
