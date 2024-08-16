// my-projects/page.tsx
"use client";

import React, { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import { Projects } from '@/constants';

const Page = () => {
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    text: string[];
    src: string;
    languages: string[];
  } | null>(null);

  const handleOpenModal = (project: {
    title: string;
    text: string[];
    src: string;
    languages: string[];
  }) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div
      style={{ backgroundImage: "url(mountains.jpg)" }}
      className='w-screen h-screen flex items-center justify-center bg-center bg-cover'
    >
      <div className='grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]'>
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
            onClick={() => handleOpenModal(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={handleCloseModal}
          image={selectedProject.src}
          title={selectedProject.title}
          text={selectedProject.text}
          languages={selectedProject.languages}
        />
      )}
    </div>
  );
};

export default Page;