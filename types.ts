
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  image_url: string;
  excerpt: string;
  content: string;
  created_at: string;
  image?: string; // Fallback for static posts
  date?: string;  // Fallback for static posts
}

export interface Enquiry {
  id: string;
  first_name: string;
  last_name: string;
  subject: string;
  message: string;
  created_at: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export interface GenerationState {
  loading: boolean;
  result: string | null;
  error: string | null;
}
