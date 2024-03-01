import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaDownload } from "react-icons/fa";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        src="/images/profile.jpg"
        alt="avatar"
        className="mx-auto border rounded-full"
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
        <p className="my-2">+1 312-483-9626</p>
      </div>

      {/* Email Button */}
      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer dark:text-dark-200 bg-gradient-to-r from-purple-600 to-teal-400 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:lye10@hawk.iit.edu")}
      >
        Email me
      </button>

      {/* Dark mode Button */}
      <button
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer dark:text-dark-200 bg-gradient-to-r from-purple-600 to-teal-400 hover:scale-105 focus:outline-none"
        onClick={changeTheme}
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default Sidebar;