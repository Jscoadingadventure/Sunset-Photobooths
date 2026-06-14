import { SectionHeader } from "@/components/ui/SectionHeader";
import { HOW_IT_WORKS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section className="bg-mint/30 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Simple process"
          title="How it works"
          subtitle="From first inquiry to final photo, we make booking and enjoying your photobooth effortless."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((step, index) => (
            <div key={step.step} className="relative">
              {index < HOW_IT_WORKS.length - 1 && (
                <div
                  className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-sage/30 lg:block"
                  aria-hidden
                />
              )}
              <div className="relative rounded-2xl bg-white p-6 shadow-sm">
                <span className="text-3xl font-bold text-sunset/40">{step.step}</span>
                <h3 className="mt-2 text-lg font-bold text-olive">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sage">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
