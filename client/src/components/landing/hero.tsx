import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Scale, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background to-muted/50 flex items-center">
      <div className="container mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <img
              src="/Untitled design (8).png"
              alt="Zanger Logo"
              className="h-16 w-auto mb-8"
            />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Transform Your Legal Practice with AI
            </h1>
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground">
                Zanger AI is your all-in-one legal platform that combines AI-powered document drafting,
                intelligent analysis, and practice management tools to help you:
              </p>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Save 70% of time on document preparation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Access comprehensive legal research in seconds
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Manage clients and cases efficiently in one place
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                Start Free Trial <ChevronRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square rounded-lg overflow-hidden bg-primary/5 p-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
              alt="Modern legal office environment"
              className="object-cover w-full h-full rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}