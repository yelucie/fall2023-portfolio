import ProjectCard from '@/components/ProjectCard'
import ProjectsNavbar from '@/components/ProjectsNavbar'
import { projects as projectsData} from '@/data'
import { Category } from '@/type'
import React, { useState } from 'react'

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const handleFilterCategory = (category: Category | "all") => {
    if(category === "all") {
      setProjects(projectsData);
      setActive("category");
      return;
    }

    const filteredProjects = projectsData.filter(project => project.category.includes(category));
    setProjects(filteredProjects);
    setActive(category);
  }

  return (
    <div className='px-5 py-2 overflow-y-scroll' style={{height: "65vh"}}>
        <ProjectsNavbar handlerFilterCategory={ handleFilterCategory } />

        <div className='grid grid-cols-12 gap-4 my-3 relative'>
          { projects.map((project) => (
            <div className='col-span-12 p-2 sm:col-span-6 lg:col-span-4 bg-gray-200 dark:bg-dark-200' key={ project.name }>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
    </div>
  )
}

export default Projects