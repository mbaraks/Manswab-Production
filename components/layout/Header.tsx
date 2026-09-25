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

  const headerTextColor = scrolled ? "#1A1A1A" : "#F3EEE8";

  const inactiveNavColor = scrolled
    ? "#5A5A5A"
    : "#D8C3A5";

  const navHoverColor = scrolled
    ? "#7A5C45"
    : "#D8C3A5";

  return (
    <>
      <header
        className="fixed top-0 right-0 left-0 z-50 transition-all duration-500 ease-out"
        style={{
          backgroundColor: scrolled
            ? "rgba(250,248,245,0.96)"
            : "rgba(26,26,26,0.03)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(8px)",
          WebkitBackdropFilter: scrolled
            ? "blur(12px)"
            : "blur(8px)",
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
            className="font-display text-[21px] font-medium tracking-[0.02em] transition-opacity duration-500 ease-out hover:opacity-75 md:text-[24px]"
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
                  className="group relative text-sm uppercase tracking-[0.12em] transition-all duration-500 ease-out"
                  style={{
                    color: isActive
                      ? navHoverColor
                      : inactiveNavColor,
                    fontWeight: 400,
                    textShadow: scrolled
                      ? "none"
                      : "0 1px 10px rgba(0,0,0,0.25)",
                  }}
                >
                  {label}

                  <span
                    className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 transition-all duration-500 ease-out group-hover:w-full"
                    style={{
                      backgroundColor: navHoverColor,
                      boxShadow: `0 0 10px ${navHoverColor}`,
                    }}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA + mobile menu */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <Link
              href="/consultation"
              className="group hidden items-center gap-4 rounded-[12px] bg-[#D8C3A5] px-6 py-4 text-sm uppercase tracking-[0.12em] text-[#1A1A1A] transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-[#7A5C45] hover:text-[#FAF8F5] hover:shadow-[0_10px_30px_rgba(26,26,26,0.12)] active:translate-y-0 active:scale-[0.98] lg:inline-flex"
              style={{
                fontWeight: 400,
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <span>Begin Your Story</span>

              <span
                className="transition-transform duration-500 ease-out group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="flex flex-col gap-1.5 p-2 transition-opacity duration-300 hover:opacity-70 lg:hidden"
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
          transform: menuOpen
            ? "translateY(0)"
            : "translateY(-8px)",
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
                  className="group relative w-fit font-display text-4xl font-light transition-all duration-500"
                  style={{
                    color: isActive
                      ? "#7A5C45"
                      : "#1A1A1A",
                  }}
                >
                  {label}

                  <span
                    className="absolute -bottom-2 left-0 h-px w-0 bg-[#7A5C45] transition-all duration-500 ease-out group-hover:w-full"
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile CTA */}
          <Link
            href="/consultation"
            className="group inline-flex max-w-[280px] items-center justify-center gap-4 rounded-[12px] bg-[#D8C3A5] px-8 py-4 text-sm uppercase tracking-[0.1em] text-[#1A1A1A] transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-[#7A5C45] hover:text-[#FAF8F5] hover:shadow-[0_10px_30px_rgba(26,26,26,0.12)] active:scale-[0.98]"
          >
            <span>Begin Your Story</span>

            <span
              className="transition-transform duration-500 ease-out group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
