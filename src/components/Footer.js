import React from "react";
import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-midnightblue py-8 font-outfit text-white">
      <Container>
        {/* Preserve the cyan divider from the original design. */}
        <div className="mb-8 h-1 rounded-full bg-darkcyan" />

        {/* Two columns on desktop; stacked on mobile. */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
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

          {/* Keep the existing social links. */}
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

        {/* Copyright divider. */}
        <div className="mt-8 border-t border-darkcyan/30 pt-5">
          <p className="text-center text-xs text-gray-300">
            © {currentYear} CKCarr.dev. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
