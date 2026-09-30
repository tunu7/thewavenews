"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaBars,
  FaTimes,
  FaSearch,
} from "react-icons/fa";

const menus = [
  "Home",
  "Arunachal",
  "India",
  "Politics",
  "Sports",
  "Business",
  "Jobs",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the drawer with Escape and stop the page scrolling behind it
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header>

      {/* Masthead */}

      <div className="bg-paper border-b border-rule">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="h-20 sm:h-24 flex items-center justify-between gap-4">

            <button
              className="lg:hidden text-xl p-2 -ml-2"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <FaBars />
            </button>

            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-brand flex items-center justify-center text-white font-serif text-2xl font-semibold">
                W
              </div>

              <div className="leading-none">
                <p className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
                  The Wave News
                </p>

                <p className="hidden sm:block mt-1 text-xs uppercase tracking-[0.2em] text-muted">
                  Arunachal&apos;s Voice
                </p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center">

              <label className="relative">

                <span className="sr-only">Search news</span>

                <FaSearch
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-muted"
                />

                <input
                  type="search"
                  placeholder="Search news"
                  className="w-64 bg-white border border-rule rounded-full py-2 pl-10 pr-4 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 transition"
                />
              </label>

            </div>

            <button
              className="lg:hidden text-lg p-2 -mr-2"
              aria-label="Search"
            >
              <FaSearch />
            </button>

          </div>

        </div>
      </div>

      {/* Navigation */}

      <nav className="hidden lg:block sticky top-0 z-40 bg-paper/95 backdrop-blur border-b border-ink">

        <ul className="max-w-7xl mx-auto px-6 flex items-center gap-8 h-12 text-sm font-medium">

          {menus.map((item) => {
            const active = item === "Home" && pathname === "/";

            return (
              <li key={item}>
                <Link
                  href="/"
                  className={`relative py-3 transition-colors hover:text-brand ${
                    active
                      ? "text-brand after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-brand"
                      : ""
                  }`}
                >
                  {item}
                </Link>
              </li>
            );
          })}

        </ul>

      </nav>

      {/* Mobile Drawer */}

      <div
        className={`lg:hidden fixed inset-0 z-50 bg-ink/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-72 max-w-[85vw] bg-paper z-50 shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!open}
      >

        <div className="flex items-center justify-between h-20 px-5 border-b border-rule">

          <p className="font-serif text-xl font-bold">
            The Wave News
          </p>

          <button
            className="p-2 -mr-2 text-lg"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>

        </div>

        <ul className="px-5 py-4">

          {menus.map((item) => (
            <li key={item}>
              <Link
                href="/"
                className="block py-3 border-b border-rule text-base font-medium hover:text-brand"
                onClick={() => setOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}

        </ul>

      </div>
    </header>
  );
}
