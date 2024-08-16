// components/ProjectModal.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  text: string[];
  languages: string[];
}

const ProjectModal: React.FC<ModalProps> = ({ isOpen, onClose, image, title, text, languages }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50'>
      <motion.div
        className='relative bg-white rounded-lg shadow-lg p-8 max-w-6xl w-full max-h-[90vh] overflow-auto flex'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <button
          className='absolute top-1 right-2 text-gray-600 text-3xl font-bold'
          onClick={onClose}
        >
          &times;
        </button>
        <div className='flex flex-1 flex-col mr-6'>
          <h1 className='text-2xl font-bold mb-4'>{title}</h1>
          <ul className='list-disc list-inside text-gray-700 text-base space-y-2'>
            {text.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
          <div className='mt-4'>
            <h2 className='text-xl font-semibold mb-2'>Tools Used:</h2>
            <ul className='list-disc list-inside text-gray-700 text-base space-y-1'>
              {languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex-shrink-0 flex items-center justify-center'>
          <div className='relative w-[600px] h-[400px]'>
            <img 
              src={image} 
              alt={title} 
              className='w-full h-full object-contain rounded-md'
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
