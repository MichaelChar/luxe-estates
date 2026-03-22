import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Property } from "@/lib/types";
import { formatPrice } from "@/lib/data";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const statusLabel = {
    "for-sale": "For Sale",
    pending: "Pending",
    sold: "Sold",
  }[property.status];

  return (
    <Link
      href={`/listings/${property.id}`}
      className="group block overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={property.images[0]}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge
          variant={property.status === "for-sale" ? "default" : "secondary"}
          className="absolute left-3 top-3"
        >
          {statusLabel}
        </Badge>
      </div>

      {/* Details */}
      <div className="p-5">
        <p className="text-2xl font-bold tracking-tight">
          {formatPrice(property.price)}
        </p>
        <h3 className="mt-1 text-base font-medium">{property.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {property.address.city}, {property.address.state}
        </p>

        <div className="mt-4 flex gap-4 text-sm text-muted-foreground">
          <span>
            <strong className="text-foreground">{property.bedrooms}</strong> bd
          </span>
          <span>
            <strong className="text-foreground">{property.bathrooms}</strong> ba
          </span>
          <span>
            <strong className="text-foreground">
              {property.sqft.toLocaleString()}
            </strong>{" "}
            sqft
          </span>
        </div>
      </div>
    </Link>
  );
}
