import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kkhdpbputsfjiqclabqr.supabase.co/"; /// REST API

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtraGRwYnB1dHNmamlxY2xhYnFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxNTU4NDgsImV4cCI6MjAxMTczMTg0OH0.-gX2eg_BJ8c5Ojy-qgorEHyt4vix1CacbKRMt7zdT-U"; /// Public Key

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
