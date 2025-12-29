
import React from 'react';
import { Mail, Linkedin, MapPin, Phone, Github, Instagram, Music, Palette, PenTool, ExternalLink, Globe, Brush } from 'lucide-react';
import { Project, Skill, Education, Achievement } from './types';
import profileImage from './image/profile.jpg';

export const PERSONAL_INFO = {
  name: "Annmariya Lalu",
  title: "MCA Scholar",
  profile: "A creative and motivated MCA student with a passion for web page designing, HTML, and CSS. Seeking opportunities to build modern, user-friendly websites. Committed to continuous learning and delivering high-quality design solutions that make an impact.",
  email: "annmariyalalumca@gmail.com",
  phone: "9495679137",
  location: "Koratty, Thrissur, Kerala",
  linkedin: "https://linkedin.com/in/annmariya-lalu-2b0641353",
  instagram: "https://www.instagram.com/annmariyalalu_?igsh=MW4zMm0zZ3Zwc3g0cQ==",
  github: "https://github.com/Lallu932003",
  photo: profileImage
};

export const PROJECTS: Project[] = [
  {
    title: "CopyCove",
    description: "College Print Service Website",
    longDescription: "A full-stack MERN application designed to digitize college print requests. Features include secure file uploads via Multer, real-time order tracking, and notifications using Nodemailer and Twilio.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Bootstrap", "Nodemailer", "Twilio"],
    image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "EzAttenda",
    description: "Attendance Management & Tracking System",
    longDescription: "A lightweight, secure attendance system built for educational environments. Features admin/user access control and an intuitive UI for marking and viewing records.",
    techStack: ["Python", "Django", "HTML", "CSS", "SQLite"],
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Webfolio",
    description: "Personal Portfolio Website",
    longDescription: "A modern, responsive personal portfolio built using pure HTML and CSS to showcase achievements, skills, and projects with a clean visual hierarchy.",
    techStack: ["HTML", "CSS", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  }
];

export const SKILLS: Skill[] = [
  { name: "React", level: 85, category: 'Web' },
  { name: "Node.js", level: 80, category: 'Web' },
  { name: "MongoDB", level: 75, category: 'Web' },
  { name: "Python", level: 80, category: 'Programming' },
  { name: "C Programming", level: 70, category: 'Programming' },
  { name: "HTML/CSS", level: 95, category: 'Web' },
  { name: "Bootstrap", level: 90, category: 'Web' },
  { name: "Django", level: 75, category: 'Web' },
  { name: "Canva", level: 95, category: 'Tools' },
  { name: "VS Code", level: 90, category: 'Tools' }
];

export const EDUCATION: Education[] = [
  {
    degree: "Master of Computer Applications",
    institution: "Federal Institute of Science and Technology (FISAT) / KTU",
    period: "2024 - 2026",
    percentage: "86.4% (Pursuing)"
  },
  {
    degree: "BSc Mathematics",
    institution: "Christ College Autonomous / Calicut University",
    period: "2021 - 2024",
    percentage: "73%"
  },
  {
    degree: "Plus Two (BioMaths)",
    institution: "MAMHSS Koratty",
    period: "2019 - 2021",
    percentage: "96.4%"
  },
  {
    degree: "SSLC",
    institution: "LFCHSS Koratty",
    period: "2018 - 2019",
    percentage: "100%"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "NPTEL", description: "Certified in Database Management System." },
  { title: "Hackerrank Participation", description: "Attended hackerrank conducted by TZL FISAT." },
  { title: "Microsoft Excel Certified", description: "Completed a 4-day workshop by Microsoft." },
  { title: "NCC Member", description: "Active member of NCC and Media Cell NCC." }
];

export const INTERESTS = [
  { name: "Web Design", icon: <PenTool className="w-5 h-5" /> },
  { name: "Ukulele", icon: <Music className="w-5 h-5" /> },
  { name: "Traveling", icon: <Globe className="w-5 h-5" /> },
  { name: "Poster Making", icon: <PenTool className="w-5 h-5" /> }
];
