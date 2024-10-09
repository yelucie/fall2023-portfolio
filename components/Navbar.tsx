import Link from "next/link";
import { useRouter } from "next/router";
import React, { FunctionComponent, useEffect, useState } from "react";

const NavItem: FunctionComponent<{
  activeItem: string
  setActiveItem: Function
  name: string
  route: string
}> = ({ activeItem, setActiveItem, name, route }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <span className="mx-2 cursor-pointer hover:text-purple-500"
        onClick={() => setActiveItem(name)} >
        {name}
      </span>
    </Link>
  ) : null
};

const Navbar = () => {
  const [ activeItem, setActiveItem ] = useState<string>("");
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    //if (pathname === "/education") setActiveItem("Education");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/resume") setActiveItem("Resume");
  }, [pathname]);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="font-bold text-xl text-purple-600 border-purple-600 border-b-4">
        {activeItem}
      </span>
      <div className="flex space-x-5 text-red text-lg">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />
        {/*<NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Education"
          route="/education"
        />*/}
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
};

export default Navbar;
