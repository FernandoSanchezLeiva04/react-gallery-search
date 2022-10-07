export interface Results {
  next_page?: string;
  page?: number;
  per_page?: number;
  photos?: Photo[];
  total_results?: number;
  slug?: string;
}

export interface Photo {
  alt?: string;
  avg_color?: string;
  height?: number;
  id?: number;
  liked?: boolean;
  photographer?: string;
  photographer_id?: number;
  photographer_url?: string;
  src?: {
    original?: string;
    large2x?: string;
    large?: string;
    medium?: string;
    small?: string;
  };
  url?: string;
  tiny?: string;
}
