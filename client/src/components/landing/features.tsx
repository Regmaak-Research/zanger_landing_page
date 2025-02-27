import { motion } from "framer-motion";
import {
  FileText,
  Scale,
  Search,
  Calendar,
  Users,
  Mail,
  CheckCircle,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

const features = [
  {
    title: "Advanced Document Creation",
    description: "Generate precise, professional legal documents in minutes with our AI-powered drafting system.",
    benefits: [
      "Intelligent document automation",
      "Industry-standard templates",
      "Advanced customization options"
    ],
    icon: FileText,
  },
  {
    title: "Document Sharing & E-Signatures",
    description: "Share documents and collect signatures seamlessly in one unified platform.",
    benefits: [
      "Easy document sharing",
      "Built-in e-signatures",
      "Real-time collaboration"
    ],
    icon: Scale,
  },
  {
    title: "AI-Powered Legal Research",
    description: "Transform your research process with intelligent analytics and comprehensive case analysis.",
    benefits: [
      "Smart search capabilities",
      "Precedent analysis",
      "Real-time legal updates"
    ],
    icon: Search,
  },
  {
    title: "Document Management",
    description: "Keep your documents organized with intelligent filing and version control.",
    benefits: [
      "Smart organization",
      "Version control",
      "Automated workflows"
    ],
    icon: Calendar,
  },
  {
    title: "Client Collaboration",
    description: "Streamline document sharing and approvals with an intuitive client portal.",
    benefits: [
      "Easy file sharing",
      "Approval workflows",
      "Communication tools"
    ],
    icon: Users,
  },
  {
    title: "Document Analytics",
    description: "Track document status, usage patterns, and workflow efficiency.",
    benefits: [
      "Usage tracking",
      "Progress monitoring",
      "Performance insights"
    ],
    icon: Mail,
  },
];

export default function Features() {
  return (
    <section 
      id="features" 
      className="py-16 md:py-24 bg-muted/30 scroll-mt-16"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Powerful Legal Technology</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Experience unmatched efficiency with our comprehensive suite of AI-powered tools designed for the complete document lifecycle.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <feature.icon className="h-10 w-10 md:h-12 md:w-12 text-primary mb-4" />
                  <CardTitle className="text-lg md:text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-sm md:text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}