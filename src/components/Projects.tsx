'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'SmartMail AI',
    description: 'AI-powered Gmail assistant that summarizes and classifies emails using Gemini API.',
    tech: 'Python, Gmail API, Gemini AI, Streamlit, MYSQL',
    github: 'https://github.com/Jayasrip08/smartmail-ai',
    live: '',
  },
  {
    title: 'Hospital Booking System',
    description: 'Full-stack system for patients to book doctor appointments across multiple hospitals.',
    tech: 'React, .NET Core, SQLite, Entity Framework',
    github: 'https://github.com/Jayasrip08/kosofttask2-Dotnet1',
    live: '',
  },
  {
    title: 'AI Tool Recommender Chatbot',
    description: 'Chatbot that recommends the best AI tools based on your prompt using NLP.',
    tech: 'Python, Streamlit, NLP,SQLite',
    github: 'https://github.com/Jayasrip08/Ai-Tool-Recommender',
    live: '',
  },
  {
    title: '50+ Python Mini Tools in 1 App',
    description: 'Collection of Python mini apps and utilities — fast and useful.',
    tech: 'Python, React, Django Framework, PostgreSQL',
    github: 'https://github.com/Jayasrip08/50-mini-tools-1-app',
    live: '',
  },
  {
  title: 'Student & Course tracker- MERN Stack',
  description: 'Full-stack application built with MongoDB, Express, React, and Node.js.',
  tech: 'MongoDB, Express, React, Node.js',
  github: 'https://github.com/Jayasrip08/Mernstack-project',
  live: '',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-950 text-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-purple-400 text-center mb-4">
          🌐 Projects
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Real-world solutions I’ve designed and developed
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-900 border border-purple-600 rounded-2xl p-6 shadow-md hover:shadow-purple-700 flex flex-col justify-between transition-all"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-3 text-sm">{project.description}</p>
                <p className="text-sm text-purple-300 italic">{project.tech}</p>
              </div>

              <div className="flex gap-3 mt-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-purple-600 text-white rounded-lg transition text-sm"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition text-sm"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
