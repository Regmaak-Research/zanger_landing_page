import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Anderson",
    role: "Corporate Lawyer",
    content: "Zanger AI has transformed how I handle document drafting. It's cut my preparation time in half.",
    image: "https://images.unsplash.com/photo-1485217988980-11786ced9454",
  },
  {
    name: "Michael Chen",
    role: "Legal Partner",
    content: "The research capabilities are outstanding. It's like having a whole team of paralegals at your fingertips.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
  },
  {
    name: "Elena Rodriguez",
    role: "Immigration Attorney",
    content: "Client management has never been easier. The platform keeps everything organized and accessible.",
    image: "https://images.unsplash.com/photo-1658249682487-882436e01650",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">What Legal Professionals Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by law firms and legal professionals worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
