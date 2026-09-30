import Link from "next/link";
import { news } from "@/data/news";

const BreakingNews = () => {
  const headlines = news.slice(0, 4);

  return (
    <div className="bg-ink text-white">

      <div className="max-w-7xl mx-auto flex items-stretch h-10 text-sm">

        <div className="flex items-center gap-2 bg-alert px-4 font-semibold uppercase tracking-wider text-xs shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          Breaking
        </div>

        <div className="relative flex-1 overflow-hidden">

          {/* The list is rendered twice so the loop is seamless */}
          <div className="ticker absolute inset-y-0 left-0 flex items-center whitespace-nowrap">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                className="flex items-center"
                aria-hidden={copy === 1}
              >
                {headlines.map((item) => (
                  <li key={item.id} className="flex items-center">
                    <Link
                      href={`/news/${item.id}`}
                      className="px-6 hover:underline underline-offset-4"
                      tabIndex={copy === 1 ? -1 : undefined}
                    >
                      {item.title}
                    </Link>
                    <span className="text-white/30">•</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
};

export default BreakingNews;
