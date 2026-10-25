
import React from "react";

export default function SearchComponent({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="w-full">
      <label
        htmlFor="project-search"
        className="mb-1 ml-2 block font-outfit font-semibold text-midnightblue"
      >
        Search Projects
      </label>

      <input
        id="project-search"
        type="search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search by project name..."
        className="w-full rounded-lg border-2 border-darkcyan
                   bg-white px-4 py-3 text-midnightblue
                   placeholder-gray-600
                   focus:outline-none focus:ring-2
                   focus:ring-darkcyan"
      />
    </div>
  );
}
