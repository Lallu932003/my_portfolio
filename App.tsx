
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Mail, Linkedin, Github, Instagram, Phone, MapPin, ChevronRight, Send, Heart, Calendar, Moon, Sun } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILLS, EDUCATION, ACHIEVEMENTS, INTERESTS } from './constants';
import { ProjectCard } from './components/ProjectCard';
import { SkillBar } from './components/SkillBar';
import { TimelineItem } from './components/TimelineItem';
import { SectionHeading } from './components/SectionHeading';
import { useTheme } from './ThemeContext';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="portfolio-wrap">
      {/* Background Decor */}
      <div className="glow-pink" />
      <div className="glow-yellow" />

      {/* Navigation */}
      <nav className={`navbar navbar-expand-lg fixed-top transition-all ${scrolled ? 'bg-dark shadow-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand font-display fw-bold text-pink fs-3" href="#home">AL.</a>
          <div className="d-flex align-items-center gap-3">
            <button 
              className="btn btn-sm btn-outline-light rounded-circle theme-toggle p-2 d-none d-lg-flex"
              onClick={toggleTheme}
              title="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="navbar-toggler border-0 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <Menu className="text-white" />
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-lg-4 text-center mt-3 mt-lg-0">
              {navLinks.map((link) => (
                <li key={link.name} className="nav-item">
                  <a className="nav-link" href={link.href}>{link.name}</a>
                </li>
              ))}
              <li className="nav-item d-lg-none mt-3">
                <button 
                  className="btn btn-sm btn-outline-light rounded-pill w-100"
                  onClick={toggleTheme}
                >
                  {theme === 'dark' ? <Sun size={18} className="me-2" /> : <Moon size={18} className="me-2" />}
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center gy-5">
            <motion.div 
              className="col-lg-7"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h6 className="text-yellow fw-bold text-uppercase mb-3 tracking-widest"></h6>
              <h1 className="display-2 font-display fw-bold mb-4">
                I'm <span className="text-pink">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="lead text-secondary mb-5 fs-4">
                {PERSONAL_INFO.title}. <span className="text-white">Designing digital futures with logic and color.</span>
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#projects" className="btn btn-pink d-flex align-items-center gap-2">
                  My Projects <ChevronRight size={18} />
                </a>
                <a href="#contact" className="btn btn-outline-light rounded-pill px-4 py-3">Let's Connect</a>
              </div>
              <div className="mt-5 d-flex gap-4">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-secondary hover-pink transition-all"><Mail size={24} /></a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary hover-pink transition-all"><Linkedin size={24} /></a>
                <a href={PERSONAL_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-secondary hover-pink transition-all"><Instagram size={24} /></a>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-secondary hover-pink transition-all"><Github size={24} /></a>
              </div>
            </motion.div>
            
            <div className="col-lg-5 text-center position-relative">
              <motion.div 
                className="hero-img-container mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="position-absolute top-50 start-50 translate-middle w-100 h-100 bg-pink rounded-circle opacity-10 blur-xl" style={{ filter: 'blur(60px)' }} />
                <img 
                  src={PERSONAL_INFO.photo} 
                  alt="Profile" 
                  className="rounded-circle border border-5 border-dark shadow-lg img-fluid position-relative z-1" 
                  style={{ maxWidth: '350px', border: '10px solid rgba(255,255,255,0.05) !important' }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-black bg-opacity-25">
        <div className="container">
          <SectionHeading title="About Me" num="02" subtitle="The Journey" />
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <p className="fs-5 text-secondary mb-4 leading-relaxed">
                {PERSONAL_INFO.profile}
              </p>
              <div className="row g-4 mt-2">
                <div className="col-6 col-md-4">
                  <div className="glass-card p-4 text-center">
                    <h3 className="text-pink fw-bold mb-0">86%</h3>
                    <small className="text-secondary">MCA Grade</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                {INTERESTS.map((item, idx) => (
                  <div key={idx} className="col-6">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="glass-card p-4 d-flex flex-column align-items-center gap-3 border-start border-pink"
                    >
                      <div className="text-pink">{item.icon}</div>
                      <span className="fw-bold">{item.name}</span>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="container">
          <SectionHeading title="Expertise" num="03" subtitle="Tech Arsenal" />
          <div className="row g-5">
            <div className="col-md-6">
              <h4 className="font-display fw-bold mb-4 text-cyan">Development</h4>
              <div className="d-flex flex-column gap-4">
                {SKILLS.filter(s => s.category === 'Web' || s.category === 'Programming').map(skill => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <h4 className="font-display fw-bold mb-4 text-yellow">Design & Tools</h4>
              <div className="d-flex flex-column gap-4">
                {SKILLS.filter(s => s.category === 'Tools').map(skill => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
              <div className="mt-5 row g-3">
                {ACHIEVEMENTS.map((ach) => (
                  <div key={ach.title} className="col-12">
                    <div className="glass-card p-3 border-start border-4 border-yellow">
                      <h6 className="mb-1 text-yellow">{ach.title}</h6>
                      <small className="text-secondary d-block">{ach.description}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-black bg-opacity-25">
        <div className="container">
          <SectionHeading title="Work" num="04" subtitle="Portfolio Highlights" />
          <div className="row g-4">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <ProjectCard project={project} index={idx} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <div className="container">
          <SectionHeading title="Education" num="05" subtitle="Academic Background" />
          <div className="max-w-800 mx-auto">
            {EDUCATION.map((edu, idx) => (
              <TimelineItem key={idx} edu={edu} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <SectionHeading title="Contact" num="06" subtitle="Reach Out" />
          <div className="row g-5">
            <div className="col-lg-5">
              <div className="d-flex flex-column gap-4">
                <div className="glass-card p-4 d-flex align-items-center gap-4">
                  <div className="bg-brown bg-opacity-10 p-3 rounded-4 text-brown"><Mail /></div>
                  <div>
                    <small className="text-secondary d-block">Email</small>
                    <span className="fw-bold">{PERSONAL_INFO.email}</span>
                  </div>
                </div>
                <div className="glass-card p-4 d-flex align-items-center gap-4">
                  <div className="bg-brown bg-opacity-10 p-3 rounded-4 text-brown"><Phone /></div>
                  <div>
                    <small className="text-secondary d-block">Phone</small>
                    <span className="fw-bold">{PERSONAL_INFO.phone}</span>
                  </div>
                </div>
                <div className="glass-card p-4 d-flex align-items-center gap-4">
                  <div className="bg-brown bg-opacity-10 p-3 rounded-4 text-brown"><MapPin /></div>
                  <div>
                    <small className="text-secondary d-block">Location</small>
                    <span className="fw-bold">{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <form className="glass-card p-5" onSubmit={e => e.preventDefault()}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label text-white fw-bold mb-2">Name</label>
                    <input type="text" className="form-control bg-dark border-secondary text-white py-3 rounded-4" placeholder="Your Name" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-white fw-bold mb-2">Email</label>
                    <input type="email" className="form-control bg-dark border-secondary text-white py-3 rounded-4" placeholder="Email Address" />
                  </div>
                  <div className="col-12">
                    <label className="form-label text-white fw-bold mb-2">Message</label>
                    <textarea className="form-control bg-dark border-secondary text-white py-3 rounded-4" rows={5} placeholder="How can I help you?"></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-pink w-100 py-3 d-flex align-items-center justify-center gap-2">
                      Send Message <Send size={18} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 border-top border-white border-opacity-5 mt-5">
        <div className="container text-center">
          <h4 className="text-pink mb-4 font-display fw-bold">Annmariya Lalu</h4>
          <div className="d-flex justify-content-center gap-4 mb-4">
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary hover-pink"><Linkedin /></a>
            <a href={PERSONAL_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-secondary hover-pink"><Instagram /></a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-secondary hover-pink"><Github size={24} /></a>
            
          </div>
          <p className="text-secondary small">
            Designed with <Heart className="text-pink d-inline-block mx-1" size={14} /> &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>

      <style>{`
        .hover-pink:hover { color: var(--brand-pink) !important; transform: translateY(-2px); }
        .transition-all { transition: all 0.3s ease; }
        .max-w-800 { max-width: 800px; }
        .hover-effect { transition: all 0.3s ease; }
        .hover-effect:hover { border-color: var(--brand-pink) !important; background: rgba(255, 255, 255, 0.08) !important; transform: translateY(-4px); }
      `}</style>
    </div>
  );
};

export default App;
