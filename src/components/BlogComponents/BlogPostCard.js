
import React from "react";

export default function BlogPostCard({ post, onRead }) {
  // Create a short preview from the full article.
  const excerpt = post.content.trim().replace(/\s+/g, " ").slice(0, 150);

  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-darkcyan bg-white p-5 shadow-md transition-shadow hover:shadow-xl">
      <h2 className="mb-3 font-outfit text-xl font-bold text-midnightblue">
        {post.title}
      </h2>

      <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-700">
        {excerpt}
        {post.content.trim().length > 150 ? "..." : ""}
      </p>

      {/* Button opens the full article without changing routes. */}
      <button
        type="button"
        onClick={onRead}
        aria-label={`Read article: ${post.title}`}
        className="self-start rounded-md bg-darkpurple px-4 py-2 font-semibold text-white transition-colors hover:bg-darkcyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkcyan"
      >
        Read Article
      </button>
    </article>
  );
}
