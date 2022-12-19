export interface Project {
  name: string;
  blurb: string;
  url?: string;
  git?: string;
  client?: string;
  thumbnail: string;
  category: string;
  tags?: string | string[];
  date?: Date;
}
