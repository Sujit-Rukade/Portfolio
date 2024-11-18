import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

const EmailTemplate = ({ subject, message }) => (
    <>
        <h1>{subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New message submitted:</p>
        <p>{message}</p>
    </>
);

export async function POST(req, res) {
    const { email, subject, message } = await req.json();
    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: email,
            subject: subject,
            react: <EmailTemplate subject={subject} message={message} />,
        });
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: error.message });
    }
}
