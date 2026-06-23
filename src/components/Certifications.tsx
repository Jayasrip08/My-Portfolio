'use client';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

type Certification = {
  title: string;
  issuer: string;
  date: string;
  link?: string;
  color: string;
};

const certifications: Certification[] = [
  {
    title: 'Full Stack Web Development Internship',
    issuer: 'EDUREKA',
    date: 'Oct 2024',
    link: 'https://www.linkedin.com/posts/jayasri-panchamurthi-b99a312b6_edureka-certifiedskills-webdevelopment-activity-7251628679892471808-_Xsg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEv4mGUBV_Ry6Zo2Zi03sHtIC5RUGNJiO-M',
    color: '#f59e0b',
  },
  {
    title: 'Full Stack Web Development Internship',
    issuer: 'TOPPER WORLD',
    date: 'Sep 2024',
    link: 'https://www.linkedin.com/posts/jayasri-panchamurthi-b99a312b6_webdevelopment-internship-topperworld-activity-7251097122719068160-BhlC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEv4mGUBV_Ry6Zo2Zi03sHtIC5RUGNJiO-M',
    color: '#10b981',
  },
  {
    title: 'Full Stack Web Development Internship',
    issuer: 'PROMPT INFOTECH',
    date: 'Aug 2024',
    link: 'https://www.linkedin.com/posts/jayasri-panchamurthi-b99a312b6_just-wrapped-up-an-intensive-5-day-internship-activity-7237488409454288896-vJJH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEv4mGUBV_Ry6Zo2Zi03sHtIC5RUGNJiO-M',
    color: '#3b82f6',
  },
  {
    title: 'Gen-AI Course',
    issuer: 'NXT-WAVE',
    date: 'Mar 2025',
    link: 'https://www.linkedin.com/posts/jayasri-panchamurthi-b99a312b6_generativeai-aiworkshop-nxtwave-activity-7314190941228027904-IzKB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEv4mGUBV_Ry6Zo2Zi03sHtIC5RUGNJiO-M',
    color: '#a78bfa',
  },
  {
    title: 'Java & Python 100 Days Mastery',
    issuer: 'Udemy & Simplilearn',
    date: 'Mar 2025',
    link: 'https://www.linkedin.com/posts/jayasri-panchamurthi-b99a312b6_python-100daysofcode-coding-activity-7309490405429903360-MCZl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEv4mGUBV_Ry6Zo2Zi03sHtIC5RUGNJiO-M',
    color: '#ec4899',
  },
  {
    title: 'Web Development for Beginners',
    issuer: 'Simplilearn',
    date: 'Oct 2024',
    link: 'https://www.linkedin.com/posts/jayasri-panchamurthi-b99a312b6_webdevelopment-simplilearn-learningjourney-activity-7251097913798311938-fmFa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEv4mGUBV_Ry6Zo2Zi03sHtIC5RUGNJiO-M',
    color: '#06b6d4',
  },
  {
    title: 'AI Bootcamp',
    issuer: 'NXT-WAVE & Great Learning',
    date: 'Nov 2024',
    link: 'https://www.linkedin.com/posts/jayasri-panchamurthi-b99a312b6_course-completion-certificate-in-artificial-activity-7251241758838128640-8fE6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEv4mGUBV_Ry6Zo2Zi03sHtIC5RUGNJiO-M',
    color: '#f97316',
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      style={{ padding: '6rem 1.5rem', position: 'relative' }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="section-tag">Credentials</span>
          <h2 className="section-heading">
            Certifications &{' '}
            <span className="gradient-text">Achievements</span>
          </h2>
          <p style={{ color: '#64748b', marginTop: '0.75rem', fontSize: '0.95rem' }}>
            Continuous learning across full-stack, AI, and cloud technologies
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line (hidden on mobile) */}
          <div
            className="hidden md:block"
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(180deg, transparent, rgba(124,58,237,0.5) 20%, rgba(6,182,212,0.5) 80%, transparent)',
              transform: 'translateX(-50%)',
            }}
          />

          {/* Timeline items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {certifications.map((cert, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  style={{
                    display: 'flex',
                    justifyContent: isLeft ? 'flex-start' : 'flex-end',
                    position: 'relative',
                  }}
                  className="md:justify-auto"
                >
                  {/* Desktop: Timeline dot */}
                  <div
                    className="hidden md:block"
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: cert.color,
                      transform: 'translate(-50%, -50%)',
                      boxShadow: `0 0 12px ${cert.color}80`,
                      zIndex: 2,
                    }}
                  />

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    style={{
                      width: '100%',
                      maxWidth: '420px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '1.1rem',
                      padding: '1.25rem 1.5rem',
                      transition: 'border-color 0.3s, box-shadow 0.3s',
                      borderLeft: `3px solid ${cert.color}`,
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = `${cert.color}50`;
                      el.style.boxShadow = `0 8px 30px ${cert.color}15`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = 'rgba(255,255,255,0.07)';
                      el.style.boxShadow = 'none';
                    }}
                  >
                    {/* Issuer initial + title */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '0.5rem',
                          background: `${cert.color}20`,
                          border: `1px solid ${cert.color}40`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.7rem',
                          fontWeight: 800,
                          color: cert.color,
                          flexShrink: 0,
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      >
                        {cert.issuer.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h3
                          style={{
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            color: '#f1f5f9',
                            lineHeight: 1.35,
                            marginBottom: '0.2rem',
                          }}
                        >
                          {cert.title}
                        </h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                          <span style={{ color: cert.color, fontSize: '0.78rem', fontWeight: 600 }}>
                            {cert.issuer}
                          </span>
                          <span style={{ color: '#334155', fontSize: '0.78rem' }}>•</span>
                          <span style={{ color: '#475569', fontSize: '0.78rem' }}>{cert.date}</span>
                        </div>
                      </div>
                    </div>

                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          marginTop: '0.9rem',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.78rem',
                          fontWeight: 500,
                          color: '#94a3b8',
                          textDecoration: 'none',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color = cert.color;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color = '#94a3b8';
                        }}
                      >
                        View Certificate <FaExternalLinkAlt size={10} />
                      </a>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
