
import React from "react";
import appList from "../../assets/images/app-list.png";

export default function CTAGithub() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid items-center gap-8 md:grid-cols-2">
        {/* Existing illustration */}
        <img
          src={appList}
          alt="Illustration representing software applications"
          loading="lazy"
          className="mx-auto w-full max-w-sm"
        />

        {/* GitHub introduction */}
        <div>
          <p className="mb-3 text-lg font-semibold text-paleturquoise">
            Full-Stack Software Development
          </p>

          <h2 className="mb-4 font-outfit text-3xl font-bold text-white">
            Crafting Solutions Through Code
          </h2>

          <p className="mb-6 leading-relaxed text-white">
            Discover projects that showcase collaboration,
            creativity, and continuous learning.
            I’m constantly evolving my craft.
            Join me on a journey of growth and innovation.
          </p>

          {/* External link styled as a button */}
          <a
            href="https://github.com/CKCarr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-darkcyan px-6 py-3 font-semibold text-white transition-colors hover:bg-darkpurple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            View My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
