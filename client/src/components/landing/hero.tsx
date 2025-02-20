import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Scale } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background to-muted/50 flex items-center">
      <div className="container mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Transform Your Legal Practice with AI
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Zanger AI revolutionizes legal work with intelligent document drafting,
              analysis, and practice management tools.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                Get Started <ChevronRight className="h-4 w-4" />
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
            className="relative aspect-square rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
              alt="Modern legal office environment"
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
