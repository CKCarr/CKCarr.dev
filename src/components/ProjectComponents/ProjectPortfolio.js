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
      <h1 className="text-center text-5xl font-bold mb-8">
        <span className="color-b">Project</span>
        ✨
        <span className="color-p">Portfolio</span>
      </h1>

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
              key={idx}
              onClick={() => setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])}
              className={`px-4 py-2 rounded ${selectedTags.includes(tag) ? 'bg-darkcyan hover:text-plum ' : 'bg-white text-darkcyan'} border-2 border-darkcyan hover:bg-darkcyan hover:text-plum transition `}
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
