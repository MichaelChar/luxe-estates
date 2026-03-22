import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="mt-auto border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">
              Luxe<span className="text-muted-foreground">Estates</span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Curating exceptional properties for discerning buyers since 2018.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Explore
            </h4>
            <ul className="mt-3 space-y-2">
              {[
                { href: "/listings", label: "All Listings" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Property Types
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Houses</li>
              <li>Condos</li>
              <li>Townhouses</li>
              <li>Penthouses</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Contact
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>hello@luxeestates.com</li>
              <li>(800) 555-0100</li>
              <li>Los Angeles, CA</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} LuxeEstates. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
