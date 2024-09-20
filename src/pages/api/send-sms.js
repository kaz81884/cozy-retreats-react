Send SMS API Route

import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, phone, message } = req.body;
    const specificNumber = process.env.SPECIFIC_PHONE_NUMBER; // The number you want to send to

    try {
      await client.messages.create({
        body: `New message from ${name} (${phone}): ${message}`,
        from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio number
        to: specificNumber
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending SMS:', error);
      res.status(500).json({ success: false, error: 'Error sending SMS' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}