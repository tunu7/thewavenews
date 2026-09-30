import type { Metadata } from "next";

import NotFoundMessage from "@/components/site/NotFoundMessage";
import SiteShell from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Page not found | The Wave News",
};

// Unmatched URLs render here, outside the (site) layout, so add the site chrome
export default function NotFound() {
  return (
    <SiteShell>
      <NotFoundMessage />
    </SiteShell>
  );
}
