// app/api/contact/route.js
import { NextResponse } from 'next/server';
import {transporter} from '../utils'

export async function POST(request) {
  const { firstName, lastName, phone, email, company, details } = await request.json();

  if (!firstName || !lastName || !phone || !email || !company || !details) {
    return NextResponse.error(new Error('All fields are required'));
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'info@hrfleek.com', // Change this to where you want to receive the submissions
    subject: 'New Contact Form Submission',
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Phone: ${phone}
      Email: ${email}
      Company: ${company}
      Details: ${details}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Form submitted successfully' });
  } catch (error) {
    return NextResponse.error(new Error(error.message));
  }
}
