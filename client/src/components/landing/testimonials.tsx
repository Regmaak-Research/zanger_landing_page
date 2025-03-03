import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Anderson",
    role: "Corporate Lawyer",
    content: "Zanger AI streamlines our entire document workflow - from drafting to signing. The new e-signature feature is a game-changer.",
    image: "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=200&h=200&q=80&crop=faces&faceindex=1",
  },
  {
    name: "Michael Chen",
    role: "Legal Partner",
    content: "The secure file sharing and collaborative features have transformed how our firm handles documents. From research to client approvals, everything is seamless.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80&crop=faces&faceindex=1",
  },
  {
    name: "Elena Rodriguez",
    role: "Immigration Attorney",
    content: "The complete document lifecycle management has revolutionized our practice. Secure sharing and e-signatures make client collaboration effortless.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80&crop=faces&faceindex=1",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background scroll-mt-24">
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
            Transforming legal document management with AI-powered drafting, secure sharing, and e-signatures.
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
                    <Avatar className="h-12 w-12 overflow-hidden">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                        className={`object-cover ${
                          testimonial.name === "Michael Chen"
                            ? "object-cover"
                            : "object-cover w-full h-full scale-110 -translate-y-1"
                        }`}
                      />
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