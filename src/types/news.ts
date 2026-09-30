export type Article = {
  id: number;
  title: string;
  image: string;
  category: string;
  author: string;
  /** YYYY-MM-DD */
  date: string;
  /** Minutes */
  readTime: number;
  description: string;
  content: string;
};

export type Category = {
  name: string;
  slug: string;
};
