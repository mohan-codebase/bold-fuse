import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Cpu,
  Mail,
  MapPin,
  Phone,
  Server,
  ShieldCheck,
  Sparkles,
  Users2,
} from "lucide-react";
import { servicesContent } from "@/content/services";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Services | Boldfuse",
  description:
    "Aiming for the bigger picture. Making businesses immune to the economic effects of the crisis. Comprehensive business automation, mental wellness, financial advisory, creative branding, process excellence, legal, and HR services.",
  alternates: { canonical: "/services/" },
};

const itCategoryIcons = [
  Code2,
  Server,
  BarChart3,
  ShieldCheck,
  Users2,
  Cpu,
];

export default function ServicesPage() {
  const { hero, services, midCtas, itRecruitment, raiseTheBar } = servicesContent;

  return (
    <main id="main-content" className="bg-white">
      <div className="shell pt-8 pb-16 sm:pt-12 lg:pb-24">
        {/* ========================================================= */}
        {/* 1. SERVICES HERO SECTION                                  */}
        {/* ========================================================= */}
        <section
          aria-labelledby="services-hero-heading"
          className="relative isolate overflow-hidden rounded-3xl bg-forest px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-14 lg:py-20"
        >
          {/* Subtle flowing SVG background decoration - approved site direction */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_0%_0%,rgba(2,170,119,0.30),transparent_55%),radial-gradient(ellipse_at_100%_100%,rgba(97,198,168,0.18),transparent_50%)]"
          >
            <svg
              viewBox="0 0 1200 480"
              preserveAspectRatio="none"
              focusable="false"
              className="absolute inset-0 h-full w-full text-accent-soft"
              fill="none"
            >
              <path
                d="M620 520C830 490 800 300 1000 325S1170 180 1260 120"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.14"
              />
              <path
                d="M710 520C900 490 850 365 1050 385S1210 250 1260 210"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.10"
              />
            </svg>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            {/* Left: Content & Stats */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-accent-soft uppercase backdrop-blur-sm">
                <span>{hero.eyebrow}</span>
              </div>

              <p className="mt-4 font-heading text-lg font-semibold tracking-wide text-accent-soft sm:text-xl">
                {hero.tagline}
              </p>

              <h1
                id="services-hero-heading"
                className="mt-3 font-heading text-4xl leading-[1.15] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                {hero.title}
              </h1>

              <p className="mt-6 max-w-xl font-description text-base leading-relaxed font-medium text-white/80 sm:text-lg">
                We empower visionary leaders and organizations with comprehensive,
                pragmatic solutions that build resilience, streamline daily operations,
                and drive sustainable business growth.
              </p>

              {/* Statistics Strip */}
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/15 pt-8 sm:gap-6">
                {hero.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/15 bg-white/5 p-4 sm:p-5 backdrop-blur-sm"
                  >
                    <div className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 font-description text-xs font-semibold tracking-wide text-accent-soft uppercase sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact/"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-forest transition-colors hover:bg-white/90"
                >
                  Schedule a Consultation
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
                <a
                  href={`tel:${site.telephone}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Phone size={16} aria-hidden="true" />
                  {site.phone}
                </a>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative mx-auto w-full overflow-hidden rounded-3xl border border-white/20 bg-white/5 p-2.5 shadow-2xl backdrop-blur-sm lg:p-3">
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                sizes="(min-width: 1024px) 480px, 92vw"
                className="h-[360px] w-full rounded-2xl object-cover sm:h-[440px] lg:h-[500px]"
                priority
              />
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. SERVICES LIST (SECTIONS 01 TO 07)                      */}
        {/* ========================================================= */}
        <div className="pt-16 sm:pt-20 lg:pt-28 space-y-20 sm:space-y-24 lg:space-y-32">
          {/* ------------------------------------------------------- */}
          {/* SERVICE 01: BUSINESS AUTOMATION                         */}
          {/* ------------------------------------------------------- */}
          <section
            id={services[0].id}
            aria-labelledby={`service-title-${services[0].id}`}
            className="scroll-mt-28"
          >
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
              {/* Text Left */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-heading text-4xl font-extrabold tracking-tight text-accent-ink/30 sm:text-5xl">
                    {services[0].number}
                  </span>
                  <div className="h-0.5 w-10 bg-accent/40" />
                  <span className="text-xs font-semibold tracking-[0.2em] text-accent-ink uppercase">
                    Service Overview
                  </span>
                </div>

                <h2
                  id={`service-title-${services[0].id}`}
                  className="mt-3 font-heading text-3xl font-bold tracking-tight text-forest sm:text-4xl"
                >
                  {services[0].title}
                </h2>

                <p className="mt-3 font-heading text-xl font-bold leading-snug text-accent-ink sm:text-2xl">
                  {services[0].tagline}
                </p>

                <p className="mt-5 font-description text-base leading-[1.8] font-medium text-muted sm:text-lg">
                  {services[0].description}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact/"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-forest px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-soft"
                  >
                    Automate Your Business
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Image Right */}
              <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-3 shadow-sm">
                <Image
                  src={services[0].image}
                  alt={services[0].imageAlt}
                  sizes="(min-width: 1024px) 480px, 92vw"
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------- */}
          {/* SERVICE 02: WELLNESS AND MENTAL HEALTH                  */}
          {/* ------------------------------------------------------- */}
          <section
            id={services[1].id}
            aria-labelledby={`service-title-${services[1].id}`}
            className="scroll-mt-28"
          >
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
              {/* Image Left */}
              <div className="order-2 lg:order-1 relative overflow-hidden rounded-3xl border border-line bg-white p-3 shadow-sm">
                <Image
                  src={services[1].image}
                  alt={services[1].imageAlt}
                  sizes="(min-width: 1024px) 480px, 92vw"
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
              </div>

              {/* Text Right */}
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3">
                  <span className="font-heading text-4xl font-extrabold tracking-tight text-accent-ink/30 sm:text-5xl">
                    {services[1].number}
                  </span>
                  <div className="h-0.5 w-10 bg-accent/40" />
                  <span className="text-xs font-semibold tracking-[0.2em] text-accent-ink uppercase">
                    Service Overview
                  </span>
                </div>

                <h2
                  id={`service-title-${services[1].id}`}
                  className="mt-3 font-heading text-3xl font-bold tracking-tight text-forest sm:text-4xl"
                >
                  {services[1].title}
                </h2>

                <p className="mt-3 font-heading text-xl font-bold leading-snug text-accent-ink sm:text-2xl">
                  {services[1].tagline}
                </p>

                <p className="mt-5 font-description text-base leading-[1.8] font-medium text-muted">
                  {services[1].description}
                </p>

                {/* Sub-services pills */}
                {services[1].offerings && (
                  <div className="mt-6">
                    <p className="text-xs font-semibold tracking-wider text-forest uppercase">
                      Specialized Offerings:
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2.5">
                      {services[1].offerings.map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-cream/70 px-4 py-1.5 font-description text-sm font-semibold text-forest"
                        >
                          <CheckCircle2
                            size={14}
                            className="text-accent"
                            aria-hidden="true"
                          />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact/"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-forest px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-soft"
                  >
                    Book a Consultation
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------- */}
          {/* MID-PAGE CTA 1                                          */}
          {/* ------------------------------------------------------- */}
          <section className="relative isolate overflow-hidden rounded-3xl bg-forest px-6 py-10 text-center text-white sm:px-12 sm:py-14 lg:px-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_0%_0%,rgba(2,170,119,0.28),transparent_55%),radial-gradient(ellipse_at_100%_100%,rgba(97,198,168,0.18),transparent_50%)]"
            >
              <svg
                viewBox="0 0 1200 320"
                preserveAspectRatio="none"
                focusable="false"
                className="absolute inset-0 h-full w-full text-accent-soft"
                fill="none"
              >
                <path
                  d="M400 320C650 280 750 140 1000 160S1150 70 1200 20"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0.14"
                />
              </svg>
            </div>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent-soft uppercase">
              {midCtas.cta1.eyebrow}
            </p>
            <h3 className="mx-auto mt-3 max-w-2xl font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              {midCtas.cta1.title}
            </h3>
            <div className="mt-6 flex justify-center">
              <Link
                href={midCtas.cta1.link}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-forest transition-colors hover:bg-white/90"
              >
                {midCtas.cta1.buttonText}
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </section>

          {/* ------------------------------------------------------- */}
          {/* SERVICE 03: FINANCE AND ADVISORY SERVICES               */}
          {/* ------------------------------------------------------- */}
          <section
            id={services[2].id}
            aria-labelledby={`service-title-${services[2].id}`}
            className="scroll-mt-28"
          >
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
              {/* Text Left */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-heading text-4xl font-extrabold tracking-tight text-accent-ink/30 sm:text-5xl">
                    {services[2].number}
                  </span>
                  <div className="h-0.5 w-10 bg-accent/40" />
                  <span className="text-xs font-semibold tracking-[0.2em] text-accent-ink uppercase">
                    Service Overview
                  </span>
                </div>

                <h2
                  id={`service-title-${services[2].id}`}
                  className="mt-3 font-heading text-3xl font-bold tracking-tight text-forest sm:text-4xl"
                >
                  {services[2].title}
                </h2>

                <p className="mt-3 font-heading text-xl font-bold leading-snug text-accent-ink sm:text-2xl">
                  {services[2].tagline}
                </p>

                <p className="mt-5 font-description text-base leading-[1.8] font-medium text-muted sm:text-lg">
                  {services[2].description}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact/"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-forest px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-soft"
                  >
                    Consult Our Financial Advisors
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Image Right */}
              <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-3 shadow-sm">
                <Image
                  src={services[2].image}
                  alt={services[2].imageAlt}
                  sizes="(min-width: 1024px) 480px, 92vw"
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------- */}
          {/* SERVICE 04: CREATIVE BRANDING AND PR                    */}
          {/* ------------------------------------------------------- */}
          <section
            id={services[3].id}
            aria-labelledby={`service-title-${services[3].id}`}
            className="scroll-mt-28"
          >
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
              {/* Image Left */}
              <div className="order-2 lg:order-1 relative overflow-hidden rounded-3xl border border-line bg-white p-3 shadow-sm">
                <Image
                  src={services[3].image}
                  alt={services[3].imageAlt}
                  sizes="(min-width: 1024px) 480px, 92vw"
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
              </div>

              {/* Text Right */}
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3">
                  <span className="font-heading text-4xl font-extrabold tracking-tight text-accent-ink/30 sm:text-5xl">
                    {services[3].number}
                  </span>
                  <div className="h-0.5 w-10 bg-accent/40" />
                  <span className="text-xs font-semibold tracking-[0.2em] text-accent-ink uppercase">
                    Service Overview
                  </span>
                </div>

                <h2
                  id={`service-title-${services[3].id}`}
                  className="mt-3 font-heading text-3xl font-bold tracking-tight text-forest sm:text-4xl"
                >
                  {services[3].title}
                </h2>

                <p className="mt-3 font-heading text-xl font-bold leading-snug text-accent-ink sm:text-2xl">
                  {services[3].tagline}
                </p>

                <p className="mt-5 font-description text-base leading-[1.8] font-medium text-muted sm:text-lg">
                  {services[3].description}
                </p>

                {/* Sub-brand highlight */}
                {services[3].subBrand && (
                  <div className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-line bg-white px-5 py-3 shadow-xs">
                    <Sparkles size={18} className="text-accent" aria-hidden="true" />
                    <span className="font-heading text-base font-bold text-forest">
                      {services[3].subBrand}
                    </span>
                  </div>
                )}

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact/"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-forest px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-soft"
                  >
                    Build Your Brand
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------- */}
          {/* MID-PAGE CTA 2                                          */}
          {/* ------------------------------------------------------- */}
          <section className="relative isolate overflow-hidden rounded-3xl bg-forest px-6 py-10 text-center text-white sm:px-12 sm:py-14 lg:px-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_0%_0%,rgba(2,170,119,0.28),transparent_55%),radial-gradient(ellipse_at_100%_100%,rgba(97,198,168,0.18),transparent_50%)]"
            >
              <svg
                viewBox="0 0 1200 320"
                preserveAspectRatio="none"
                focusable="false"
                className="absolute inset-0 h-full w-full text-accent-soft"
                fill="none"
              >
                <path
                  d="M500 320C750 290 850 160 1050 180S1180 80 1220 30"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0.14"
                />
              </svg>
            </div>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent-soft uppercase">
              {midCtas.cta2.eyebrow}
            </p>
            <h3 className="mx-auto mt-3 max-w-2xl font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              {midCtas.cta2.title}
            </h3>
            <div className="mt-6 flex justify-center">
              <Link
                href={midCtas.cta2.link}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-forest transition-colors hover:bg-white/90"
              >
                {midCtas.cta2.buttonText}
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </section>

          {/* ------------------------------------------------------- */}
          {/* SERVICE 05: BUSINESS PROCESS TRANSFORMATION             */}
          {/* ------------------------------------------------------- */}
          <section
            id={services[4].id}
            aria-labelledby={`service-title-${services[4].id}`}
            className="scroll-mt-28"
          >
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
              {/* Text Left */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-heading text-4xl font-extrabold tracking-tight text-accent-ink/30 sm:text-5xl">
                    {services[4].number}
                  </span>
                  <div className="h-0.5 w-10 bg-accent/40" />
                  <span className="text-xs font-semibold tracking-[0.2em] text-accent-ink uppercase">
                    Service Overview
                  </span>
                </div>

                <h2
                  id={`service-title-${services[4].id}`}
                  className="mt-3 font-heading text-3xl font-bold tracking-tight text-forest sm:text-4xl"
                >
                  {services[4].title}
                </h2>

                <p className="mt-3 font-heading text-xl font-bold leading-snug text-accent-ink sm:text-2xl">
                  {services[4].tagline}
                </p>

                <p className="mt-5 font-description text-base leading-[1.8] font-medium text-muted sm:text-lg">
                  {services[4].description}
                </p>

                {/* Four Transformation Pillars */}
                {services[4].pillars && (
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {services[4].pillars.map((pillar, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-line bg-white p-5 shadow-xs"
                      >
                        <div className="flex items-center gap-2 text-forest">
                          <CheckCircle2 size={18} className="text-accent" aria-hidden="true" />
                          <h4 className="font-heading text-base font-bold">
                            {pillar.title}
                          </h4>
                        </div>
                        <p className="mt-2 font-description text-sm leading-relaxed font-medium text-muted">
                          {pillar.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact/"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-forest px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-soft"
                  >
                    Transform Your Operations
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Image Right */}
              <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-3 shadow-sm">
                <Image
                  src={services[4].image}
                  alt={services[4].imageAlt}
                  sizes="(min-width: 1024px) 480px, 92vw"
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------- */}
          {/* SERVICE 06: LEGAL AND ADVISORY SERVICES                 */}
          {/* ------------------------------------------------------- */}
          <section
            id={services[5].id}
            aria-labelledby={`service-title-${services[5].id}`}
            className="scroll-mt-28"
          >
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
              {/* Image Left */}
              <div className="order-2 lg:order-1 relative overflow-hidden rounded-3xl border border-line bg-white p-3 shadow-sm">
                <Image
                  src={services[5].image}
                  alt={services[5].imageAlt}
                  sizes="(min-width: 1024px) 480px, 92vw"
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
              </div>

              {/* Text Right */}
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3">
                  <span className="font-heading text-4xl font-extrabold tracking-tight text-accent-ink/30 sm:text-5xl">
                    {services[5].number}
                  </span>
                  <div className="h-0.5 w-10 bg-accent/40" />
                  <span className="text-xs font-semibold tracking-[0.2em] text-accent-ink uppercase">
                    Service Overview
                  </span>
                </div>

                <h2
                  id={`service-title-${services[5].id}`}
                  className="mt-3 font-heading text-3xl font-bold tracking-tight text-forest sm:text-4xl"
                >
                  {services[5].title}
                </h2>

                <p className="mt-3 font-heading text-xl font-bold leading-snug text-accent-ink sm:text-2xl">
                  {services[5].tagline}
                </p>

                <p className="mt-5 font-description text-base leading-[1.8] font-medium text-muted sm:text-lg">
                  {services[5].description}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact/"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-forest px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-soft"
                  >
                    Speak with Legal Advisors
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------- */}
          {/* SERVICE 07: PEOPLE MANAGEMENT / HR                      */}
          {/* ------------------------------------------------------- */}
          <section
            id={services[6].id}
            aria-labelledby={`service-title-${services[6].id}`}
            className="scroll-mt-28"
          >
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
              {/* Text Left */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-heading text-4xl font-extrabold tracking-tight text-accent-ink/30 sm:text-5xl">
                    {services[6].number}
                  </span>
                  <div className="h-0.5 w-10 bg-accent/40" />
                  <span className="text-xs font-semibold tracking-[0.2em] text-accent-ink uppercase">
                    Service Overview
                  </span>
                </div>

                <h2
                  id={`service-title-${services[6].id}`}
                  className="mt-3 font-heading text-3xl font-bold tracking-tight text-forest sm:text-4xl"
                >
                  {services[6].title}
                </h2>

                <p className="mt-3 font-heading text-xl font-bold leading-snug text-accent-ink sm:text-2xl">
                  {services[6].tagline}
                </p>

                <p className="mt-5 font-description text-base leading-[1.8] font-medium text-muted sm:text-lg">
                  {services[6].description}
                </p>

                {/* 16 HR Capability Areas Grid */}
                {services[6].offerings && (
                  <div className="mt-8">
                    <p className="text-xs font-semibold tracking-wider text-forest uppercase">
                      HR & People Competencies:
                    </p>
                    <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {services[6].offerings.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 rounded-xl border border-line bg-cream/50 px-3.5 py-2 font-description text-sm font-semibold text-forest"
                        >
                          <CheckCircle2
                            size={15}
                            className="shrink-0 text-accent"
                            aria-hidden="true"
                          />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact/"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-forest px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-soft"
                  >
                    Empower Your Workforce
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Image Right */}
              <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-3 shadow-sm">
                <Image
                  src={services[6].image}
                  alt={services[6].imageAlt}
                  sizes="(min-width: 1024px) 480px, 92vw"
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </section>
        </div>

        {/* ========================================================= */}
        {/* 3. IT RECRUITMENT & TALENT SECTION                        */}
        {/* ========================================================= */}
        <section
          id="it-recruitment"
          aria-labelledby="it-recruitment-heading"
          className="mt-20 pt-16 sm:mt-24 sm:pt-20 lg:mt-32 lg:pt-28 border-t border-line"
        >
          {/* Header Banner */}
          <div className="relative isolate overflow-hidden rounded-3xl bg-forest px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_0%_0%,rgba(2,170,119,0.28),transparent_55%),radial-gradient(ellipse_at_100%_100%,rgba(97,198,168,0.18),transparent_50%)]"
            >
              <svg
                viewBox="0 0 1200 380"
                preserveAspectRatio="none"
                focusable="false"
                className="absolute inset-0 h-full w-full text-accent-soft"
                fill="none"
              >
                <path
                  d="M620 400C830 360 800 200 1000 220S1170 90 1260 40"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0.14"
                />
              </svg>
            </div>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent-soft uppercase">
              {itRecruitment.eyebrow}
            </p>
            <h2
              id="it-recruitment-heading"
              className="mt-3 max-w-3xl font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {itRecruitment.title}
            </h2>
            <p className="mt-4 max-w-2xl font-description text-base leading-relaxed font-medium text-white/80 sm:text-lg">
              {itRecruitment.lead}
            </p>
          </div>

          {/* "What We Do" card */}
          <div className="mt-8 rounded-3xl border border-line bg-cream/40 p-6 sm:p-10 lg:p-12">
            <div className="flex items-center gap-2.5 text-accent-ink">
              <Users2 size={22} aria-hidden="true" />
              <h3 className="font-heading text-2xl font-bold text-forest">
                {itRecruitment.whatWeDo.title}
              </h3>
            </div>
            <p className="mt-4 font-description text-base leading-[1.8] font-medium text-muted sm:text-lg">
              {itRecruitment.whatWeDo.body}
            </p>
          </div>

          {/* "Hiring for IT Positions" + Categories */}
          <div className="mt-12 sm:mt-16">
            <div className="border-b border-line pb-6">
              <p className="text-xs font-semibold tracking-[0.2em] text-accent-ink uppercase">
                Open Positions
              </p>
              <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight text-forest sm:text-3xl">
                {itRecruitment.hiringPositions.title}
              </h3>
              <p className="mt-3 max-w-3xl font-description text-base font-medium text-muted">
                {itRecruitment.hiringPositions.lead}
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {itRecruitment.hiringPositions.categories.map((cat, idx) => {
                const IconComponent = itCategoryIcons[idx] ?? Code2;
                return (
                  <div
                    key={idx}
                    className="flex flex-col justify-between rounded-3xl border border-line bg-white p-6 shadow-xs transition-colors hover:border-accent/40"
                  >
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/5 text-forest">
                        <IconComponent size={24} aria-hidden="true" />
                      </div>
                      <h4 className="mt-5 font-heading text-lg font-bold text-forest">
                        {cat.title}
                      </h4>
                      <p className="mt-2 font-description text-sm leading-relaxed font-medium text-muted">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Locations & How to Apply split */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2 sm:mt-16">
            {/* Locations */}
            <div className="flex flex-col justify-between rounded-3xl border border-line bg-white p-6 sm:p-8 shadow-xs">
              <div>
                <div className="flex items-center gap-2.5 text-accent-ink">
                  <MapPin size={22} aria-hidden="true" />
                  <h3 className="font-heading text-2xl font-bold text-forest">
                    {itRecruitment.locations.title}
                  </h3>
                </div>
                <div className="mt-6 space-y-4">
                  {itRecruitment.locations.items.map((loc, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 rounded-2xl border border-line bg-cream/40 p-4"
                    >
                      <span className="text-3xl" role="img" aria-label={loc.country}>
                        {loc.flag}
                      </span>
                      <div>
                        <h4 className="font-heading text-lg font-bold text-forest">
                          {loc.country}
                        </h4>
                        <p className="mt-1 font-description text-sm font-medium text-muted">
                          {loc.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* How to Apply */}
            <div className="flex flex-col justify-between rounded-3xl border border-line bg-cream/40 p-6 sm:p-8 shadow-xs">
              <div>
                <div className="flex items-center gap-2.5 text-accent-ink">
                  <Mail size={22} aria-hidden="true" />
                  <h3 className="font-heading text-2xl font-bold text-forest">
                    {itRecruitment.howToApply.title}
                  </h3>
                </div>

                <p className="mt-3 font-heading text-lg font-bold text-forest">
                  {itRecruitment.howToApply.subtitle}
                </p>

                <div className="mt-5 space-y-3 font-description text-sm font-medium text-muted">
                  <p>
                    <span className="font-semibold text-forest">
                      {itRecruitment.howToApply.emailPrompt}{" "}
                    </span>
                    <a
                      href={`mailto:${itRecruitment.howToApply.email}`}
                      className="font-semibold text-accent-ink underline hover:text-forest"
                    >
                      {itRecruitment.howToApply.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-forest">Connect with us: </span>
                    Follow us on LinkedIn{" "}
                    <a
                      href={itRecruitment.howToApply.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-accent-ink underline hover:text-forest"
                    >
                      @bOLDFUSE
                    </a>{" "}
                    for the latest openings and updates.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`mailto:${itRecruitment.howToApply.email}?subject=Application for IT Position - Boldfuse`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-forest px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-soft"
                >
                  <Mail size={16} aria-hidden="true" />
                  Send Your Resume
                </a>
                <a
                  href={itRecruitment.howToApply.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-forest transition-colors hover:bg-forest/5"
                >
                  LinkedIn Updates
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. CLOSING "RAISE THE BAR" PERSPECTIVE BANNER             */}
        {/* ========================================================= */}
        <section
          aria-labelledby="raise-the-bar-heading"
          className="mt-20 pt-16 sm:mt-24 sm:pt-20 lg:mt-32 lg:pt-28"
        >
          <div className="relative isolate overflow-hidden rounded-3xl bg-forest px-6 py-14 text-white sm:px-12 sm:py-20 lg:px-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_0%_0%,rgba(2,170,119,0.30),transparent_55%),radial-gradient(ellipse_at_100%_100%,rgba(97,198,168,0.20),transparent_50%)]"
            >
              <svg
                viewBox="0 0 1000 350"
                preserveAspectRatio="none"
                focusable="false"
                className="absolute inset-0 h-full w-full text-accent-soft"
                fill="none"
              >
                <path
                  d="M500 380C720 340 700 180 900 210S1050 80 1100 20"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0.14"
                />
              </svg>
            </div>

            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
              {/* Left Column */}
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-accent-soft uppercase">
                  {raiseTheBar.eyebrow}
                </p>
                <h2
                  id="raise-the-bar-heading"
                  className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
                >
                  {raiseTheBar.title}
                </h2>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href={raiseTheBar.ctaLink}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-forest transition-colors hover:bg-white/90"
                  >
                    {raiseTheBar.ctaText}
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

              {/* Right Column: Statistics */}
              <div className="grid grid-cols-2 gap-6 border-t border-white/15 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
                {raiseTheBar.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm"
                  >
                    <div className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                      {stat.value}
                    </div>
                    <div className="mt-2 font-description text-sm font-semibold tracking-wide text-accent-soft uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
