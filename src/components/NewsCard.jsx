import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/format";

const NewsCard = ({ article }) => {
  return (
    <Link
      href={`/news/${article.id}`}
      className="group block"
    >

      <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-rule">

        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

      </div>

      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand">
        {article.category}
      </p>

      <h3 className="mt-2 font-serif text-xl font-semibold leading-snug group-hover:underline decoration-1 underline-offset-4">
        {article.title}
      </h3>

      <p className="mt-2 text-muted leading-relaxed line-clamp-2">
        {article.description}
      </p>

      <p className="mt-3 text-xs text-muted">
        {formatDate(article.date)} · {article.readTime} min read
      </p>

    </Link>
  );
};

export default NewsCard;
