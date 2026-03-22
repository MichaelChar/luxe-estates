// Supabase client scaffold — not required for local development.
// To enable: npm install @supabase/supabase-js
// Then set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local

export function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.warn(
      "Supabase not configured — using local mock data. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to enable."
    );
    return null;
  }

  // Lazy require so the app works without the package installed
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { createClient } = require("@supabase/supabase-js");
    return createClient(url, key);
  } catch {
    console.warn("@supabase/supabase-js not installed — using local mock data.");
    return null;
  }
}
