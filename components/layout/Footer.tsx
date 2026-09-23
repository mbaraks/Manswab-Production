import Link from "next/link";

const navigation = [
  { label: "Stories", href: "/stories" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] px-6 py-16 md:px-20 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <Link
              href="/"
              className="font-display text-4xl font-light tracking-[0.02em]"
              style={{ color: "#FAF8F5" }}
            >
              Manswab Production
            </Link>

            <p
              className="mt-6 max-w-md text-sm leading-7"
              style={{ color: "#B8B1A9" }}
            >
              Wedding photography created with intention, presence, and a
              deep appreciation for the moments that matter most.
            </p>
          </div>

          <div className="md:col-span-3">
            <p
              className="mb-6 text-xs uppercase tracking-[0.25em]"
              style={{ color: "#D8C3A5" }}
            >
              Explore
            </p>

            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="w-fit text-sm transition-colors duration-300 hover:text-[#D8C3A5]"
                  style={{ color: "#FAF8F5" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3">
            <p
              className="mb-6 text-xs uppercase tracking-[0.25em]"
              style={{ color: "#D8C3A5" }}
            >
              Connect
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="w-fit text-sm transition-colors duration-300 hover:text-[#D8C3A5]"
                style={{ color: "#FAF8F5" }}
              >
                Instagram
              </a>

              <a
                href="#"
                className="w-fit text-sm transition-colors duration-300 hover:text-[#D8C3A5]"
                style={{ color: "#FAF8F5" }}
              >
                Facebook
              </a>

              <a
                href="mailto:"
                className="w-fit text-sm transition-colors duration-300 hover:text-[#D8C3A5]"
                style={{ color: "#FAF8F5" }}
              >
                Email
              </a>

              <Link
                href="/contact"
                className="mt-2 w-fit border-b pb-1 text-sm transition-colors duration-300 hover:text-[#D8C3A5]"
                style={{
                  color: "#FAF8F5",
                  borderColor: "#D8C3A5",
                }}
              >
                Make an enquiry →
              </Link>
            </div>
          </div>
        </div>

        <div
          className="mt-16 border-t pt-6 md:mt-24"
          style={{ borderColor: "#3A3A3A" }}
        >
          <div className="flex flex-col gap-4 text-xs md:flex-row md:items-center md:justify-between">
            <p style={{ color: "#8F8A84" }}>
              © {new Date().getFullYear()} Manswab Production. All rights
              reserved.
            </p>

            <p
              className="uppercase tracking-[0.15em]"
              style={{ color: "#8F8A84" }}
            >
              Weddings · Stories · Moments
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
