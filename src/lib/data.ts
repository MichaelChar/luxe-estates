import { Property } from "./types";

export const properties: Property[] = [
  {
    id: "1",
    title: "Modern Minimalist Villa",
    slug: "modern-minimalist-villa",
    description:
      "A striking contemporary residence defined by clean geometry and floor-to-ceiling glass. Open-plan living flows onto a cantilevered terrace overlooking the Pacific. White oak floors, Bulthaup kitchen, and a rooftop infinity pool complete the picture.",
    price: 4_250_000,
    address: {
      street: "1240 Skyline Drive",
      city: "Malibu",
      state: "CA",
      zip: "90265",
    },
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4800,
    lotSize: "0.45 acres",
    yearBuilt: 2022,
    propertyType: "house",
    status: "for-sale",
    features: [
      "Infinity Pool",
      "Ocean View",
      "Smart Home",
      "Wine Cellar",
      "Home Theater",
      "3-Car Garage",
    ],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    ],
    agent: {
      name: "Sarah Chen",
      phone: "(310) 555-0142",
      email: "sarah@luxeestates.com",
    },
    coordinates: { lat: 34.0259, lng: -118.7798 },
    createdAt: "2026-02-15",
  },
  {
    id: "2",
    title: "Soho Loft Penthouse",
    slug: "soho-loft-penthouse",
    description:
      "A rare full-floor penthouse in a converted cast-iron building. Exposed brick, 14-foot ceilings, and a private rooftop garden with skyline views. Chef's kitchen with La Cornue range and Calacatta marble countertops.",
    price: 6_750_000,
    address: {
      street: "87 Greene Street",
      city: "New York",
      state: "NY",
      zip: "10012",
    },
    bedrooms: 3,
    bathrooms: 3,
    sqft: 3200,
    lotSize: "N/A",
    yearBuilt: 1885,
    propertyType: "penthouse",
    status: "for-sale",
    features: [
      "Rooftop Garden",
      "Exposed Brick",
      "Private Elevator",
      "Skyline Views",
      "Chef's Kitchen",
      "Fireplace",
    ],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
    ],
    agent: {
      name: "Marcus Webb",
      phone: "(212) 555-0198",
      email: "marcus@luxeestates.com",
    },
    coordinates: { lat: 40.7234, lng: -74.0014 },
    createdAt: "2026-01-28",
  },
  {
    id: "3",
    title: "Lakefront Contemporary",
    slug: "lakefront-contemporary",
    description:
      "Architecturally significant lakefront home with walls of glass framing unobstructed water views. Japanese-inspired landscaping, heated floors throughout, and a boat dock with lift. Designed for seamless indoor-outdoor living.",
    price: 2_890_000,
    address: {
      street: "450 Lakeshore Boulevard",
      city: "Austin",
      state: "TX",
      zip: "78703",
    },
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3600,
    lotSize: "0.38 acres",
    yearBuilt: 2020,
    propertyType: "house",
    status: "for-sale",
    features: [
      "Lake Access",
      "Boat Dock",
      "Heated Floors",
      "Japanese Garden",
      "Outdoor Kitchen",
      "EV Charging",
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
    agent: {
      name: "Elena Rodriguez",
      phone: "(512) 555-0167",
      email: "elena@luxeestates.com",
    },
    coordinates: { lat: 30.2849, lng: -97.7641 },
    createdAt: "2026-03-01",
  },
  {
    id: "4",
    title: "Historic Brownstone",
    slug: "historic-brownstone",
    description:
      "Meticulously restored 1890s brownstone blending period details with modern luxury. Original pocket doors, decorative mantels, and a chef's kitchen with Sub-Zero and Wolf appliances. Private garden and deeded parking.",
    price: 3_450_000,
    address: {
      street: "312 Commonwealth Avenue",
      city: "Boston",
      state: "MA",
      zip: "02116",
    },
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4200,
    lotSize: "0.08 acres",
    yearBuilt: 1892,
    propertyType: "townhouse",
    status: "pending",
    features: [
      "Original Details",
      "Private Garden",
      "Deeded Parking",
      "Wine Storage",
      "Library",
      "Mudroom",
    ],
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    ],
    agent: {
      name: "James O'Brien",
      phone: "(617) 555-0134",
      email: "james@luxeestates.com",
    },
    coordinates: { lat: 42.3496, lng: -71.0833 },
    createdAt: "2026-02-10",
  },
  {
    id: "5",
    title: "Desert Modern Retreat",
    slug: "desert-modern-retreat",
    description:
      "A desert masterpiece of rammed earth and steel, nestled against a mountain backdrop. Resort-style pool, outdoor fire pit lounge, and a detached casita. Walls of glass dissolve the boundary between architecture and landscape.",
    price: 1_975_000,
    address: {
      street: "7890 E Camelback Mesa",
      city: "Scottsdale",
      state: "AZ",
      zip: "85251",
    },
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3100,
    lotSize: "0.62 acres",
    yearBuilt: 2021,
    propertyType: "house",
    status: "for-sale",
    features: [
      "Mountain Views",
      "Resort Pool",
      "Guest Casita",
      "Fire Pit",
      "Solar Panels",
      "Desert Landscaping",
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    ],
    agent: {
      name: "David Kim",
      phone: "(480) 555-0156",
      email: "david@luxeestates.com",
    },
    coordinates: { lat: 33.4942, lng: -111.926 },
    createdAt: "2026-03-10",
  },
  {
    id: "6",
    title: "Waterfront Condo at The Pinnacle",
    slug: "waterfront-condo-pinnacle",
    description:
      "Corner unit in Miami's most sought-after tower with panoramic Biscayne Bay views. Floor-to-ceiling impact glass, Snaidero kitchen, and access to five-star amenities including spa, tennis courts, and marina.",
    price: 2_150_000,
    address: {
      street: "1000 Biscayne Boulevard #4501",
      city: "Miami",
      state: "FL",
      zip: "33132",
    },
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2400,
    lotSize: "N/A",
    yearBuilt: 2019,
    propertyType: "condo",
    status: "for-sale",
    features: [
      "Bay Views",
      "Concierge",
      "Spa Access",
      "Tennis Courts",
      "Marina",
      "Valet Parking",
    ],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472556-e636c2acda9e?w=1200&q=80",
    ],
    agent: {
      name: "Isabella Torres",
      phone: "(305) 555-0189",
      email: "isabella@luxeestates.com",
    },
    coordinates: { lat: 25.7825, lng: -80.1867 },
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
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}
