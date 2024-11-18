import { ReactNode } from "react";
import { IconType } from "react-icons";

{ /* Common */ }
export interface User {
    firstname: string,
    lastname: string,
    profession: string,
    hobby: string,
    linkedin: string,
    github: string,
    location: string,
    email: string,
    languages: string,
    emailLabel: string,
    downloadLabel: string,
}
export interface Nav {
    label: string,
}

{/* About */ }
export interface About {
    about: string
}
export interface Service {
    title: string,
    about: string,
    Icon: IconType
}

{/* Experience */ }
export interface Experience {
    title: string,
    date: string,
    company: string,
    location: string,
    description: string,
    url: string
}

{/* Education */ }
export interface School {
    degree: string;
    major: string;
    school: string;
    graduation: string;
    location: string;
    coursework: string;
    url: string;
}

{/* Projects */ }
export interface Skill {
    name: string,
    level: string
}
export interface Project {
    id: number,
    name: string,
    description: string,
    image_path: string,
    deployed_url: string
    github_url: string,
    category: Category[],
}
export type Category = "Java" | "JavaScript" | "TypeScript" | "Python" | 
    "HTML5" | "CSS3" | "React" | "Next.JS" | "TailwindCSS" |
    "Flask" | "Express" | 
    "Maven" | "Selenium" | "Spring Boot" |
    "SQL" | "noSQL" | "PrismaORM" | "REST API" | "API" | "GraphQL" | 
    "Figma";