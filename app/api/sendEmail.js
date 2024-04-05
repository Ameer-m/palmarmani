// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: 'register@psidubai.com',
        pass: 'Maw34508'
      },
      tls: {
        ciphers: 'SSLv3'
      }
    });

    const mailOption = {
      from: 'register@psidubai.com',
      to: 'ameer.k@psidubai.com',
      subject: subject,
      html: `<h3>Hello</h3><li>title: ${subject}</li><li>message: ${message}</li>`
    };

    try {
      await transporter.sendMail(mailOption);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    // Handle any other HTTP method
    res.status(405).end(); // Method Not Allowed
  }
}
