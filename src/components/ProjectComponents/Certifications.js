import React from "react";

export default function Certifications({ certifications }) {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="mx-auto my-12 w-full px-2 py-6"
    >
      <h2
        id="certifications-heading"
        className="mb-6 text-center font-outfit text-3xl font-bold text-white"
      >
        Certifications & Achievements
      </h2>

      {/* Responsive grid:
          1 column on mobile
          2 columns on tablets
          3 columns on larger screens */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certification) => (
          <article
            key={certification.id}
            className="flex min-w-0 flex-col rounded-lg border border-darkcyan bg-white p-4 shadow-md"
          >
            {/* Credential title */}
            <h3 className="mb-3 font-outfit text-lg font-semibold leading-snug text-midnightblue">
              {certification.title}
            </h3>

            {/* Issuing platform */}
            <p className="mb-4 text-sm text-gray-700">
              <span className="font-semibold">Platform: </span>
              {certification.platform}
            </p>

            {/* Push link to bottom for consistent card alignment */}
            <a
              href={certification.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View credential: ${certification.title}`}
              className="mt-auto inline-flex self-start rounded-md border border-darkcyan bg-darkpurple px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-darkcyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-midnightblue"
            >
              View Credential
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
