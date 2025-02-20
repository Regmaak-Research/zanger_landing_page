import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { sendContactFormNotification, sendNewsletterSubscriptionNotification } from "./utils/email";

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
      const emailSent = await sendContactFormNotification(data);

      if (!emailSent) {
        throw new Error("Failed to send contact form notification");
      }

      res.json({ success: true });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        error: error instanceof Error ? error.message : "Failed to process contact form" 
      });
    }
  });

  app.post("/api/newsletter", async (req, res) => {
    try {
      const data = newsletterSchema.parse(req.body);
      const emailSent = await sendNewsletterSubscriptionNotification(data);

      if (!emailSent) {
        throw new Error("Failed to send newsletter subscription notification");
      }

      res.json({ success: true });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      res.status(400).json({ 
        error: error instanceof Error ? error.message : "Failed to process subscription" 
      });
    }
  });

  app.post("/api/beta-application", async (req, res) => {
    try {
      const data = betaApplicationSchema.parse(req.body);

      // Send email notification
      const emailSent = await sendBetaApplicationNotification(data);

      if (!emailSent) {
        throw new Error("Failed to send email notification");
      }

      res.json({ success: true });
    } catch (error) {
      console.error("Beta application error:", error);
      res.status(400).json({ 
        error: error instanceof Error ? error.message : "Failed to process application" 
      });
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