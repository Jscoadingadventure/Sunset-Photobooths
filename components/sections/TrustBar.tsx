import { MapPin, Shield, Star, Zap } from "lucide-react";
import { TRUST_STATS, SITE } from "@/lib/constants";

const icons = [Star, Zap, Shield, MapPin];

export function TrustBar() {
  return (
    <section className="border-y border-mint/60 bg-white py-10 md:py-12" aria-label="Trust indicators">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {TRUST_STATS.map((stat, index) => {
            const Icon = icons[index];
            return (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-mint/50">
                  <Icon className="h-5 w-5 text-lake" aria-hidden />
                </div>
                <p className="text-2xl font-bold text-olive md:text-3xl">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-sage">{stat.label}</p>
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm font-medium text-sage">
          Proudly serving{" "}
          <span className="font-semibold text-olive">{SITE.serviceArea}</span>
        </p>
      </div>
    </section>
  );
}
