import type { Article } from "@/types/news";

import NewsCard from "./NewsCard";

const NewsGrid = ({ articles }: { articles: Article[] }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
      {articles.map((article) => (
        <NewsCard
          key={article.id}
          article={article}
        />
      ))}
    </div>
  );
};

export default NewsGrid;
