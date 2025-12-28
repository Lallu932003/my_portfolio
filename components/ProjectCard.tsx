
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const colors = ['var(--brand-pink)', 'var(--brand-yellow)', 'var(--brand-blue)', 'var(--brand-brown)'];
  const accentColor = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card h-100 overflow-hidden"
    >
      <div className="position-relative overflow-hidden" style={{ height: '220px' }}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-100 h-100 object-fit-cover transition-transform duration-500 hover-scale" 
        />
        <div className="position-absolute inset-0 d-flex align-items-center justify-content-center gap-3 bg-dark bg-opacity-75 opacity-0 hover-reveal transition-opacity">
          <a href="#" className="btn btn-pink rounded-circle p-2"><ExternalLink size={20} /></a>
          <a href="#" className="btn btn-light rounded-circle p-2"><Github size={20} /></a>
        </div>
      </div>
      <div className="p-4">
        <div className="d-flex flex-wrap gap-2 mb-3">
          {project.techStack.slice(0, 3).map(tech => (
            <span key={tech} className="badge bg-secondary bg-opacity-25 text-white fw-light rounded-pill px-3" style={{ fontSize: '10px' }}>{tech}</span>
          ))}
        </div>
        <h5 className="fw-bold mb-2 transition-all">{project.title}</h5>
        <p className="text-secondary small mb-0">{project.description}</p>
        <div className="mt-3 pt-3 border-top border-white border-opacity-5">
           <div className="w-100" style={{ height: '2px', background: accentColor, opacity: 0.3 }} />
        </div>
      </div>
      <style>{`
        .glass-card:hover .hover-reveal { opacity: 1 !important; }
        .glass-card:hover .hover-scale { transform: scale(1.1); }
      `}</style>
    </motion.div>
  );
};
