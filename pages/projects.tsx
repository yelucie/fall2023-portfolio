import { motion } from 'framer-motion';
import Head from 'next/head';
import { NextPage } from 'next';
import React, { useContext, useEffect, useState } from 'react';

import { fadeInUp, routeAnimation, stagger } from '@/components/lib/animations';
import ProjectCard from '@/components/Projects/ProjectCard';
import ProjectsNavbar from '@/components/Projects/ProjectsNavbar';
import { Category } from '@/components/lib/definitions';
import { LanguageContext } from '@/components/lib/contexts/LanguageContext';
import { projects as projectsFr } from '@/components/data/data.fr';
import { projects as projectsEn } from '@/components/data/data.en';
import ScrollDownArrow from '@/components/ui/ScrollDownArrow';
import IntersectionObserverUtil from '@/components/lib/utils/Observer';
import { useModal } from '@/components/lib/contexts/ModalContext';
import ProjectModal from '@/components/Projects/ProjectModal';

const Projects: NextPage = () => {
  const { language } = useContext(LanguageContext);
  const data = language === 'en' ? projectsEn : projectsFr;
  const title = language === 'en' ? 'My projects' : 'Mes projets';

  const [initialProjects, setInitialProjects] = useState(language === 'en' ? projectsEn : projectsFr);
  const [projects, setProjects] = useState(data);
  const [active, setActive] = useState('all');
  const { showDetail, setShowDetail } = useModal();

  const target = React.useRef<HTMLSpanElement>(null);
  const root = React.useRef<HTMLDivElement>(null);
  const isBottom = IntersectionObserverUtil(target, root);

  useEffect(() => {
    const newProjects = language === 'en' ? projectsEn : projectsFr;
    setInitialProjects(newProjects);
    setProjects(newProjects);
  }, [language]);
  
  const selectedProject = projects.find((project) => project.id === showDetail);

  const handleFilterCategory = (category: Category | 'all') => {
    if (category === 'all') {
      setProjects(data);
      setActive('all');
      return;
    }

    const filteredProjects = data.filter((project) =>
      project.category.includes(category)
    );
    setProjects(filteredProjects);
    setActive(category);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <motion.div
        className={`px-6 pt-1 xl:overflow-y-auto xl:[&::-webkit-scrollbar]:hidden xl:[-ms-overflow-style:none] xl:[scrollbar-width:none] 
          ${showDetail ? 'xl:overflow-y-hidden' : ''}`}
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        ref={root}
      >
        <ProjectsNavbar handlerFilterCategory={handleFilterCategory} activeCategory={active} />
        <ScrollDownArrow isBottom={isBottom} className="z-50 text-gray-500 dark:text-gray-600" style={{ top: '85%' }} />
        
        <motion.div
          className="flex flex-wrap gap-4 mt-3 relative"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {projects.map((project) => (
            <motion.div
              variants={fadeInUp}
              className="grow p-2 rounded-xl bg-gray-200 dark:bg-dark-200"
              key={project.name}
            >
              <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail} />
            </motion.div>
          ))}
        </motion.div>
        <span ref={target}>ㅤ</span>
        {selectedProject !== undefined && (
          <div className='absolute inset-0 z-40 flex items-center justify-center'>
            <ProjectModal project={selectedProject} setShowDetail={setShowDetail} />
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Projects;