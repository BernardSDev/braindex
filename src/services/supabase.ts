
import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL as string;
// const supabaseKey = process.env.REACT_APP_SUPABASE_KEY as string;

export const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL
export const supabaseKey = import.meta.env.VITE_APP_SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey);


