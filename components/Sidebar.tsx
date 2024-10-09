import React, { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaDownload } from "react-icons/fa";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "./ui/Button";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        src="/images/profile.jpg"
        alt="avatar"
        className="mx-auto rounded-full ring-2 p-1 my-4 ring-gray-400 dark:ring-gray-200"
        height="128"
        width="128"
      />

      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-purple-500">Lucie</span> Ye
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Full-Stack Developer
      </p>

      {/* Resume */}
      <a
        href="/assets/LucieYe_Resume.pdf"
        download="Lucie Ye Resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200"
      >
        <FaDownload className="w-5 h-5 pr-2" />
        Download Resume
      </a>

      {/* Socials */}
      <div className="flex w-9/12 mx-auto my-5 text-purple-500 justify-evenly md:w-full">
        <a href="https://www.linkedin.com/in/LucieYe">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.github.com/yelucie">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" />
          <span>Chicago, Illinois</span>
        </div>
        <p className="my-2">lye10@hawk.iit.edu</p>
        <p>312-483-9626</p>
      </div>

      {/* Email Button */}
      <Button className="w-8/12" onClick={() => window.open("mailto:lye10@hawk.iit.edu")}>
        Email me
      </Button>

      {/* Dark mode Button */}
      {mounted && (
        <Button className="w-8/12 my-4" onClick={changeTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </Button>
      )}
    </div>
  );
};

export default Sidebar;
