import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

export const actions = {
    sendMessage: async ({ request }) => {
        const data = await request.formData();
        const message = data.get("message") as string;

        // Send the message using Resend
        await resend.emails.send({
            from: "mailbox@ihsan.fun",
            to: "mihsan6133@gmail.com",
            subject: "New Message",
            text: message,
        });

        return { success: true };
        
    }
}