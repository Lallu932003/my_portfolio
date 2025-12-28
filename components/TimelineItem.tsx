
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Education } from '../types';

interface TimelineItemProps {
  edu: Education;
  index: number;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ edu, index }) => {
  const accent = index % 2 === 0 ? 'var(--brand-pink)' : 'var(--brand-yellow)';
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="position-relative ps-5 pb-5 border-start"
      style={{ borderColor: 'rgba(255,255,255,0.1) !important' }}
    >
      <div 
        className="position-absolute start-0 translate-middle rounded-circle shadow-lg d-flex align-items-center justify-content-center"
        style={{ width: '40px', height: '40px', background: accent, left: '-1px' }}
      >
        <GraduationCap size={18} color="white" />
      </div>
      
      <div className="glass-card p-4">
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
          <h5 className="fw-bold mb-0 text-white font-display">{edu.degree}</h5>
          <span className="badge rounded-pill px-3 py-2" style={{ backgroundColor: accent, opacity: 0.9 }}>{edu.period}</span>
        </div>
        <p className="text-secondary mb-3">{edu.institution}</p>
        <div className="d-flex align-items-center gap-2">
          <div
            className="px-3 py-1 rounded-pill border small"
            style={{ backgroundColor: 'rgba(0,0,0,0.35)', borderColor: 'rgba(255,255,255,0.08)' }}
          >
            <span className="text-white">Score: </span>
            <span className="fw-bold text-white">{edu.percentage}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
