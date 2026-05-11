import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

export const actions = {
    sendMessage: async ({ request }) => {
        const data = await request.formData();
        
        const message = data.get("message")?.toString();
        const email = data.get("email")?.toString();

        if (!message) {
            return { success: false, error: "Message is required." };
        }

        // Send the message using Resend
        await resend.emails.send({
            from: `${email || 'Anonymous'} <mailbox@ihsan.fun>`,
            to: "mihsan6133@gmail.com",
            subject: `[${email || 'Anonymous'}] New Message`,
            text: message,
            replyTo: email || undefined
        });

        return { success: true };
        
    }
}