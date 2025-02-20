import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background to-muted/50 flex items-center">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 pt-12 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <img
              src="/Untitled design (8).png"
              alt="Zanger Logo"
              className="h-48 w-auto"
            />
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Transform Your Legal Practice with AI
              </h1>
              <p className="text-xl text-muted-foreground">
                Your all-in-one AI legal platform that saves 70% of time on document preparation and case management.
              </p>
            </div>
            <div className="flex gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="/trial">
                  Join Closed Beta
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href="/demo">
                  Schedule Demo
                </Link>
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