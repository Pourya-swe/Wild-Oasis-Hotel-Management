import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "<Your Rest API from SupaBase"; /// REST API

const supabaseKey = "<Your Public Key From SupaBase>"; /// Public Key

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
