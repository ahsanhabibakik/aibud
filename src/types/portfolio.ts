export interface PortfolioProduct {
  id: string;
  name: string;
  category: ProductCategory;
  status: 'Live' | 'Beta' | 'Coming Soon' | 'Case Study';
  description: string;
  capabilities: string[];
  technologies: string[];
  metrics?: {
    value: string;
    label: string;
  };
  screenshots: {
    desktop?: string;
    mobile?: string;
    thumbnail: string;
  };
  links: {
    demo?: string;
    github?: string;
    case_study?: string;
    live?: string;
  };
  featured: boolean;
  createdAt: Date;
  emoji?: string;
}

export type ProductCategory = 
  | 'Flagship'
  | 'Marketing'
  | 'Operations'
  | 'Reporting'
  | 'Mental Health'
  | 'Dev/Infra'
  | 'Public Links';

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  brandLogo?: string;
  outcome: string;
  summary: string;
  componentsUsed: string[];
  metrics: {
    value: string;
    label: string;
  }[];
  link?: string;
}

export interface IntegrationPartner {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  url?: string;
}