import { useState } from "react";
import { ContactFormPayload } from "../types/contact";

export function useContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(data: ContactFormPayload) {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        //this serverless function is deployed by Vercel
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        if (json.error === "Invalid data") {
          throw new Error(
            "Check the email address and make sure that you entered all the information"
          );
        }
        throw new Error("Request failed");
      }
      setSuccess(true);
    } catch (err) {
      if (
        err instanceof Error &&
        err.message ===
          "Check the email address and make sure that you entered all the information"
      ) {
        setError(err.message);
      } else {
        setError("We can't send your request. Check the information.");
      }
    } finally {
      setLoading(false);
    }
  }

  return { submit, loading, success, error };
}
