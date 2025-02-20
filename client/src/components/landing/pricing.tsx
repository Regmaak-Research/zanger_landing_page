import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { Link } from "wouter";

const earlyAdopterBenefits = [
  {
    name: "Beta Access Program",
    features: [
      "Early Access to All Features",
      "Priority Feature Requests",
      "Direct Access to Development Team",
      "Exclusive Beta Community",
      "Lock-in Early Adopter Pricing",
      "Shape Product Development",
    ],
    badge: "Limited Spots",
  },
  {
    name: "Enterprise Partner Program",
    features: [
      "Custom AI Model Training",
      "Dedicated Support Channel",
      "Integration Consulting",
      "Custom Feature Development",
      "White-label Options",
      "Priority Bug Fixes",
    ],
    badge: "By Application",
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
          <h2 className="text-3xl font-bold mb-4">Join Our Beta Program</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Be among the first to experience and shape the future of legal AI technology.
            Early adopters receive exclusive benefits and special pricing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {earlyAdopterBenefits.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full relative overflow-hidden">
                {tier.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      {tier.badge}
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/trial">
                    <Button className="w-full">
                      Apply for Access
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