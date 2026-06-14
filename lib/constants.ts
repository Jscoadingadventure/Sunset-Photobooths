import {
  Building2,
  Camera,
  Heart,
  PartyPopper,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export const SITE = {
  name: "Sunset Photobooths",
  tagline: "Moments captured",
  description:
    "Toronto's premium photobooth rental for weddings, corporate events, and brand activations across the GTA.",
  email: "Sunsetphotobooths.to@gmail.com",
  phone: "+1 (647) 244-6260",
  url: "https://sunsetphotobooths.ca",
  serviceArea: "Toronto & the Greater Toronto Area",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
] as const;

export const TRUST_STATS = [
  { value: "500+", label: "Events served" },
  { value: "5.0", label: "Client rating" },
  { value: "Same-day", label: "Digital gallery" },
  { value: "Fully", label: "Insured & licensed" },
] as const;

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    id: "weddings",
    title: "Weddings & Receptions",
    description:
      "Elegant setups with custom overlays, instant sharing, and keepsake prints your guests will treasure.",
    icon: Heart,
  },
  {
    id: "corporate",
    title: "Corporate Events",
    description:
      "Professional branded experiences for conferences, galas, and team celebrations that reflect your company.",
    icon: Building2,
  },
  {
    id: "brand",
    title: "Brand Activations",
    description:
      "Custom-branded booths with tailored overlays, lead capture, and social-ready content for maximum reach.",
    icon: Sparkles,
  },
  {
    id: "parties",
    title: "Private Parties",
    description:
      "Birthdays, anniversaries, and milestone celebrations with fun props and an attendant to keep the energy high.",
    icon: PartyPopper,
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Request a quote",
    description:
      "Tell us about your event — date, venue, guest count, and vision. We respond within 24 hours.",
  },
  {
    step: "02",
    title: "Customize your experience",
    description:
      "Choose your package, backdrop, props, and custom photo overlays tailored to your event.",
  },
  {
    step: "03",
    title: "We deliver & set up",
    description:
      "Our team arrives early, handles full setup and testing, and stays on-site for the entire rental.",
  },
  {
    step: "04",
    title: "Guests capture memories",
    description:
      "Instant prints, text & email sharing, and a private online gallery delivered the same day.",
  },
] as const;

export type PackageFeature = {
  label: string;
  essential: boolean | string;
  signature: boolean | string;
  enterprise: boolean | string;
};

export const PACKAGES = [
  {
    id: "essential",
    name: "Essential",
    price: "$599",
    duration: "2 hours",
    description: "Perfect for intimate gatherings and smaller celebrations.",
    highlighted: false,
    features: [
      "Open-air photobooth setup",
      "Standard backdrop collection",
      "Unlimited digital photos",
      "Text & email sharing",
      "Online gallery (30 days)",
      "Professional attendant",
    ],
  },
  {
    id: "signature",
    name: "Signature",
    price: "$899",
    duration: "3 hours",
    description: "Our most popular choice for weddings and corporate events.",
    highlighted: true,
    features: [
      "Everything in Essential",
      "Premium backdrop selection",
      "Curated prop collection",
      "Custom event overlay",
      "Unlimited 4×6 prints",
      "Online gallery (90 days)",
      "Red carpet & stanchions",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    duration: "Flexible",
    description: "Fully tailored experiences for brands and large-scale events.",
    highlighted: false,
    features: [
      "Everything in Signature",
      "Full custom branding & wrap",
      "Dedicated event coordinator",
      "Multi-booth configurations",
      "Lead capture integration",
      "Green screen option",
      "Priority support & planning",
    ],
  },
] as const;

export const PACKAGE_COMPARISON: PackageFeature[] = [
  { label: "Rental duration", essential: "2 hrs", signature: "3 hrs", enterprise: "Flexible" },
  { label: "Professional attendant", essential: true, signature: true, enterprise: true },
  { label: "Digital sharing", essential: true, signature: true, enterprise: true },
  { label: "Custom overlay", essential: false, signature: true, enterprise: true },
  { label: "Unlimited prints", essential: false, signature: true, enterprise: true },
  { label: "Custom branding", essential: false, signature: false, enterprise: true },
  { label: "Dedicated coordinator", essential: false, signature: false, enterprise: true },
];

export type GalleryCategory = "all" | "weddings" | "corporate" | "parties";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "all">;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    alt: "Couple celebrating at a wedding photobooth",
    category: "weddings",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    alt: "Corporate event with branded photobooth",
    category: "corporate",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    alt: "Wedding reception guests with photo strips",
    category: "weddings",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    alt: "Brand activation with colorful lighting",
    category: "corporate",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    alt: "Birthday party guests having fun in photobooth",
    category: "parties",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1469371670803-013ccf25f16a?w=800&q=80",
    alt: "Outdoor wedding photobooth setup",
    category: "weddings",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    alt: "Conference attendees at corporate photobooth",
    category: "corporate",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1533174072545-7a4b6ecd1924?w=800&q=80",
    alt: "Celebration party with friends in photobooth",
    category: "parties",
  },
];

