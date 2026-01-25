export type ContactFormPayload = {
  name?: string;
  email: string;
  message: string;
  company?: string; // honeypot
};
