import Link from "next/link";
import { notFound } from "next/navigation";

import NewsGrid from "@/components/NewsGrid";
import {
  categories,
  getCategory,
  getNewsByCategory,
} from "@/data/categories";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) return { title: "The Wave News" };

  return {
    title: `${category.name} News | The Wave News`,
    description: `The latest ${category.name} news from The Wave News.`,
  };
}

const CategoryPage = async ({ params }) => {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) notFound();

  const articles = getNewsByCategory(slug);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

      <header className="border-b-2 border-ink pb-6 mb-10">

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          Category
        </p>

        <h1 className="mt-2 font-serif text-4xl sm:text-5xl font-bold tracking-tight">
          {category.name}
        </h1>

        {articles.length > 0 && (
          <p className="mt-3 text-muted">
            {articles.length === 1 ? "1 story" : `${articles.length} stories`}
          </p>
        )}

      </header>

      {articles.length > 0 ? (
        <NewsGrid articles={articles} />
      ) : (
        <div className="py-16 text-center">

          <p className="font-serif text-2xl font-semibold">
            No {category.name} stories yet
          </p>

          <p className="mt-2 text-muted">
            Check back soon, or browse the latest news.
          </p>

          <Link
            href="/"
            className="mt-6 inline-block rounded-full bg-brand px-6 py-3 text-sm font-medium text-white hover:bg-brand-dark transition-colors"
          >
            Latest news
          </Link>

        </div>
      )}

    </section>
  );
};

export default CategoryPage;
