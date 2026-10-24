import React, { useEffect, useRef } from "react";

export default function BlogPostModal({ post, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    // Native dialog provides modal focus handling and
    // prevents interaction with the background page.
    dialog.showModal();

    // Native cancel event handles the Escape key.
    const handleCancel = (event) => {
      event.preventDefault();
      onClose();
    };

    dialog.addEventListener("cancel", handleCancel);

    return () => {
      dialog.removeEventListener("cancel", handleCancel);
      if (dialog.open) dialog.close();
    };
  }, [onClose]);

  const paragraphs = post.content
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="blog-modal-title"
      className="fixed inset-0 m-auto max-h-[85vh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto rounded-xl border border-darkcyan bg-white p-0 text-midnightblue shadow-2xl backdrop:bg-black/75"
    >
      <article className="p-6 sm:p-10">
        <header className="mb-6 flex items-start justify-between gap-4 border-b border-gray-200 pb-5">
          <h2
            id="blog-modal-title"
            className="font-outfit text-2xl font-bold sm:text-3xl"
          >
            {post.title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close article"
            className="rounded-md border border-gray-300 px-3 py-1 text-xl hover:bg-gray-100"
          >
            ×
          </button>
        </header>

        {/* Full article text is readable and scrollable. */}
        <div className="space-y-5 font-outfit text-base leading-8 text-gray-800">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </dialog>
  );
}
