import { Project } from '@/components/lib/definitions';
import React, { FunctionComponent, useState } from 'react';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/components/lib/animations';
import { ButtonGray } from '../ui/ButtonGray';

const ProjectModal: FunctionComponent<{
  project: Project;
  setShowDetail: (id: number | null) => void;
}> = ({ project, setShowDetail }) => {
  return (
    <div className="relative grid md:grid-cols-2 left-0 top-1/4 z-50 p-2 md:p-10 h-auto w-5/6 gap-x-12 text-black bg-gray-100 dark:text-white dark:bg-dark-100 rounded-lg">
      <motion.div variants={stagger} initial="initial" animate="animate">
        <motion.div variants={fadeInUp} className="border-4 border-gray-100">
          <Image
            className='rounded-lg'
            src={project.image_path}
            width={300}
            height={150}
            alt={project.name}
          />
        </motion.div>
        <div className="flex justify-center my-4 space-x-3">
          {project.github_url !== '' && (
            <a
              href={project.github_url}
              className="flex items-center px-4 py-2 space-x-3 txtlg
              bg-gray-200 dark:bg-dark-200"
            >
              <AiFillGithub />
              <span>Github</span>
            </a>
          )}
          {project.deployed_url !== '' && (
            <a
              href={project.deployed_url}
              className="flex items-center px-4 py-2 space-x-3 txtlg
              bg-gray-200 dark:bg-dark-200"
            >
              <AiFillProject />
              <span>Project</span>
            </a>
          )}
        </div>
      </motion.div>

      <motion.div variants={stagger} initial="initial" animate="animate">
        <motion.h2
          variants={fadeInUp}
          className="mb-3 text-xl font-medium md:text-2xl"
        >
          {project.name}
        </motion.h2>
        <motion.h3 variants={fadeInUp} className="mb-3">
          {project.description}
        </motion.h3>
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
        >
          {project.category.map((tech) => (
            <span
              key={tech}
              className="px-2 py-2 my-1 bg-gray-200 dark:bg-dark-200"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <ButtonGray onClick={() => setShowDetail(null)} className="absolute top-5 right-5 p-1 rounded-full focus:outline-none">
        <MdClose size={30} />
      </ButtonGray>
    </div>
  );
};

export default ProjectModal;
