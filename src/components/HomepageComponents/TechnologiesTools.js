
import React from "react";
import technologies from "../../data/technologies.js";

export default function TechnologiesTools() {
  return (
    <section
      id="tech-tools"
      className="mx-auto px-4 py-12"
      aria-labelledby="technologies-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="technologies-heading"
          className="mb-8 text-center font-outfit
                     text-3xl font-bold text-white"
        >
          Technologies & Tools
        </h2>

        {/* Grid automatically adjusts its columns by screen size. */}
        <ul
          className="grid grid-cols-2 gap-4
                     sm:grid-cols-3 md:grid-cols-4
                     lg:grid-cols-6"
        >
          {technologies.map((technology) => (
            <li
              key={technology.icon}
              className="flex flex-col items-center
                         justify-center gap-3 rounded-lg
                         border-2 border-darkcyan
                         bg-white p-4 text-center
                         text-midnightblue shadow-md"
            >
              <img
                src={`https://skillicons.dev/icons?i=${technology.icon}`}
                alt=""
                loading="lazy"
                className="h-12 w-12 object-contain"
              />

              <span className="text-sm font-medium">
                {technology.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
