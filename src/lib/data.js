export const navLinks = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio built with Next.js and Tailwind CSS, featuring a clean dark aesthetic to showcase projects, technical skills, and development journey with a fully responsive and optimized UI.",
    image: "/images/project1.png",
    tags: ["Next.js", "Tailwind CSS"],
    livelink: "https://portfolio-two-self-75.vercel.app/",
  },

  {
    title: "Auth App",
    description:
      "A secure authentication system built with Next.js, implementing user registration, login, and protected routes with TypeScript, ensuring scalable structure and a clean, user-friendly interface for seamless authentication flow.",
    image: "/images/project2.png",
    tags: ["Next.js", "Authentication", "Firebase"],
    livelink: "https://assignment-6-mern-b-5.netlify.app/",
  },

  {
    title: "Contact App",
    description:
      "A contact management application built with React, implementing full CRUD operations using JSON Server. It uses Context API for efficient state management and provides a smooth interface for creating, updating, and deleting contacts, with deployment handled on Render.",
    image: "/images/project3.png",
    tags: ["React", "CRUD", "Redux", "JSON Server", "Tailwind"],
    livelink: "https://assignment-5-mern-b5.netlify.app/",
  },

  {
    title: "Fast Nourishment App",
    description:
      "A responsive food ordering application built with Next.js, designed for quick meal browsing with categorized menus, optimized UI design, and a smooth user experience for fast and efficient food discovery.",
    image: "/images/project4.png",
    tags: ["React", "Context Api", "Responsive"],
    livelink: "https://assignment-04-mern-b-5.netlify.app/",
  },
];

export const contacts = [
  { label: "Email", value: "rifatahammed2222@gmail.com" },
  { label: "Location", value: "Gazipur Sadar, Gazipur, Dhaka, Bangladesh" },
  { label: "Status", value: "Available for work" },
];

export const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Jamalpur Science and Technology University",
    period: "2022 — 2026",
    grade: "CGPA 3.68 / 4.00",
    description:
      "Studied core CS fundamentals including algorithms, data structures, operating systems, and software engineering. Completed a capstone project on real-time web applications.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Bhawal Badre Alam Govt. College",
    period: "2017 — 2019",
    grade: "GPA 4.17 / 5.00",
    description:
      "Science group with major in Physics, Chemistry, and Mathematics. Achieved perfect GPA in the national board examination.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Bhawal Mirzapur Hazi Jamir Uddin High School",
    period: "2015 — 2017",
    grade: "GPA 5.00 / 5.00",
    description:
      "Completed secondary education with distinction. Active participant in math olympiads and science fairs.",
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Tech Studio BD",
    type: "Full-time",
    period: "2023 — Present",
    description:
      "Building and maintaining scalable web applications using Next.js, Node.js, and PostgreSQL. Led frontend architecture decisions and mentored junior developers.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    type: "Contract",
    period: "2022 — 2023",
    description:
      "Delivered 10+ client projects including e-commerce stores, landing pages, and dashboards. Focused on performance, accessibility, and pixel-perfect UI implementation.",
    stack: ["React", "Tailwind CSS", "Firebase"],
  },
  {
    role: "Junior Web Developer",
    company: "Softwave IT",
    type: "Internship",
    period: "2021 — 2022",
    description:
      "Assisted in building internal tools and admin dashboards. Gained hands-on experience with REST APIs, version control, and agile workflows.",
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
  },
];

export const info = [
  { value: "2+", label: "Years exp." },
  { value: "20+", label: "Projects" },
  { value: "15+", label: "Happy clients" },
];

export const skills = {
  Frontend: [
    { name: "HTML / CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 88 },
    { name: "Next.js", level: 82 },
    { name: "Tailwind CSS", level: 85 },
  ],
  Backend: [
    { name: "Node.js", level: 80 },
    { name: "Express", level: 78 },
    { name: "MongoDB", level: 72 },
    { name: "PostgreSQL", level: 68 },
    { name: "REST APIs", level: 85 },
  ],
};
