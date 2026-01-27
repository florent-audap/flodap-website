import { ContactForm } from "../components/contactForm";
import PhotoCVFlo from "../assets/CV-Flo.webp";

export default function ContactPage() {
  return (
    <>
      <h1 className="text-center mt-16">Contact Florent</h1>
      <p className="text-center italic px-2">
        If you have any questions about the topics I’ve mentioned, or if you’d
        like to talk with me about any subject you’re interested in, feel free
        to contact me !
      </p>
      <div className="avatar flex place-self-center z-10 -mb-12 mt-10">
        <div className="mask mask-squircle w-24">
          <img src={PhotoCVFlo} className="object-top" />
        </div>
      </div>
      <div className="card place-self-center bg-base-200 shadow-xl border border-gray-600 max-w-full min-w-5/6 pt-12">
        <h2 className="text-center m-3 text-primary">Contact Form</h2>
        <ContactForm />
      </div>
      <div className="text-center mt-8 mb-10">
        <p className="mb-2">
          If you have some trouble with the contact form, you can send an email
          to
        </p>
        <a
          href="mailto:contact@florentaudap.com"
          className="link link-primary font-semibold"
        >
          contact@florentaudap.com
        </a>
      </div>
    </>
  );
}
