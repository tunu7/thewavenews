import { categories } from "@/data/categories";
import { companyPages } from "@/data/company";
import { news } from "@/data/news";
import { siteUrl } from "@/lib/site";

export default function sitemap() {
  return [
    { url: siteUrl, changeFrequency: "hourly", priority: 1 },
    ...categories.map((category) => ({
      url: `${siteUrl}/category/${category.slug}`,
      changeFrequency: "daily",
      priority: 0.9,
    })),
    ...companyPages.map((page) => ({
      url: `${siteUrl}${page.href}`,
      changeFrequency: "monthly",
      priority: 0.3,
    })),
    ...news.map((article) => ({
      url: `${siteUrl}/news/${article.id}`,
      lastModified: new Date(article.date),
      changeFrequency: "weekly",
      priority: 0.8,
    })),
  ];
}
