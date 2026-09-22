import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[var(--color-cream)]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link
              href="/"
              className="font-[var(--font-display)] text-3xl"
            >
              Manswab Production
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--color-muted-ink)]">
              Luxury wedding photography crafted around authentic moments,
              meaningful stories, and timeless imagery.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-medium uppercase tracking-[0.2em]">
              Explore
            </h2>

            <nav className="mt-5 flex flex-col gap-3 text-sm">
              <Link href="/stories" className="hover:opacity-60">
                Stories
              </Link>

              <Link href="/experience" className="hover:opacity-60">
                Experience
              </Link>

              <Link href="/about" className="hover:opacity-60">
                About
              </Link>

              <Link href="/contact" className="hover:opacity-60">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-medium uppercase tracking-[0.2em]">
              Connect
            </h2>

            <div className="mt-5 flex flex-col gap-3 text-sm">
              <a href="#" className="hover:opacity-60">
                Instagram
              </a>

              <a href="#" className="hover:opacity-60">
                Facebook
              </a>

              <a href="#" className="hover:opacity-60">
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-black/10 pt-6 text-xs text-[var(--color-muted-ink)]">
          © {new Date().getFullYear()} Manswab Production. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}