export const GALLERY_FILTERS: { label: string; value: GalleryCategory }[] = [
  { label: "All", value: "all" },
  { label: "Weddings", value: "weddings" },
  { label: "Corporate", value: "corporate" },
  { label: "Parties", value: "parties" },
];

export const TESTIMONIALS = [
  {
    id: "1",
    quote:
      "Sunset Photobooths was the highlight of our wedding reception. The custom overlay, instant sharing, and professional attendant made everything seamless.",
    name: "Sarah & Michael T.",
    event: "Wedding — Liberty Grand",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "We booked them for our annual company gala and the branded booth was a huge hit. Our team loved the quality and the lead capture feature was a bonus.",
    name: "Jennifer L.",
    event: "Corporate Gala — Downtown Toronto",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "From quote to event day, the experience was flawless. Guests are still talking about the photo strips weeks later. Highly recommend for any celebration.",
    name: "David & Priya K.",
    event: "Anniversary Party — Mississauga",
    rating: 5,
  },
] as const;

export const WHY_US_FEATURES = [
  "Professional on-site attendants at every event",
  "Instant text, email, and social sharing",
  "Fully custom photo overlays and branding",
  "Toronto-based team with local venue expertise",
  "Fully insured with $2M liability coverage",
  "Same-day private online gallery delivery",
  "Premium backdrops, props, and lighting",
  "Flexible packages for any event size",
] as const;

export const FAQ_ITEMS = [
  {
    id: "space",
    question: "How much space does the photobooth require?",
    answer:
      "Our open-air setup requires approximately 8×8 feet of floor space plus a standard power outlet within 15 feet. We recommend a flat surface and can accommodate most indoor and covered outdoor venues.",
  },
  {
    id: "travel",
    question: "Do you charge travel fees within the GTA?",
    answer:
      "Travel within Toronto is included in all packages. For events in the broader GTA (Mississauga, Brampton, Vaughan, Markham, etc.), a modest travel fee may apply — we'll confirm this in your quote upfront with no surprises.",
  },
  {
    id: "prints",
    question: "Are prints included in every package?",
    answer:
      "All packages include unlimited digital photos with instant sharing. Unlimited 4×6 prints are included in our Signature and Enterprise packages. Prints can be added to the Essential package for an additional fee.",
  },
  {
    id: "outdoor",
    question: "Can the booth be set up outdoors?",
    answer:
      "Yes, we can set up in covered outdoor areas protected from direct rain and strong wind. We bring weights and stabilizers for outdoor setups. In case of severe weather, we'll work with you on an indoor alternative.",
  },
  {
    id: "booking",
    question: "How far in advance should I book?",
    answer:
      "We recommend booking 2–3 months ahead for weddings and peak season (May–October). Corporate events typically need 4–6 weeks notice. Last-minute availability may be possible — contact us and we'll do our best.",
  },
  {
    id: "custom",
    question: "Can you create custom branded overlays?",
    answer:
      "Absolutely. Custom overlays with your names, logo, event hashtag, or brand colours are included in Signature and Enterprise packages. We'll send a proof for your approval before your event.",
  },
] as const;

export const EVENT_TYPES = [
  "Wedding",
  "Corporate Event",
  "Brand Activation",
  "Birthday Party",
  "Anniversary",
  "Holiday Party",
  "Other",
] as const;

export const SERVICE_AREAS = [
  "Toronto",
  "North York",
  "Scarborough",
  "Etobicoke",
  "Mississauga",
  "Brampton",
  "Vaughan",
  "Markham",
  "Richmond Hill",
  "Oakville",
] as const;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
] as const;

export const HERO_ICON = Camera;
