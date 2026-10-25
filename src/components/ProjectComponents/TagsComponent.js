
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
          className="max-w-full rounded-md border border-darkcyan bg-midnightblue px-3 py-1 font-outfit text-sm text-plum break-words"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
