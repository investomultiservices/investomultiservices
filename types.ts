
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

export interface GenerationState {
  loading: boolean;
  result: string | null;
  error: string | null;
}
