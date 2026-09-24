"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/stories", label: "Stories" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const headerTextColor = scrolled ? "#1A1A1A" : "#FAF8F5";
  const inactiveNavColor = scrolled ? "#5A5A5A" : "rgba(250,248,245,0.9)";

  return (
    <>
      <header
        className="fixed top-0 right-0 left-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled
            ? "rgba(250,248,245,0.96)"
            : "rgba(26,26,26,0.03)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(8px)",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "blur(8px)",
          borderBottom: scrolled
            ? "1px solid rgba(216,195,165,0.3)"
            : "1px solid rgba(250,248,245,0.08)",
        }}
      >
        {!scrolled && (
          <div
            className="pointer-events-none absolute inset-x-0 top-full h-24"
            style={{
              background:
                "linear-gradient(to bottom, rgba(26,26,26,0.04), rgba(26,26,26,0))",
            }}
            aria-hidden="true"
          />
        )}

        <div className="relative mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-10">
          {/* Logo */}
          <Link
            href="/"
            className="text-base tracking-[0.18em] uppercase transition-opacity duration-300 hover:opacity-80 md:text-lg"
            style={{
              color: headerTextColor,
              textShadow: scrolled
                ? "none"
                : "0 1px 12px rgba(0,0,0,0.25)",
            }}
          >
            Manswab Production
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  className="text-sm tracking-widest uppercase transition-colors duration-300"
                  style={{
                    color: isActive
                      ? scrolled
                        ? "#7A5C45"
                        : "#D8C3A5"
                      : inactiveNavColor,
                    letterSpacing: "0.12em",
                    fontWeight: 400,
                    textShadow: scrolled
                      ? "none"
                      : "0 1px 10px rgba(0,0,0,0.25)",
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + mobile menu */}
          <div className="flex items-center gap-4">

<Link
  href="/consultation"
  className="group relative hidden items-center gap-3 overflow-hidden rounded-[12px] px-6 py-3 text-sm uppercase tracking-widest transition-all duration-500 hover:-translate-y-[1px] active:scale-[0.97] lg:inline-flex"
  style={{
    backgroundColor: "#D8C3A5",
    color: "#1A1A1A",
    letterSpacing: "0.1em",
    fontWeight: 400,
    boxShadow: scrolled
      ? "none"
      : "0 4px 20px rgba(0,0,0,0.12)",
    WebkitTapHighlightColor: "transparent",
  }}
>
  {/* Hover background */}
  <span
    className="absolute inset-0 origin-left scale-x-0 bg-[#7A5C45] transition-transform duration-500 ease-out group-hover:scale-x-100"
    aria-hidden="true"
  />

  <span className="relative z-10 transition-colors duration-500 group-hover:text-[#FAF8F5]">
    Begin Your Story
  </span>

  <span
    className="relative z-10 transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#FAF8F5]"
    aria-hidden="true"
  >
    →
  </span>
</Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="flex flex-col gap-1.5 p-2 lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span
                className="block h-px w-6 origin-center transition-all duration-300"
                style={{
                  backgroundColor: headerTextColor,
                  transform: menuOpen
                    ? "translateY(4px) rotate(45deg)"
                    : "none",
                }}
              />
              <span
                className="block h-px w-4 transition-all duration-300"
                style={{
                  backgroundColor: headerTextColor,
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block h-px w-6 origin-center transition-all duration-300"
                style={{
                  backgroundColor: headerTextColor,
                  transform: menuOpen
                    ? "translateY(-4px) rotate(-45deg)"
                    : "none",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation */}
      <div
        className="fixed inset-0 z-40 flex flex-col lg:hidden"
        style={{
          backgroundColor: "#FAF8F5",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
          transition: "opacity 500ms ease, transform 500ms ease",
        }}
      >
        <div className="flex flex-1 flex-col justify-center px-8 pt-24 pb-12">
          <nav className="mb-12 flex flex-col gap-8">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  className="font-display text-4xl transition-colors duration-200"
                  style={{
                    color: isActive ? "#7A5C45" : "#1A1A1A",
                    fontWeight: 300,
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/consultation"
            className="inline-flex max-w-[280px] items-center justify-center px-8 py-4 text-sm tracking-widest uppercase"
            style={{
              backgroundColor: "#D8C3A5",
              color: "#1A1A1A",
              borderRadius: "12px",
              letterSpacing: "0.1em",
            }}
          >
            Begin Your Story
          </Link>

          <div className="mt-12 flex gap-6">
            <a
              href="#"
              className="text-sm tracking-widest uppercase"
              style={{
                color: "#5A5A5A",
                letterSpacing: "0.12em",
              }}
            >
              Instagram
            </a>

            <a
              href="#"
              className="text-sm tracking-widest uppercase"
              style={{
                color: "#5A5A5A",
                letterSpacing: "0.12em",
              }}
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
