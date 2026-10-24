
import React, { useState } from "react";

export default function ProjectDescription({ name, description }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_LENGTH = 100;
  const isLong = description.length > MAX_LENGTH;

  return (
    <div>
      <h2 className="mb-2 font-outfit text-xl font-semibold text-plum">
        {name}
      </h2>

      <p className="text-sm leading-relaxed text-white">
        {isExpanded || !isLong
          ? description
          : `${description.slice(0, MAX_LENGTH)}...`}

        {isLong && (
          <>
            {" "}
            <button
              type="button"
              onClick={() => setIsExpanded((previous) => !previous)}
              className="font-semibold text-paleturquoise underline hover:text-white"
            >
              {isExpanded ? "Show less" : "Show more"}
            </button>
          </>
        )}
      </p>
    </div>
  );
}
