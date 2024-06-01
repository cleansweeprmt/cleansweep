// app/api/mailer/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // generated ethereal user
    pass: process.env.EMAIL_PASS, // generated ethereal password
  },
});

export async function POST(request) {
  const { email } = await request.json();
  console.log(email);

  if (!email) {
    return NextResponse.error(new Error('Email is required'));
  }

  const mailOptions = {
    from: 'info@dialalawyer.africa',
    to: [email,'info@hrfleek.com'],
    subject: 'Thank you',
    text: `Thank you ${email} for subscribing to our newsletter!`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Subscription successful' });
  } catch (error) {
    console.log('heres the error',error);
    return NextResponse.error(new Error(error.message));
  }
}
