"use client";

import { FormEvent } from "react";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section className="bg-[#FAF8F5] px-6 py-28 md:px-20 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-16 md:grid-cols-12 md:gap-8">
          {/* Section label */}
          <div className="md:col-span-3">
            <p
              className="text-xs uppercase tracking-[0.25em]"
              style={{ color: "#7A5C45" }}
            >
              Send An Enquiry
            </p>
          </div>

          {/* Form */}
          <div className="md:col-span-8 md:col-start-5">
            <h2
              className="font-display text-[clamp(40px,5vw,68px)] font-light leading-[1.05]"
              style={{ color: "#1A1A1A" }}
            >
              Tell us a little
              <br />
              about your day.
            </h2>

            <p
              className="mt-8 max-w-xl text-base leading-8 md:text-lg"
              style={{ color: "#5A5A5A" }}
            >
              Share a few details about your celebration and we&apos;ll be in
              touch to continue the conversation.
            </p>

            <form onSubmit={handleSubmit} className="mt-14 space-y-8">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block text-xs uppercase tracking-[0.2em]"
                  style={{ color: "#7A5C45" }}
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full border-b border-[#D8C3A5] bg-transparent px-0 py-4 text-base outline-none transition-colors duration-300 placeholder:text-[#5A5A5A]/50 focus:border-[#7A5C45]"
                  style={{ color: "#1A1A1A" }}
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-xs uppercase tracking-[0.2em]"
                  style={{ color: "#7A5C45" }}
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border-b border-[#D8C3A5] bg-transparent px-0 py-4 text-base outline-none transition-colors duration-300 placeholder:text-[#5A5A5A]/50 focus:border-[#7A5C45]"
                  style={{ color: "#1A1A1A" }}
                  placeholder="you@example.com"
                />
              </div>

              {/* Wedding date */}
              <div>
                <label
                  htmlFor="date"
                  className="mb-3 block text-xs uppercase tracking-[0.2em]"
                  style={{ color: "#7A5C45" }}
                >
                  Wedding Date
                </label>

                <input
                  id="date"
                  name="date"
                  type="date"
                  className="w-full border-b border-[#D8C3A5] bg-transparent px-0 py-4 text-base outline-none transition-colors duration-300 focus:border-[#7A5C45]"
                  style={{ color: "#1A1A1A" }}
                />
              </div>

              {/* Venue */}
              <div>
                <label
                  htmlFor="venue"
                  className="mb-3 block text-xs uppercase tracking-[0.2em]"
                  style={{ color: "#7A5C45" }}
                >
                  Venue / Location
                </label>

                <input
                  id="venue"
                  name="venue"
                  type="text"
                  className="w-full border-b border-[#D8C3A5] bg-transparent px-0 py-4 text-base outline-none transition-colors duration-300 placeholder:text-[#5A5A5A]/50 focus:border-[#7A5C45]"
                  style={{ color: "#1A1A1A" }}
                  placeholder="Venue or location"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-3 block text-xs uppercase tracking-[0.2em]"
                  style={{ color: "#7A5C45" }}
                >
                  Tell Us More
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none border-b border-[#D8C3A5] bg-transparent px-0 py-4 text-base outline-none transition-colors duration-300 placeholder:text-[#5A5A5A]/50 focus:border-[#7A5C45]"
                  style={{ color: "#1A1A1A" }}
                  placeholder="Tell us about your celebration..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group inline-flex items-center gap-4 rounded-[12px] bg-[#D8C3A5] px-6 py-4 text-sm uppercase tracking-[0.12em] text-[#1A1A1A] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#7A5C45] hover:text-[#FAF8F5] hover:shadow-[0_10px_30px_rgba(26,26,26,0.12)] active:translate-y-0 active:scale-[0.98]"
              >
                <span>Send Enquiry</span>

                <span
                  className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
