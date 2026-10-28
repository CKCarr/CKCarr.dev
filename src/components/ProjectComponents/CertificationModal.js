
import React, { useEffect, useRef } from "react";

export default function CertificationModal({ certification, onClose }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    // Remember where keyboard focus was before opening.
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    // Prevent background scrolling while the modal is open.
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      // Escape closes the modal.
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      // Trap Tab navigation inside the modal.
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
        )
      );

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;

      // Return focus to the original "View Details" button.
      previousFocus?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onMouseDown={(event) => {
        // Only close when clicking the backdrop.
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="credential-title"
        className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-v3-paper p-6 shadow-2xl sm:p-8"
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <h2
            id="credential-title"
            className="font-outfit text-2xl font-bold text-v3-text-primary"
          >
            {certification.title}
          </h2>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close credential details"
            className="rounded-lg px-3 py-1 text-2xl text-v3-text-primary hover:bg-v3-lavender focus-visible:outline focus-visible:outline-2 focus-visible:outline-v3-teal"
          >
            ×
          </button>
        </div>

        <div className="space-y-3 font-outfit text-v3-text-secondary">
          <p>
            <strong>Issued by:</strong> {certification.platform}
          </p>

          {certification.type && (
            <p><strong>Type:</strong> {certification.type}</p>
          )}

          {certification.completed && (
            <p><strong>Completed:</strong> {certification.completed}</p>
          )}

          {certification.duration && (
            <p><strong>Duration:</strong> {certification.duration}</p>
          )}

          {certification.description && (
            <p>{certification.description}</p>
          )}
        </div>

        {certification.link && (
          <a
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-v3-plum px-5 py-3 font-outfit text-sm font-semibold text-white hover:bg-v3-violet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v3-teal"
          >
            Verify Credential ↗
          </a>
        )}
      </section>
    </div>
  );
}
