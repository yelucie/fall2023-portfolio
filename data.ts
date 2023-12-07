import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { Project, Service, Skill } from "./type";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can construct user-friendly, scalable, and visually appealing web applications utilizing <b>HTML</b>, <b>CSS</b>, and <b>React.js</b>.",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "I can create relational database using UML schemes, and build server and api using <b>Express </b> & other popular frameworks.",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "API Development",
    about:
      "I can build robust RESTful API using <b>Express</b>. My experience extends to designing secure API endpoints.",
  },
  {
    Icon: AiOutlineApi,
    title: "Entrepreneurship",
    about:
      "In entrepreneurship, I like on fostering innovation and employing critical thinking in order to drive business success.",
  },
];

export const languages: Skill[] = [
  {
    name: "・   Java",
    level: "85",
  },
  {
    name: "・   SQL",
    level: "82",
  },
  {
    name: "・   HTML",
    level: "65",
  },
  {
    name: "・   JavaScript",
    level: "60",
  },
  {
    name: "・   CSS",
    level: "58",
  },
  {
    name: "・ C",
    level: "42",
  },
];

export const tools: Skill[] = [
  {
    name: "・   Maven",
    level: "75",
  },
  {
    name: "・   Spring Boot",
    level: "68",
  },
  {
    name: "・   Selenium",
    level: "65",
  },
  {
    name: "・   NodeJS",
    level: "50",
  },
  {
    name: "・   React",
    level: "45",
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
    image_path: "https://drive.google.com/uc?export=view&id=1vPPgmILKpK15xQwrXkB3eih_PN9KWbQ2",
    deployed_url: "google.com",
    github_url: "google.com",
    category: ["flask"],
    key_techs: ["Flask", "Python", "Open-AI"],
  },
  {
    id: 2,
    name: "API Retriever",
    image_path: "https://drive.google.com/uc?export=view&id=1tj1dbgvWCAd23vd45cjgORds1k9V5ZYV",
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
    image_path: "https://drive.google.com/uc?export=view&id=15Mtmq-cD906gQcOV2AI4csapaIOPBUrY",
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
    image_path: "https://drive.google.com/uc?export=view&id=1dpNozkZ5gsZLdOMROgWKl6i0bbJ3SkN6",
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
    image_path: "https://drive.google.com/uc?export=view&id=1nYy6grZcLXXL8wLM4e4gFkXqMLIUxeTr",
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
    image_path: "https://drive.google.com/uc?export=view&id=1nYy6grZcLXXL8wLM4e4gFkXqMLIUxeTr",
    deployed_url: "https://green-sea-0ed76610f.4.azurestaticapps.net/",
    github_url: "https://github.com/yelucie/fall2023-portfolio",
    category: ["react"],
    description:
      "A dynamic web application built with React, Next.js, Tailwind CSS, and Framer Motion to deliver an interactive and visually appealing user experience.",
    key_techs: ["React", "NextJS", "TailwindCSS", "Framer Motion"],
  },
  {
    id: 7,
    name: "Web Application Aberhonddu",
    image_path: "https://drive.google.com/uc?export=view&id=1nYy6grZcLXXL8wLM4e4gFkXqMLIUxeTr",
    deployed_url: "google.com",
    github_url: "google.com",
    category: ["java"],
    description:
      "A collaborative Java web application developed using technologies such as Java, Maven, MySQL Database, Selenium, Scrum, and Spring Boot. The project was executed in a team environment, completing the development cycle within three sprints.",
    key_techs: ["Java", "Maven", "Oracle Database", "Selenium", "Scrum", "Spring Boot"],
  },
  {
    id: 8,
    name: "Be An Artist",
    image_path: "https://drive.google.com/uc?export=view&id=1nYy6grZcLXXL8wLM4e4gFkXqMLIUxeTr",
    deployed_url: "google.com",
    github_url: "google.com",
    category: ["java"],
    description:
      "A Java application inspired by Microsoft Paint, featuring robust functionalities implemented in Java with support from JUnit for testing and Graphic 2D Swing for a rich graphical user interface.",
    key_techs: ["Java", "Maven", "JUnit", "Graphic2D"],
  },
];