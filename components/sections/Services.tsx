import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SERVICES } from "@/lib/constants";
import Link from "next/link";

export function Services() {
  return (
    <section id="services" className="bg-cream py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What we do"
          title="Experiences tailored to every occasion"
          subtitle="From intimate weddings to large-scale brand activations, we deliver polished photobooth experiences that guests love and planners trust."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="group flex flex-col">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-mint/60 transition-colors group-hover:bg-sunset/15">
                  <Icon className="h-6 w-6 text-olive transition-colors group-hover:text-sunset" aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-olive">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-sage">
                  {service.description}
                </p>
                <Link
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-lake transition-colors hover:text-lake/80"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
