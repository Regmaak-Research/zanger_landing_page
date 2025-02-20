import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import Navbar from "@/components/landing/navbar";

export default function Demo() {
  useEffect(() => {
    // Ensure Calendly widget is initialized
    if ((window as any).Calendly) {
      (window as any).Calendly.initInlineWidget({
        url: 'https://calendly.com/yelaman-kazbekov/let-s-talk-legal-solutions-1',
        parentElement: document.querySelector('.calendly-inline-widget'),
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/50 py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto pt-16"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Schedule a Demo</CardTitle>
            </CardHeader>
            <CardContent className="min-h-[700px]">
              <div
                className="calendly-inline-widget w-full h-[650px]"
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </>
  );
}