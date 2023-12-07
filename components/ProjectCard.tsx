import { Project } from "@/type";
import React, { FunctionComponent, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";

const ProjectCard: FunctionComponent<{ project: Project }> = ({
  project: {
    name,
    image_path,
    category,
    key_techs,
    deployed_url,
    github_url,
    description,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
        width="300"
        height="150"
        layout="responsive"
      />
      <p className="my-2 text-center">{name}</p>
      {showDetail && (
        <div
          className="absolute grid md:grid-cols-2 top-0 left-0 z-10 p-2 h-auto w-full gap-x-12 
            text-black bg-gray-100 dark:text-white dark:bg-dark-100"
        >
          <div>
            <Image
              src={image_path}
              alt={name}
              width="300"
              height="150"
              layout="responsive"
            />
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
                <AiFillGithub />
                <span>Project</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>
            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-2 my-1 bg-gray-200 dark:bg-dark-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowDetail(false)}
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