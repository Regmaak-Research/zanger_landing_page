import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI document drafting work?",
    answer: "Our AI analyzes your requirements and generates legally sound documents using machine learning trained on millions of legal documents. You can then review and customize the output as needed.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we use enterprise-grade encryption and follow strict data protection protocols. Your data is stored securely and never shared with third parties.",
  },
  {
    question: "Can I integrate with my existing tools?",
    answer: "Absolutely! Zanger AI integrates with popular legal software, email clients, and calendar applications to provide a seamless workflow.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 technical support, regular training sessions, and a comprehensive knowledge base. Enterprise customers get dedicated support managers.",
  },
  {
    question: "How long does it take to get started?",
    answer: "You can start using basic features immediately after signing up. Full onboarding, including data migration and team training, typically takes 1-2 weeks.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Zanger AI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}