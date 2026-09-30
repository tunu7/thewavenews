import NewsGrid from "@/components/site/NewsGrid";
import SearchForm from "@/components/site/SearchForm";
import { searchNews } from "@/lib/search";

export async function generateMetadata({ searchParams }: PageProps<"/search">) {
  const { q } = await searchParams;
  const query = typeof q === "string" ? q.trim() : "";

  return {
    title: query ? `Search: ${query} | The Wave News` : "Search | The Wave News",
    robots: { index: false },
  };
}

const SearchPage = async ({ searchParams }: PageProps<"/search">) => {
  const { q } = await searchParams;
  const query = typeof q === "string" ? q.trim() : "";
  const results = searchNews(query);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

      <header className="border-b-2 border-ink pb-8 mb-10">

        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
          Search
        </h1>

        <SearchForm
          key={query}
          defaultValue={query}
          autoFocus={!query}
          className="mt-6 max-w-xl"
          inputClassName="py-3 text-base"
        />

        {query && (
          <p className="mt-4 text-muted">
            {results.length === 0
              ? "No stories"
              : results.length === 1
                ? "1 story"
                : `${results.length} stories`}{" "}
            matching <span className="text-ink font-medium">&ldquo;{query}&rdquo;</span>
          </p>
        )}

      </header>

      {results.length > 0 && <NewsGrid articles={results} />}

      {query && results.length === 0 && (
        <p className="py-10 text-center text-muted">
          Try different or fewer words, or check the spelling.
        </p>
      )}

    </section>
  );
};

export default SearchPage;
