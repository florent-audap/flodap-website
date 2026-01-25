import { ContactForm } from "../components/contactForm";

export default function ContactPage() {
  return (
    <>
      <h1 className="text-center mt-16">Contact Florent</h1>
      <p className="text-center italic">
        If you have any questions about the topics I’ve mentioned, or if you’d
        like to talk with me about any subject you’re interested in, feel free
        to contact me !
      </p>
      <div className="card place-self-center bg-base-200 shadow-xl border border-gray-600 max-w-2/3 min-w-2xl mt-16">
        <h2 className="text-center m-3 text-blue-600">Contact Form</h2>
        <ContactForm/>
      </div>
      <div className="text-center mt-8 mb-10">
        <p className="mb-2">If you have some trouble with the contact form, you can send an email to</p>
        <a href="mailto:contact@florentaudap.com" className="link link-primary font-semibold">contact@florentaudap.com</a>
      </div>
    </>
  );
}
