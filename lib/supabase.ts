import { createBrowserClient } from "@supabase/ssr";
import { getSupabaseEnv } from "@/lib/env";

const { url, anonKey } = getSupabaseEnv();

export const supabase = createBrowserClient(url, anonKey);
