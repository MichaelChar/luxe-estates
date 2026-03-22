import { Property } from "./types";

export const properties: Property[] = [
  {
    id: "1",
    title: "Alpine Glass Chalet",
    slug: "alpine-glass-chalet",
    description:
      "A striking contemporary chalet perched above Zermatt with unobstructed views of the Matterhorn. Floor-to-ceiling triple-glazed windows, heated stone floors, and a cantilevered terrace with infinity hot tub. Bulthaup kitchen, private ski room, and direct access to the slopes.",
    price: 8_500_000,
    address: {
      street: "Obere Mattenstrasse 12",
      city: "Zermatt",
      state: "Valais",
      zip: "3920",
    },
    bedrooms: 6,
    bathrooms: 5,
    sqft: 5200,
    lotSize: "1200 m\u00B2",
    yearBuilt: 2023,
    propertyType: "house",
    status: "for-sale",
    features: [
      "Matterhorn View",
      "Ski-In / Ski-Out",
      "Infinity Hot Tub",
      "Wine Cellar",
      "Home Cinema",
      "Private Ski Room",
    ],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    ],
    agent: {
      name: "Lena Baumann",
      phone: "+41 27 966 0142",
      email: "lena@xStudios.ch",
    },
    coordinates: { lat: 46.0207, lng: 7.7491 },
    createdAt: "2026-02-15",
  },
  {
    id: "2",
    title: "Lakeside Penthouse Zurich",
    slug: "lakeside-penthouse-zurich",
    description:
      "A rare full-floor penthouse on Zurich's Gold Coast with panoramic views over Lake Zurich and the Alps. Double-height living room, private rooftop terrace, and a chef's kitchen with Gaggenau appliances and Calacatta marble. Concierge and underground parking for three cars.",
    price: 12_750_000,
    address: {
      street: "Seestrasse 87",
      city: "Zurich",
      state: "Zurich",
      zip: "8002",
    },
    bedrooms: 4,
    bathrooms: 4,
    sqft: 3800,
    lotSize: "N/A",
    yearBuilt: 2021,
    propertyType: "penthouse",
    status: "for-sale",
    features: [
      "Lake View",
      "Rooftop Terrace",
      "Private Elevator",
      "Alpine Panorama",
      "Chef's Kitchen",
      "3-Car Garage",
    ],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
    ],
    agent: {
      name: "Marc Keller",
      phone: "+41 44 210 0198",
      email: "marc@xStudios.ch",
    },
    coordinates: { lat: 47.3667, lng: 8.5500 },
    createdAt: "2026-01-28",
  },
  {
    id: "3",
    title: "Lake Geneva Modern Villa",
    slug: "lake-geneva-modern-villa",
    description:
      "Architecturally significant lakefront villa on the shores of Lac L\u00E9man with unobstructed water and mountain views. Minimalist design with walls of glass, heated floors throughout, and a private dock. Landscaped gardens descend to the waterfront with an infinity pool.",
    price: 9_200_000,
    address: {
      street: "Route de Lausanne 45",
      city: "Montreux",
      state: "Vaud",
      zip: "1820",
    },
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4100,
    lotSize: "2400 m\u00B2",
    yearBuilt: 2022,
    propertyType: "house",
    status: "for-sale",
    features: [
      "Lake Access",
      "Private Dock",
      "Infinity Pool",
      "Heated Floors",
      "Wine Cellar",
      "Smart Home",
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
    agent: {
      name: "Sophie Duval",
      phone: "+41 21 963 0167",
      email: "sophie@xStudios.ch",
    },
    coordinates: { lat: 46.4312, lng: 6.9107 },
    createdAt: "2026-03-01",
  },
  {
    id: "4",
    title: "Historic Old Town Residence",
    slug: "historic-old-town-residence",
    description:
      "Meticulously restored 18th-century townhouse in Bern's UNESCO-listed Old Town. Original vaulted ceilings, period sandstone details, and a fully modernized interior with Gaggenau kitchen. Private courtyard garden and rooftop terrace with views over the Aare river.",
    price: 5_900_000,
    address: {
      street: "Kramgasse 28",
      city: "Bern",
      state: "Bern",
      zip: "3011",
    },
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3900,
    lotSize: "340 m\u00B2",
    yearBuilt: 1742,
    propertyType: "townhouse",
    status: "pending",
    features: [
      "UNESCO Heritage",
      "Courtyard Garden",
      "Rooftop Terrace",
      "Vaulted Ceilings",
      "Wine Storage",
      "River Views",
    ],
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    ],
    agent: {
      name: "Thomas Brunner",
      phone: "+41 31 312 0134",
      email: "thomas@xStudios.ch",
    },
    coordinates: { lat: 46.9480, lng: 7.4474 },
    createdAt: "2026-02-10",
  },
  {
    id: "5",
    title: "Engadin Mountain Estate",
    slug: "engadin-mountain-estate",
    description:
      "A masterwork of alpine architecture in the Upper Engadin valley, blending local Arven wood and natural stone with contemporary design. Panoramic mountain views, resort-style wellness area with indoor pool and sauna, and a detached guest house. Steps from world-class skiing in St. Moritz.",
    price: 14_500_000,
    address: {
      street: "Via Serlas 22",
      city: "St. Moritz",
      state: "Graub\u00FCnden",
      zip: "7500",
    },
    bedrooms: 7,
    bathrooms: 6,
    sqft: 6500,
    lotSize: "3200 m\u00B2",
    yearBuilt: 2020,
    propertyType: "house",
    status: "for-sale",
    features: [
      "Mountain Panorama",
      "Indoor Pool",
      "Sauna & Spa",
      "Guest House",
      "Ski Storage",
      "Solar Panels",
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    ],
    agent: {
      name: "Andrea Fehr",
      phone: "+41 81 833 0156",
      email: "andrea@xStudios.ch",
    },
    coordinates: { lat: 46.4908, lng: 9.8355 },
    createdAt: "2026-03-10",
  },
  {
    id: "6",
    title: "Lugano Waterfront Condo",
    slug: "lugano-waterfront-condo",
    description:
      "Corner unit in Lugano's most exclusive lakefront residence with sweeping views over Lake Lugano and Monte San Salvatore. Floor-to-ceiling glass, Italian marble throughout, and access to five-star amenities including spa, private beach, and marina berth.",
    price: 4_800_000,
    address: {
      street: "Riva Albertolli 3, Apt 12",
      city: "Lugano",
      state: "Ticino",
      zip: "6900",
    },
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2600,
    lotSize: "N/A",
    yearBuilt: 2019,
    propertyType: "condo",
    status: "for-sale",
    features: [
      "Lake View",
      "Concierge",
      "Spa & Wellness",
      "Private Beach",
      "Marina Berth",
      "Underground Parking",
    ],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472556-e636c2acda9e?w=1200&q=80",
    ],
    agent: {
      name: "Giulia Bentivoglio",
      phone: "+41 91 922 0189",
      email: "giulia@xStudios.ch",
    },
    coordinates: { lat: 46.0037, lng: 8.9511 },
    createdAt: "2026-03-18",
  },
];

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id);
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("de-CH", {
    style: "currency",
    currency: "CHF",
    maximumFractionDigits: 0,
  }).format(price);
}
