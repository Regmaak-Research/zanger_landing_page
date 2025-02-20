import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
    from: 'no-reply@zangerai.com',
    subject: `New Beta Application: ${data.company}`,
    text: emailContent,
  };

  try {
    await sgMail.send(msg);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}