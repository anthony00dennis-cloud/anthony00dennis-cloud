// Single source of truth for the portfolio content.
// Transcribed from Anthony Dennis's LinkedIn profile.

export type YearMonth = { year: number; month: number }; // month is 1-12

export type Role = {
  title: string;
  company: string;
  initials: string;
  /** Badge color for the company mark, approximating its logo. */
  brandColor: string;
  start: YearMonth;
  /** `null` means the role is current. */
  end: YearMonth | null;
  highlights: string[];
  stack: string[];
};

export type SkillGroup = {
  name: string;
  skills: string[];
};

export const profile = {
  name: "Anthony Dennis",
  firstName: "Anthony",
  headline: "Senior Software Engineering",
  location: {
    city: "Kingwood",
    region: "Texas",
    country: "United States",
    short: "Kingwood, TX",
  },
  openTo: ["Full Stack Engineer", "Frontend Developer"],
  tagline:
    "I build scalable web and mobile products with React, Next.js, Node.js and NestJS, from pixel-perfect front ends to well-architected back-end services.",
  about:
    "Senior Full Stack Developer with strong experience in JavaScript and TypeScript, specializing in modern web and mobile applications. Proven background building scalable front-end systems with React and Next.js and robust back-end services using Node.js and NestJS. Experienced in mobile development with React Native and delivering production-ready systems across cloud-based environments using clean architecture and engineering best practices.",
  topSkills: ["JavaScript", "TypeScript", "Node.js", "Agile Methodologies"],
  careerStart: { year: 2015, month: 5 } satisfies YearMonth,

  // Contact details were not visible in the LinkedIn screenshots.
  // Fill these in and the matching buttons appear in the Contact section.
  contact: {
    email: "",
    linkedin: "", // e.g. "https://www.linkedin.com/in/your-handle"
    github: "", // e.g. "https://github.com/your-handle"
  },
};

export const focusAreas = [
  {
    title: "Front End",
    description:
      "Server-rendered and statically generated Next.js apps, reusable UI components and shared design systems.",
    tools: ["React", "Next.js", "Redux", "TypeScript"],
  },
  {
    title: "Back End",
    description:
      "Modular NestJS services with clean architecture, domain-driven design, secure REST APIs and JWT / role-based auth.",
    tools: ["Node.js", "NestJS", "Express", "PostgreSQL"],
  },
  {
    title: "Mobile",
    description:
      "Cross-platform features for iOS and Android built with React Native, sharing logic with the web stack.",
    tools: ["React Native", "iOS", "Android"],
  },
  {
    title: "Quality & Delivery",
    description:
      "Unit and integration testing, CI/CD pipelines and containerized deployments, shipped in Agile teams.",
    tools: ["Jest", "Cypress", "Docker", "CI/CD"],
  },
];

