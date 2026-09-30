import Link from "next/link";

const NotFoundMessage = () => {
  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 py-24 text-center">

      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-alert">
        Error 404
      </p>

      <h1 className="mt-4 font-serif text-4xl sm:text-5xl font-bold tracking-tight">
        We couldn&apos;t find that story
      </h1>

      <p className="mt-4 text-lg text-muted">
        The page may have moved, or the link might be incorrect.
      </p>

      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-brand px-6 py-3 text-sm font-medium text-white hover:bg-brand-dark transition-colors"
      >
        Back to the homepage
      </Link>

    </section>
  );
};

export default NotFoundMessage;
