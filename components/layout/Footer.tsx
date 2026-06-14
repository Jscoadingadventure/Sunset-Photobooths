import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-olive/20 bg-olive text-mint">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="#top" className="inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                alt={SITE.name}
                width={56}
                height={56}
                className="h-14 w-14 object-contain brightness-0 invert"
              />
              <div>
                <p className="text-lg font-bold uppercase tracking-wide text-white">
                  {SITE.name}
                </p>
                <p className="font-script text-2xl text-sunset">{SITE.tagline}</p>
              </div>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-mint/80">
              {SITE.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-mint/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-mint/80 transition-colors hover:text-white"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-mint/80">
              <li>
                <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-white">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone.replace(/\D/g, "")}`} className="transition-colors hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li>{SITE.serviceArea}</li>
            </ul>
            <div className="mt-6 flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-mint/80 transition-colors hover:text-sunset"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-mint/20 pt-8 text-sm text-mint/60 md:flex-row">
          <p>&copy; {year} {SITE.name}. All rights reserved.</p>
          <p>Serving Toronto &amp; the Greater Toronto Area</p>
        </div>
      </div>
    </footer>
  );
}
