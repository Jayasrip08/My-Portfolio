'use client';
import { motion } from 'framer-motion';
import {
  FaReact, FaPython, FaHtml5, FaCss3Alt, FaNodeJs, FaJs, FaFigma,
} from 'react-icons/fa';
import {
  SiDotnet, SiMysql, SiFlask, SiStreamlit, SiGooglecloud, SiSqlite,
  SiDjango, SiPostgresql, SiNextdotjs, SiTypescript,
} from 'react-icons/si';

type Skill = { name: string; icon: React.ReactNode; color: string };

const categories: { title: string; color: string; bg: string; skills: Skill[] }[] = [
  {
    title: 'Frontend',
    color: '#f59e0b',
    bg: 'rgba(245, 158, 11, 0.1)',
    skills: [
      { name: 'JavaScript', icon: <FaJs />, color: '#f59e0b' },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3b82f6' },
      { name: 'HTML5', icon: <FaHtml5 />, color: '#f97316' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#38bdf8' },
      { name: 'React.js', icon: <FaReact />, color: '#22d3ee' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: '#f1f5f9' },
      { name: 'Figma', icon: <FaFigma />, color: '#f472b6' },
    ],
  },
  {
    title: 'Backend',
    color: '#10b981',
    bg: 'rgba(16, 185, 129, 0.1)',
    skills: [
      { name: 'Python', icon: <FaPython />, color: '#facc15' },
      { name: 'Node.js', icon: <FaNodeJs />, color: '#4ade80' },
      { name: '.NET Core', icon: <SiDotnet />, color: '#a78bfa' },
      { name: 'Django', icon: <SiDjango />, color: '#10b981' },
      { name: 'Flask', icon: <SiFlask />, color: '#e2e8f0' },
    ],
  },
  {
    title: 'Databases',
    color: '#3b82f6',
    bg: 'rgba(59, 130, 246, 0.1)',
    skills: [
      { name: 'MySQL', icon: <SiMysql />, color: '#fbbf24' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#60a5fa' },
      { name: 'SQLite', icon: <SiSqlite />, color: '#94a3b8' },
    ],
  },
  {
    title: 'AI & Tools',
    color: '#ec4899',
    bg: 'rgba(236, 72, 153, 0.1)',
    skills: [
      { name: 'Google Cloud', icon: <SiGooglecloud />, color: '#60a5fa' },
      { name: 'Streamlit', icon: <SiStreamlit />, color: '#f472b6' },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: '6rem 1.5rem', position: 'relative', overflow: 'hidden' }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0, left: '50%',
          width: '600px', height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent)',
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
          <span className="section-tag">Tech Stack</span>
          <h2 className="section-heading">
            Skills &{' '}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p style={{ color: '#64748b', marginTop: '0.75rem', fontSize: '0.95rem' }}>
            Tools and technologies I use to build impactful applications
          </p>
        </motion.div>

        {/* Categories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1, duration: 0.6 }}
            >
              {/* Category label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span
                  className="skill-category-title"
                  style={{ color: cat.color, background: cat.bg, border: `1px solid ${cat.color}30` }}
                >
                  {cat.title}
                </span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.05)' }} />
              </div>

              {/* Skills row */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
              }}>
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.05 + si * 0.04, duration: 0.4 }}
                    whileHover={{ scale: 1.06, y: -2 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem 1rem',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '0.75rem',
                      cursor: 'default',
                      transition: 'border-color 0.25s, box-shadow 0.25s',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = `${skill.color}50`;
                      el.style.boxShadow = `0 4px 20px ${skill.color}20`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = 'rgba(255,255,255,0.07)';
                      el.style.boxShadow = 'none';
                    }}
                  >
                    <span style={{ color: skill.color, fontSize: '1.1rem', display: 'flex' }}>
                      {skill.icon}
                    </span>
                    <span style={{ color: '#cbd5e1', fontSize: '0.88rem', fontWeight: 500 }}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
