
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL
export const supabaseKey = import.meta.env.VITE_APP_SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey);


