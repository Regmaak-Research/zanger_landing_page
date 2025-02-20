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
    title: "AI-Powered Document Drafting",
    description: "Create legally sound documents in minutes, not hours. Our AI understands context and generates customized legal documents while ensuring compliance.",
    benefits: [
      "70% faster document preparation",
      "Built-in legal compliance checks",
      "Customizable templates library"
    ],
    icon: FileText,
  },
  {
    title: "Intelligent Legal Analysis",
    description: "Get instant insights and risk assessments. Our AI analyzes cases, identifies precedents, and provides actionable recommendations.",
    benefits: [
      "Automated case analysis",
      "Risk assessment reports",
      "Precedent matching"
    ],
    icon: Scale,
  },
  {
    title: "Smart Research Assistant",
    description: "Access comprehensive legal research instantly. Search across cases, statutes, and regulations with natural language queries.",
    benefits: [
      "Natural language search",
      "Real-time updates",
      "Citation recommendations"
    ],
    icon: Search,
  },
  {
    title: "Automated Calendar",
    description: "Never miss a deadline or appointment. Our smart calendar manages your schedule, court dates, and filing deadlines automatically.",
    benefits: [
      "Court date reminders",
      "Deadline tracking",
      "Multi-calendar sync"
    ],
    icon: Calendar,
  },
  {
    title: "Client Portal",
    description: "Provide a seamless client experience with secure document sharing, communication, and case updates in one place.",
    benefits: [
      "Secure document sharing",
      "Real-time case updates",
      "Client communication hub"
    ],
    icon: Users,
  },
  {
    title: "Email Management",
    description: "Keep your communications organized with AI-powered email sorting, tagging, and priority management.",
    benefits: [
      "Smart email categorization",
      "Priority inbox",
      "Template responses"
    ],
    icon: Mail,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Powerful Features</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Transform your legal practice with our comprehensive suite of AI-powered tools and features.
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