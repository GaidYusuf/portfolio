// components/ProjectCard.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  image: string;
  title: string;
  text: string[];
  onClick: () => void;
}

const ProjectCard = ({ image, title, text, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className='w-[450px] h-[280px] rounded-md cursor-pointer relative hover:scale-105 transition-transform duration-300'
    >
      <motion.div
        className='w-full h-full bg-cover bg-center rounded-lg'
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className='absolute inset-0 w-full h-full bg-black opacity-50 rounded-lg'></div>
        <div className='absolute inset-0 flex items-center justify-center text-white text-xl text-center font-bold'>
          {title}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
