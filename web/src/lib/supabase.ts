import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPURL || "";
const supabaseKey = process.env.REACT_APP_SUPKEY || "";

export const supabase = createClient(supabaseUrl, supabaseKey);
