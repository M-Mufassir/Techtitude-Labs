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

  const { subject, senderEmail, senderName, formType, formData } = req.body;

  if (!subject || !senderEmail || !formType || !formData) {
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
    // Determine admin recipient based on formType
    let adminTo = 'techtitude.labs@gmail.com';
    if (formType === 'academy') {
      adminTo = process.env.VITE_ACADEMY_EMAIL || process.env.ACADEMY_EMAIL || 'techtitude.labs+academy@gmail.com';
    } else if (formType === 'studio') {
      adminTo = process.env.VITE_STUDIO_EMAIL || process.env.STUDIO_EMAIL || 'techtitude.labs+studio@gmail.com';
    }

    // Generate Admin HTML
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #7B2CBF; padding: 20px; text-align: center;">
          <h2 style="color: white; margin: 0;">${formType === 'academy' ? 'New Academy Enrollment' : 'New Studio Project Inquiry'}</h2>
        </div>
        <div style="padding: 20px; background-color: #f9f9f9;">
          <table style="width: 100%; border-collapse: collapse;">
            ${Object.entries(formData).map(([key, value]) => `
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; text-transform: capitalize; color: #555;">${key}</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; color: #333;">${value}</td>
              </tr>
            `).join('')}
          </table>
        </div>
        <div style="background-color: #eee; padding: 10px; text-align: center; font-size: 12px; color: #888;">
          This message was sent securely via Techtitude Labs Website.
        </div>
      </div>
    `;

    // 1. Send detailed email to Techtitude Labs
    const adminMailPromise = transporter.sendMail({
      from: `"${senderName || 'Contact Form'}" <${emailUser}>`,
      replyTo: senderEmail,
      to: adminTo,
      subject: subject,
      html: adminHtml,
    });

    // 2. Send Thank You email to the sender
    let thankYouSubject = '';
    let thankYouHtml = '';

    const baseEmailStyles = `font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;`;

    if (formType === 'academy') {
      thankYouSubject = 'Application Received - Techtitude Labs Academy';
      thankYouHtml = `
        <div style="${baseEmailStyles}">
          <h2 style="color: #7B2CBF;">Application Received! 🎉</h2>
          <p>Hi <strong>${senderName || 'there'}</strong>,</p>
          <p>Thank you for applying to the <strong>Techtitude Labs Academy</strong>! We have successfully received your enrollment request.</p>
          <p>Our team is currently reviewing your application. We will get back to you shortly with the next steps, batch details, and everything else you need to know to get started.</p>
          <div style="margin: 30px 0; padding: 20px; background-color: #f4f0fa; border-left: 4px solid #7B2CBF; border-radius: 4px;">
            <h4 style="margin-top: 0; color: #7B2CBF;">Your Submitted Details:</h4>
            <p style="margin: 5px 0;"><strong>Course:</strong> ${formData.course}</p>
            <p style="margin: 5px 0;"><strong>Preferred Intake:</strong> ${formData.intake}</p>
          </div>
          <p>If you have any immediate questions, feel free to reply to this email.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>Techtitude Labs Team</strong><br/>techtitude.labs@gmail.com</p>
        </div>
      `;
    } else if (formType === 'studio') {
      thankYouSubject = 'Project Inquiry Received - Techtitude Labs Studio';
      thankYouHtml = `
        <div style="${baseEmailStyles}">
          <h2 style="color: #7B2CBF;">Project Inquiry Received! 🚀</h2>
          <p>Hi <strong>${senderName || 'there'}</strong>,</p>
          <p>Thank you for reaching out to <strong>Techtitude Labs Studio</strong>. We have successfully received your project inquiry for <em>${formData.company !== "N/A" ? formData.company : "your upcoming project"}</em>.</p>
          <p>Our engineering team will review your requirements and get back to you shortly to discuss how we can architect the perfect solution for you.</p>
          <div style="margin: 30px 0; padding: 20px; background-color: #f4f0fa; border-left: 4px solid #7B2CBF; border-radius: 4px;">
            <h4 style="margin-top: 0; color: #7B2CBF;">Project Overview:</h4>
            <p style="margin: 5px 0;"><strong>Timeline:</strong> ${formData.timeline}</p>
            <p style="margin: 5px 0;"><strong>Budget:</strong> ${formData.budget}</p>
            <p style="margin: 5px 0;"><strong>Tech Stack:</strong> ${formData.stacks}</p>
          </div>
          <p>If you have any extra details to share, simply reply to this email!</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>Techtitude Labs Team</strong><br/>techtitude.labs@gmail.com</p>
        </div>
      `;
    }

    const thankYouMailPromise = transporter.sendMail({
      from: `"Techtitude Labs" <${emailUser}>`,
      to: senderEmail,
      subject: thankYouSubject,
      html: thankYouHtml,
    });

    await Promise.all([adminMailPromise, thankYouMailPromise]);

    return res.status(200).json({ message: 'Emails sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
