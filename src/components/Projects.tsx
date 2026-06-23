'use client';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  gradient: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: 'SmartMail AI',
    description:
      'AI-powered Gmail assistant that summarizes and classifies emails using Gemini API. Reduces inbox overload through intelligent automation.',
    tech: ['Python', 'Gmail API', 'Gemini AI', 'Streamlit', 'MySQL'],
    github: 'https://github.com/Jayasrip08/smartmail-ai',
    gradient: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
    featured: true,
  },
  {
    title: 'Hospital Booking System',
    description:
      'Full-stack system for patients to book doctor appointments across multiple hospitals with real-time availability.',
    tech: ['React', '.NET Core', 'SQLite', 'Entity Framework'],
    github: 'https://github.com/Jayasrip08/kosofttask2-Dotnet1',
    gradient: 'linear-gradient(135deg, #059669, #0891b2)',
    featured: true,
  },
  {
    title: 'AI Tool Recommender Chatbot',
    description:
      'Chatbot that recommends the best AI tools based on your prompt using NLP. Smart, fast and context-aware suggestions.',
    tech: ['Python', 'Streamlit', 'NLP', 'SQLite'],
    github: 'https://github.com/Jayasrip08/Ai-Tool-Recommender',
    gradient: 'linear-gradient(135deg, #7c3aed, #ec4899)',
  },
  {
    title: '50+ Python Mini Tools',
    description:
      'Collection of 50+ Python mini apps and utilities bundled into one full-stack web application.',
    tech: ['Python', 'React', 'Django', 'PostgreSQL'],
    github: 'https://github.com/Jayasrip08/50-mini-tools-1-app',
    gradient: 'linear-gradient(135deg, #d97706, #dc2626)',
  },
  {
    title: 'Student & Course Tracker',
    description:
      'Full-stack MERN application for managing students, courses, and enrollments with an intuitive dashboard.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/Jayasrip08/Mernstack-project',
    gradient: 'linear-gradient(135deg, #0284c7, #7c3aed)',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: '6rem 1.5rem', position: 'relative', overflow: 'hidden' }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: 0, left: '50%',
          width: '600px', height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.4), transparent)',
          transform: 'translateX(-50%)',
        }}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span className="section-tag">Portfolio</span>
          <h2 className="section-heading">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: '#64748b', marginTop: '0.75rem', fontSize: '0.95rem' }}>
            Real-world solutions designed and developed from idea to deployment
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              whileHover={{ y: -6 }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '1.25rem',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'default',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(124,58,237,0.4)';
                el.style.boxShadow = '0 20px 60px rgba(124,58,237,0.15)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(255,255,255,0.07)';
                el.style.boxShadow = 'none';
              }}
            >
              {/* Gradient header bar */}
              <div
                style={{
                  height: '4px',
                  background: project.gradient,
                }}
              />

              {/* Card content */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Title + featured badge */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <h3
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: '#f1f5f9',
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span
                      style={{
                        padding: '0.2rem 0.55rem',
                        background: 'rgba(124,58,237,0.2)',
                        border: '1px solid rgba(124,58,237,0.4)',
                        borderRadius: '9999px',
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        color: '#c4b5fd',
                        whiteSpace: 'nowrap',
                        marginLeft: '0.5rem',
                        flexShrink: 0,
                      }}
                    >
                      Featured
                    </span>
                  )}
                </div>

                <p
                  style={{
                    color: '#64748b',
                    fontSize: '0.85rem',
                    lineHeight: 1.7,
                    flex: 1,
                    marginBottom: '1.25rem',
                  }}
                >
                  {project.description}
                </p>

                {/* Tech badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {project.tech.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.45rem 0.9rem',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '0.6rem',
                        color: '#94a3b8',
                        fontSize: '0.82rem',
                        fontWeight: 500,
                        textDecoration: 'none',
                        transition: 'color 0.2s, background 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = '#f1f5f9';
                        (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = '#94a3b8';
                        (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.05)';
                      }}
                    >
                      <FaGithub size={14} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All projects link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{ textAlign: 'center', marginTop: '2.5rem' }}
        >
          <a
            href="https://github.com/Jayasrip08"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FaGithub size={16} /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
