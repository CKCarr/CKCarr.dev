
import React from "react";

import HeroSection from "../components/HomepageComponents/HeroSection.js";
import AboutSection from "../components/HomepageComponents/AboutSection.js";
import TechnologiesTools from "../components/HomepageComponents/TechnologiesTools.js";
import CTAGithub from "../components/HomepageComponents/CTAGithub.js";
import ScrollingBanner from "../components/HomepageComponents/ScrollingBanner.js";
import CTALinkedin from "../components/HomepageComponents/CTALinkedin.js";
import ContactForm from "../components/HomepageComponents/ContactForm.js";
import Divider from "../components/Divider.js";

export default function HomePage() {
  return (
    <main>
      {/* Each section manages its own layout and section ID. */}
      <HeroSection />
      {/* <Divider /> */}

      {/* <AboutSection /> */}
      {/* <Divider /> */}

      {/* <TechnologiesTools /> */}
      {/* <Divider /> */}

      {/* Keep these three components in their existing order. */}
      {/* <CTAGithub /> */}
      <ScrollingBanner />
      {/* <CTALinkedin /> */}
      {/* <Divider /> */}

      <ContactForm />
    </main>
  );
}
