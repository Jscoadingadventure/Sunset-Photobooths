"use client";

import { Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/lib/constants";

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
}) {
  return (
    <Card className="flex h-full flex-col">
      <div className="mb-4 flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-sunset text-sunset" aria-hidden />
        ))}
      </div>
      <blockquote className="flex-1 text-base leading-relaxed text-sage">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <footer className="mt-6 border-t border-mint/60 pt-4">
        <p className="font-semibold text-olive">{testimonial.name}</p>
        <p className="mt-1 text-sm text-sage">{testimonial.event}</p>
      </footer>
    </Card>
  );
}

export function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client love"
          title="Trusted by Toronto&apos;s best events"
          subtitle="Don't just take our word for it — hear from couples, planners, and brands who've worked with us."
        />

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:hidden">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="w-[85vw] shrink-0 snap-center sm:w-[70vw]">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
