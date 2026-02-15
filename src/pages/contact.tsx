import { ContactForm } from "../components/contactForm";
import PhotoCVFlo from "../assets/CV-Flo.webp";

export default function ContactPage() {
  return (
    <>
      <h1 className="mt-16 text-center">Contact Florent</h1>
      <p className="px-2 text-center italic">
        If you have any questions about the topics I've mentioned, or if you'd
        like to talk with me about any subject you're interested in, feel free
        to contact me !
      </p>
      <div className="avatar z-10 mt-10 -mb-12 flex justify-center">
        <div className="mask mask-squircle w-24">
          <img
            src={PhotoCVFlo}
            className="object-top"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="card bg-base-200 w-5/6 border border-gray-600 pt-12 shadow-xl md:max-w-1/2">
          <h2 className="text-primary m-3 text-center">Contact Form</h2>
          <ContactForm />
        </div>
      </div>
      <div className="mt-8 mb-10 text-center">
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
