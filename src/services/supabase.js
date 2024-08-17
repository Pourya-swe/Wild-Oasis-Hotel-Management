import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_REST_API; ///Your REST API From SupaBase - Stirng -
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLIC_KEY; ///Your Public Key From SupaBase - String -

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
