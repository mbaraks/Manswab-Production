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

  return (
    <>
      <header
        className="fixed top-0 right-0 left-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled
            ? "rgba(250,248,245,0.96)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(216,195,165,0.3)"
            : "1px solid transparent",
        }}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-10">
          {/* Logo */}
          <Link
            href="/"
            className="text-base tracking-[0.18em] uppercase md:text-lg"
            style={{
              color: "#1A1A1A",
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
                  className="text-sm tracking-widest uppercase transition-colors duration-200"
                  style={{
                    color: isActive ? "#7A5C45" : "#5A5A5A",
                    letterSpacing: "0.12em",
                    fontWeight: 400,
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
              className="hidden items-center px-6 py-3 text-sm tracking-widest uppercase transition-all duration-200 lg:inline-flex"
              style={{
                backgroundColor: "#D8C3A5",
                color: "#1A1A1A",
                borderRadius: "12px",
                letterSpacing: "0.1em",
                fontWeight: 400,
              }}
            >
              Begin Your Story
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
                  backgroundColor: "#1A1A1A",
                  transform: menuOpen
                    ? "translateY(4px) rotate(45deg)"
                    : "none",
                }}
              />

              <span
                className="block h-px w-4 transition-all duration-300"
                style={{
                  backgroundColor: "#1A1A1A",
                  opacity: menuOpen ? 0 : 1,
                }}
              />

              <span
                className="block h-px w-6 origin-center transition-all duration-300"
                style={{
                  backgroundColor: "#1A1A1A",
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
          transition:
            "opacity 500ms ease, transform 500ms ease",
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