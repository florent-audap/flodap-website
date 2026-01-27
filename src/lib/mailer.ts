import { Resend } from "resend";
import { ContactFormPayload } from "../types/contact.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactFormPayload) {
  return resend.emails.send({
    from: "Contact <contact@florentaudap.com>",
    to: ["florent.audap@gmail.com"],
    replyTo: data.email,
    subject: `Message de ${data.name || "N/A"}`,
    html: `
      <p><strong>Email :</strong> ${data.email}</p>
      <p>${data.message}</p>
    `,
  });
}
