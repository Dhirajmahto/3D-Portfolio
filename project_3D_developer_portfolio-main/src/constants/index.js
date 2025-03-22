import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "CodeSoft",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2024 - April 2025",
    points: [
         "Building and maintaining modern, responsive web applications using React.js, JavaScript, and CSS frameworks.",
         "Creating interactive and user-friendly UI/UX designs to enhance user experience.",
         "Integrating RESTful APIs and handling state management for seamless application performance.",
         "Ensuring cross-browser compatibility and mobile responsiveness for a smooth experience across all devices.",
         "Optimizing web applications for performance, accessibility, and SEO best practices."
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Prodigy InfoTech",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Feb 2025",
    points: [
     "Developing and managing backend services using Node.js and Express.js.",
     "Designing and implementing RESTful APIs for seamless frontend-backend communication.",
     "Working with databases like MySQL to store and manage application data efficiently.",
     "Ensuring authentication and authorization using JWT and session-based security.",
     "Optimizing backend performance, handling server-side logic, and debugging issues for smooth functionality."
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Designing and developing responsive and dynamic web applications.",
      "Building user-friendly interfaces with HTML, CSS, and JavaScript.",
      "Integrating frontend with backend services using APIs for seamless data flow.",
      "Ensuring cross-browser compatibility and mobile responsiveness.",
      "Optimizing website performance for fast loading speeds and better user experience."
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining full-stack web applications using modern technologies.",
  "Building dynamic and interactive user interfaces with React.js, HTML, CSS, and JavaScript.",
  "Creating and managing RESTful APIs to connect frontend with backend services.",
  "Handling backend development with Node.js, Express.js, and MySQL for database management.",
  "Ensuring responsive design, cross-browser compatibility, and performance optimization.",
  "Deploying applications on cloud platforms and managing version control with Git and GitHub."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought creating a stunning website was impossible, but Dhiraj proved me wrong.",
    name: "Abhishek kumar",
    designation: "Student",
    company: "Centurion University",
    image: "",
  },
  {
    testimonial:
      "I've never met a web developer as dedicated to learning and improving as Dhiraj",
    name: "Shashamk Kumar",
    designation: "Student",
    company: "Centurion University",
    image: "",
  },
  {
    testimonial:
      "After Dhiraj optimized our project, its performance improved significantly. We can't thank him enough!",
    name: "Rishav Kumar",
    designation: "Student",
    company: "Centurion University",
    image: "",
  },
];

const projects = [
  {
    name: "E-commerce Website",
    description:
      "Web-based platform that enables users to browse, purchase, and manage orders from various sellers, offering a seamless and efficient online shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Dhirajmahto",
  },
  {
    name: "Job Portal",
    description:
      "Web application that allows users to explore job listings, compare salary estimates, and find opportunities based on their location, ensuring a seamless job search experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Dhirajmahto",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Dhirajmahto",
  },
];

export { services, technologies, experiences, testimonials, projects };
