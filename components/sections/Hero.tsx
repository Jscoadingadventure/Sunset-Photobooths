import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-mint/40 via-cream to-cream pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sunset/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-lake/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sage/30 bg-white/60 px-4 py-2 text-sm font-medium text-sage backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-sunset" aria-hidden />
              Toronto &amp; GTA
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-olive md:text-5xl lg:text-6xl">
              Toronto&apos;s premium photobooth experience for{" "}
              <span className="text-sunset">unforgettable events</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-sage md:text-xl">
              Weddings, corporate events, and brand activations across the GTA — with
              professional attendants, instant sharing, and custom overlays that make
              every moment count.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#contact" size="lg">
                Get a Quote
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Button>
              <Button href="#packages" variant="outline" size="lg">
                View Packages
              </Button>
            </div>

            <p className="mt-6 font-script text-2xl text-sunset md:text-3xl">
              {SITE.tagline}
            </p>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative rounded-3xl border border-mint/60 bg-white/80 p-8 shadow-xl shadow-olive/5 backdrop-blur-sm md:p-12">
              <Image
                src="/logo.png"
                alt={`${SITE.name} logo`}
                width={400}
                height={400}
                className="mx-auto h-auto w-full max-w-sm object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
