import { FaPalette, FaCode, FaWrench, FaDatabase, FaCloud, FaSpellCheck } from "react-icons/fa";
import { Project, Service, Skill } from "./type";

export const services: Service[] = [
  {
    Icon: FaPalette,
    title: "Frontend Frameworks",
    about:
      "I build web applications that look great using frameworks like <b>React.js</b>, <b>Next.js</b>, and <b>AngularJS</b>.",
  },
  {
    Icon: FaCode,
    title: "Web Development",
    about:
      "I create clean websites using <b>JavaScript</b>, <b>TypeScript</b>, <b>PHP</b>, <b>HTML5</b>, <b>pug.js</b>, <b>CSS3</b>, and <b>TailwindCSS</b>.",
  },
  {
    Icon: FaWrench,
    title: "Backend Frameworks",
    about:
      "I make solid foundation that keeps application running smoothly using <b>Spring Boot</b>, <b>Flask</b>, and <b>Express.js</b>.",
  },
  {
    Icon: FaDatabase,
    title: "Database Management",
    about:
      "I design databases using <b>SQL</b> and <b>NoSQL</b>. I also create data models with <b>UML</b>, <b>MERISE</b>, and <b>JSON schemas</b>.",
  },
  {
    Icon: FaCloud,
    title: "API Development",
    about:
      "I develop APIs using <b>REST</b> and <b>GraphQL</b>, while checking with <b>Postman</b> to ensure everything works smoothly.",
  },
  {
    Icon: FaSpellCheck,
    title: "Testing",
    about:
      "I focus on <b>unit tests</b>, <b>integration tests</b>, and <b>validation test cases</b> and I test with <b>Selenium</b>, <b>JUnit</b>, and <b>TestNG</b>.",
  },
];

export const languages: Skill[] = [
  {
    name: "・   JavaScript",
    level: "85",
  },
  {
    name: "・   Java",
    level: "82",
  },
  {
    name: "・   TypeScript",
    level: "65",
  },
  {
    name: "・   CSS",
    level: "60",
  },
  {
    name: "・   HTML",
    level: "30",
  },
  {
    name: "・ C",
    level: "20",
  },
];

export const tools: Skill[] = [
  {
    name: "・   Next.js",
    level: "80",
  },
  {
    name: "・   Express.js",
    level: "68",
  },
  {
    name: "・   Spring Boot",
    level: "60",
  },
  {
    name: "・   React",
    level: "50",
  },
  {
    name: "・   Angular",
    level: "40",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    name: "PDF Summarizer",
    description:
    "My first Flask project, which is a PDF summarizer implemented in Python, leveraging the OpenAI API powered by ChatGPT. The code adheres to the PEP-8 guidelines, ensuring maintainability and consistency in coding practices.",
    image_path: "/images/pdf-summarizer.png",
    deployed_url: "",
    github_url: "",
    category: ["flask"],
    key_techs: ["Flask", "Python", "Open-AI"],
  },
  {
    id: 2,
    name: "API Retriever",
    image_path: "/images/api-retriever.png",
    deployed_url: "https://orange-flower-02dd2d20f.4.azurestaticapps.net/",
    github_url: "https://github.com/yelucie/ITMD543-NextJS-Tailwind-JSON",
    category: ["react", "css"],
    description:
      "A web application that utilizes JSONPlaceholder, Next.js, and Tailwind CSS, incorporating API calls to enhance dynamic content and functionality.",
    key_techs: ["React", "NextJS", "TailwindCSS", "API"],
  },
  {
    id: 3,
    name: "Sunset-Sunrise Time",
    image_path: "/images/sunset-sunrise.png",
    deployed_url: "https://yelucie.github.io/ITMD541-LAB4/",
    github_url: "https://github.com/yelucie/ITMD541-LAB4",
    category: ["javascript", "css"],
    description:
      "A web application that displays sunrise and sunset data sourced from an external API, implemented with JavaScript and asynchronous programming for efficient data retrieval.",
    key_techs: ["JavaScript", "CSS", "HTML", "API"],
  },
  {
    id: 4,
    name: "Tip Calculator",
    image_path: "/images/tip-calculator.png",
    deployed_url: "https://yelucie.github.io/ITMD541-LAB3/",
    github_url: "https://github.com/yelucie/ITMD541-LAB3",
    category: ["javascript", "css"],
    description:
      "My initial JavaScript project centers around calculating the final bill by dynamically processing user input for the tip amount, enhancing user interaction and ease of use.",
    key_techs: ["JavaScript", "CSS", "HTML"],
  },
  {
    id: 5,
    name: "Portfolio V1.0",
    image_path: "/images/portfolio-1.png",
    deployed_url: "https://yelucie.github.io/ITMD541/",
    github_url: "https://yelucie.github.io/ITMD541/",
    category: ["css"],
    description:
      "My inaugural frontend project, exclusively crafted with HTML and CSS, with the design meticulously created on Figma for a seamless and visually appealing user interface.",
    key_techs: ["HTML", "CSS", "Figma"],
  },
  {
    id: 6,
    name: "Porfolio V2.0",
    image_path: "/images/portfolio-2.png",
    deployed_url: "https://lucie-ye.vercel.app/",
    github_url: "https://github.com/yelucie/fall2023-portfolio",
    category: ["react"],
    description:
      "A dynamic web application built with React, Next.js, Tailwind CSS, and Framer Motion to deliver an interactive and visually appealing user experience.",
    key_techs: ["React", "NextJS", "TailwindCSS", "Framer Motion"],
  },
  {
    id: 7,
    name: "Web Application Aberhonddu",
    image_path: "/images/aberhonddu.png",
    deployed_url: "",
    github_url: "",
    category: ["java"],
    description:
      "A collaborative Java web application developed using technologies such as Java, Maven, MySQL Database, Selenium, Scrum, and Spring Boot. The project was executed in a team environment, completing the development cycle within three sprints.",
    key_techs: ["Java", "Maven", "Oracle Database", "Selenium", "Scrum", "Spring Boot"],
  },
  {
    id: 8,
    name: "Be An Artist",
    image_path: "/images/baa.png",
    deployed_url: "",
    github_url: "",
    category: ["java"],
    description:
      "A Java application inspired by Microsoft Paint, featuring robust functionalities implemented in Java with support from JUnit for testing and Graphic 2D Swing for a rich graphical user interface.",
    key_techs: ["Java", "Maven", "JUnit", "Graphic2D"],
  },
];