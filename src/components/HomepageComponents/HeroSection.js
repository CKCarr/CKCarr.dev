import Button from "../Button";
import Container from "../Container"

// Each step is stored as data so the card layout can be reused.
const projectSteps = [
  { number: "01", title: "Understand the goal", phase: "Plan" },
  { number: "02", title: "Shape the pages", phase: "Design" },
  { number: "03", title: "Build and check", phase: "Develop" },
  { number: "04", title: "Launch with a handoff", phase: "Share" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative px-4 pb-12 pt-28 sm:px-6"
    >
      <Container>

      <div
        className="v3-hero-surface grid items-center gap-10
                     rounded-3xl px-6 py-10 text-white
                     lg:grid-cols-[1.2fr_0.8fr]
                     lg:px-12 lg:py-14"
      >
        {/* Left side: introduction and navigation */}
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-widest text-[#b9f3e9]">
            Websites · Small-business tools · Learning in public
          </p>

          <h1
            id="hero-title"
            className="max-w-2xl font-outfit text-3xl font-bold
           leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            Make the next step easy for your customers.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-[#e5dff0]">
            I'm Crystal Carrillo, a web developer building clear,
            welcoming websites and practical tools for small businesses.
            I focus on the questions customers need answered before
            they get in touch.
          </p>

<div className="mt-8 flex flex-wrap gap-3">
  <Button to="/projects" variant="primary" theme="dark">
    Explore my work
  </Button>

  <Button href="#process" variant="outline" theme="dark">
    See how I work
  </Button>
</div>

          <p className="mt-6 text-sm text-[#c4bad5]">
            Claremore, Oklahoma · Small-business concepts in progress
          </p>
        </div>

        {/* Right side: reusable project workflow card */}
        <div
          aria-label="A four-step project workflow"
          className="w-full max-w-md justify-self-center
           rounded-2xl bg-white p-5 text-v3-ink
           shadow-lg lg:justify-self-end"
        >
          <p className="text-sm font-bold text-v3-violet">
            A simple project path
          </p>

          <p className="mt-5 text-xs font-bold uppercase tracking-widest text-v3-muted">
            From first question to launch
          </p>

          <h2 className="mt-2 text-xl font-bold leading-snug">
            A website should feel clear at every step.
          </h2>

          <ol className="mt-4 space-y-2">
            {projectSteps.map((step) => (
              <li
                key={step.number}
                className="flex items-center gap-3 rounded-xl
           border border-v3-line p-2.5"
              >
                <span
                  className="rounded-l bg-v3-lavender px-3 py-2
                             text-sm font-bold text-v3-violet"
                >
                  {step.number}
                </span>

                <span className="flex-1 font-semibold">
                  {step.title}
                </span>

                <span className="text-xs text-v3-muted">
                  {step.phase}
                </span>
              </li>
            ))}
          </ol>

          <p className="mt-6 text-sm font-medium text-v3-teal">
            Clear scope · Mobile-ready · Useful handoff
          </p>
        </div>
      </div>

      </Container>

    </section>
  );
}
