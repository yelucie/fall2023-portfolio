import { FaPalette, FaCode, FaTools, FaDatabase, FaCloud, FaVoteYea, FaStream, FaCoffee } from "react-icons/fa";
import { User, Nav, About, Service, Experience, School, Skill, Project } from "@/components/lib/definitions";

{/* Common */ }
export const profile: User = {
  firstname: "Lucie",
  lastname: "Ye",
  profession: "Fullstack Developer",
  hobby: "Musician",
  linkedin: "https://www.linkedin.com/in/LucieYe",
  github: "https://www.github.com/yelucie",
  location: "Switzerland",
  email: "lye10@hawk.iit.edu",
  languages: "EN・FR・CN・DE",
  emailLabel: "Email me",
  downloadLabel: "Download Resume",
};
export const nav: Nav[] = [
  {
    label: "About",
  },
  {
    label: "Experience",
  },
  {
    label: "Education",
  },
  {
    label: "Projects",
  },
  {
    label: "Other parts on construction",
  },
];

{/* About */ }
export const about: About = {
  about: `
    Hello World!
    <br /><br />
    I&apos;m Lucie, a Full-Stack Developer with dual master&apos;s degrees in <strong>Software Engineering</strong> and <strong>IT Management</strong>.
    I specialize in building high-quality web applications, from elegant React interfaces to robust Spring Boot systems.
    My experience in agile teams has also enhanced my ability to work effectively with others to make projects that consistently deliver results ahead of schedule.
    <br /><br />
    With experience from multiple technological environments in <strong>Angers (France)</strong>, <strong>Cologne (Germany)</strong>, and <strong>Chicago (IL)</strong>, I have gained a deep understanding of the tie between technology and innovation on a global scale.
    This exposure has allowed me to appreciate the diverse perspectives and unique approaches that drive technological advancements across different cultures.
    <br /><br />
    <i>Let&apos;s connect and explore how we can collaborate to bring innovative ideas to life!</i>
  `,
};
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
      "I create websites using <b>JavaScript</b>, <b>TypeScript</b>, <b>PHP</b>, <b>HTML5</b>, <b>pug.js</b>, <b>CSS3</b>, and <b>TailwindCSS</b>.",
  },
  {
    Icon: FaTools,
    title: "Backend Frameworks",
    about:
      "I make solid foundation keeping application running smoothly using <b>Spring Boot</b>, <b>Flask</b>, and <b>Express.js</b>.",
  },
  {
    Icon: FaDatabase,
    title: "Database Management",
    about:
      "I design databases using <b>SQL</b> and <b>NoSQL</b>, and create data models with <b>UML</b>, <b>MERISE</b>, and <b>JSON</b>.",
  },
  {
    Icon: FaCloud,
    title: "API Development",
    about:
      "I develop APIs with <b>REST</b> and <b>GraphQL</b>, and check with <b>Postman</b> to ensure that everything works.",
  },
  {
    Icon: FaVoteYea,
    title: "Testing",
    about:
      "I focus on <b>unit</b> and <b>integration tests</b>, and <b>validation test cases</b>. I test with <b>Selenium</b>, <b>JUnit</b>, and <b>TestNG</b>.",
  },
  {
    Icon: FaStream,
    title: "DevOps",
    about:
      "I streamline work using <b>Git</b>, <b>GitHub</b>, and <b>Bitbucket</b>. I build pipelines with <b>Jenkins</b> and <b>SonarQube</b>. ",
  },
  {
    Icon: FaCoffee,
    title: "Miscellaneous",
    about:
      "I like to use <b>VS Code</b>, <b>Eclipse IDE</b>, and <b>IntelliJ</b>, and have worked in agile development using <b>Scrum</b>.",
  },
];

{/* Education */ }
export const schools: School[] = [
  {
    degree: "Master of Information Technology and Management",
    major: "Web Design and Application Development",
    school: "Illinois Tech",
    graduation: "May 2024",
    location: "Chicago, IL",
    coursework:
      "Full-Stack Development, Front-end Development, Back-end Development, Web Systems Architecture, Human-Computer Interaction",
    url: "https://www.iit.edu/",
  },
  {
    degree: "Master of Computer Science",
    major: "Software Engineering and Database management",
    school: "ESEO Graduate School",
    graduation: "June 2023",
    location: "Angers, France",
    coursework:
      "Object-Oriented Software Development, Java Development, Software Testing, Relational Database, Spring Boot RESTful API, Agile methodologies, Creativity and Entrepreneurship",
    url: "https://www.eseo.fr/",
  },
  {
    degree: "High School Diploma in Science",
    major: "Natural and Applied Sciences",
    school: "Sacré-Cœur High School",
    graduation: "June 2019",
    location: "Angers, France",
    coursework:
      "Mathematics, Physics, Chemistry, Biology, Computer Science",
    url: "https://gscls.com/",
  },
];

