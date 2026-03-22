import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-neutral-950 text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-7xl">
          Find Your
          <br />
          Perfect Home
        </h1>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/listings"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-white text-black hover:bg-white/90"
            )}
          >
            View Listings
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "bg-white text-black hover:bg-white/90"
            )}
          >
            Schedule a Tour
          </Link>
        </div>
      </div>
    </section>
  );
}
