export interface Stat {
  label: string;
  value: string;
}

export interface NavItem {
  label: string;
  href: string;
  dropdown?: NavItem[];
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  roi: string;
  followers: string;
  rating: number;
  experience: string;
  image: string;
}

export interface Strategy {
  id: string;
  title: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  performance: string;
  description: string;
}
