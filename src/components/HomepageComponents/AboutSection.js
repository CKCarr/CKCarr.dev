import React from 'react';
import Card from '../Card.js';
import storyImage from '../../assets/images/story.png';
import processImage from '../../assets/images/process2.png';
import goalsImage from '../../assets/images/goals.png';

function AboutSection() {
  return (
    <section id="about" className="overflow-hidden  text-midnightblue">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center">
        {/* Card 1 - My Story */}
        <Card
          imageSrc={storyImage}
          title="My Story"
          content="As a full stack developer, I'm excited to bring my passion for creativity and problem-solving to every project I undertake. After spending years in the healthcare industry, I transitioned into tech with a fresh drive to create innovative solutions and continuously expand my knowledge."
          cardClass="animate__animated animate__fadeInUp animate__delay-2s"
        />

        {/* Card 2 - My Process */}
        <Card
          imageSrc={processImage}
          title="My Process"
          content="I aim to work closely with clients to fully understand their unique needs and preferences, ensuring each project reflects their vision. By fostering open communication and collaboration, I can deliver high-quality, custom solutions that align with client goals and expectations."
          cardClass="animate__animated animate__fadeInUp animate__delay-2s"
        />

        {/* Card 3 - My Goals (Centered Below the Two Cards) */}
        <div className="md:col-span-2 flex justify-center">
          <Card
            imageSrc={goalsImage}
            title="My Goals"
            content="I’m dedicated to growing as a developer and continuously refining my skills. My focus is on building intuitive, user-friendly websites, designing engaging interfaces, and solving real-world challenges for businesses and individuals. "
            cardClass="animate__animated animate__fadeInUp animate__delay-2s"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
