import React from "react";

// Reusable About card.
// Each card receives its image, heading, description,
// and optional animation classes from AboutSection.js.
function Card({
  imageSrc,
  title,
  content,
  cardClass = "",
}) {
  return (
    <article
      className={`
        my-4
        mx-auto
        w-full
        max-w-xl
        rounded-lg
        bg-cornflowerblue
        p-5
        shadow-lg
        sm:p-6
        ${cardClass}
      `}
    >
      {/* Decorative image; the heading provides the card's meaning. */}
      <img
        src={imageSrc}
        alt=""
        className="
          mx-auto mb-6
          h-40 w-40
          rounded-full
          border-2 border-darkcyan
          object-cover
          sm:h-48 sm:w-48
        "
      />

      <div
        className="
          rounded-lg
          border-2 border-darkcyan
          bg-white
          p-5
          sm:p-6
        "
      >
        {/* Center the heading, but not the description. */}
        <h3
          className="
            mb-3
            text-center
            text-2xl
            font-bold
            text-purple
          "
        >
          {title}
        </h3>

        <hr className="mb-4 border-t-2 border-darkcyan" />

        {/* Left alignment and line height improve readability. */}
        <p
          className="
            text-left
            text-base
            font-normal
            leading-relaxed
            text-midnightblue
          "
        >
          {content}
        </p>
      </div>
    </article>
  );
}

export default Card;
