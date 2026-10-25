
import React from "react";
import messages from "../../data/messages.js";

export default function ScrollingBanner() {
  return (
    <section
      aria-label="Learning and development messages"
      className="overflow-hidden bg-cornflowerblue py-5"
    >
      <div className="banner-track flex w-max">
        {/* First copy: the content screen readers should announce */}
        <div className="flex shrink-0 items-center gap-12 pr-12">
          {messages.map((message, index) => (
            <span
              key={index}
              className="whitespace-nowrap font-outfit text-base font-normal text-white md:text-lg"
            >
              {message}
            </span>
          ))}
        </div>

        {/* Second copy: visual duplicate for seamless looping */}
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center gap-12 pr-12"
        >
          {messages.map((message, index) => (
            <span
              key={index}
              className="whitespace-nowrap font-outfit text-base font-normal text-white md:text-lg"
            >
              {message}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
