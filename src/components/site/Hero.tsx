import Image from "next/image";
import Link from "next/link";
import { news } from "@/data/news";
import { formatDate } from "@/lib/format";

const Hero = () => {
  const [topStory, ...rest] = news;
  const topStories = rest.slice(0, 3);

  if (!topStory) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

      <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">

        {/* Lead story */}

        <Link
          href={`/news/${topStory.id}`}
          className="group lg:col-span-2 block"
        >

          <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-rule">

            <Image
              src={topStory.image}
              alt={topStory.title}
              fill
              priority
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />

            <span className="absolute top-4 left-4 bg-alert text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-sm">
              Top Story
            </span>

          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-brand">
            {topStory.category}
          </p>

          <h1 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight group-hover:underline decoration-2 underline-offset-[6px]">
            {topStory.title}
          </h1>

          <p className="mt-4 text-lg text-muted leading-relaxed max-w-2xl">
            {topStory.description}
          </p>

          <p className="mt-4 text-sm text-muted">
            By <span className="text-ink font-medium">{topStory.author}</span> · {formatDate(topStory.date)}
          </p>

        </Link>

        {/* Side stories */}

        <aside className="lg:border-l lg:border-rule lg:pl-10">

          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] pb-3 border-b-2 border-ink">
            Top Stories
          </h2>

          <ul className="divide-y divide-rule">

            {topStories.map((article) => (
              <li key={article.id}>
                <Link
                  href={`/news/${article.id}`}
                  className="group flex gap-4 py-5"
                >
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                      {article.category}
                    </p>

                    <h3 className="mt-1.5 font-serif text-lg font-semibold leading-snug group-hover:underline decoration-1 underline-offset-4">
                      {article.title}
                    </h3>

                    <p className="mt-2 text-xs text-muted">
                      {formatDate(article.date)}
                    </p>
                  </div>

                  <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-md bg-rule">
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                </Link>
              </li>
            ))}

          </ul>

        </aside>

      </div>

    </section>
  );
};

export default Hero;
