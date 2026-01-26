import { sendContactEmail } from "../src/lib/mailer.ts";
import { validateContact } from "../src/utils/contactFormValidation.ts";
import type { IncomingMessage, ServerResponse } from "http";
import type { ContactFormPayload as ContactFormData} from "../src/types/contact.ts";

// ✅ Helper pour lire le body JSON côté Node runtime
export function getRequestData<T>(req: IncomingMessage): Promise<T> {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk: Buffer) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(body) as T);
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", (err) => reject(err));
  });
}

// ✅ Handler typé
export default async function handler(req: IncomingMessage, res: ServerResponse) {
  if (req.method !== "POST") {
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Method Not Allowed" }));
    return;
  }

  let data: ContactFormData;
  try {
    data = await getRequestData<ContactFormData>(req);
  } catch {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Invalid JSON" }));
    return;
  }

  // Honeypot anti-bot
  if (data.company) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Bot detected" }));
    return;
  }

  // Validation
  if (!validateContact(data)) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Invalid data" }));
    return;
  }

  // Envoi email via Resend
  try {
    await sendContactEmail(data);
  } catch (err) {
    console.error("Email sending failed:", err);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Email sending failed" }));
    return;
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ success: true }));
}
