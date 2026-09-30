import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const columns = [
  {
    title: "Categories",
    links: ["Arunachal", "Politics", "Sports", "Business"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Advertise", "Careers"],
  },
];

const socials = [
  { label: "Facebook", icon: FaFacebook },
  { label: "Instagram", icon: FaInstagram },
  { label: "YouTube", icon: FaYoutube },
  { label: "Twitter", icon: FaTwitter },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white mt-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>

            <p className="font-serif text-2xl font-bold">
              The Wave News
            </p>

            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              Delivering trusted news from
              Arunachal Pradesh and Northeast India.
            </p>

          </div>

          {columns.map((column) => (
            <div key={column.title}>

              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">
                {column.title}
              </h3>

              <ul className="space-y-2.5 text-sm">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link href="/" className="text-white/80 hover:text-white">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>

            </div>
          ))}

          <div>

            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">
              Follow Us
            </h3>

            <div className="flex gap-3">
              {socials.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center text-white/80 hover:bg-white hover:text-ink transition"
                >
                  <Icon />
                </a>
              ))}
            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-sm text-white/50">
          © 2026 The Wave News. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}
