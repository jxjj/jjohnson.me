export type Category = "Experiments" | "Side Projects" | "Work";

export interface Project {
  name: string;
  blurb: string;
  url?: string;
  git?: string;
  client?: string;
  thumbnail: string;
  category: Category;
  tags?: string[];
  date?: Date;
}
