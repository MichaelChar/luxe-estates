import { Suspense } from "react";
import { PropertyCard } from "@/components/property-card";
import { FilterBar } from "@/components/filter-bar";
import { properties } from "@/lib/data";
import { Property } from "@/lib/types";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

function filterProperties(
  items: Property[],
  params: { q?: string; type?: string; beds?: string; sort?: string }
): Property[] {
  let filtered = [...items];

  if (params.q) {
    const q = params.q.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.address.city.toLowerCase().includes(q)
    );
  }

  if (params.type && params.type !== "all") {
    filtered = filtered.filter((p) => p.propertyType === params.type);
  }

  if (params.beds && params.beds !== "all") {
    const min = parseInt(params.beds, 10);
    filtered = filtered.filter((p) => p.bedrooms >= min);
  }

  switch (params.sort) {
    case "price-asc":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "sqft":
      filtered.sort((a, b) => b.sqft - a.sqft);
      break;
    default:
      filtered.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
  }

  return filtered;
}

export default async function ListingsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const filtered = filterProperties(properties, params);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">All Listings</h1>
        <p className="mt-1 text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "property" : "properties"}{" "}
          available
        </p>
      </div>

      <Suspense>
        <FilterBar />
      </Suspense>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-muted-foreground">
          No properties match your filters.
        </p>
      )}
    </section>
  );
}
