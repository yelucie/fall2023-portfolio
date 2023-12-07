import { Project } from "@/type";
import React, { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/animations";

const ProjectCard: FunctionComponent<{
  project: Project;
  showDetail: number | null;
  setShowDetail: (id: number | null) => void;
}> = ({
  project: {
    id,
    name,
    image_path,
    category,
    key_techs,
    deployed_url,
    github_url,
    description,
  },
  showDetail,
  setShowDetail,
}) => {
  return (
    <div>
      <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(id)}
      />
      <p className="my-2 text-center">{name}</p>
      {showDetail === id && (
        <div
          className="absolute grid md:grid-cols-2 top-0 left-0 z-10 p-2 md:p-10 h-auto w-full gap-x-12 
            text-black bg-gray-100 dark:text-white dark:bg-dark-100 rounded-lg"
        >
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div variants={fadeInUp} className="border-4 border-gray-100">
              <img
                src={image_path}
                alt={name}
              />
            </motion.div>
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 txtlg
              bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub />
                <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 txtlg
              bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject />
                <span>Project</span>
              </a>
            </div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
              {description}
            </motion.h3>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-2 my-1 bg-gray-200 dark:bg-dark-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={() => setShowDetail(null)}
            className="absolute top-3 right-3 rounded-full focus:outline-none bg-gray-200 dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;