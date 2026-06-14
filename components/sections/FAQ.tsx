import { Accordion } from "@/components/ui/Accordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  return (
    <section id="faq" className="bg-cream py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Everything you need to know before booking. Can't find your answer? Reach out — we're happy to help."
        />
        <Accordion items={FAQ_ITEMS} />
      </div>
    </section>
  );
}
