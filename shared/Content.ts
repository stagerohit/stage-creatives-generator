export interface Content {
  content_id: string;
  title: string;
  description: string;
  metadata: Record<string, any>;
  genre: string;
  tags: string[];
  script: string;
  trailer_url: string;
  created_at: string;
} 