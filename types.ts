
export interface ServiceCardProps {
  title: string;
  description: string[];
  icon: string;
  link?: string;
  external?: boolean;
}

export interface NewsPost {
  id: number;
  date: string;
  title: string;
  excerpt: string;
}

export interface JobPost {
  id: number;
  title: string;
  location: string;
  type: string;
  description: string;
}
