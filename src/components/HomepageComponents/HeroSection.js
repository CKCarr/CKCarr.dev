
import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

import design from "../../assets/images/discover-text.png";
import monitor from "../../assets/images/pc-monitor.png";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="hero pt-24 text-white"
    >
      <div className="container mx-auto px-4 py-8">

        {/* Responsive images: stacked on small screens */}
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
          <img
            src={design}
            alt="Discover, Research, Design, Create, Deploy"
            className="w-full max-w-sm md:w-1/2 md:max-w-lg"
          />

          <img
            src={monitor}
            alt="Illustration of a desktop computer"
            className="w-full max-w-sm md:w-1/2 md:max-w-lg"
          />
        </div>

        {/* Preserve existing hero messaging */}
        <Typography
          variant="h2"
          className="my-8 text-center"
        >
          <span className="bg-gradient-to-r from-cornflowerblue via-paleturquoise to-plum bg-clip-text text-transparent">
            A source of Inspiration. A Muse. A Vibe.
            Learn while Doing and Never not Try.
          </span>
        </Typography>

        {/* Navigation links styled as buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/projects"
            className="w-full max-w-xs rounded-md border-2 border-darkcyan bg-darkpurple px-6 py-3 text-center font-outfit text-white transition-colors hover:border-plum sm:w-auto"
          >
            View Portfolio
          </Link>

          <Link
            to="/resume"
            className="w-full max-w-xs rounded-md border-2 border-darkcyan bg-darkpurple px-6 py-3 text-center font-outfit text-white transition-colors hover:border-plum sm:w-auto"
          >
            View Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
