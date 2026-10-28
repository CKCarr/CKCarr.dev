
import React, { useState } from "react";
import CertificationModal from "./CertificationModal";

export default function Certifications({ certifications }) {
  // null means no credential is selected.
  const [selectedCertification, setSelectedCertification] = useState(null);

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="mx-auto my-12 w-full px-2 py-6"
    >
      <h2
        id="certifications-heading"
        className="mb-3 text-center font-outfit text-3xl font-bold text-v3-text-primary"
      >
        Certifications & Continued Learning
      </h2>

      <p className="mx-auto mb-8 max-w-2xl text-center font-outfit text-v3-text-secondary">
        Coursework, technical training, and professional development.
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certification) => (
          <article
            key={certification.id}
            className="flex min-w-0 flex-col rounded-2xl border border-v3-line bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <p className="mb-3 font-outfit text-xs font-bold uppercase tracking-wider text-v3-teal">
              {certification.platform}
            </p>

            <h3 className="mb-4 font-outfit text-lg font-semibold leading-snug text-v3-text-primary">
              {certification.title}
            </h3>

            {certification.completed && (
              <p className="mb-4 font-outfit text-sm text-v3-text-secondary">
                Completed: {certification.completed}
              </p>
            )}

            <button
              type="button"
              onClick={() => setSelectedCertification(certification)}
              aria-label={`View details for ${certification.title}`}
              className="mt-auto inline-flex self-start rounded-full bg-v3-plum px-5 py-2.5 font-outfit text-sm font-semibold text-white hover:bg-v3-violet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v3-teal"
            >
              View Details
            </button>
          </article>
        ))}
      </div>

      {/* Render the modal only when a credential is selected. */}
      {selectedCertification && (
        <CertificationModal
          certification={selectedCertification}
          onClose={() => setSelectedCertification(null)}
        />
      )}
    </section>
  );
}
