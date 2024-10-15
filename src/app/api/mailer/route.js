// app/api/mailer/route.js
import { NextResponse } from 'next/server';
import {transporter} from '../utils'


export async function POST(request) {
  const { email,details,firstName,phone } = await request.json();

  if (!email) {
    return NextResponse.error(new Error('Email is required'));
  }

  const mailOptions = {
    from: 'daisy@intelliverseai.com',
    to: [email,'ochiengwarren10@gmail.com'],
    subject: 'Website Notification',
    text: ` received new message from ${firstName} ${email} ${phone}: ${details}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'message sent successfully' });
  } catch (error) {
    console.log('heres the error',error);
    return NextResponse.error(new Error(error.message));
  }
}
