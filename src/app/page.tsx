import { Hero } from "@/components/hero";
import { PropertyCard } from "@/components/property-card";
import { properties } from "@/lib/data";

export default function Home() {
  const featured = properties.filter((p) => p.status === "for-sale").slice(0, 3);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Curated Selection
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Properties
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </>
  );
}
