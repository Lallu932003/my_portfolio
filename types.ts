
export interface Project {
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  link?: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Programming' | 'Web' | 'Tools' | 'Soft Skills';
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  percentage: string;
}

export interface Achievement {
  title: string;
  description: string;
}
