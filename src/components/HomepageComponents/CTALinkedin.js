
import React from "react";
import mobileContact from "../../assets/images/mobile-contact.png";

export default function CTALinkedin() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid items-center gap-8 md:grid-cols-2">
        {/* Text appears first on mobile */}
        <div>
          <p className="mb-3 text-lg font-semibold text-paleturquoise">
            Follow Me For More
          </p>

          <h2 className="mb-4 font-outfit text-3xl font-bold text-white">
            Let’s Connect, Collaborate, And Create!
          </h2>

          <p className="mb-6 leading-relaxed text-white">
            I am usually found in a learning objective,
            tutorial, or fun coding craft.
            I love to learn, craft, game, and help
            build others up along the way.
          </p>

          {/* External link styled as a button */}
          <a
            href="https://www.linkedin.com/in/crystal-carrillo/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg border-2 border-paleturquoise px-6 py-3 font-semibold text-white transition-colors hover:bg-darkcyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Connect on LinkedIn
          </a>
        </div>

        {/* Existing illustration */}
        <img
          src={mobileContact}
          alt="Illustration representing digital communication"
          loading="lazy"
          className="mx-auto w-full max-w-sm"
        />
      </div>
    </section>
  );
}
