// src/data/blogPosts.js
// This file contains an array of blog post objects. Each object has an id, title, content property, and an optional image. The content property contains the text content of the blog post. The blogPosts array is exported to be used in the BlogPage component to render the blog posts.
const blogPosts = [
    {
        id: 1,
        title: "Refactoring My Life",
        content: `I wear many hats – wife, proud mother to four wonderful children, a dedicated caregiver to my Grandma, and a pet mom to two dogs and a cat. I've been a stay-at-home mother and caregiver in recent years, and like many others, life circumstances and the onset of the COVID-19 pandemic prompted me to reevaluate my path.`,
    },
    {
        id: 2,
        title: "Transition to Tech",
        content: `My previous career spanned over 11 years in the healthcare field, where I played various roles from nurse assistant to business office manager. Throughout this time, I witnessed technology's increasing role in healthcare, sparking my interest in the tech world. I began to explore the possibility of a career change and started taking steps to make it happen.`,
    },
    {
        id: 3,
        title: "My Future in Code",
        content: `I'm excited to embark on this journey of learning and personal growth. With curiosity, hard work, dedication, and perseverance, I know I will be equipped with the knowledge and skills to succeed in a rapidly evolving tech landscape. I have a passion for problem-solving, a love for creativity in all its forms, and a readiness to embrace this exciting career change.`,
    },
    {
        id: 4,
        title: "Why I Love Coding",
        content: `There’s something incredibly rewarding about coding – the ability to solve problems, create something from nothing, and see your work come to life on the screen. Every line of code is like a building block, helping me to bring my ideas into reality.`,
        imageSrc: "https://via.placeholder.com/150",
    },
    {
        id: 5,
        title: "How I Built My Portfolio",
        content: `
        Building my portfolio was a challenging yet rewarding experience. I started by researching the best practices, and after trying a few different approaches, I finally settled on a design that reflects my personality and skills.

        Step 1: Planning
        Before diving into the code, I spent time brainstorming the structure of the site. I knew I wanted to showcase my projects, but I also wanted to include an "About Me" section, a blog, and a contact form.

        Step 2: Choosing the Tech Stack
        After some consideration, I chose React for the front-end, Tailwind CSS for styling, and GitHub Pages for hosting.

        Step 3: Development
        Once I had the plan and tech stack in place, I began coding. I started with the homepage, making sure the design was responsive and functional on all devices.
        `,
    },
];

export default blogPosts;
