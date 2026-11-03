import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Brain,
  CheckCircle2,
  Compass,
  Eye,
  Layers,
  Lightbulb,
  Phone,
  RefreshCw,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import aboutImage from "@/assets/about-healthcare-team-v1.jpg";
import founderImage from "@/assets/founder-keerthy-reddy.jpeg";
import { about } from "@/content/about";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Boldfuse, our founder Keerthy Reddy, our multidisciplinary team, and our vision to blend innovation with human potential.",
  alternates: { canonical: "/about/" },
};

const pillarIcons = [Compass, Zap, Sparkles];

const potentialIcons = [
  Brain,
  Lightbulb,
  Layers,
  RefreshCw,
  TrendingUp,
];

export default function AboutPage() {
  return (
    <main id="main-content" className="bg-white">
      <div className="shell pt-8 pb-16 sm:pt-12 lg:pb-24">
        {/* 1. Top Banner */}
        <section className="relative isolate overflow-hidden rounded-3xl bg-forest px-6 py-14 text-white sm:px-12 sm:py-20 lg:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_0%_0%,rgba(2,170,119,0.28),transparent_55%),radial-gradient(ellipse_at_100%_100%,rgba(97,198,168,0.18),transparent_50%)]"
          >
            <svg
              viewBox="0 0 1200 400"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full text-accent-soft"
              fill="none"
            >
              <path
                d="M620 440C830 400 800 230 1000 255S1170 110 1260 50M710 440C900 410 850 295 1050 315S1210 180 1260 140"
                stroke="currentColor"
                strokeWidth="1"
                opacity=".16"
              />
            </svg>
          </div>
          <p className="text-xs font-semibold tracking-[0.2em] text-accent-soft uppercase">
            Boldfuse
          </p>
          <h1 className="mt-5 max-w-3xl font-heading text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {about.topBanner.title}
          </h1>
          <p className="mt-5 max-w-2xl font-description text-lg leading-relaxed font-medium text-white/80">
            People, process and productivity partners. Transforming organizations
            to achieve excellence and sustainable competitive advantage.
          </p>
        </section>

        {/* 2. Who We Are */}
        <section
          aria-labelledby="who-we-are"
          className="pt-14 sm:pt-18 lg:pt-24"
        >
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-3">
              <Image
                src={aboutImage}
                alt={about.whoWeAre.imageAlt}
                sizes="(min-width: 1280px) 520px, (min-width: 1024px) 45vw, 92vw"
                className="aspect-[4/3] w-full rounded-2xl object-cover lg:aspect-[4/3]"
                priority
              />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-accent-ink uppercase">
                {about.whoWeAre.eyebrow}
              </p>
              <h2
                id="who-we-are"
                className="mt-3 font-heading text-3xl font-bold tracking-tight text-forest sm:text-4xl"
              >
                {about.whoWeAre.title}
              </h2>

              <div className="mt-6 space-y-4 font-description text-base leading-[1.8] font-medium text-muted">
                {about.whoWeAre.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className={
                      idx === about.whoWeAre.paragraphs.length - 1
                        ? "font-semibold text-forest"
                        : idx === 2
                          ? "text-lg font-bold text-forest"
                          : ""
                    }
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Three Pillars */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {about.whoWeAre.pillars.map((pillar, idx) => {
              const Icon = pillarIcons[idx] ?? CheckCircle2;
              return (
                <div
                  key={pillar.title}
                  className="flex flex-col rounded-3xl border border-line bg-white p-7 transition-all sm:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/5 text-forest">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold text-forest">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 font-description text-sm leading-relaxed font-medium text-muted">
                    {pillar.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. Founder & CEO: Keerthy Reddy */}
        <section
          aria-labelledby="founder-section"
          className="pt-16 sm:pt-20 lg:pt-28"
        >
          <div className="rounded-3xl border border-[#dbe9e1] bg-white p-6 sm:p-10 lg:p-14">
            <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
              {/* Left: Founder Image */}
              <div className="relative mx-auto flex w-full max-w-md overflow-hidden rounded-3xl border border-line bg-white p-3 shadow-sm lg:max-w-none">
                <Image
                  src={founderImage}
                  alt={about.founder.imageAlt}
                  sizes="(min-width: 1024px) 440px, 92vw"
                  className="h-[480px] w-full rounded-2xl object-cover object-top sm:h-[560px] lg:h-[620px]"
                  priority
                />
              </div>

              {/* Right: Founder Details */}
              <div className="flex flex-col justify-center">
                <p className="text-xs font-semibold tracking-[0.2em] text-accent-ink uppercase">
                  {about.founder.eyebrow}
                </p>
                <h2
                  id="founder-section"
                  className="mt-3 font-heading text-3xl font-bold tracking-tight text-forest sm:text-4xl lg:text-5xl"
                >
                  {about.founder.name}
                </h2>

                <div className="mt-6 space-y-4 font-description text-base leading-[1.8] font-medium text-muted">
                  {about.founder.paragraphs.map((p, idx) => (
                    <p
                      key={idx}
                      className={
                        idx === 2
                          ? "rounded-2xl border-l-4 border-forest bg-forest/5 p-4 text-sm font-semibold text-forest"
                          : ""
                      }
                    >
                      {p}
                    </p>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact/"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-forest px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-soft"
                  >
                    Connect with Keerthy
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                  <a
                    href={`tel:${site.telephone}`}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line px-7 py-3 text-sm font-semibold text-forest transition-colors hover:bg-forest/5"
                  >
                    <Phone size={16} aria-hidden="true" />
                    {site.telephone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Innovation Meets Human Potential */}
        <section
          aria-labelledby="potential-section"
          className="pt-16 sm:pt-20 lg:pt-28"
        >
          <div className="border-b border-[#dbe9e1] pb-6">
            <p className="text-xs font-semibold tracking-[0.2em] text-accent-ink uppercase">
              Transformative Change
            </p>
            <h2
              id="potential-section"
              className="mt-3 font-heading text-3xl font-bold tracking-tight text-forest sm:text-4xl"
            >
              {about.potential.headline}
            </h2>
            <p className="mt-4 max-w-3xl font-description text-base leading-relaxed font-medium text-muted">
              {about.potential.lead}
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {about.potential.points.map((pt, idx) => {
              const Icon = potentialIcons[idx] ?? CheckCircle2;
              return (
                <div
                  key={pt.title}
                  className="flex flex-col rounded-3xl border border-line bg-white p-7 transition-all sm:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/5 text-forest">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold text-forest">
                    {pt.title}
                  </h3>
                  <p className="mt-3 font-description text-sm leading-relaxed font-medium text-muted">
                    {pt.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 rounded-2xl border border-line/80 bg-white p-6 sm:p-8">
            <p className="font-description text-base leading-relaxed font-medium text-forest">
              {about.potential.closing}
            </p>
            <p className="mt-3 font-description text-sm font-semibold text-accent-ink">
              {about.potential.contactNote}
            </p>
          </div>
        </section>

        {/* 5. Our Vision & Mission */}
        <section
          aria-labelledby="vision-mission-heading"
          className="pt-16 sm:pt-20 lg:pt-28"
        >
          <div className="relative isolate overflow-hidden rounded-3xl bg-forest px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_0%_0%,rgba(2,170,119,0.28),transparent_55%),radial-gradient(ellipse_at_100%_100%,rgba(97,198,168,0.18),transparent_50%)]"
            >
              <svg
                viewBox="0 0 1000 350"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full text-accent-soft"
                fill="none"
              >
                <path
                  d="M500 380C720 340 700 180 900 210S1050 80 1100 20"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity=".14"
                />
              </svg>
            </div>
            <p
              id="vision-mission-heading"
              className="text-xs font-semibold tracking-[0.2em] text-accent-soft uppercase"
            >
              Our Direction
            </p>
            <div className="mt-8 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col">
                <div className="flex items-center gap-3 text-accent-soft">
                  <Eye size={24} aria-hidden="true" />
                  <h3 className="font-heading text-2xl font-bold text-white">
                    {about.visionMission.vision.title}
                  </h3>
                </div>
                <p className="mt-4 font-description text-lg leading-relaxed font-medium text-white/90">
                  {about.visionMission.vision.text}
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3 text-accent-soft">
                  <Target size={24} aria-hidden="true" />
                  <h3 className="font-heading text-2xl font-bold text-white">
                    {about.visionMission.mission.title}
                  </h3>
                </div>
                <p className="mt-4 font-description text-lg leading-relaxed font-medium text-white/90">
                  {about.visionMission.mission.text}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Bottom Banner / CTA */}
        <section
          aria-labelledby="about-bottom-cta"
          className="pt-16 sm:pt-20 lg:pt-28"
        >
          <div className="relative isolate overflow-hidden rounded-3xl bg-forest px-6 py-14 text-center text-white sm:px-12 sm:py-20 lg:px-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_0%_0%,rgba(2,170,119,0.3),transparent_55%),radial-gradient(ellipse_at_100%_100%,rgba(97,198,168,0.2),transparent_50%)]"
            >
              <svg
                viewBox="0 0 800 300"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full text-accent-soft"
                fill="none"
              >
                <path
                  d="M100 300C300 240 400 120 700 160"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity=".14"
                />
              </svg>
            </div>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent-soft uppercase">
              Get in touch
            </p>
            <h2
              id="about-bottom-cta"
              className="mx-auto mt-4 max-w-3xl font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
            >
              {about.cta.heading}
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact/"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-forest transition-colors hover:bg-white/90"
              >
                {about.cta.action}
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
              <a
                href={`tel:${site.telephone}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone size={16} aria-hidden="true" />
                Call {site.telephone}
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
