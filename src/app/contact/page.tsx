"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getPropertyById } from "@/lib/data";

function ContactForm() {
  const searchParams = useSearchParams();
  const propertyId = searchParams.get("property");
  const property = propertyId ? getPropertyById(propertyId) : null;
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-xl border bg-card p-8 text-center">
        <h2 className="text-2xl font-bold">Thank you!</h2>
        <p className="mt-2 text-muted-foreground">
          We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5 rounded-xl border bg-card p-6"
    >
      {property && (
        <p className="text-sm text-muted-foreground">
          Inquiry about: <strong>{property.title}</strong>
        </p>
      )}

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Name
        </label>
        <Input id="name" required placeholder="Your full name" />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          Email
        </label>
        <Input id="email" type="email" required placeholder="you@email.com" />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium">
          Phone
        </label>
        <Input id="phone" type="tel" placeholder="(555) 000-0000" />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          required
          placeholder="Tell us what you're looking for..."
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
      </div>

      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <div className="mb-10 text-center">
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Contact Us
        </h1>
        <p className="mt-3 text-muted-foreground">
          Ready to find your dream home? We&apos;d love to hear from you.
        </p>
      </div>

      <Suspense>
        <ContactForm />
      </Suspense>
    </section>
  );
}
