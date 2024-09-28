
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl: string = "https://rmgltopxktqojlntsfls.supabase.co";
const supabaseKey: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtZ2x0b3B4a3Rxb2psbnRzZmxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyODU5NzgsImV4cCI6MjA0Mjg2MTk3OH0.c_dEHOuHA1cv-VzwddAjiInlOIzgdC5UHrpUnM0ekAg";

export const supabase = createClient(supabaseUrl, supabaseKey);


