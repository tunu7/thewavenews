const PageHeader = ({ eyebrow, title, children }) => {
  return (
    <header className="border-b-2 border-ink pb-8 mb-12">

      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          {eyebrow}
        </p>
      )}

      <h1 className="mt-2 font-serif text-4xl sm:text-5xl font-bold tracking-tight">
        {title}
      </h1>

      {children && (
        <div className="mt-4 max-w-2xl text-lg text-muted leading-relaxed">
          {children}
        </div>
      )}

    </header>
  );
};

export default PageHeader;
