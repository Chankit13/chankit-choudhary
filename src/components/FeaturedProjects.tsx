'use client'

import React from 'react';
import { GithubIcon, ExternalLink } from 'lucide-react';
import { 
  SiNextdotjs, SiOpenai, SiReact, SiTypescript, 
  SiTailwindcss, SiPrisma, SiMongodb, SiNodedotjs,
  SiLaravel, SiPhp, SiMysql, SiDocker
} from 'react-icons/si';

const techIcons: { [key: string]: JSX.Element } = {
  'Next.js': <SiNextdotjs className="w-4 h-4" />,
  'OpenAI': <SiOpenai className="w-4 h-4" />,
  'React': <SiReact className="w-4 h-4" />,
  'TypeScript': <SiTypescript className="w-4 h-4" />,
  'TailwindCSS': <SiTailwindcss className="w-4 h-4" />,
  'Prisma': <SiPrisma className="w-4 h-4" />,
  'MongoDB': <SiMongodb className="w-4 h-4" />,
  'Node.js': <SiNodedotjs className="w-4 h-4" />,
  'Laravel': <SiLaravel className="w-4 h-4" />,
  'PHP': <SiPhp className="w-4 h-4" />,
  'MySQL': <SiMysql className="w-4 h-4" />,
  'Docker': <SiDocker className="w-4 h-4" />
};

const projects = [
  {
    title: 'Chatbot-for-food-delivery-app',
    description: 'A Food delivery Website integrated with an AI chatbot that can answer to question about food order.',
    techStack: ['Dialogflow', 'MySQL', 'Python', 'FastAPI','HTML','CSS'],
    github: 'https://github.com/Chankit13/Chatbot-for-food-delivery-app',
    // demo: 'https://medevs.xyz',
    stars: 5,
    forks: 1
  },
  {
    title: 'Potato-Disease-Classification',
    description: ' The system uses Convolutional Neural Networks (CNNs) to classify distinct potato leaf diseases.',
    techStack: ['TensorFlow & Keras', 'TensorFlow Serving', 'FastAPI', 'React.js','Google Cloud'],
    github: 'https://github.com/Chankit13/Potato-Disease-Classification',
    // demo: 'https://supp-directory.vercel.app',
    stars: 3,
    forks: 0
  },
  {
    title: 'Linkdin-Post-Generator',
    description: 'This enables users to generate high-quality LinkedIn posts effortlessly.',
    techStack: ['Llama 3.2', 'LangChain', 'Streamlit', 'Python'],
    github: 'https://github.com/Chankit13/LinkdeIn-Post-Generator',
    // demo: 'https://i-managments.medevs.com',
    stars: 3,
    forks: 0
  },
  {
    title: 'Churn-Prediction',
    description: 'A Machine Learning Model that analyze customer behavior',
    techStack: ['ANN', 'Kaggle', 'Python'],
    github: 'https://github.com/Chankit13/Churn-Prediction',
    // demo: 'https://careerai.medevs.com',
    stars: 2,
    forks: 0
  }
];

const FeaturedProjects: React.FC = () => {
  return (
    <div className="bg-[#F8FAFC] dark:bg-[#151B28] rounded-lg p-3 h-full transition-colors">
      <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600 mb-4">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 h-[calc(100%-3rem)]">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gradient-to-br dark:from-[#1E1E2E] dark:to-[#2D2D44] rounded-lg p-3 flex flex-col justify-between border border-gray-200 dark:border-gray-800/50 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors"
          >
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-200 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                {project.description}
              </p>
              {project.techStack && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400"
                    >
                      {techIcons[tech]}
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">★</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{project.stars}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">⑂</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{project.forks}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                {/* {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )} */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;