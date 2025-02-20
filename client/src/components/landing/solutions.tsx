import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Building2, Users2, Scale, Briefcase } from "lucide-react";

const solutions = [
  {
    title: "Law Firms",
    description: "Streamline your practice with AI-powered document drafting, case management, and legal research.",
    icon: Building2,
  },
  {
    title: "Corporate Legal Teams",
    description: "Enhance efficiency with automated contract review, compliance monitoring, and risk assessment.",
    icon: Users2,
  },
  {
    title: "Solo Practitioners",
    description: "Access powerful legal tools and resources that level the playing field with larger firms.",
    icon: Scale,
  },
  {
    title: "Legal Consultants",
    description: "Deliver more value to clients with data-driven insights and automated workflows.",
    icon: Briefcase,
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-background scroll-mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Solutions for Every Legal Professional</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tailored AI solutions to meet the unique needs of different legal practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <solution.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}