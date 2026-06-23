import { news } from "../data/news";

const Hero = () => {
  const topStory = news[0];

  return (
    <section className="max-w-7xl mx-auto p-4 py-8">

      <div className="grid md:grid-cols-2 gap-8">

        <img
          src={topStory.image}
          alt={topStory.title}
          className="rounded-xl h-100 object-cover w-full"
        />

        <div className="flex flex-col justify-center">

          <span className="bg-blue-600 text-white px-3 py-1 rounded w-fit">
            Top Story
          </span>

          <h1 className="text-4xl font-bold mt-4">
            {topStory.title}
          </h1>

          <p className="mt-4 text-gray-600">
            {topStory.description}
          </p>

        </div>

      </div>

    </section>
  );
};

export default Hero;