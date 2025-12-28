
import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';

interface SkillBarProps {
  skill: Skill;
}

export const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  const getGradient = () => {
    if (skill.category === 'Web') return 'linear-gradient(90deg, var(--brand-pink), #ff1a75)';
    if (skill.category === 'Programming') return 'linear-gradient(90deg, var(--brand-blue), #00d2ff)';
    return 'linear-gradient(90deg, var(--brand-yellow), #f9d423)';
  };

  return (
    <div className="w-100">
      <div className="d-flex justify-content-between mb-2">
        <span className="fw-bold small text-uppercase tracking-wider">{skill.name}</span>
        <span className="small opacity-50">{skill.level}%</span>
      </div>
      <div className="progress bg-dark bg-opacity-50 rounded-pill overflow-hidden" style={{ height: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <motion.div
          className="progress-bar"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ 
            background: getGradient(),
            borderRadius: '50px'
          }}
        />
      </div>
    </div>
  );
};
