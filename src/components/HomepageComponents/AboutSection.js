
import React from "react";
import Card from "../Card.js";

function AboutSection() {
  return (
    <section
      id="about"
      className="overflow-hidden text-midnightblue"
    >
      {/* One column on mobile, two columns on medium screens and above. */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Card 1: Background and transition into technology. */}
        <Card
          imageSrc={storyImage}
          title="My Story"
          content="After working in healthcare and client services, I pursued software development through Atlas School's 20-month program. I enjoy combining creativity, problem-solving, and technology to build useful applications. My background in supporting people continues to shape how I approach technical challenges."
          cardClass="animate__animated animate__fadeInUp animate__delay-2s"
        />

        {/* Card 2: How I approach development work. */}
        <Card
          imageSrc={processImage}
          title="My Process"
          content="I approach development by understanding the problem, planning a solution, building incrementally, and testing as I go. Through collaborative school projects and independent practice, I've worked with frontend interfaces, backend systems, and databases. I focus on learning why a solution works, not just how to make it work."
          cardClass="animate__animated animate__fadeInUp animate__delay-2s"
        />

        {/* Card 3: Current direction and professional goals. */}
        <div className="flex justify-center md:col-span-2">
          <Card
            imageSrc={goalsImage}
            title="My Goals"
            content="I'm continuing to develop my skills in software engineering, IT support, and practical problem-solving. My goal is to build reliable, accessible applications, contribute to meaningful projects, and grow through hands-on experience."
            cardClass="animate__animated animate__fadeInUp animate__delay-2s"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
