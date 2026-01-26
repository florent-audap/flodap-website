import { ContactFormPayload } from "../types/contact.js";

export function validateContact(data: ContactFormPayload) {
  if (data.company) return false; //it is for the bot trap : the "honeypot"
  if (!data.email || !data.message) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) return false;
  return true;
}