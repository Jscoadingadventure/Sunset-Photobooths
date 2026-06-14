"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EVENT_TYPES, SERVICE_AREAS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  eventDate: z.string().min(1, "Please select your event date"),
  eventType: z.string().min(1, "Please select an event type"),
  guestCount: z.string().min(1, "Please enter an estimated guest count"),
  venue: z.string().min(2, "Please enter your venue or location"),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inputClasses =
  "w-full rounded-xl border border-mint/80 bg-white px-4 py-3 text-olive placeholder:text-sage/60 transition-colors focus:border-lake focus:outline-none focus:ring-2 focus:ring-lake/20";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // TODO: wire to Formspree/Resend when ready
    // Example Formspree integration:
    // const res = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });
    // if (!res.ok) throw new Error("Submission failed");
    void data;

    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="bg-mint/30 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get in touch"
          title="Request your custom quote"
          subtitle="Tell us about your event and we'll respond within 24 hours with a tailored proposal."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl border border-lake/30 bg-white p-8 text-center md:p-12">
                <CheckCircle2 className="mx-auto h-12 w-12 text-lake" aria-hidden />
                <h3 className="mt-4 text-2xl font-bold text-olive">Thank you!</h3>
                <p className="mt-2 text-sage">
                  We&apos;ve received your request and will be in touch within 24 hours.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setSubmitted(false)}
                >
                  Submit another request
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-2xl border border-mint/60 bg-white p-6 md:p-8"
                noValidate
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-olive">
                      Full name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      className={cn(inputClasses, errors.name && "border-red-400")}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600" role="alert">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-olive">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      className={cn(inputClasses, errors.email && "border-red-400")}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-olive">
                      Phone *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      className={cn(inputClasses, errors.phone && "border-red-400")}
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600" role="alert">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="eventDate" className="mb-1.5 block text-sm font-medium text-olive">
                      Event date *
                    </label>
                    <input
                      id="eventDate"
                      type="date"
                      className={cn(inputClasses, errors.eventDate && "border-red-400")}
                      {...register("eventDate")}
                    />
                    {errors.eventDate && (
                      <p className="mt-1 text-sm text-red-600" role="alert">
                        {errors.eventDate.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="eventType" className="mb-1.5 block text-sm font-medium text-olive">
                      Event type *
                    </label>
                    <select
                      id="eventType"
                      className={cn(inputClasses, errors.eventType && "border-red-400")}
                      {...register("eventType")}
                    >
                      <option value="" disabled>
                        Select event type
                      </option>
                      {EVENT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.eventType && (
                      <p className="mt-1 text-sm text-red-600" role="alert">
                        {errors.eventType.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="guestCount" className="mb-1.5 block text-sm font-medium text-olive">
                      Estimated guests *
                    </label>
                    <input
                      id="guestCount"
                      type="number"
                      min="1"
                      placeholder="e.g. 150"
                      className={cn(inputClasses, errors.guestCount && "border-red-400")}
                      {...register("guestCount")}
                    />
                    {errors.guestCount && (
                      <p className="mt-1 text-sm text-red-600" role="alert">
                        {errors.guestCount.message}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="venue" className="mb-1.5 block text-sm font-medium text-olive">
                      Venue / location *
                    </label>
                    <input
                      id="venue"
                      type="text"
                      placeholder="Venue name and city"
                      className={cn(inputClasses, errors.venue && "border-red-400")}
                      {...register("venue")}
                    />
                    {errors.venue && (
                      <p className="mt-1 text-sm text-red-600" role="alert">
                        {errors.venue.message}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-olive">
                      Additional details
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your vision, special requests, or questions..."
                      className={cn(inputClasses, "resize-none")}
                      {...register("message")}
                    />
                  </div>
                </div>

                <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Request Quote"}
                </Button>
              </form>
            )}
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-2xl bg-olive p-8 text-mint">
              <h3 className="text-xl font-bold text-white">Contact information</h3>
              <p className="mt-2 text-sm text-mint/80">
                Prefer to reach out directly? We&apos;d love to hear from you.
              </p>

              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-sunset" aria-hidden />
                  <div>
                    <p className="text-sm font-medium text-white">Email</p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-sm text-mint/80 transition-colors hover:text-white"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-sunset" aria-hidden />
                  <div>
                    <p className="text-sm font-medium text-white">Phone</p>
                    <a
                      href={`tel:${SITE.phone.replace(/\D/g, "")}`}
                      className="text-sm text-mint/80 transition-colors hover:text-white"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sunset" aria-hidden />
                  <div>
                    <p className="text-sm font-medium text-white">Service area</p>
                    <p className="text-sm text-mint/80">{SITE.serviceArea}</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 border-t border-mint/20 pt-6">
                <p className="text-sm font-medium text-white">Areas we serve</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {SERVICE_AREAS.map((area) => (
                    <span
                      key={area}
                      className="rounded-full bg-mint/10 px-3 py-1 text-xs text-mint/90"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
