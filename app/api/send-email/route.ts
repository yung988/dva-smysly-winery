import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Email addresses from environment variables
const emailFrom = process.env.CONTACT_EMAIL_FROM;
const emailTo = process.env.CONTACT_EMAIL_TO;

export async function POST(request: Request) {
  try {
    // Check if environment variables are set
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
    }
    if (!emailFrom) {
      console.error('CONTACT_EMAIL_FROM is not set');
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
    }
    if (!emailTo) {
      console.error('CONTACT_EMAIL_TO is not set');
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
    }

    // Parse the request body to get form data
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // Split recipient emails if multiple are provided
    const recipients = emailTo.split(',').map(e => e.trim());

    // Prepare email content
    const subject = `Nová zpráva z formuláře Dva Smysly: ${name}`;
    const htmlContent = `
      <h1>Nová zpráva z webu Dva Smysly</h1>
      <p><strong>Jméno:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <hr>
      <p><strong>Zpráva:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: emailFrom, // Use the verified sender email
      to: recipients,   // Can be an array of emails
      subject: subject,
      replyTo: email,  // Set the user's email for easy reply
      html: htmlContent,
    });

    // Handle Resend API errors
    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    // Return success response
    return NextResponse.json({ message: 'Email sent successfully!', data }, { status: 200 });

  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 