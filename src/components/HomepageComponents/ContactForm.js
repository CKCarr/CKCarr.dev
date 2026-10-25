
import React from "react";
import Container from "../Container";

// Preserve the existing Formspree integration.
// The form submits directly without a JavaScript handler.
const FORM_ENDPOINT = "https://formspree.io/f/xrgngdlq";

// Reuse consistent styling across all form fields.
const inputStyles =
  "w-full rounded-lg border border-v3-line bg-white " +
  "px-4 py-3 text-v3-text-primary placeholder:text-v3-text-secondary " +
  "focus:outline-none focus:ring-2 focus:ring-v3-teal";

const labelStyles =
  "mb-2 block font-outfit text-sm font-semibold text-v3-text-primary";

export default function ContactForm() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-28 bg-v3-paper py-12 sm:py-16"
    >
      <Container>
    {/* Cornflower panel is contained, like the hero. */}
    <div className="rounded-3xl v3-contact-surface p-6 shadow-lg sm:p-10 lg:p-12">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

{/* LEFT: Introduction and reasons to connect. */}
<div className="lg:pt-6">
<p className="font-semibold uppercase tracking-widest text-paleturquoise">
  Let's start with a conversation
</p>

<h2 className="mt-8 font-outfit text-4xl font-bold leading-tight text-white sm:text-5xl">
  What would make your website more useful?
</h2>

  <p className="mt-6 max-w-lg font-outfit text-lg leading-relaxed text-v3-plum">
    Whether you're starting fresh or improving what you already have,
    tell me what you're trying to accomplish. We can explore a
    practical next step together.
  </p>

<ul className="mt-8 space-y-4 text-v3-lavender">
  <li className="flex items-center gap-2">
    <span className="text-paleturquoise" aria-hidden="true">✓</span>
    <span>New website ideas</span>
  </li>

  <li className="flex items-center gap-2">
    <span className="text-paleturquoise" aria-hidden="true">✓</span>
    <span>Improvements to existing sites</span>
  </li>

  <li className="flex items-center gap-2">
    <span className="text-paleturquoise" aria-hidden="true">✓</span>
    <span>Other projects and collaborations</span>
  </li>
</ul>
</div>

          {/* RIGHT: Keep the existing native Formspree form. */}
          <div className="rounded-2xl border border-v3-line bg-white p-6 shadow-xl sm:p-8">
            <h3 className="mb-6 font-outfit text-xl font-semibold text-v3-text-primary">
              Tell me about your project
            </h3>

            <form
              action={FORM_ENDPOINT}
              method="POST"
              className="space-y-4"
            >
              {/* Names share a row on medium screens. */}
{/* First name and business share a row on larger screens.
    Both fields stack vertically on mobile. */}
<div className="grid gap-5 sm:grid-cols-2">
  <div>
    <label htmlFor="firstname" className={labelStyles}>
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
  <label htmlFor="companyname" className={labelStyles}>
    Organization{" "}
    <span className="ml-1 font-normal text-v3-text-secondary">
      (optional)
    </span>
  </label>

  <input
    id="companyname"
    name="companyname"
    type="text"
    autoComplete="organization"
    className={inputStyles}
    placeholder="Business or project"
  />
</div>
</div>

              <div>
                <label htmlFor="email" className={labelStyles}>
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

              <div>
                <label htmlFor="message" className={labelStyles}>
                  Tell me about your project or idea *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  required
                  minLength={10}
                  className={inputStyles}
                  placeholder="What are you hoping to build, improve, or accomplish?"
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-v3-plum px-8 py-3
                           font-outfit font-semibold text-white
                           transition-all duration-200
                           hover:-translate-y-1 hover:bg-v3-violet
                           focus-visible:outline focus-visible:outline-2
                           focus-visible:outline-offset-2
                           focus-visible:outline-v3-plum
                           motion-reduce:transform-none"
              >
                Send Message
              </button>

              <p className="text-xs leading-relaxed text-v3-text-secondary">
                Please don't include passwords, financial details,
                or other sensitive information.
              </p>
            </form>
          </div>
        </div>
        </div>
      </Container>
    </section>
  );
}
