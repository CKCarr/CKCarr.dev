
import React from "react";

export default function SearchComponent({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="w-full">
      <label
        htmlFor="project-search"
        className="mb-2 block font-outfit text-sm font-semibold text-v3-text-primary"
      >
        Search Projects
      </label>

      <input
        id="project-search"
        type="search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search projects..."
        className="w-full rounded-xl border border-v3-line
           bg-white px-4 py-3 font-outfit
           text-v3-text-primary
           placeholder:text-v3-text-secondary
           focus:outline-none focus:ring-2
           focus:ring-v3-teal focus-visible:ring-offset-2"
      />
    </div>
  );
}
