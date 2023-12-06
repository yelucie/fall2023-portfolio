import { Project } from '@/type';
import React, { FunctionComponent } from 'react'
import { AiFillGithub } from 'react-icons/ai';

const ProjectCard:FunctionComponent<{ project: Project }> = ({
    project: { name, image_path, category, key_tech, deployed_url, github_url, description }
}) => {
  return (
    <div>
        <img src={ image_path } alt={ name } className='cursor-pointer' />
        <p className='my-2 text-center'>{ name }</p>

        <div className='grid md:grid-cols-2'>
            <div>
                <img src={ image_path } alt={ name } />
                <div>
                    <a href={github_url}>
                        <AiFillGithub /><span>Github</span>
                    </a>
                    <a href={deployed_url}>
                        <AiFillGithub /><span>Project</span>
                    </a>
                </div>
            </div>
        </div>

        <div>
            <h2>{ name }</h2>
            <h3>{ description }</h3>
            <div>
                {
                    key_tech.map((tech) => (
                        <span key={tech}>{ tech }</span>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default ProjectCard