import Link from "next/link";

const contactDetails = [
  {
    label: "Email",
    value: "hello@manswabproduction.com",
    href: "mailto:hello@manswabproduction.com",
  },
  {
    label: "Phone",
    value: "+254 700 000 000",
    href: "tel:+254700000000",
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
  },
  {
    label: "Facebook",
    href: "#",
  },
];

export default function ContactDetails() {
  return (
    <section className="bg-[#F3EEE8] px-6 py-28 md:px-20 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-16 md:grid-cols-12 md:gap-8">
          {/* Section label */}
          <div className="md:col-span-3">
            <p
              className="text-xs uppercase tracking-[0.25em]"
              style={{ color: "#7A5C45" }}
            >
              Contact
            </p>
          </div>

          {/* Contact information */}
          <div className="md:col-span-8 md:col-start-5">
            <h2
              className="font-display text-[clamp(40px,5vw,68px)] font-light leading-[1.05]"
              style={{ color: "#1A1A1A" }}
            >
              We&apos;d love to hear from you.
            </h2>

            <p
              className="mt-8 max-w-xl text-base leading-8 md:text-lg"
              style={{ color: "#5A5A5A" }}
            >
              Tell us about your celebration, what you are planning, and what
              matters most to you. We&apos;ll get back to you as soon as
              possible.
            </p>

            {/* Contact details */}
            <div className="mt-12 border-t border-[#D8C3A5]">
              {contactDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="grid gap-3 border-b border-[#D8C3A5] py-6 md:grid-cols-12 md:gap-8"
                >
                  <p
                    className="text-xs uppercase tracking-[0.2em] md:col-span-3"
                    style={{ color: "#7A5C45" }}
                  >
                    {detail.label}
                  </p>

                  <Link
                    href={detail.href}
                    className="text-base transition-colors duration-300 hover:text-[#7A5C45] md:col-span-7 md:col-start-5 md:text-lg"
                    style={{ color: "#1A1A1A" }}
                  >
                    {detail.value}
                  </Link>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-12">
              <p
                className="text-xs uppercase tracking-[0.2em]"
                style={{ color: "#7A5C45" }}
              >
                Follow Along
              </p>

              <div className="mt-5 flex flex-wrap gap-6">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="border-b border-[#1A1A1A] pb-1 text-sm transition-colors duration-300 hover:border-[#7A5C45] hover:text-[#7A5C45]"
                    style={{ color: "#1A1A1A" }}
                  >
                    {social.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
