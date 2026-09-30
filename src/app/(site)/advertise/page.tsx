import PageHeader from "@/components/site/PageHeader";
import { company } from "@/data/company";

export const metadata = {
  title: "Advertise With Us | The Wave News",
  description:
    "Reach readers across Arunachal Pradesh and Northeast India with The Wave News.",
};

const options = [
  {
    title: "Display ads",
    text: "Banner placements on the homepage, category pages and articles.",
  },
  {
    title: "Sponsored stories",
    text: "Clearly labelled partner content that tells your story in depth.",
  },
  {
    title: "Jobs & notices",
    text: "Recruitment ads, tenders and public notices in our Jobs section.",
  },
];

export default function AdvertisePage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

      <PageHeader eyebrow="Advertise" title="Reach the Northeast">
        Put your business, event or announcement in front of readers across
        Arunachal Pradesh and Northeast India.
      </PageHeader>

      <div className="grid md:grid-cols-3 gap-6">
        {options.map((option, i) => (
          <div
            key={option.title}
            className="rounded-md bg-white border border-rule p-6"
          >
            <p className="font-serif text-3xl font-bold text-brand/30">
              0{i + 1}
            </p>
            <h2 className="mt-3 font-serif text-xl font-semibold">
              {option.title}
            </h2>
            <p className="mt-2 text-muted leading-relaxed">
              {option.text}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted max-w-2xl">
        Advertising never influences our news coverage. Sponsored content is
        always clearly marked.
      </p>

      <div className="mt-12 rounded-md bg-ink text-white p-8 sm:p-10 sm:flex items-center justify-between gap-6">
        <div>
          <p className="font-serif text-2xl sm:text-3xl font-semibold">
            Ready to advertise?
          </p>
          <p className="mt-2 text-white/60">
            Tell us about your campaign and we&apos;ll send rates and availability.
          </p>
        </div>
        <a
          href={`mailto:${company.emails.advertising}?subject=Advertising enquiry`}
          className="mt-6 sm:mt-0 inline-block shrink-0 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink hover:bg-white/90 transition-colors"
        >
          Email {company.emails.advertising}
        </a>
      </div>

    </section>
  );
}
