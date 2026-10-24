
import React from "react";
import { Link } from "react-router-dom";
import resumeData from "../data/resumeData.js";
import resumePdf from "../assets/CKCarrillo-RESUME.pdf";

export default function ResumePage() {
  // Read the resume information from our central data file.
  const {
    personal,
    summary,
    education,
    certifications,
    experience,
    skills,
    volunteer,
  } = resumeData;

  // Convert camelCase category names into readable headings.
  // Example: systemsAndTools becomes "Systems And Tools".
  const formatCategory = (category) =>
    category.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase());

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-36">
      {/* 1. PROFESSIONAL HEADER */}
      <header className="mb-10 text-center">
        <h1 className="font-outfit text-4xl font-bold text-white md:text-5xl">
          {personal.name}
        </h1>

        <p className="mt-3 text-xl font-semibold text-white">
          {personal.headline}
        </p>

        <p className="mx-auto mt-5 max-w-3xl leading-7 text-white">
          {summary}
        </p>

        {/* Resume and professional profile links */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={resumePdf}
            download="Crystal-Carrillo-Resume.pdf"
            className="rounded-md bg-darkcyan px-5 py-3 font-semibold text-white transition-colors hover:bg-darkpurple"
          >
            Download Resume
          </a>

          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white px-5 py-3 font-semibold text-white transition-colors hover:bg-darkpurple"
          >
            View PDF
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white px-5 py-3 font-semibold text-white transition-colors hover:bg-darkpurple"
          >
            GitHub
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white px-5 py-3 font-semibold text-white transition-colors hover:bg-darkpurple"
          >
            LinkedIn
          </a>
        </div>
      </header>

      {/* 2. EDUCATION & CERTIFICATIONS */}
      <section
        aria-labelledby="education-heading"
        className="mb-8 rounded-lg bg-white p-6 shadow-md"
      >
        <h2
          id="education-heading"
          className="mb-6 text-2xl font-bold text-midnightblue"
        >
          Education & Certifications
        </h2>

        <div className="space-y-6">
          {education.map((item) => (
            <article key={item.id}>
              <h3 className="text-lg font-bold text-midnightblue">
                {item.institution}
              </h3>

              <p className="font-medium text-gray-700">
                {item.program}
              </p>

              <p className="text-sm text-gray-600">
                {item.dates}
              </p>

              <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
                {item.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Completed professional certifications */}
        {certifications.length > 0 && (
          <div className="mt-6 border-t border-gray-200 pt-5">
            <h3 className="mb-4 text-lg font-semibold text-midnightblue">
              Professional Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((certification) => (
                <article key={certification.id}>
                  <h4 className="font-semibold text-midnightblue">
                    {certification.title}
                  </h4>

                  <p className="text-sm text-gray-700">
                    {certification.issuer}
                  </p>

                  {certification.verificationUrl && (
                    <a
                      href={certification.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm font-semibold text-darkcyan underline underline-offset-4"
                    >
                      Verify Certificate
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 3. PROFESSIONAL EXPERIENCE */}
      <section
        aria-labelledby="experience-heading"
        className="mb-8 rounded-lg bg-white p-6 shadow-md"
      >
        <h2
          id="experience-heading"
          className="mb-6 text-2xl font-bold text-midnightblue"
        >
          Professional Experience
        </h2>

        <div className="space-y-7">
          {experience.map((job) => (
            <article
              key={job.id}
              className="border-b border-gray-200 pb-6 last:border-0 last:pb-0"
            >
              <h3 className="text-lg font-bold text-midnightblue">
                {job.title}
              </h3>

              <p className="font-semibold text-gray-700">
                {job.company}
              </p>

              <p className="text-sm text-gray-600">
                {job.startDate} – {job.endDate}
                {job.location ? ` | ${job.location}` : ""}
              </p>

              <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
                {job.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* 4. TECHNICAL & PROFESSIONAL SKILLS */}
      <section
        aria-labelledby="skills-heading"
        className="mb-8 rounded-lg bg-white p-6 shadow-md"
      >
        <h2
          id="skills-heading"
          className="mb-6 text-2xl font-bold text-midnightblue"
        >
          Technical & Professional Skills
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="min-w-0">
              <h3 className="mb-3 font-semibold text-midnightblue">
                {formatCategory(category)}
              </h3>

              <ul className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="max-w-full break-words rounded-md border border-darkcyan bg-gray-50 px-3 py-1 text-sm text-midnightblue"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 5. LINK TO EXISTING PROJECTS PAGE */}
      <section
        aria-labelledby="portfolio-heading"
        className="mb-8 rounded-lg border border-darkcyan bg-white p-6 shadow-md"
      >
        <h2
          id="portfolio-heading"
          className="mb-3 text-2xl font-bold text-midnightblue"
        >
          Technical Projects & Portfolio
        </h2>

        <p className="mb-5 leading-relaxed text-gray-700">
          Explore my software development coursework and personal
          projects, including full-stack applications, command-line
          programs, and interactive web experiences. Project details,
          technologies, and available source code are presented on
          my dedicated Projects page.
        </p>

        {/* React Router navigation avoids a full page reload.
            Verify that your project route is "/projects". */}
        <Link
          to="/projects"
          className="inline-block rounded-md bg-darkpurple px-5 py-3 font-semibold text-white transition-colors hover:bg-darkcyan"
        >
          Explore My Projects
        </Link>
      </section>

      {/* 6. COMMUNITY INVOLVEMENT */}
      {volunteer.length > 0 && (
        <section
          aria-labelledby="volunteer-heading"
          className="rounded-lg bg-white p-6 shadow-md"
        >
          <h2
            id="volunteer-heading"
            className="mb-5 text-2xl font-bold text-midnightblue"
          >
            Community Involvement
          </h2>

          <div className="space-y-4">
            {volunteer.map((item) => (
              <article key={item.id}>
                <h3 className="font-semibold text-midnightblue">
                  {item.role}
                </h3>

                <p className="text-gray-700">
                  {item.organization} | {item.dates}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
