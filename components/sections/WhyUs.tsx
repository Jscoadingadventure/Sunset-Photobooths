import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WHY_US_FEATURES, SITE } from "@/lib/constants";

export function WhyUs() {
  return (
    <section id="about" className="bg-olive py-20 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Why choose us"
              title={`The ${SITE.name} difference`}
              subtitle="We're a Toronto-based team obsessed with delivering photobooth experiences that feel premium, run flawlessly, and leave guests talking long after the event ends."
              align="left"
              dark
            />
            <p className="font-script text-3xl text-sunset md:text-4xl">
              {SITE.tagline}
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {WHY_US_FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sunset" aria-hidden />
                <span className="text-sm leading-relaxed text-mint/90 md:text-base">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
