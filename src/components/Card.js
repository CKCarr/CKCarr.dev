
import React from "react";

// Props let parent components customize the card.
//
// imageSrc: image displayed at the top
// title: card heading
// content: descriptive text
// cardClass: optional additional Tailwind/CSS classes
function Card({
  imageSrc,
  title,
  content,
  cardClass = "",
}) {
  return (
    <article
      className={`
        bg-cornflowerblue
        rounded-lg
        shadow-lg
        my-4
        mx-auto
        max-w-sm
        lg:max-w-md
        p-6
        ${cardClass}
      `}
    >
      <img
        className="
          border-2 border-darkcyan
          w-48 h-48 rounded-full
          object-cover
          mx-auto mb-4
        "
        src={imageSrc}
        alt=""
      />

      <div className="
        text-center
        bg-white
        border-2 border-darkcyan
        p-5
        rounded-lg
      ">
        <h3 className="text-2xl font-bold mb-2 text-purple">
          {title}
        </h3>

        <hr className="border-t-2 border-darkcyan mb-4" />

        <p className="text-base text-midnightblue font-normal">
          {content}
        </p>
      </div>
    </article>
  );
}

export default Card;
