import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnightblue px-6 py-8 font-outfit text-white">
      <div className="mx-auto max-w-6xl">
        {/* Preserve the cyan divider from the original design. */}
        <div className="mb-8 h-1 rounded-full bg-darkcyan" />

        {/* Two columns on desktop; stacked on mobile. */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Avoid h2 here because existing global heading styles
              appear to add unwanted purple borders. */}
          <div className="text-center md:text-left">
            <p className="font-semibold text-paleturquoise">
              Crystal Carrillo
            </p>
            <p className="mt-2 text-sm text-gray-300">
              Software Development | IT Support
            </p>
            <p className="mt-1 text-sm text-gray-300">
              Claremore, Oklahoma
            </p>
          </div>

          {/* Social links retain your existing Bootstrap icons. */}
          <nav aria-label="Professional profiles">
            <ul className="flex gap-4">
              <li>
                <a
                  href="https://github.com/CKCarr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-darkcyan text-paleturquoise hover:bg-darkcyan hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-plum"
                >
                  <i className="bi bi-github text-xl" aria-hidden="true" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/crystal-carrillo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-darkcyan text-paleturquoise hover:bg-darkcyan hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-plum"
                >
                  <i className="bi bi-linkedin text-xl" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Separate copyright from the main footer content. */}
        <div className="mt-8 border-t border-darkcyan/30 pt-5">
          <p className="text-center text-xs text-gray-300">
            © {currentYear} CKCarr.dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
