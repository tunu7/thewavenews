import PageHeader from "@/components/site/PageHeader";
import { company } from "@/data/company";

export const metadata = {
  title: "Careers | The Wave News",
  description: "Work with The Wave News and report on Arunachal Pradesh.",
};

const roles = [
  {
    title: "Reporters",
    text: "Cover politics, business, sport and community news across the state.",
  },
  {
    title: "District correspondents",
    text: "Be our eyes and ears in your district — freelance and part-time welcome.",
  },
  {
    title: "Photographers & video",
    text: "Capture the stories and landscapes of the Northeast.",
  },
];

export default function CareersPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

      <PageHeader eyebrow="Careers" title="Work with us">
        We&apos;re always looking for curious, careful people who care about
        Arunachal Pradesh and want to tell its stories.
      </PageHeader>

      <div className="rounded-md border border-rule bg-white p-6 sm:p-8">
        <h2 className="font-serif text-2xl font-semibold">
          Open positions
        </h2>
        <p className="mt-2 text-muted">
          There are no open positions right now — but we welcome applications
          for the roles below at any time.
        </p>
      </div>

      <h2 className="mt-12 font-serif text-3xl font-bold border-t-2 border-ink pt-4 mb-8">
        Who we&apos;re looking for
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {roles.map((role) => (
          <div key={role.title}>
            <h3 className="font-serif text-xl font-semibold">
              {role.title}
            </h3>
            <p className="mt-2 text-muted leading-relaxed">
              {role.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 border-t border-rule pt-8">
        <h2 className="font-serif text-2xl font-semibold">
          How to apply
        </h2>
        <p className="mt-2 text-muted max-w-2xl leading-relaxed">
          Email your CV, a short note about yourself and two or three samples
          of your work to{" "}
          <a
            href={`mailto:${company.emails.careers}?subject=Job application`}
            className="font-medium text-brand hover:underline underline-offset-4"
          >
            {company.emails.careers}
          </a>
          .
        </p>
      </div>

    </section>
  );
}
