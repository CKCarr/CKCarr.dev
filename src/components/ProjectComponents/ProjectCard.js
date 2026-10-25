import React from "react";
import ProjectImg from "./ProjectImg";
import ProjectDescription from "./ProjectDescription";
import TagsComponent from "./TagsComponent";

export default function ProjectCard({ project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-darkcyan bg-darkpurple shadow-md transition-colors hover:border-plum">
      {/* Shorter image area for a more compact card. */}
      <div className="h-44 overflow-hidden border-b border-darkcyan bg-midnightblue sm:h-48">
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
            className="mt-auto inline-flex self-start rounded-md border border-darkcyan px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-darkcyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            View Project
          </a>
        )}
      </div>
    </article>
  );
}
