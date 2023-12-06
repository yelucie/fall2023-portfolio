import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data'
import React from 'react'

const Projects = () => {
  return (
    <div className='px-5 py-2 overflow-y-scroll' style={{height: "65vh"}}>
        <nav>Navbar</nav>

        <div className='grid grid-cols-12 gap-4 my-3 relative'>
          { projects.map(project => (
            <div className='col-span-12 p-2 sm:col-span-6 lg:col-span-4 bg-gray-200 dark:bg-dark-200' key={ project.name }>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
    </div>
  )
}

export default Projects