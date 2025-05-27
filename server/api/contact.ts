import { createTransport } from 'nodemailer';
import { defineEventHandler, readBody } from 'h3';

const transporter = createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    
    // Validate required fields
    if (!body.email || !body.firstName || !body.lastName) {
      throw new Error('Missing required fields');
    }



    // Create email content
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.SMTP_TO_EMAIL, // Where you want to receive the contact form submissions
      replyTo: body.email,
      subject: `Contact Form Submission from ${body.firstName} ${body.lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
        <p><strong>Company:</strong> ${body.company}</p>
        <p><strong>Job Title:</strong> ${body.jobTitle}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Country:</strong> ${body.country}</p>
        <p><strong>Help Type:</strong> ${body.helpType}</p>
        <p><strong>Consent Given:</strong> ${body.consent ? 'Yes' : 'No'}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return { success: true, message: 'Email sent successfully' };
  } catch (error: any) {
    return { 
      success: false, 
      message: error.message || 'Failed to send email' 
    };
  }
}); 