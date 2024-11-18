import React, { FunctionComponent } from "react";
import NavItem from "./NavItem";

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  activeCategory: string;
}> = ({ handlerFilterCategory, activeCategory }) => {
  return (
    <div className="flex space-x-3 list-none overflow-x-auto">
      <NavItem value="all" handlerFilterCategory={handlerFilterCategory} isSelected={activeCategory === "all" } />
      <NavItem value="Java" handlerFilterCategory={handlerFilterCategory} isSelected={activeCategory === "Java"} />
      <NavItem value="JavaScript" handlerFilterCategory={handlerFilterCategory} isSelected={activeCategory === "JavaScript"} />
      <NavItem value="Python" handlerFilterCategory={handlerFilterCategory} isSelected={activeCategory === "Python"} />
      <NavItem value="Spring Boot" handlerFilterCategory={handlerFilterCategory} isSelected={activeCategory === "flask"} />
      <NavItem value="Next.JS" handlerFilterCategory={handlerFilterCategory} isSelected={activeCategory === "Spring Boot"} />
      <NavItem value="Flask" handlerFilterCategory={handlerFilterCategory} isSelected={activeCategory === "Flask"} />
      <NavItem value="API" handlerFilterCategory={handlerFilterCategory} isSelected={activeCategory === "API"} />
      <NavItem value="Figma" handlerFilterCategory={handlerFilterCategory} isSelected={activeCategory === "Figma"} />
    </div>
  );
};

export default ProjectsNavbar;
