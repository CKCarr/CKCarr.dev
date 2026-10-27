import React from "react";
import ProjectImg from "./ProjectImg";
import ProjectDescription from "./ProjectDescription";
import TagsComponent from "./TagsComponent";

export default function ProjectCard({ project }) {
    // Choose a descriptive button label based on the project link.
    const projectUrl = project.link || "";

    const linkLabel = projectUrl.includes("github.com")
    ? "View Code"
    : projectUrl.includes("youtube.com") || projectUrl.includes("youtu.be")
    ? "Watch Demo"
    : "Live Demo";
  return (
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-v3-line bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none">
      {/* Shorter image area for a more compact card. */}
      <div className="h-44 overflow-hidden border-b border-v3-line bg-midnightblue sm:h-48">
        <ProjectImg
          src={project.image}
          alt={`Screenshot or illustration for ${project.name}`}
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-3 p-4">
        <ProjectDescription
          name={project.name}
          description={project.description}
        />

        <TagsComponent tags={project.tags} />

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex self-start rounded-full bg-v3-plum px-5 py-2.5 font-outfit text-sm font-semibold text-white transition-colors hover:bg-v3-violet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v3-teal"
          >
            {linkLabel}
          </a>
        )}
      </div>
    </article>
  );
}
