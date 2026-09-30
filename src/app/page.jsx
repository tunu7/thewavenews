import Hero from "@/components/Hero";
import NewsCard from "@/components/NewsCard";
import { news } from "@/data/news";

const Home = () => {
  return (
    <>
      <Hero />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">

        <h2 className="font-serif text-3xl font-bold border-t-2 border-ink pt-4 mb-8">
          Latest News
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

          {news.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
            />
          ))}

        </div>

      </section>
    </>
  );
};

export default Home;
