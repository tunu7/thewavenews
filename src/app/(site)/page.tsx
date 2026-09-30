import Hero from "@/components/site/Hero";
import NewsGrid from "@/components/site/NewsGrid";
import { news } from "@/data/news";

const Home = () => {
  return (
    <>
      <Hero />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">

        <h2 className="font-serif text-3xl font-bold border-t-2 border-ink pt-4 mb-8">
          Latest News
        </h2>

        <NewsGrid articles={news} />

      </section>
    </>
  );
};

export default Home;
