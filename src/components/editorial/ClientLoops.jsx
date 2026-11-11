import Image from "next/image";
import { Quote } from "lucide-react";

export default function ClientLoops({ clients, quotes }) {
  return (
    <div className="mt-8 sm:mt-10 lg:mt-12">
      {/* 1. Clients: Static Logo Collage */}
      <div
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 lg:gap-4"
        aria-label="Our client logos"
      >
        {clients.map((client) => (
          <div
            key={client.name}
            className="flex h-24 items-center justify-center rounded-2xl border border-line/80 bg-white p-4 shadow-xs transition-colors duration-200 hover:border-accent/40 sm:h-28 sm:p-5"
          >
            <Image
              src={client.image}
              alt={client.name}
              sizes="(min-width: 1024px) 160px, (min-width: 640px) 200px, 150px"
              className="max-h-12 w-auto max-w-[85%] object-contain sm:max-h-14"
            />
          </div>
        ))}
      </div>

      {/* 2. Testimonials: All 4 Cards in the Same Row on Desktop */}
      <div
        id="testimonials"
        className="mt-8 sm:mt-10 lg:mt-12"
        aria-label="Client testimonials"
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5 lg:grid-cols-4 lg:gap-3.5">
          {quotes.map((quote) => (
            <figure
              key={quote.name}
              className="flex flex-col justify-between rounded-xl border border-line/80 bg-white p-3 shadow-xs transition-colors duration-200 hover:border-accent/40 sm:rounded-2xl sm:p-3.5"
            >
              <div>
                <Quote
                  className="text-accent shrink-0"
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <blockquote className="mt-2 font-description text-[11px] leading-relaxed font-medium text-forest sm:text-xs">
                  “{quote.text}”
                </blockquote>
              </div>
              <figcaption className="mt-3 flex items-center gap-1.5">
                <span className="h-0.5 w-3 bg-accent shrink-0" aria-hidden="true" />
                <span className="font-heading text-[10px] font-bold tracking-wider text-accent-ink uppercase sm:text-[11px]">
                  {quote.name}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
