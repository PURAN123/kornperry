// server/api/contact.post.js
import nodemailer from 'nodemailer';
import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const transporter = nodemailer.createTransport({
        host: 'smtp-relay.brevo.com',
        port: 587,
        auth: {
            user: '8e7442001@smtp-brevo.com',
            pass: 'AyMz5K4FCbVPm3jY',
        },
    });

    const mailOptions = {
        from: '"Website Contact" <info@hiremultiverse.space>',
        to: 'info@hiremultiverse.space',
        subject: 'New Contact Form Submission',
        text: `
      Name: ${body.firstName} ${body.lastName}
      Company: ${body.company}
      Job Title: ${body.jobTitle}
      Email: ${body.email}
      Phone: ${body.phone}
      Country: ${body.country}
      Help Type: ${body.helpType}
      Consent: ${body.consent ? 'Yes' : 'No'}
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error('Email send error:', error);
        return { success: false };
    }
});

// import { createTransport } from 'nodemailer';
// import { defineEventHandler, readBody } from 'h3';

// export default defineEventHandler(async (event) => {
//   const transporter = createTransport({
//     host: 'smtp-relay.brevo.com',
//     port: 587,
//     secure: false, // false for 587, true for 465
//     auth: {
//       user: 'info@hiremultiverse.space',
//       pass: 'AyMz5K4FCbVPm3jY',
//     },
//     tls: {
//       rejectUnauthorized: false
//     }
//   });

//   try {
//     const body = await readBody(event);

//     // Validate required fields
//     if (!body.email || !body.firstName || !body.lastName) {
//       throw new Error('Missing required fields');
//     }

//     // Create email content
//     const mailOptions = {
//       from: 'info@hiremultiverse.space',
//       to: 'info@hiremultiverse.space',
//       replyTo: body.email,
//       subject: `Contact Form Submission from ${body.firstName} ${body.lastName}`,
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
//         <p><strong>Company:</strong> ${body.company}</p>
//         <p><strong>Job Title:</strong> ${body.jobTitle}</p>
//         <p><strong>Email:</strong> ${body.email}</p>
//         <p><strong>Phone:</strong> ${body.phone}</p>
//         <p><strong>Country:</strong> ${body.country}</p>
//         <p><strong>Help Type:</strong> ${body.helpType}</p>
//         <p><strong>Consent Given:</strong> ${body.consent ? 'Yes' : 'No'}</p>
//       `,
//     };

//     // Send the email
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent successfully:', info.messageId);

//     return { success: true, message: 'Email sent successfully' };
//   } catch (error: any) {
//     console.error('Email sending error:', error);
//     return {
//       success: false,
//       message: error.message || 'Failed to send email'
//     };
//   }
// });