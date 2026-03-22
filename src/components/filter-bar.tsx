"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function FilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateFilter = useCallback(
    (key: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value && value !== "all") {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.push(`/listings?${params.toString()}`);
    },
    [router, searchParams]
  );

  const clearFilters = useCallback(() => {
    router.push("/listings");
  }, [router]);

  return (
    <div className="flex flex-wrap items-center gap-3 rounded-xl border bg-card p-4">
      <Input
        placeholder="Search by city or title..."
        defaultValue={searchParams.get("q") ?? ""}
        onChange={(e) => updateFilter("q", e.target.value)}
        className="h-9 w-full sm:w-56"
      />

      <Select
        defaultValue={searchParams.get("type") ?? "all"}
        onValueChange={(v) => updateFilter("type", v)}
      >
        <SelectTrigger className="h-9 w-full sm:w-40">
          <SelectValue placeholder="Property Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="house">House</SelectItem>
          <SelectItem value="condo">Condo</SelectItem>
          <SelectItem value="townhouse">Townhouse</SelectItem>
          <SelectItem value="penthouse">Penthouse</SelectItem>
        </SelectContent>
      </Select>

      <Select
        defaultValue={searchParams.get("beds") ?? "all"}
        onValueChange={(v) => updateFilter("beds", v)}
      >
        <SelectTrigger className="h-9 w-full sm:w-36">
          <SelectValue placeholder="Bedrooms" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Any Beds</SelectItem>
          <SelectItem value="2">2+</SelectItem>
          <SelectItem value="3">3+</SelectItem>
          <SelectItem value="4">4+</SelectItem>
          <SelectItem value="5">5+</SelectItem>
        </SelectContent>
      </Select>

      <Select
        defaultValue={searchParams.get("sort") ?? "newest"}
        onValueChange={(v) => updateFilter("sort", v)}
      >
        <SelectTrigger className="h-9 w-full sm:w-40">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">Newest</SelectItem>
          <SelectItem value="price-asc">Price: Low to High</SelectItem>
          <SelectItem value="price-desc">Price: High to Low</SelectItem>
          <SelectItem value="sqft">Largest</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="ghost" size="sm" onClick={clearFilters}>
        Clear
      </Button>
    </div>
  );
}
