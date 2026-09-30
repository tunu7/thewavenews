import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

import NewsCard from "@/components/NewsCard";
import { news } from "@/data/news";
import { formatDate } from "@/lib/format";

export function generateStaticParams() {
  return news.map((item) => ({ id: String(item.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const article = news.find((item) => item.id === Number(id));

  if (!article) return { title: "The Wave News" };

  return {
    title: `${article.title} | The Wave News`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      images: [article.image],
    },
  };
}

const NewsDetails = async ({ params }) => {
  const { id } = await params;

  const article = news.find(
    (item) => item.id === Number(id)
  );

  if (!article) notFound();

  const moreStories = news
    .filter((item) => item.id !== article.id)
    .slice(0, 3);

  return (
    <>
      <article className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

        <header className="max-w-3xl mx-auto">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-brand"
          >
            <FaArrowLeft className="text-xs" />
            Back to news
          </Link>

          <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-brand">
            {article.category}
          </p>

          <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight">
            {article.title}
          </h1>

          <p className="mt-5 text-xl text-muted leading-relaxed">
            {article.description}
          </p>

          <div className="mt-6 flex items-center gap-3 border-y border-rule py-4 text-sm">

            <div className="h-9 w-9 rounded-full bg-brand/10 text-brand flex items-center justify-center font-semibold">
              {article.author.charAt(0)}
            </div>

            <div>
              <p className="font-medium">{article.author}</p>
              <p className="text-muted">
                {formatDate(article.date)} · {article.readTime} min read
              </p>
            </div>

          </div>

        </header>

        <div className="relative mt-8 max-w-5xl mx-auto aspect-[16/9] overflow-hidden rounded-md bg-rule">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="max-w-3xl mx-auto mt-10 space-y-6 font-serif text-xl leading-9">
          {article.content.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

      </article>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

        <h2 className="font-serif text-3xl font-bold border-t-2 border-ink pt-4 mb-8">
          More Stories
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {moreStories.map((item) => (
            <NewsCard key={item.id} article={item} />
          ))}
        </div>

      </section>
    </>
  );
};

export default NewsDetails;
