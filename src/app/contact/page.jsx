import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

import PageHeader from "@/components/PageHeader";
import { company } from "@/data/company";

export const metadata = {
  title: "Contact Us | The Wave News",
  description: "Get in touch with The Wave News newsroom.",
};

const channels = [
  {
    title: "News tips",
    text: "Seen something we should report? Send us the details, photos or documents.",
    email: company.emails.newsroom,
  },
  {
    title: "General enquiries",
    text: "Questions, feedback or corrections about our coverage.",
    email: company.emails.general,
  },
  {
    title: "Advertising",
    text: "Promote your business or event to readers across the Northeast.",
    email: company.emails.advertising,
  },
  {
    title: "Careers",
    text: "Want to report for The Wave News? Send your CV and work samples.",
    email: company.emails.careers,
  },
];

export default function ContactPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

      <PageHeader eyebrow="Contact" title="Get in touch">
        Reach the right team directly by email, or visit us in {company.location.split(",")[0]}.
      </PageHeader>

      <div className="grid lg:grid-cols-3 gap-12">

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          {channels.map((channel) => (
            <div
              key={channel.title}
              className="rounded-md bg-white border border-rule p-6"
            >
              <h2 className="font-serif text-xl font-semibold">
                {channel.title}
              </h2>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {channel.text}
              </p>
              <a
                href={`mailto:${channel.email}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand hover:underline underline-offset-4"
              >
                <FaEnvelope className="text-xs" />
                {channel.email}
              </a>
            </div>
          ))}
        </div>

        <aside className="lg:border-l lg:border-rule lg:pl-10">

          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] pb-3 border-b-2 border-ink">
            Office
          </h2>

          <ul className="mt-5 space-y-5 text-sm">
            <li className="flex gap-3">
              <FaMapMarkerAlt className="mt-0.5 shrink-0 text-brand" />
              <span>{company.address}</span>
            </li>
            <li className="flex gap-3">
              <FaPhone className="mt-0.5 shrink-0 text-brand" />
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="hover:text-brand"
              >
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <FaEnvelope className="mt-0.5 shrink-0 text-brand" />
              <a
                href={`mailto:${company.emails.general}`}
                className="hover:text-brand"
              >
                {company.emails.general}
              </a>
            </li>
          </ul>

        </aside>

      </div>

    </section>
  );
}
