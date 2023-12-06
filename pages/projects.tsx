import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data'
import React from 'react'

const Projects = () => {
  return (
    <div className='p-4'>
        <nav>Navbar</nav>

        <div className='grid grid-cols-12 gap-4 my-3'>
          { projects.map(project => (
            <div className='col-span-12 p-2 sm:col-span-6 lg:col-span-4' key={ project.name }>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
    </div>
  )
}

export default Projects