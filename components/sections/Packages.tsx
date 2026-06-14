import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PACKAGES, PACKAGE_COMPARISON } from "@/lib/constants";
import { cn } from "@/lib/utils";

function FeatureValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-sm font-medium text-olive">{value}</span>;
  }
  return value ? (
    <Check className="mx-auto h-5 w-5 text-lake" aria-label="Included" />
  ) : (
    <X className="mx-auto h-5 w-5 text-sage/40" aria-label="Not included" />
  );
}

export function Packages() {
  return (
    <section id="packages" className="bg-cream py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title="Transparent packages for every event"
          subtitle="Clear pricing with no hidden fees. All packages include setup, teardown, and a professional attendant."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <Card
              key={pkg.id}
              highlighted={pkg.highlighted}
              className={cn("relative flex flex-col", pkg.highlighted && "scale-[1.02] lg:-mt-2 lg:mb-2")}
            >
              {pkg.highlighted && (
                <Badge variant="sunset" className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-olive">{pkg.name}</h3>
                <p className="mt-2 text-sm text-sage">{pkg.description}</p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-olive">{pkg.price}</span>
                  {pkg.price !== "Custom" && (
                    <span className="text-sm text-sage">/ {pkg.duration}</span>
                  )}
                </div>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-sage">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-lake" aria-hidden />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                href="#contact"
                variant={pkg.highlighted ? "primary" : "outline"}
                className="w-full"
              >
                {pkg.price === "Custom" ? "Request Custom Quote" : "Get Started"}
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-16 overflow-x-auto rounded-2xl border border-mint/60 bg-white">
          <table className="w-full min-w-[640px] text-left">
            <caption className="sr-only">Package feature comparison</caption>
            <thead>
              <tr className="border-b border-mint/60 bg-mint/20">
                <th scope="col" className="px-6 py-4 text-sm font-semibold text-olive">
                  Feature
                </th>
                <th scope="col" className="px-6 py-4 text-center text-sm font-semibold text-olive">
                  Essential
                </th>
                <th scope="col" className="px-6 py-4 text-center text-sm font-semibold text-olive">
                  Signature
                </th>
                <th scope="col" className="px-6 py-4 text-center text-sm font-semibold text-olive">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {PACKAGE_COMPARISON.map((row) => (
                <tr key={row.label} className="border-b border-mint/40 last:border-0">
                  <td className="px-6 py-4 text-sm text-sage">{row.label}</td>
                  <td className="px-6 py-4 text-center">
                    <FeatureValue value={row.essential} />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <FeatureValue value={row.signature} />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <FeatureValue value={row.enterprise} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
