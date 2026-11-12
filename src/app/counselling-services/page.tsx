import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { site } from "@/content/site";
import { counsellingDetails } from "@/content/counselling-details";
import { routes } from "@/config/routes";

export const metadata: Metadata = pageMetadata({
  title: "Counselling Services",
  description:
    "We believe mental well-being is essential to a fulfilling life. Our experienced therapists provide personalized counselling tailored to individual and organizational needs.",
  alternates: { canonical: "/counselling-services/" },
});

export default function CounsellingServicesPage() {
  return (
    <main id="main-content" className="bg-white">
      {/* ================================================================ */}
      {/* 1. HERO SECTION                                                  */}
      {/* ================================================================ */}
      <section
        aria-labelledby="counselling-hero-heading"
        className="shell pt-8 pb-0 sm:pt-12"
      >
        <div className="relative isolate overflow-hidden rounded-3xl bg-forest px-6 py-14 text-white sm:px-12 sm:py-20 lg:px-16">
          {/* Subtle flowing SVG background decoration - approved site direction */}
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

          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-white/60">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">
                ›
              </li>
              <li>
                <Link
                  href="/services/"
                  className="transition-colors hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">
                ›
              </li>
              <li>
                <Link
                  href="/services/#healthwellness"
                  className="transition-colors hover:text-white"
                >
                  Wellness and Mental Health
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">
                ›
              </li>
              <li className="font-semibold text-white/90" aria-current="page">
                Counselling Services
              </li>
            </ol>
          </nav>

          <p className="text-xs font-semibold tracking-[0.2em] text-accent-soft uppercase">
            Wellness &amp; Mental Health
          </p>

          <h1
            id="counselling-hero-heading"
            className="mt-5 max-w-3xl font-heading text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Counselling Services
          </h1>

          <p className="mt-5 max-w-2xl font-description text-base leading-relaxed font-medium text-white/80 sm:text-lg">
            We believe mental well-being is essential to a fulfilling life. Our
            experienced therapists provide personalized counselling tailored to
            individual and organizational needs.
          </p>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 2. PHILOSOPHY & INTRO CONTENT                                    */}
      {/* ================================================================ */}
      <section
        aria-labelledby="counselling-intro-heading"
        className="shell pt-14 pb-0 sm:pt-16 lg:pt-20"
      >
        <div className="max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.2em] text-accent-ink uppercase">
              Our Mental Health Philosophy
            </span>
            <div className="h-0.5 w-10 bg-accent/40" />
          </div>

          <h2
            id="counselling-intro-heading"
            className="mt-3 font-heading text-2xl font-bold tracking-tight text-forest sm:text-3xl lg:text-4xl"
          >
            From stress to smile, there is just one station and it&apos;s
            boldfuse.
          </h2>

          <div className="mt-6 space-y-4 font-description text-base leading-[1.85] font-medium text-muted sm:text-lg">
            <p>
              Whether you&apos;re dealing with anxiety, depression, relationship
              issues, or other mental health concerns, we&apos;re here to
              support you on your journey to healing and self-discovery. Our
              therapists are licensed professionals with extensive training in
              evidence-based therapeutic modalities, including
              cognitive-behavioural therapy (CBT), mindfulness-based approaches,
              and more. We understand the importance of confidentiality and
              create a safe, non-judgmental space where you can freely express
              yourself and work towards positive change.
            </p>
            <p>
              In addition to individual therapy, we offer consulting services to
              promote organizational health and psychology within companies. By
              addressing workplace dynamics, improving communication, and
              fostering a culture of mental wellness, we help organizations
              thrive. Investing in the mental health of your employees not only
              enhances their well-being but also boosts productivity, reduces
              absenteeism, and creates a more positive work environment.
            </p>
            <p>
              Led by our experienced facilitators, our workshops combine
              engaging activities, discussions, and exercises to help
              participants apply new skills in their personal and professional
              lives. Elevate your company&apos;s performance and culture with
              our organizational health and psychology services.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 3. COUNSELLING SERVICE CARDS GRID                                */}
      {/* ================================================================ */}
      <section
        aria-label="Counselling service categories"
        className="shell pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
      >
        <div className="mb-10 border-b border-line pb-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.2em] text-accent-ink uppercase">
              Specialized Offerings
            </span>
            <div className="h-0.5 w-10 bg-accent/40" />
          </div>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-forest sm:text-4xl">
            Our Counselling Services
          </h2>
          <p className="mt-2 max-w-2xl font-description text-base font-medium text-muted">
            Professional psychological and therapeutic support tailored for
            individuals, children, teens, and families.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {counsellingDetails.map((service) => (
            <article
              key={service.route}
              className="flex flex-col overflow-hidden rounded-3xl border border-line bg-white"
            >
              {/* Image */}
              <Link
                href={routes[service.route].path}
                className="block focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-forest"
              >
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 92vw"
                  className="aspect-[16/10] w-full object-cover"
                />
              </Link>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-heading text-xl font-bold text-forest">
                  <Link
                    href={routes[service.route].path}
                    className="hover:text-accent-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
                  >
                    {service.cardTitle}
                  </Link>
                </h3>

                <p className="mt-3 flex-1 font-description text-sm leading-relaxed font-medium text-muted">
                  {service.cardText}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-line/60 pt-5">
                  <Link
                    href={routes[service.route].path}
                    className="text-xs font-bold tracking-wider text-forest uppercase hover:text-accent-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
                  >
                    Learn more
                  </Link>
                  <Link
                    href={`/book-appointment/?service=${encodeURIComponent(service.cardTitle)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-accent-ink uppercase hover:text-forest focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-ink"
                  >
                    Book Session
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================================================================ */}
      {/* 4. CALL TO ACTION SECTION (FROM REFERENCE WEBSITE)               */}
      {/* ================================================================ */}
      <section
        aria-labelledby="counselling-cta-heading"
        className="shell pb-16 sm:pb-20 lg:pb-24"
      >
        <div className="relative isolate overflow-hidden rounded-3xl bg-forest px-6 py-14 text-center text-white sm:px-12 sm:py-20 lg:px-16">
          {/* Subtle flowing curved decoration */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_0%_0%,rgba(2,170,119,0.30),transparent_55%),radial-gradient(ellipse_at_100%_100%,rgba(97,198,168,0.20),transparent_50%)]"
          >
            <svg
              viewBox="0 0 1200 400"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full text-accent-soft"
              fill="none"
            >
              <path
                d="M500 380C720 340 700 180 900 210S1050 80 1100 20M600 420C800 380 780 220 980 250S1130 120 1200 60"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.14"
              />
            </svg>
          </div>

          <p className="text-xs font-semibold tracking-[0.2em] text-accent-soft uppercase">
            Every decision backed by insights &amp; us turns out to be great
          </p>

          <h2
            id="counselling-cta-heading"
            className="mx-auto mt-4 max-w-3xl font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Let&apos;s fix the health-o-meter of your business.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl font-description text-base leading-relaxed font-medium text-white/80 sm:text-lg">
            Ready to prioritize your mental health? Take the first step towards
            a happier, healthier you by scheduling a consultation with one of
            our experienced therapists today. Your journey to wellness starts
            here.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-forest transition-colors hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Talk to us
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <a
              href={`tel:${site.telephone}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Phone size={16} aria-hidden="true" />
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
