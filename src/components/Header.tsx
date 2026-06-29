import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { SITE, PROJECT_FILTERS } from "@/data/content";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProjectsOpen(false);
  }, [location.pathname]);

  const linkBase = "text-[14px] font-medium transition-colors duration-200";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-header-bg text-header-text ${
        scrolled ? "shadow-[0_1px_0_0_rgba(128,128,128,0.25)]" : ""
      }`}
    >
      <div className="container-page flex items-center justify-between h-[76px]">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src={SITE.logoImage}
            alt={`${SITE.shortName} logo`}
            className="h-9 w-9 rounded-full object-cover ring-1 ring-header-border/30 transition-transform group-hover:scale-105"
          />
          <span className="font-display text-[19px] font-bold text-header-text">
            {SITE.shortName}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "text-header-text" : "text-header-muted hover:text-header-text"}`
            }
          >
            Home
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setProjectsOpen(true)}
            onMouseLeave={() => setProjectsOpen(false)}
          >
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${linkBase} flex items-center gap-1 ${
                  isActive ? "text-header-text" : "text-header-muted hover:text-header-text"
                }`
              }
            >
              Projects
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${projectsOpen ? "rotate-180" : ""}`}
              />
            </NavLink>

            <AnimatePresence>
              {projectsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 top-full -translate-x-1/2 pt-3 w-56"
                >
                  <div className="rounded-xl border border-header-border/20 bg-header-bg text-header-text shadow-xl shadow-black/40 p-1.5 overflow-hidden">
                    {PROJECT_FILTERS.map((f) => (
                      <Link
                        key={f.value}
                        to={f.value === "all" ? "/projects" : `/projects?category=${f.value}`}
                        className="block rounded-lg px-3 py-2 text-[13px] text-header-text hover:bg-header-text/10 transition-colors"
                      >
                        {f.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink
            to="/experience"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "text-header-text" : "text-header-muted hover:text-header-text"}`
            }
          >
            Experience
          </NavLink>
          <NavLink
            to="/credentials"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "text-header-text" : "text-header-muted hover:text-header-text"}`
            }
          >
            Credentials
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "text-header-text" : "text-header-muted hover:text-header-text"}`
            }
          >
            About
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-header-text text-header-bg px-5 py-2.5 text-[13px] font-semibold hover:opacity-85 transition-opacity duration-200"
          >
            Contact
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-header-text"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-header-bg text-header-text border-t border-header-border/15"
          >
            <div className="container-page py-4 flex flex-col gap-1">
              {[
                { label: "Home", href: "/" },
                { label: "Projects — All Work", href: "/projects" },
                { label: "Competition Projects", href: "/projects?category=competition" },
                { label: "Educational Projects", href: "/projects?category=educational" },
                { label: "Experience", href: "/experience" },
                { label: "Credentials", href: "/credentials" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="rounded-lg px-3 py-3 text-[15px] text-header-text hover:bg-header-text/10 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
