interface Challenge {
  title: string;
  description: string;
  solution: string;
}

export interface DetailedExperience {
  period: string;
  company: string;
  logo: string;
  role: string;
  companyUrl: string;
  description: string[];
  responsibilities: string[];
  challenges: Challenge[];
  achievements: string[];
  technologies: string[];
}

export interface ExperienceItem {
  period: string;
  company: string;
  logo: string;
  role: string;
  companyUrl: string;
  description: string[];
  technologies: string[];
  relatedLinks?: Array<{ name: string; url: string }>;
}
