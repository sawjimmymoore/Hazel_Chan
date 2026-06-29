import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { SITE, NAV, SOCIAL_MEDIA } from "@/data/content";

export default function Footer() {
  return (
    <footer className="relative bg-header-bg text-header-text overflow-hidden border-t border-header-border/15">
      <div className="grain-overlay" />
      <div className="container-page relative py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12 md:gap-8">
          <div>
            <p className="font-display text-[24px] font-semibold leading-tight mb-3 text-header-text">
              Let's create something
              <br />
              meaningful together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-header-text text-[14px] font-medium underline underline-offset-3 hover:opacity-80 transition-opacity"
            >
              Get in touch
            </Link>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-header-muted mb-4">Sitemap</p>
            <ul className="space-y-2.5">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-[14px] text-header-text/80 hover:text-header-text transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-header-muted mb-4">Elsewhere</p>
            <ul className="space-y-2.5">
              {SOCIAL_MEDIA.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.value}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-[14px] text-header-text/80 hover:text-header-text transition-colors"
                  >
                    <img src={s.path} alt="" className="size-4" />
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 text-[14px] text-header-text/80 hover:text-header-text transition-colors"
                >
                  <Mail size={14} /> {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-header-border/15 flex flex-col sm:flex-row justify-between gap-3 text-[12px] text-header-muted">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>{SITE.location}</span>
        </div>
      </div>
    </footer>
  );
}
