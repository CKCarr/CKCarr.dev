
import React from "react";

export default function ProjectImg({ src, alt }) {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-cornflowerblue p-2">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-contain"
      />
    </div>
  );
}
