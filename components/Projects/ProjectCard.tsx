import { Project } from '@/components/lib/definitions';
import React, { FunctionComponent } from 'react';
import Image from 'next/image';

const ProjectCard: FunctionComponent<{
  project: Project;
  showDetail: number | null;
  setShowDetail: (id: number | null) => void;
}> = ({ project, setShowDetail }) => {
  return (
    <div>
      <Image
        src={project.image_path}
        alt={project.name}
        width={300}
        height={150}
        className="cursor-pointer rounded-lg"
        onClick={() => setShowDetail(project.id)}
      />
      <p className="mt-1 text-center">{project.name}</p>
    </div>
  );
};

export default ProjectCard;
