import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaSearch,
} from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      {/* Top Bar */}

      <div className="bg-slate-950 text-white border-b border-slate-800">

        <div className="max-w-7xl mx-auto px-4">

          <div className="h-20 flex items-center justify-between">

            {/* Logo */}

            <Link
              to="/"
              className="flex items-center gap-3"
            >
              <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                W
              </div>

              <div>
                <h1 className="text-2xl font-extrabold">
                  THE WAVE NEWS
                </h1>

                <p className="text-xs text-slate-400">
                  Arunachal's Voice
                </p>
              </div>
            </Link>

            {/* Search */}

            <div className="hidden lg:flex items-center">

              <div className="relative">

                <input
                  type="text"
                  placeholder="Search news..."
                  className="bg-slate-800 text-white rounded-full px-5 py-2 pl-10 outline-none"
                />

                <FaSearch
                  className="absolute left-3 top-3"
                />
              </div>

            </div>

            {/* Mobile Menu */}

            <button
              className="lg:hidden text-2xl"
              onClick={() => setOpen(!open)}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>

          </div>

        </div>
      </div>

      {/* Navigation */}

      <div className="hidden lg:block bg-blue-700 text-white">

        <div className="max-w-7xl mx-auto">

          <ul className="flex items-center gap-8 px-4 h-14 font-medium">

            {menus.map((item) => (
              <li key={item}>
                <Link
                  to="/"
                  className="hover:text-blue-200"
                >
                  {item}
                </Link>
              </li>
            ))}

          </ul>

        </div>

      </div>

      {/* Mobile Drawer */}

      <div
        className={`fixed top-0 left-0 h-screen w-72 bg-slate-950 z-50 transition-all duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        <div className="p-5">

          <div className="flex justify-between">

            <h2 className="text-white text-xl font-bold">
              THE WAVE NEWS
            </h2>

            <button
              className="text-white"
              onClick={() => setOpen(false)}
            >
              <FaTimes />
            </button>

          </div>

          <ul className="mt-10 space-y-5 text-white">

            {menus.map((item) => (
              <li key={item}>
                <Link to="/">
                  {item}
                </Link>
              </li>
            ))}

          </ul>

        </div>

      </div>
    </>
  );
}