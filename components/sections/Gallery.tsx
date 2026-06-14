"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GALLERY_FILTERS, GALLERY_ITEMS, type GalleryCategory } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("all");

  const filtered =
    activeFilter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="bg-mint/30 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Portfolio"
          title="Moments we&apos;ve helped create"
          subtitle="A glimpse at the experiences we deliver for weddings, corporate events, and celebrations across Toronto."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {GALLERY_FILTERS.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset focus-visible:ring-offset-2",
                activeFilter === filter.value
                  ? "bg-olive text-white shadow-md"
                  : "bg-white text-sage hover:bg-white/80",
              )}
              aria-pressed={activeFilter === filter.value}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "group relative overflow-hidden rounded-2xl",
                index === 0 && "sm:col-span-2 sm:row-span-2",
              )}
            >
              <div className={cn("relative w-full", index === 0 ? "aspect-square sm:aspect-auto sm:h-full sm:min-h-[400px]" : "aspect-[4/3]")}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-olive/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-sm font-medium capitalize text-white">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
