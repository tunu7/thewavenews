import { useParams } from "react-router-dom";
import { news } from "../data/news";

const NewsDetails = () => {
  const { id } = useParams();

  const article = news.find(
    (item) => item.id === Number(id)
  );

  return (
    <section className="max-w-4xl mx-auto p-4 py-10">

      <img
        src={article.image}
        alt={article.title}
        className="rounded-xl mb-6"
      />

      <h1 className="text-4xl font-bold">
        {article.title}
      </h1>

      <p className="mt-6 text-lg leading-8">
        {article.content}
      </p>

    </section>
  );
};

export default NewsDetails;