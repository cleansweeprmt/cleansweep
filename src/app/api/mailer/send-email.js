import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, resume, cv } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'recruitment@hrfleek.com',
      subject: 'New Job Application',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
      `,
      attachments: [
        { filename: 'resume.pdf', content: resume },
        { filename: 'cv.pdf', content: cv }
      ]
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
