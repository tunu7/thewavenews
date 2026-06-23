import { Link } from "react-router-dom";

const NewsCard = ({ article }) => {
  return (
    <Link to={`/news/${article.id}`}>

      <div className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition">

        <img
          src={article.image}
          alt={article.title}
          className="h-56 w-full object-cover"
        />

        <div className="p-4">

          <h2 className="font-bold text-lg">
            {article.title}
          </h2>

          <p className="text-gray-600 mt-2">
            {article.description}
          </p>

        </div>

      </div>

    </Link>
  );
};

export default NewsCard;