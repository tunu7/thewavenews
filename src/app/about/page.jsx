import Link from "next/link";

import PageHeader from "@/components/PageHeader";
import { categories } from "@/data/categories";

export const metadata = {
  title: "About Us | The Wave News",
  description:
    "The Wave News delivers trusted news from Arunachal Pradesh and Northeast India.",
};

const values = [
  {
    title: "Accuracy first",
    text: "We verify before we publish, and we correct our mistakes openly.",
  },
  {
    title: "Local focus",
    text: "Stories from every district of Arunachal Pradesh and across the Northeast, told by people who know the region.",
  },
  {
    title: "Independence",
    text: "Our editorial decisions are made by our newsroom, separate from advertising.",
  },
];

export default function AboutPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

      <PageHeader eyebrow="About us" title="Arunachal's Voice">
        The Wave News delivers trusted news from Arunachal Pradesh and
        Northeast India — from the state capital to the most remote valleys.
      </PageHeader>

      <div className="grid lg:grid-cols-3 gap-12">

        <div className="lg:col-span-2 space-y-6 font-serif text-xl leading-9">
          <p>
            We started The Wave News to give the people of Arunachal Pradesh a
            reliable, independent source of news about the issues that shape
            their lives — infrastructure, politics, jobs, sport, culture and
            the environment.
          </p>
          <p>
            Our reporters cover the stories that national outlets often miss,
            and bring the wider news of India and the Northeast home to local
            readers.
          </p>
        </div>

        <aside className="lg:border-l lg:border-rule lg:pl-10">

          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] pb-3 border-b-2 border-ink">
            What we cover
          </h2>

          <ul className="divide-y divide-rule">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/category/${category.slug}`}
                  className="block py-3 font-medium hover:text-brand"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>

        </aside>

      </div>

      <h2 className="mt-16 font-serif text-3xl font-bold border-t-2 border-ink pt-4 mb-8">
        Our values
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {values.map((value) => (
          <div key={value.title}>
            <h3 className="font-serif text-xl font-semibold">
              {value.title}
            </h3>
            <p className="mt-2 text-muted leading-relaxed">
              {value.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-md bg-white border border-rule p-8 sm:flex items-center justify-between gap-6">
        <div>
          <p className="font-serif text-2xl font-semibold">
            Have a story we should cover?
          </p>
          <p className="mt-1 text-muted">
            Send us a tip — we read every message.
          </p>
        </div>
        <Link
          href="/contact"
          className="mt-4 sm:mt-0 inline-block shrink-0 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white hover:bg-brand-dark transition-colors"
        >
          Contact the newsroom
        </Link>
      </div>

    </section>
  );
}
