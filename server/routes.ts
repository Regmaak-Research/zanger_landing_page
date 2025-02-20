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

const betaApplicationSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  phone: z.string().min(10),
  teamSize: z.string().min(1),
  useCase: z.string().min(50),
});

const demoSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  date: z.string(),
  time: z.string(),
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

  app.post("/api/beta-application", async (req, res) => {
    try {
      const data = betaApplicationSchema.parse(req.body);
      // In a real app, you'd store the application and send notification emails
      res.json({ success: true });
    } catch (error) {
      res.status(400).json({ error: "Invalid data" });
    }
  });

  app.post("/api/demo", async (req, res) => {
    try {
      const data = demoSchema.parse(req.body);
      // In a real app, you'd schedule the demo and send confirmation emails
      res.json({ success: true });
    } catch (error) {
      res.status(400).json({ error: "Invalid data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}