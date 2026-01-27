import { useState, useEffect } from "react";
import { useContactForm } from "../hooks/useContactForm";

function isPaul(email: string) {
  if (email.includes("paul.guimbert")) {
    window.alert("Bonjour Paul, peux-tu quitter mon super site web please !");
  }
}

export function ContactForm() {
  const { submit, loading, success, error } = useContactForm();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });

  useEffect(() => {
    if (success) {
      setForm({ name: "", email: "", message: "", company: "" });
    }
  }, [success]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit(form);
        isPaul(form.email);
      }}
      className="space-y-4 p-10 flex flex-col items-center"
    >
      <input
        className="input input-bordered"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        required
        type="email"
        className="input input-bordered"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <textarea
        required
        className="textarea textarea-bordered"
        placeholder="Message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      {/* Honeypot */}
      <input
        type="text"
        name="Company"
        className="hidden"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
      />

      <button className="btn btn-primary" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && <p className="text-success">Message successfully sent ✅</p>}
      {error && <p className="text-error">{error}</p>}
    </form>
  );
}
