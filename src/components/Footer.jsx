import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          <div>

            <h2 className="text-3xl font-bold">
              THE WAVE NEWS
            </h2>

            <p className="mt-4 text-slate-400">
              Delivering trusted news from
              Arunachal Pradesh and Northeast India.
            </p>

          </div>

          <div>

            <h3 className="font-bold mb-4">
              Categories
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li>Arunachal</li>
              <li>Politics</li>
              <li>Sports</li>
              <li>Business</li>
            </ul>

          </div>

          <div>

            <h3 className="font-bold mb-4">
              Company
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li>About</li>
              <li>Contact</li>
              <li>Advertise</li>
              <li>Careers</li>
            </ul>

          </div>

          <div>

            <h3 className="font-bold mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4 text-2xl">

              <FaFacebook />

              <FaInstagram />

              <FaYoutube />

              <FaTwitter />

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-5 text-center text-slate-500">

          © 2026 The Wave News.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}