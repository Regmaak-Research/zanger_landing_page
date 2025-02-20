import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Demo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50 py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Schedule a Demo</CardTitle>
          </CardHeader>
          <CardContent className="min-h-[700px]">
            <div
              className="calendly-inline-widget h-[650px]"
              data-url="https://calendly.com/yelaman-kazbekov/let-s-talk-legal-solutions-1"
            />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}