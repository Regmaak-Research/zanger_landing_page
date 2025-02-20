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
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    title: "Document Drafting",
    description: "AI-powered document creation and templates for legal documents.",
    icon: FileText,
  },
  {
    title: "Legal Analysis",
    description: "Advanced analytics and insights for case evaluation.",
    icon: Scale,
  },
  {
    title: "Research Assistant",
    description: "Intelligent legal research with comprehensive database access.",
    icon: Search,
  },
  {
    title: "Smart Calendar",
    description: "Automated scheduling and deadline management.",
    icon: Calendar,
  },
  {
    title: "Client Portal",
    description: "Secure client communication and document sharing.",
    icon: Users,
  },
  {
    title: "Email Integration",
    description: "Seamless email management and organization.",
    icon: Mail,
  },
];

export default function Features() {
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
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your legal practice efficiently and effectively.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
