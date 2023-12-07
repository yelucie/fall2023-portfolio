import { fadeInUp, routeAnimation, stagger } from "@/animations";
import ProjectCard from "@/components/ProjectCard";
import ProjectsNavbar from "@/components/ProjectsNavbar";
import { projects as projectsData } from "@/data";
import { Category } from "@/type";
import { motion } from "framer-motion";
import Head from "next/head";
import React, { useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const [showDetail, setShowDetail] = useState<number | null>(null);

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive("category");
      return;
    }

    const filteredProjects = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(filteredProjects);
    setActive(category);
  };

  return (
    <>
      <Head>
        <title>Lucie Ye&apos;s portfolio</title>
      </Head>
      <motion.div
        className="px-5 py-2 overflow-y-scroll"
        style={{ height: "65vh" }}
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <ProjectsNavbar handlerFilterCategory={handleFilterCategory} />

        <motion.div
          className="grid grid-cols-12 gap-4 my-3 relative"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {projects.map((project) => (
            <motion.div
              variants={fadeInUp}
              className="col-span-12 p-2 sm:col-span-6 lg:col-span-4 bg-gray-200 dark:bg-dark-200"
              key={project.name}
            >
              <ProjectCard
                project={project}
                showDetail={showDetail}
                setShowDetail={setShowDetail}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Projects;