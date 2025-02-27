import sgMail from '@sendgrid/mail';
import dotenv from "dotenv";
dotenv.config();

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

if (!process.env.SENDGRID_VERIFIED_SENDER) {
  throw new Error("SENDGRID_VERIFIED_SENDER environment variable must be set");
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const VERIFIED_SENDER = process.env.SENDGRID_VERIFIED_SENDER;

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface NewsletterData {
  email: string;
}

export async function sendContactFormNotification(data: ContactFormData) {
  const emailContent = `
    New Contact Form Submission:

    Name: ${data.name}
    Email: ${data.email}
    Company: ${data.company}
    Message: ${data.message}
  `;

  const msg = {
    to: 'yelaman@zangerai.com',
    from: VERIFIED_SENDER,
    subject: `New Contact Form Submission from ${data.company}`,
    text: emailContent,
  };

  try {
    await sgMail.send(msg);
    console.log('Contact form email sent successfully');
    return true;
  } catch (error) {
    console.error('SendGrid email error:', {
      error,
      data: { ...msg, to: '[REDACTED]' },
      errorMessage: error instanceof Error ? error.message : 'Unknown error',
    });
    throw new Error('Failed to send contact form email. Please try again.');
  }
}

export async function sendNewsletterSubscriptionNotification(data: NewsletterData) {
  const emailContent = `
    New Newsletter Subscription:

    Email: ${data.email}
  `;

  const msg = {
    to: 'yelaman@zangerai.com',
    from: VERIFIED_SENDER,
    subject: 'New Newsletter Subscription',
    text: emailContent,
  };

  try {
    await sgMail.send(msg);
    console.log('Newsletter subscription email sent successfully');
    return true;
  } catch (error) {
    console.error('SendGrid email error:', {
      error,
      data: { ...msg, to: '[REDACTED]' },
      errorMessage: error instanceof Error ? error.message : 'Unknown error',
    });
    throw new Error('Failed to send newsletter subscription email. Please try again.');
  }
}

interface BetaApplicationData {
  name: string;
  email: string;
  company: string;
}

export async function sendBetaApplicationNotification(data: BetaApplicationData) {
  const emailContent = `
    New Beta Application Received:

    Name: ${data.name}
    Email: ${data.email}
    Company: ${data.company}
  `;

  const msg = {
    to: 'yelaman@zangerai.com',
    from: VERIFIED_SENDER,
    subject: `New Beta Application from ${data.company}`,
    text: emailContent,
  };

  try {
    await sgMail.send(msg);
    console.log('Beta application email sent successfully');
    return true;
  } catch (error) {
    console.error('SendGrid email error:', {
      error,
      data: { ...msg, to: '[REDACTED]' },
      errorMessage: error instanceof Error ? error.message : 'Unknown error',
    });
    throw new Error('Failed to send beta application email. Please try again.');
  }
}