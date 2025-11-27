export interface ResumeItem {
  date: string;
  title: string;
  description: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  images?: string[];
  videos?: string[];
}

export interface PortfolioCategory {
  id: string;
  title: string;
  subtitle: string;
  projects: Project[];
}

export type PortfolioType = 'editorial' | 'brand' | 'uxui' | 'motion';

