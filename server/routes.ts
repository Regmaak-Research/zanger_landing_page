import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  message: z.string().min(10),
});

const newsletterSchema = z.object({
  email: z.string().email(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactSchema.parse(req.body);
      // In a real app, you'd store this in a database and send an email
      res.json({ success: true });
    } catch (error) {
      res.status(400).json({ error: "Invalid data" });
    }
  });

  app.post("/api/newsletter", async (req, res) => {
    try {
      const data = newsletterSchema.parse(req.body);
      // In a real app, you'd add this to your newsletter service
      res.json({ success: true });
    } catch (error) {
      res.status(400).json({ error: "Invalid email" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
