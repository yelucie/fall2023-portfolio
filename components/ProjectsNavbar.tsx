import React, { FunctionComponent } from "react";
import NavItem from "./NavItem";

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
}> = ({ handlerFilterCategory }) => {
  return (
    <div className="flex space-x-3 px-3 py-2 list-none overflow-x-auto">
      <NavItem value="all" handlerFilterCategory={handlerFilterCategory} />
      <NavItem value="react" handlerFilterCategory={handlerFilterCategory} />
      <NavItem value="mongo" handlerFilterCategory={handlerFilterCategory} />
      <NavItem value="django" handlerFilterCategory={handlerFilterCategory} />
      <NavItem value="node" handlerFilterCategory={handlerFilterCategory} />
    </div>
  );
};

export default ProjectsNavbar;
