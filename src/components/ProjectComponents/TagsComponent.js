
import React from "react";

export default function TagsComponent({ tags }) {
  return (
    <ul
      aria-label="Technologies used"
      className="flex w-full min-w-0 flex-wrap gap-2"
    >
      {tags.map((tag) => (
        <li
          key={tag}
          className="max-w-full rounded-full border border-v3-line
           bg-v3-mint px-3 py-1
           font-outfit text-sm font-medium
           text-v3-teal break-words"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
