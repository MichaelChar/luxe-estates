export interface Property {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  lotSize: string;
  yearBuilt: number;
  propertyType: "house" | "condo" | "townhouse" | "penthouse";
  status: "for-sale" | "pending" | "sold";
  features: string[];
  images: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  createdAt: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyId?: string;
}
