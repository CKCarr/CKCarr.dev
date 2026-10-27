import React, { useState } from "react";
import ProjectCard from './ProjectCard.js';
import SearchComponent from './SearchComponent.js';
import projectsData from '../../data/projects.js';
import Certifications from './Certifications.js';
import certificationsData from '../../data/certificationsData.js';
import Divider from '../Divider.js';

function ProjectPortfolio() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  // Extract all unique tags dynamically from projectsData
  const allTags = [...new Set(projectsData.flatMap(project => project.tags))];

  
// Filter projects using the search bar and selected technologies.
const filteredProjects = projectsData.filter((project) => {
  // Check whether the project name contains the search text.
  const matchesSearch = project.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  // Check whether the project uses ANY selected technology.
  // If nothing is selected, allow all technologies.
  const matchesTags =
    selectedTags.length === 0 ||
    selectedTags.some((tag) => project.tags.includes(tag));

  // IMPORTANT:
  // Only keep projects that match BOTH conditions.
  return matchesSearch && matchesTags;
});

  return (
    <section className="projects my-5 p-6 w-full max-w-screen-xl mx-auto">
      {/* V3 Projects page introduction */}
<div className="mb-10 rounded-3xl bg-v3-plum px-6 py-10 sm:px-10">
  <p className="font-outfit text-sm font-semibold uppercase tracking-widest text-paleturquoise">
    Selected work & technical experience
  </p>

  <h1 className="mt-4 font-outfit text-4xl font-bold leading-tight text-white sm:text-5xl">
    Projects & Practical Experience
  </h1>

  <p className="mt-5 max-w-2xl font-outfit text-lg leading-relaxed text-v3-lavender">
    Explore applications, collaborative projects, and technical exercises
    that reflect my development experience and continued learning.
  </p>
</div>

{/* Search stays in the normal document flow. */}
<div className="mb-6 rounded-lg bg-cornflowerblue p-4 shadow-md">
  <SearchComponent
    searchTerm={searchTerm}
    setSearchTerm={setSearchTerm}
  />
</div>
              {/* Tag filter buttons */}
        <div className="flex flex-wrap justify-center space-2 mt-4">
          {allTags.map((tag, idx) => (
            <button
  key={tag}
  type="button"
  aria-pressed={selectedTags.includes(tag)}
  onClick={() =>
    setSelectedTags((previous) =>
      previous.includes(tag)
        ? previous.filter((item) => item !== tag)
        : [...previous, tag]
    )
  }
  className={`rounded-full border-2 px-4 py-2 font-outfit
  text-sm font-medium transition-all duration-200
  hover:-translate-y-0.5
  focus:outline-none focus-visible:outline-2
  focus-visible:outline-offset-2 focus-visible:outline-v3-teal
  motion-reduce:transform-none
  ${
    selectedTags.includes(tag)
      ? "border-v3-teal bg-v3-teal text-white hover:bg-v3-plum hover:border-v3-plum"
      : "border-v3-line bg-white text-v3-teal hover:bg-v3-mint hover:border-v3-teal"
  }`}
>
  {tag}
</button>
          ))}
        </div>

      <Divider />

      {/* Projects Grid */}
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="mx-auto text-md text-center text-plum">
            <p>No projects found.</p>
          </div>
        )}
      </div>

      <Divider />

      {/* Certifications Section */}
      <div>
      <Certifications certifications={certificationsData} />
      </div>
    </section>
  );
}

export default ProjectPortfolio;
