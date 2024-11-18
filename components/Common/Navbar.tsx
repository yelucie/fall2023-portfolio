import Link from "next/link";
import { useRouter } from "next/router";
import React, { FunctionComponent, useContext, useEffect, useState } from "react";

import { LanguageContext } from '@/components/lib/contexts/LanguageContext';

import { nav as navFr } from '@/components/data/data.fr';
import { nav as navEn } from '@/components/data/data.en';

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
  const { language } = useContext(LanguageContext);
  const data = language === 'en' ? navEn : navFr;

  useEffect(() => {
    if (pathname === "/") setActiveItem(data[0].label);
    // if (pathname === "/experience") setActiveItem(data[1].label);
    // if (pathname === "/education") setActiveItem(data[2].label);
    // if (pathname === "/projects") setActiveItem(data[3].label);
  }, [data, pathname]);

  return (
    <div className="flex justify-between px-6 py-3 my-3">
      <span className="font-bold text-xl text-purple-600 border-purple-600 border-b-4">
        {activeItem}
      </span>
      <div className="flex space-x-5 text-red text-lg">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name={data[0].label}
          route="/"
        />
        {/* <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name={data[1].label}
          route="/experience"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name={data[2].label}
          route="/education"
        /> */}
        {/*<NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name={data[3].label}
          route="/projects"
        />*/}
        <span className="mx-2 text-gray-500">{data[4].label}</span>
      </div>
    </div>
  );
};

export default Navbar;
