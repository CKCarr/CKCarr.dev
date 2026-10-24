
/**
 * Resume Data
 *
 * This file stores professional information separately
 * from the React components that display it.
 *
 * Benefits:
 * - Update information in one place.
 * - Reuse data across portfolio components.
 * - Support different resume formats later.
 * - Keep presentation separate from content.
 */

const resumeData = {
  personal: {
    name: "Crystal Carrillo",
    headline: "Software Development | IT & Technical Support",
    location: "Claremore, Oklahoma",
    email: "cryskayecarr@gmail.com",
    phone: "539-210-6478",
    website: "https://ckcarr.dev",
    github: "https://github.com/CKCarr",
    linkedin: "https://www.linkedin.com/in/crystal-carrillo/",
  },

  
  summary:
    "Software development graduate of Atlas School's 20-month, project-based program, with hands-on experience building web applications, command-line programs, and database-backed projects using JavaScript, React, Python, C, and SQL. Completed the Google IT Support Professional Certificate through Coursera. Currently working in client services using Zendesk, Microsoft Teams, and business software. Seeking an entry-level opportunity in software development or IT support.",


  experience: [
    {
      id: "paul-hood",
      company: "Paul Hood",
      title: "Client Success Representative",
      previousTitle: "Client Experience Associate I",
      startDate: "June 2026",
      endDate: "Present",
      location: "Tulsa, Oklahoma",
      highlights: [
      "Provide front-desk and online client support, responding to inquiries and assisting with service-related requests.",
      "Use Zendesk, Microsoft Teams, and internal business software to manage communications and documentation.",
      "Coordinate client information and service requests with internal teams.",
      ],
    },
    {
      id: "pro-care",
      company: "Pro Care Innovations",
      title: "Telehealth Care Team Coordinator / Medical Assistant",
      startDate: "August 2022",
      endDate: "November 2022",
      location: "Owasso, Oklahoma",
      highlights: [
        "Maintained secure and accurate patient records using medical software.",
        "Protected confidential patient information in accordance with healthcare requirements.",
        "Used digital communication and documentation tools to coordinate care-related tasks.",
      ],
    },
    {
      id: "brookdale",
      company: "Brookdale Senior Living",
      title: "Business Office Manager / Certified Nursing Assistant / Advanced Certified Medication Aide",
      startDate: "July 2014",
      endDate: "March 2018",
      location: "Weatherford, Oklahoma",
      highlights: [
        "Organized employee and resident records.",
        "Audited Kronos timekeeping records and supported employee onboarding.",
        "Supported administrative operations and resolved day-to-day operational issues.",
      ],
    },
  ],

  education: [
    {
      id: "atlas",
      institution: "Atlas School",
      location: "Tulsa, Oklahoma",
      program: "Computer Science and Full Stack Web Development",
      dates: "January 2023 – August 2024",
      highlights: [
        "Completed a 20-month immersive, project-based software development program.",
        "Studied computer science fundamentals and full-stack web development.",
        "Student of the Month — February 2024.",
      ],
    },
  ],
     
   // Technical projects completed during software development training.
   // These are educational projects, not professional employment.
   technicalProjects: [
    {
     id: "simple-shell",
     name: "Simple Shell",
     technologies: ["C", "Linux", "CLI"],
     description:
       "Developed a UNIX command interpreter using C, practicing command execution and systems programming.",
    },
    {
     id: "airbnb",
     name: "AirBnB Clone",
     technologies: ["Python", "Flask", "MySQL"],
     description:
       "Built components of a full-stack application using Python, database storage, and web technologies across multiple project iterations.",
    },
    {
     id: "way-home",
     name: "A Way Home",
     technologies: ["Next.js", "React", "Tailwind CSS"],
     description:
       "Contributed to a capstone application designed to help people locate lost pets.",
    },
    {
     id: "museum",
     name: "Museum of Imagination",
     technologies: ["JavaScript", "Three.js"],
     description:
       "Collaborated on an interactive 3D experience, developing virtual galleries and visual interactions.",
    },
   ],

  certifications: [
    {
      id: "google-it",
      title: "Google IT Support Professional Certificate",
      issuer: "Google / Coursera",
      verificationUrl: "",
    },
  ],

  skills: {
    programming: [
      "JavaScript",
      "TypeScript",
      "Python",
      "C",
      "HTML",
      "CSS",
    ],

    frameworks: [
      "React",
      "Next.js",
      "Node.js",
      "Flask",
      "Tailwind CSS",
    ],

    databases: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
    ],

    systemsAndTools: [
      "Windows",
      "Linux",
      "Git",
      "GitHub",
      "Docker",
      "Command Line",
      "Microsoft 365",
    ],

    professional: [
      "Technical Troubleshooting",
      "Client Support",
      "Documentation",
      "Software-Based Workflows",
      "Team Collaboration",
    ],
  },

  volunteer: [
    {
      id: "techlahoma",
      organization: "Techlahoma — Tulsa Web Devs",
      role: "Co-Organizer",
      dates: "2024",
    },
  ],
};

export default resumeData;
