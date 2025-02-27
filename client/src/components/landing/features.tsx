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
    title: "Enterprise-Grade Document Creation",
    description: "Harness the power of advanced AI to generate precise, compliant legal documents in minutes. Built for the modern legal practice.",
    benefits: [
      "Intelligent document automation",
      "Industry-leading compliance checks",
      "Advanced template customization"
    ],
    icon: FileText,
  },
  {
    title: "Secure Document Sharing & E-Signatures",
    description: "Bank-level security meets seamless collaboration. Share, track, and sign documents with confidence in a unified platform.",
    benefits: [
      "Enterprise-grade encryption",
      "Compliant e-signatures",
      "Real-time collaboration"
    ],
    icon: Scale,
  },
  {
    title: "AI-Powered Legal Research",
    description: "Transform your research process with intelligent analytics and comprehensive case analysis powered by cutting-edge AI.",
    benefits: [
      "Contextual search intelligence",
      "Precedent analysis",
      "Real-time legal updates"
    ],
    icon: Search,
  },
  {
    title: "Smart Document Management",
    description: "Centralize your document lifecycle with intelligent organization, version control, and automated workflows.",
    benefits: [
      "Advanced version control",
      "Intelligent categorization",
      "Automated workflows"
    ],
    icon: Calendar,
  },
  {
    title: "Client Collaboration Hub",
    description: "Elevate client experience with a secure, intuitive portal for document sharing, approvals, and communication.",
    benefits: [
      "Secure client portal",
      "Document approval workflows",
      "Client communication tools"
    ],
    icon: Users,
  },
  {
    title: "Enterprise Security & Compliance",
    description: "Rest assured with SOC 2 compliant infrastructure, advanced encryption, and comprehensive audit trails.",
    benefits: [
      "SOC 2 compliance",
      "End-to-end encryption",
      "Detailed audit logs"
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
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Enterprise-Grade Legal Technology</h2>
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