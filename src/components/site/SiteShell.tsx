import type { ReactNode } from "react";

import Navbar from "./Navbar";
import BreakingNews from "./BreakingNews";
import Footer from "./Footer";

// Public site chrome. Used by the (site) layout and the root 404 page,
// which renders outside any route group.
const SiteShell = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <BreakingNews />

      <main className="flex-1">{children}</main>

      <Footer />
    </>
  );
};

export default SiteShell;
