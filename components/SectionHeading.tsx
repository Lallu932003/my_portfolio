
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  num?: string;
  subtitle?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, num, subtitle }) => {
  return (
    <div className="text-center mb-5 pb-4">
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-pink fw-bold text-uppercase tracking-widest small mb-2"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div className="d-inline-block position-relative">
        <h2 className="display-5 fw-bold font-display mb-0">
          {num && <span className="opacity-25 me-3">{num}</span>}
          {title}
        </h2>
        <div className="d-flex justify-content-center gap-1 mt-3">
           <div className="bg-pink" style={{ width: '40px', height: '4px', borderRadius: '4px' }} />
           <div className="bg-yellow" style={{ width: '15px', height: '4px', borderRadius: '4px' }} />
           <div className="bg-brown" style={{ width: '15px', height: '4px', borderRadius: '4px' }} />
        </div>
      </motion.div>
    </div>
  );
};
