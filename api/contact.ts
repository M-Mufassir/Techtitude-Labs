import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  // CORS Headers for local development if needed, though Vercel handles it in production
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { subject, body, senderEmail, senderName, formType } = req.body;

  if (!subject || !body || !senderEmail || !formType) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Support both prefixed and non-prefixed env variables
  const emailUser = process.env.VITE_EMAIL_USER || process.env.EMAIL_USER;
  const emailPass = process.env.VITE_EMAIL_PASS || process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    console.error("Missing email credentials in environment variables.");
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  try {
    // 1. Send detailed email to Techtitude Labs
    const adminMailPromise = transporter.sendMail({
      from: `"${senderName || 'Contact Form'}" <${emailUser}>`,
      replyTo: senderEmail,
      to: 'techtitude.labs@gmail.com',
      subject: subject,
      text: body,
    });

    // 2. Send Thank You email to the sender
    let thankYouSubject = '';
    let thankYouText = '';

    if (formType === 'academy') {
      thankYouSubject = 'Application Received - Techtitude Labs Academy';
      thankYouText = `Hi ${senderName || 'there'},\n\nThank you for applying to the Techtitude Labs Academy. We have successfully received your enrollment request for our courses.\n\nOur team will review your application and get back to you shortly with the next steps and batch details.\n\nBest regards,\nTechtitude Labs Team\ntechtitude.labs@gmail.com`;
    } else if (formType === 'studio') {
      thankYouSubject = 'Project Inquiry Received - Techtitude Labs Studio';
      thankYouText = `Hi ${senderName || 'there'},\n\nThank you for reaching out to Techtitude Labs Studio. We have successfully received your project inquiry.\n\nOur engineering team will review your requirements and get back to you shortly to discuss how we can architect a solution for you.\n\nBest regards,\nTechtitude Labs Team\ntechtitude.labs@gmail.com`;
    }

    const thankYouMailPromise = transporter.sendMail({
      from: `"Techtitude Labs" <${emailUser}>`,
      to: senderEmail,
      subject: thankYouSubject,
      text: thankYouText,
    });

    await Promise.all([adminMailPromise, thankYouMailPromise]);

    return res.status(200).json({ message: 'Emails sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
