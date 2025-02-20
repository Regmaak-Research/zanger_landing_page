import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Mail, HeadsetIcon, Zap } from "lucide-react";
import { Link } from "wouter";

const consultationBenefits = [
  {
    name: "Product Demo",
    description: "See how Zanger AI can transform your legal practice",
    features: [
      "Live Platform Walkthrough",
      "Custom Feature Showcase",
      "Integration Possibilities",
      "ROI Analysis",
      "Implementation Timeline",
      "Team Training Overview",
    ],
    icon: HeadsetIcon,
  },
  {
    name: "Consultation",
    description: "Discuss your specific needs and challenges",
    features: [
      "Needs Assessment",
      "Workflow Analysis",
      "Custom Solution Design",
      "Technical Requirements",
      "Security Overview",
      "Pricing Discussion",
    ],
    icon: Zap,
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Book a Consultation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn how Zanger AI can be tailored to your practice's specific needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {consultationBenefits.map((option, index) => (
            <motion.div
              key={option.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <option.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{option.name}</CardTitle>
                  <p className="text-muted-foreground mt-2">{option.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-6">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/demo">
                    <Button className="w-full">
                      Schedule Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}