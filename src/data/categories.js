import { news } from "./news";

export const categories = [
  { name: "Arunachal", slug: "arunachal" },
  { name: "India", slug: "india" },
  { name: "Politics", slug: "politics" },
  { name: "Sports", slug: "sports" },
  { name: "Business", slug: "business" },
  { name: "Tourism", slug: "tourism" },
  { name: "Jobs", slug: "jobs" },
];

export function getCategory(slug) {
  return categories.find((category) => category.slug === slug);
}

export function getCategorySlug(name) {
  return name.toLowerCase();
}

export function getNewsByCategory(slug) {
  return news.filter((article) => getCategorySlug(article.category) === slug);
}