export const experience: Role[] = [
  {
    title: "Senior Software Engineer",
    company: "Valor Software",
    initials: "V",
    brandColor: "#e11d48",
    start: { year: 2023, month: 11 },
    end: null,
    highlights: [
      "Designed and developed scalable applications using React, Next.js, TypeScript, Node.js, and NestJS.",
      "Built server-rendered and statically generated pages in Next.js to improve SEO and initial load performance.",
      "Developed modular, testable back-end services using NestJS with REST APIs and a layered architecture.",
      "Implemented authentication and authorization flows using JWT and role-based access control.",
      "Integrated front-end applications with back-end services via REST APIs and async messaging.",
      "Developed reusable UI components and maintained shared design systems.",
      "Built cross-platform mobile features using React Native for iOS and Android.",
      "Optimized application performance through caching strategies and query optimization.",
      "Wrote unit and integration tests using Jest to ensure system reliability.",
      "Collaborated closely with product managers and designers in Agile development cycles.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "NestJS", "React Native", "JWT", "Jest"],
  },
  {
    title: "Senior Software Engineer",
    company: "CoDev",
    initials: "Co",
    brandColor: "#d6335b",
    start: { year: 2020, month: 9 },
    end: { year: 2023, month: 11 },
    highlights: [
      "Led development of large-scale web platforms using React, Next.js, TypeScript, and NestJS.",
      "Architected back-end systems using NestJS with clean architecture and domain-driven design principles.",
      "Built secure REST APIs with validation pipes, guards, interceptors, and DTOs.",
      "Implemented server-side rendering and API routes in Next.js for full-stack workflows.",
      "Integrated third-party services including payments, analytics, and external APIs.",
      "Improved system performance by refactoring legacy Node.js services into NestJS modules.",
      "Designed database schemas and optimized queries using PostgreSQL and MongoDB.",
      "Introduced CI/CD pipelines and improved deployment reliability.",
      "Mentored junior engineers and reviewed pull requests for code quality and consistency.",
      "Actively participated in sprint planning, estimation, and technical decision-making.",
    ],
    stack: ["React", "Next.js", "TypeScript", "NestJS", "PostgreSQL", "MongoDB", "CI/CD"],
  },
  {
    title: "Senior Full Stack Developer",
    company: "TLVTech",
    initials: "TLV",
    brandColor: "#0f766e",
    start: { year: 2017, month: 8 },
    end: { year: 2020, month: 9 },
    highlights: [
      "Developed full-stack applications using JavaScript, TypeScript, React, Node.js, and early NestJS adoption.",
      "Built RESTful APIs and background services with Node.js and Express, then migrated core services to NestJS.",
      "Implemented server-side rendering and routing with Next.js for customer-facing applications.",
      "Created reusable front-end components and managed application state using Redux.",
      "Integrated authentication systems and protected API endpoints.",
      "Collaborated with designers to deliver responsive, mobile-friendly UIs.",
      "Improved application stability through better error handling and logging.",
      "Worked closely with QA to improve test coverage and release quality.",
      "Containerized applications using Docker for consistent deployments.",
    ],
    stack: ["JavaScript", "TypeScript", "React", "Node.js", "Express", "NestJS", "Next.js", "Redux", "Docker"],
  },
  {
    title: "Software Developer",
    company: "Alvies",
    initials: "A",
    brandColor: "#0284c7",
    start: { year: 2015, month: 5 },
    end: { year: 2017, month: 8 },
    highlights: [
      "Developed quality web design mockups using UX principles so end products look beautiful, are widely accessible, and are easy to understand for both developers and customers.",
      "Managed both the back-end and front-end aspects of the development process.",
      "Completed the whole project in Laravel, JavaScript, HTML, CSS, Bootstrap, and SQL.",
      "Implemented code daily using PHP, JavaScript/jQuery, HTML5, and CSS3, interfacing with back-end data systems to produce dynamic user experiences.",
      "Normalized data before saving it to the database and worked with joins, triggers, cursors, primary and foreign keys, functions, and stored procedures in MySQL.",
      "Integrated WooCommerce with BigCommerce to build three child stores from the main BigCommerce store.",
      "Developed BigCommerce sites integrated with multiple drop-ship providers.",
      "Applied data structures and algorithms with attention to time and space complexity.",
      "Performed search engine optimization (SEO) and search engine marketing (SEM) to increase traffic and improve page ranking.",
    ],
    stack: ["PHP", "Laravel", "JavaScript", "jQuery", "HTML5", "CSS3", "Bootstrap", "MySQL", "BigCommerce", "WooCommerce"],
  },
];

// All 34 skills listed on the profile, grouped by area.
export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "SQL", "HTML", "CSS"],
  },
  {
    name: "Front End & Mobile",
    skills: ["React.js", "Next.js", "React Native", "Redux.js", "Vue.js", "AngularJS", "Webpack", "Babel.js"],
  },
  {
    name: "Back End",
    skills: ["Node.js", "NestJS", "Express.js"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["Amazon Web Services (AWS)", "Google Cloud Platform (GCP)", "Microsoft Azure", "Docker", "Jenkins", "Nginx", "Git"],
  },
  {
    name: "Testing",
    skills: ["Jest", "Cypress", "Mocha"],
  },
  {
    name: "Ways of Working",
    skills: ["Agile Methodologies", "Scrum", "Kanban"],
  },
];

export const education = [
  {
    school: "Texas Tech University",
    initials: "TT",
    brandColor: "#cc0000",
    degree: "Bachelor's degree",
    field: "Computer Science",
    startYear: 2011,
    endYear: 2015,
  },
];
