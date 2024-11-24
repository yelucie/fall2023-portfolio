import { FaPalette, FaCode, FaTools, FaDatabase, FaCloud, FaVoteYea, FaStream, FaCoffee } from "react-icons/fa";
import { User, Nav, About, Service, Experience, School, Skill, Project } from "@/components/lib/definitions";

{/* Common */ }
export const profile: User = {
  firstname: "Lucie",
  lastname: "YE",
  profession: "Développeuse Fullstack",
  hobby: "Musicienne",
  linkedin: "https://www.linkedin.com/in/LucieYe",
  github: "https://www.github.com/yelucie",
  location: "Paris, France",
  email: "lucie.ye@reseau.eseo.fr",
  languages: "FR・EN・CN・DE",
  emailLabel: "Me contacter",
  downloadLabel: "Télécharger CV",
};
export const nav: Nav[] = [
  {
    label: "À propos",
  },
  {
    label: "Expérience",
  },
  {
    label: "Éducation",
  },
  {
    label: "Projets",
  },
  {
    label: "Autres parties en construction",
  },
];

{/* About */ }
export const about: About = {
  about: `
    Hello World!
    <br /><br />
    Je suis Lucie, développeuse Full-Stack avec un douple-diplôme en <strong>Ingénierie Logicielle</strong> et <strong>Gestion des Technologies de l'Information</strong>.
    Je me passionne pour la création d'applications web, que ce soit pour des interfaces utilisateurs intuitives sous React ou des systèmes backend robustes avec Spring Boot.
    Je suis particulièrement soucieuse de la qualité et du respect des délais. Mon expérience au sein d'équipes agiles a pu renforcer ma capacité à collaborer efficacement avec les autres pour mener à bien des projets qui délivrent des résultats concrets et durables.
    <br /><br />
    Grâce à des expériences enrichissantes dans différents environnements technologiques, de <strong>Angers (France)</strong>, à <strong>Chicago (IL)</strong> en passant par <strong>Cologne (Allemagne)</strong>, j'ai pu acquérir une vision globale sur l'innovation et la technologie.
    Ces aventures m'ont permis d'observer les perspectives diverses et les approches uniques qui stimulent les avancées technologiques au travers différentes cultures.
    <br /><br />
    <i>Connectons-nous et transformons ensemble des idées en innovations concrètes!</i>
  `,
};
export const services: Service[] = [
  {
    Icon: FaPalette,
    title: "Frameworks Frontend",
    about:
      "Je conçois des applications web maintenables avec des frameworks comme <b>React.js</b>, <b>Next.js</b>, ou <b>AngularJS</b>.",
  },
  {
    Icon: FaCode,
    title: "Développement Web",
    about:
      "Je crée des sites web avec des outils tels que <b>JavaScript</b>, <b>TypeScript</b>, <b>PHP</b>, <b>HTML5</b>, <b>pug.js</b>, <b>CSS3</b>, ou <b>TailwindCSS</b>.",
  },
  {
    Icon: FaTools,
    title: "Frameworks Backend",
    about:
      "Je construis des projets côté serveur qui aident les applications à fonctionner avec <b>Spring Boot</b>, <b>Flask</b>, <b>Node</b>, ou <b>Express.js</b>.",
  },
  {
    Icon: FaDatabase,
    title: "Bases de Données",
    about:
      "J'utilise des bases de données relationnelles <b>SQL</b> ou en <b>NoSQL</b>, et je fais des schémas avec <b>UML</b>, <b>MERISE</b>, ou <b>JSON</b>.",
  },
  {
    Icon: FaCloud,
    title: "Développement d'API",
    about:
      "Je développe des API avec en <b>REST</b> ainsi que <b>GraphQL</b>, et je vérifie avec <b>Postman</b> pour m'assurer que c'est fonctionnel.",
  },
  {
    Icon: FaVoteYea,
    title: "Test",
    about:
      "Je réalise des <b>tests unitaires</b>, <b>d'intégration</b>, et conçois des <b>tests de validation</b>. Je travaille avec <b>Selenium</b>, <b>JUnit</b>, et <b>TestNG</b>.",
  },
  {
    Icon: FaStream,
    title: "DevOps",
    about:
      "J'améliore le workflow avec <b>Git</b>, <b>GitHub</b>, et <b>Bitbucket</b>. Je construis des pipelines en utilisant <b>Jenkins</b> et <b>SonarQube</b>. ",
  },
  {
    Icon: FaCoffee,
    title: "Autres",
    about:
      "J'aime coder avec <b>VS Code</b>, <b>Eclipse IDE</b>, et <b>IntelliJ</b>, et j'ai pu travailler dans des équipes agile <b>Scrum</b>.",
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

{/* Education */ }
export const schools: School[] = [
  {
    degree: "Master of Information Technology and Management",
    major: "Web Design and Application Development",
    school: "Illinois Institute of Technology",
    graduation: "May 2024",
    location: "Chicago, IL",
    coursework:
      "Specialization in Web Design and Application Development. Notable Coursework: Full-Stack Development, Front-end Development, Back-end Development, Web Systems Architecture, Human-Computer Interaction",
    url: "https://www.iit.edu/",
  },
  {
    degree: "Master of Computer Science",
    major: "Software Engineering",
    school: "École Supérieure d'Électronique de l'Ouest",
    graduation: "June 2023",
    location: "Angers, France",
    coursework:
      "Specialization in Software Engineering and Database management. Notable Coursework: Object-Oriented Software Development, Java Development, Software Testing, Relational Database, Spring Boot RESTful API, Agile methodologies, Creativity and Entrepreneurship",
    url: "https://www.eseo.fr/",
  },
  {
    degree: "High School Diploma in Science",
    major: "Natural and Applied Sciences",
    school: "Lycée Sacré-Cœur",
    graduation: "June 2019",
    location: "Angers, France",
    coursework:
      "Specialization in Computer Science and Software Development. Notable Coursework: Data Structures, Algorithms, Computer Architecture, Operating Systems, Software Engineering",
    url: "https://gscls.com/",
  },
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
    name: "Système de Gestion de Livres",
    description:
      "A CRUD application to manage a book inventory. It is created using Express.js & TailwindCSS for the client side, CockroachDB & Prisma ORM linked to the GraphQL API for the server side.",
    image_path: "/images/book-management.png",
    deployed_url: "https://lucie-ye-prisma-website.onrender.com/",
    github_url: "https://github.com/yelucie/prisma-api/tree/main",
    category: ["JavaScript", "Express", "TailwindCSS", "SQL", "PrismaORM", "REST API", "GraphQL"],
  },
  {
    id: 2,
    name: "Site Personnel V2",
    description:
      "A dynamic website built with React, NextJS, TailwindCSS, and Framer Motion to deliver an interactive and visually appealing user experience.",
    image_path: "/images/portfolio-2.png",
    deployed_url: "https://yelucie.vercel.app/",
    github_url: "https://github.com/yelucie/fall2023-portfolio",
    category: ["JavaScript", "TypeScript", "React", "Next.JS", "TailwindCSS", "Figma", "TailwindCSS"],
  },
  {
    id: 3,
    name: "Générateur de résumé avec IA",
    description:
      "A PDF summarizer implemented in Flask, using the OpenAI API powered by ChatGPT. The code adheres to the PEP-8 guidelines, ensuring maintainability and consistency in coding practices.",
    image_path: "/images/pdf-summarizer.png",
    deployed_url: "",
    github_url: "",
    category: ["Flask", "Python", "HTML5", "CSS3", "API"],
  },
  {
    id: 4,
    name: "Simple Application avec API",
    description:
      "A web application that utilizes JSONPlaceholder, Next.js, and TailwindCSS, incorporating API calls to enhance dynamic content and functionality.",
    image_path: "/images/api-retriever.png",
    deployed_url: "https://orange-flower-02dd2d20f.4.azurestaticapps.net/",
    github_url: "https://github.com/yelucie/ITMD543-NextJS-Tailwind-JSON",
    category: ["JavaScript", "TypeScript", "React", "Next.JS", "TailwindCSS", "API"],
  },
  {
    id: 5,
    name: "Lever et Coucher du Soleil",
    description:
      "A simple website that displays sunrise and sunset data from an external API, implemented with JavaScript and asynchronous programming for efficient data retrieval.",
    image_path: "/images/sunset-sunrise.png",
    deployed_url: "https://yelucie.github.io/ITMD541-LAB4/",
    github_url: "https://github.com/yelucie/ITMD541-LAB4",
    category: ["JavaScript", "HTML5", "CSS3", "API"],
  },
  {
    id: 6,
    name: "Calculateur de Pourboire",
    description:
      "A mini website that calculates the final bill by dynamically processing user input for the tip amount using JavaScript.",
    image_path: "/images/tip-calculator.png",
    deployed_url: "https://yelucie.github.io/ITMD541-LAB3/",
    github_url: "https://github.com/yelucie/ITMD541-LAB3",
    category: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    id: 7,
    name: "Site Personnel V1",
    description:
      "A static website made with HTML and CSS, with the design created on Figma for a visually appealing user interface.",
    image_path: "/images/portfolio-1.png",
    deployed_url: "https://yelucie.github.io/ITMD541/",
    github_url: "https://yelucie.github.io/ITMD541/",
    category: ["HTML5", "CSS3", "Figma"],
  },
  {
    id: 8,
    name: "Application Web Aberhonddu",
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
    name: "Prototype d'Application Musicale",
    description:
      "A Figma prototype for an AI music app. It has been designed on Figma after going realizing a contextual inquiry and 2 heuristic evaluations.",
    image_path: "/images/music.png",
    deployed_url: "https://www.figma.com/design/UkMMPpqXDRg3k8h5hZ5TP0/HCI",
    github_url: "",
    category: ["Figma"],
  },
];