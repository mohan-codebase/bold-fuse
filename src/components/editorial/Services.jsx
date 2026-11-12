"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { home } from "@/content/home";
import { services } from "@/content/editorial/data";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

// Display order and names requested for the homepage service list.
const LIST = [
  ["service6", "People Management / HR"],
  ["service1", "Wellness and Mental Health"],
  ["service3", "Digital Marketing / Creative Branding and PR"],
  ["service0", "Business Automation"],
  ["service2", "Finance and Advisory Services"],
  ["service4", "Business Process Excellence"],
  ["service5", "Legal and Advisory Services"],
];

export default function Services({ withCta = true, background = "bg-white" }) {
  const items = LIST.map(([slug, title]) => ({
    ...services.find((s) => s.slug === slug),
    title,
  }));

  const hero = items[0];

  return (
    <section
      id="services"
      className={`section relative overflow-hidden ${background}`}
    >
      <div className="shell">
        <SectionHeading
          prominent
          eyebrow={home.services.eyebrow}
          title={home.services.title}
          lede={"Practical expertise to strengthen your people, processes and healthcare business.\nExplore solutions that simplify operations and support lasting growth."}
        />

        <Reveal
          y={24}
          data-cursor-theme="dark"
          className="relative isolate mt-8 overflow-hidden rounded-[2rem] border border-forest-soft/60 bg-forest p-4 sm:mt-10 sm:p-6 lg:mt-12 lg:p-8"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_0%_0%,rgba(2,170,119,0.32),transparent_60%),radial-gradient(ellipse_at_100%_100%,rgba(169,233,217,0.14),transparent_60%)]"
          >
            <svg
              viewBox="0 0 800 400"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full text-accent-soft"
              fill="none"
            >
              <path d="M-20 380C200 360 260 220 440 250S700 120 840 60" stroke="currentColor" opacity="0.14" />
              <path d="M60 420C260 390 340 290 500 310S740 210 860 150" stroke="currentColor" opacity="0.09" />
            </svg>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                sizes="(min-width:1024px) 38vw, 90vw"
                className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/10 to-transparent"
              />
              <div className="absolute inset-x-5 bottom-5 text-white">
                <p className="font-heading text-5xl leading-none font-bold tracking-[-0.04em]">
                  {items.length}
                  <span className="text-accent-soft">+</span>
                </p>
                <p className="mt-2 text-xs font-medium tracking-[0.12em] text-white/85 uppercase">
                  Services built around your growth
                </p>
              </div>
            </div>

            <RevealGroup as="ul" className="flex flex-col gap-2.5 sm:gap-3" stagger={0.06} amount={0.12}>
              {items.map((service, index) => (
                <RevealItem
                  as="li"
                  key={service.slug}
                  y={16}
                  className="w-full"
                >
                  <Link
                    href={service.path}
                    className="group flex min-h-[3.25rem] w-full items-center gap-3.5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-white transition-colors duration-200 hover:border-accent-soft/50 hover:bg-white/[0.08] hover:text-accent-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft focus-visible:ring-offset-2 focus-visible:ring-offset-forest sm:min-h-[3.5rem] sm:gap-4 sm:px-5 sm:py-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 font-heading text-xs font-bold text-accent-soft tabular-nums transition-colors duration-200 group-hover:border-accent-soft/40 group-hover:bg-accent-soft/10 sm:h-10 sm:w-10 sm:text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="grow text-sm font-semibold leading-snug sm:text-base lg:text-[1.0625rem]">
                      {service.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/90 transition-colors duration-200 group-hover:border-accent-soft/40 group-hover:bg-accent-soft/10 group-hover:text-accent-soft sm:h-9 sm:w-9"
                    >
                      <ArrowUpRight size={16} />
                    </span>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Reveal>

        {withCta && (
          <Reveal y={16} className="mt-8 flex justify-center sm:mt-10 lg:mt-12">
            <Button to="/services/" variant="secondary" withArrow={false}>
              View All Services
            </Button>
          </Reveal>
        )}
      </div>
    </section>
  );
}
