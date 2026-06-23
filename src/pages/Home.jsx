import Hero from "../components/Hero";
import NewsCard from "../components/NewsCard";
import { news } from "../data/News";

const Home = () => {
  return (
    <>
      <Hero />

      <section className="max-w-7xl mx-auto p-4">

        <h2 className="text-3xl font-bold mb-6">
          Latest News
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

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