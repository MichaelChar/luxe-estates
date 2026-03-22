import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { getPropertyById, formatPrice, properties } from "@/lib/data";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

export default async function PropertyPage({ params }: PageProps) {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) return notFound();

  const statusLabel = {
    "for-sale": "For Sale",
    pending: "Pending",
    sold: "Sold",
  }[property.status];

  return (
    <article className="mx-auto max-w-7xl px-6 py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link href="/listings" className="hover:text-foreground">
          Listings
        </Link>
        <span className="mx-2">/</span>
        <span>{property.title}</span>
      </nav>

      {/* Image gallery */}
      <div className="grid gap-2 sm:grid-cols-2">
        {property.images.map((src, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-xl bg-muted ${
              i === 0 ? "sm:row-span-2 sm:aspect-[4/5]" : "aspect-[4/3]"
            }`}
          >
            <img
              src={src}
              alt={`${property.title} — photo ${i + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="mt-10 grid gap-12 lg:grid-cols-3">
        {/* Main info */}
        <div className="lg:col-span-2">
          <div className="flex flex-wrap items-start gap-3">
            <Badge
              variant={
                property.status === "for-sale" ? "default" : "secondary"
              }
            >
              {statusLabel}
            </Badge>
            <Badge variant="outline" className="capitalize">
              {property.propertyType}
            </Badge>
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight">
            {property.title}
          </h1>
          <p className="mt-1 text-lg text-muted-foreground">
            {property.address.street}, {property.address.city},{" "}
            {property.address.state} {property.address.zip}
          </p>

          <p className="mt-2 text-3xl font-bold">
            {formatPrice(property.price)}
          </p>

          {/* Stats */}
          <div className="mt-6 flex gap-8 text-sm">
            <div>
              <p className="text-2xl font-bold">{property.bedrooms}</p>
              <p className="text-muted-foreground">Bedrooms</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{property.bathrooms}</p>
              <p className="text-muted-foreground">Bathrooms</p>
            </div>
            <div>
              <p className="text-2xl font-bold">
                {property.sqft.toLocaleString()}
              </p>
              <p className="text-muted-foreground">Sq Ft</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{property.yearBuilt}</p>
              <p className="text-muted-foreground">Year Built</p>
            </div>
          </div>

          <Separator className="my-8" />

          <h2 className="text-xl font-semibold">About This Property</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {property.description}
          </p>

          <Separator className="my-8" />

          <h2 className="text-xl font-semibold">Features</h2>
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
            {property.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Sidebar — Agent card */}
        <aside className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold">Listing Agent</h3>
          <p className="mt-2 font-medium">{property.agent.name}</p>
          <p className="text-sm text-muted-foreground">
            {property.agent.phone}
          </p>
          <p className="text-sm text-muted-foreground">
            {property.agent.email}
          </p>

          <Link
            href={`/contact?property=${property.id}`}
            className={cn(buttonVariants(), "mt-6 w-full")}
          >
            Schedule a Viewing
          </Link>
          <Link
            href={`/contact?property=${property.id}`}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "mt-2 w-full"
            )}
          >
            Ask a Question
          </Link>
        </aside>
      </div>
    </article>
  );
}
