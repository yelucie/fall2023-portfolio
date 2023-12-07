import { IconType } from "react-icons";

export interface Service {
    title: string,
    about: string,
    Icon: IconType
}

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
    key_techs: string[]
}

export type Category = "java" | "javascript" | "css" | "react" | "flask";