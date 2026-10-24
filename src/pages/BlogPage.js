import React, { useState } from "react";
import BlogPostCard from "../components/BlogComponents/BlogPostCard.js";
import BlogPostModal from "../components/BlogComponents/BlogPostModal.js";
import blogPosts from "../data/BlogPosts.js";

export default function BlogPage() {
  // null means no article is currently open.
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-36">
      {/* pt-36 provides space beneath the fixed navbar.
          Adjust this if the navbar height changes. */}
      <header className="mb-10 text-center">
        <h1 className="font-outfit text-4xl font-bold text-white md:text-5xl">
          Blog & Learning Journal
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-white">
          Development notes, lessons learned, and reflections
          from my journey in software development.
        </p>
      </header>

      {/* Each card is a preview, not the complete article. */}
      <section
        aria-label="Blog entries"
        className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {blogPosts.map((post) => (
          <BlogPostCard
            key={post.id}
            post={post}
            onRead={() => setSelectedPost(post)}
          />
        ))}
      </section>

      {/* Render the reading modal only when an article is selected. */}
      {selectedPost && (
        <BlogPostModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </main>
  );
}
