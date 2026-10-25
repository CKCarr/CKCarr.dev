
import React from "react";

// Keep the existing Formspree endpoint.
// Later, we can move this into environment configuration.
const FORM_ENDPOINT = "https://formspree.io/f/xrgngdlq";

// Shared styling keeps all text fields consistent.
const inputStyles =
  "w-full rounded-lg border border-darkcyan bg-white " +
  "px-4 py-3 text-midnightblue placeholder-gray-500 " +
  "focus:outline-none focus:ring-2 focus:ring-darkcyan";

export default function ContactForm() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      // scroll-mt-28 adds an offset for the fixed navbar
      // when navigating to #contact.
      className="mx-auto max-w-5xl scroll-mt-28 px-4 py-12"
    >
      <h2
        id="contact-heading"
        className="mb-8 text-center font-outfit text-3xl font-bold text-white"
      >
        Contact Me
      </h2>

      <div className="rounded-xl border-2 border-darkcyan bg-cornflowerblue p-6 shadow-lg md:p-10">
        {/* Native HTML form submission to Formspree.
            No JavaScript request handler is required. */}
        <form
          action={FORM_ENDPOINT}
          method="POST"
          className="space-y-6"
        >
          {/* Two columns on desktop, one on mobile. */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="firstname"
                className="mb-2 block font-semibold text-midnightblue"
              >
                First Name *
              </label>

              <input
                id="firstname"
                name="firstname"
                type="text"
                autoComplete="given-name"
                required
                className={inputStyles}
                placeholder="Your first name"
              />
            </div>

            <div>
              <label
                htmlFor="lastname"
                className="mb-2 block font-semibold text-midnightblue"
              >
                Last Name
              </label>

              <input
                id="lastname"
                name="lastname"
                type="text"
                autoComplete="family-name"
                className={inputStyles}
                placeholder="Your last name"
              />
            </div>

            <div>
              <label
                htmlFor="companyname"
                className="mb-2 block font-semibold text-midnightblue"
              >
                Company Name
              </label>

              <input
                id="companyname"
                name="companyname"
                type="text"
                autoComplete="organization"
                className={inputStyles}
                placeholder="Your company (optional)"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-semibold text-midnightblue"
              >
                Email Address *
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={inputStyles}
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block font-semibold text-midnightblue"
            >
              Your Message *
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              required
              minLength={10}
              className={inputStyles}
              placeholder="Tell me what you'd like to discuss..."
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-darkpurple px-8 py-3
                       font-semibold text-white
                       transition-colors hover:bg-midnightblue
                       focus-visible:outline focus-visible:outline-2
                       focus-visible:outline-offset-2
                       focus-visible:outline-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
