import { news } from "@/data/news";

// Every word in the query must appear somewhere in the article
export function searchNews(query: string) {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  return news.filter((article) => {
    const text = [
      article.title,
      article.description,
      article.content,
      article.category,
      article.author,
    ]
      .join(" ")
      .toLowerCase();

    return terms.every((term: string) => text.includes(term));
  });
}
