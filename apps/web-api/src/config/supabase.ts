import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;

if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error("Supabase URL and Supabase Service Key must be provided");
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export default supabase;
