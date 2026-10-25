import React from "react";
import messages from "../../data/messages.js";
import technologies from "../../data/technologies.js";

// Build the scrolling content once, outside the component.
const bannerItems = [];
const itemCount = Math.max(messages.length, technologies.length);

for (let index = 0; index < itemCount; index++) {
  if (messages[index]) {
    bannerItems.push({
      type: "message",
      text: messages[index],
    });
  }

  if (technologies[index]) {
    bannerItems.push({
      type: "technology",
      ...technologies[index],
    });
  }
}

// Render a message or a technology using the same item structure.
function BannerItem({ item }) {
  if (item.type === "message") {
    return (
      <span className="whitespace-nowrap font-outfit text-sm text-white md:text-base">
        {item.text}
      </span>
    );
  }

  return (
    <span className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-white/10 px-3 py-2 text-sm text-white">
      <img
        src={`https://skillicons.dev/icons?i=${item.icon}`}
        alt=""
        className="h-7 w-7 object-contain"
        loading="lazy"
      />

      <span>{item.name}</span>
    </span>
  );
}

export default function ScrollingBanner() {
  return (
    <section
      aria-label="Development technologies and learning messages"
      className="overflow-hidden bg-v3-plum py-4"
    >
      <div className="banner-track flex w-max">
        {/* First copy contains the accessible content. */}
        <div className="flex shrink-0 items-center gap-8 pr-8">
          {bannerItems.map((item, index) => (
            <BannerItem key={`original-${index}`} item={item} />
          ))}
        </div>

        {/* Duplicate creates the seamless scrolling loop. */}
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center gap-8 pr-8"
        >
          {bannerItems.map((item, index) => (
            <BannerItem key={`duplicate-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