{/* Experience */ }
export const experiences: Experience[] = [
  {
    title: "Java Developer",
    company: "adesso insurance solutions GmbH",
    location: "Cologne, Germany",
    date: "August 2022 - November 2022",
    description: `
      I&apos;ve reduced the cost per product release by implementing automated <strong>Java</strong> integration tests, 
      collaborating closely with a team of software engineers. 
      Additionally, I&apos;ve conducted testing across six modules deployed on <strong>three Docker images</strong>, 
      utilizing <strong>JBoss</strong> and <strong>SQL databases</strong>, all accomplished within a tight deadline of three weeks. 
      Moreover, in response to a customer request, I efficiently <strong>updated a Docker image&apos;s</strong> JBoss application server and PostgreSQL database, 
      completing the task within a mere eight-hour timeframe. 
      These achievements highlight my ability to deliver efficient and effective solutions while maintaining a high standard of quality and timeliness.
    `,
    url: "https://www.adesso-insure.de/en/migsuite",
  }
];

{/* Projects */ }
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
    name: "Book Management System",
    description:
      "A CRUD application to manage a book inventory. It is created using Express.js & TailwindCSS for the client side, CockroachDB & Prisma ORM linked to the GraphQL API for the server side.",
    image_path: "/images/book-management.png",
    deployed_url: "https://lucie-ye-prisma-website.onrender.com/",
    github_url: "https://github.com/yelucie/prisma-api/tree/main",
    category: ["JavaScript", "Express", "TailwindCSS", "SQL", "PrismaORM", "REST API", "GraphQL"],
  },
  {
    id: 2,
    name: "Porfolio V2",
    description:
      "A dynamic website built with React, NextJS, TailwindCSS, and Framer Motion to deliver an interactive and visually appealing user experience.",
    image_path: "/images/portfolio-2.png",
    deployed_url: "https://yelucie.vercel.app/",
    github_url: "https://github.com/yelucie/fall2023-portfolio",
    category: ["JavaScript", "TypeScript", "React", "Next.JS", "TailwindCSS", "Figma", "TailwindCSS"],
  },
  {
    id: 3,
    name: "AI PDF Summarizer",
    description:
      "A PDF summarizer implemented in Flask, using the OpenAI API powered by ChatGPT. The code adheres to the PEP-8 guidelines, ensuring maintainability and consistency in coding practices.",
    image_path: "/images/pdf-summarizer.png",
    deployed_url: "",
    github_url: "",
    category: ["Flask", "Python", "HTML5", "CSS3", "API"],
  },
  {
    id: 4,
    name: "API Retriever",
    description:
      "A web application that utilizes JSONPlaceholder, Next.js, and TailwindCSS, incorporating API calls to enhance dynamic content and functionality.",
    image_path: "/images/api-retriever.png",
    deployed_url: "https://orange-flower-02dd2d20f.4.azurestaticapps.net/",
    github_url: "https://github.com/yelucie/ITMD543-NextJS-Tailwind-JSON",
    category: ["JavaScript", "TypeScript", "React", "Next.JS", "TailwindCSS", "API"],
  },
  {
    id: 5,
    name: "Sunset-Sunrise Time",
    description:
      "A simple website that displays sunrise and sunset data from an external API, implemented with JavaScript and asynchronous programming for efficient data retrieval.",
    image_path: "/images/sunset-sunrise.png",
    deployed_url: "https://yelucie.github.io/ITMD541-LAB4/",
    github_url: "https://github.com/yelucie/ITMD541-LAB4",
    category: ["JavaScript", "HTML5", "CSS3", "API"],
  },
  {
    id: 6,
    name: "Tip Calculator",
    description:
      "A mini website that calculates the final bill by dynamically processing user input for the tip amount using JavaScript.",
    image_path: "/images/tip-calculator.png",
    deployed_url: "https://yelucie.github.io/ITMD541-LAB3/",
    github_url: "https://github.com/yelucie/ITMD541-LAB3",
    category: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    id: 7,
    name: "Portfolio V1",
    description:
      "A static website made with HTML and CSS, with the design created on Figma for a visually appealing user interface.",
    image_path: "/images/portfolio-1.png",
    deployed_url: "https://yelucie.github.io/ITMD541/",
    github_url: "https://yelucie.github.io/ITMD541/",
    category: ["HTML5", "CSS3", "Figma"],
  },
  {
    id: 8,
    name: "Web Application Aberhonddu",
    description:
      "A Java web application developed with as Java, Maven, MySQL Database, Selenium, and Spring Boot. The project was implemented in an agile environment, completing the development cycles within 3 sprints.",
    image_path: "/images/aberhonddu.png",
    deployed_url: "",
    github_url: "",
    category: ["Java", "Spring Boot", "Maven", "SQL", "Selenium"],
  },
  {
    id: 9,
    name: "Be An Artist",
    description:
      "A Java application inspired by Microsoft Paint, tested through JUnit and using Graphic 2D Swing for a rich graphical user interface.",
    image_path: "/images/baa.png",
    deployed_url: "",
    github_url: "",
    category: ["Java", "Maven"],
  },
  {
    id: 10,
    name: "AI Music App Prototype",
    description:
      "A Figma prototype for an AI music app. It has been designed on Figma after going realizing a contextual inquiry and 2 heuristic evaluations.",
    image_path: "/images/music.png",
    deployed_url: "https://www.figma.com/design/UkMMPpqXDRg3k8h5hZ5TP0/HCI",
    github_url: "",
    category: ["Figma"],
  },
];