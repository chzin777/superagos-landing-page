import { createClient } from '@supabase/supabase-js';

// We rely on NEXT_PUBLIC_ env vars so they are exposed to the browser.
// IMPORTANT: Never expose the service_role key in the client bundle.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

if (!supabaseUrl) {
  console.warn('Missing NEXT_PUBLIC_SUPABASE_URL environment variable');
}
if (!supabaseAnonKey) {
  console.warn('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});

export type LeadInsert = {
  nome: string;
  telefone: string;
  empresa: string;
  cnpj?: string | null;
  cargo: string;
  email: string;
  interesses: string; // produtos
  source?: string | null;
};
