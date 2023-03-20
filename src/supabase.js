
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qgztzgvwwmijxiwwrvqg.supabase.co'
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnenR6Z3Z3d21panhpd3dydnFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0MTc0NjYsImV4cCI6MTk5Mjk5MzQ2Nn0.aCIaOJl26mDNO-C0tX2BPQg6bg-a46rvxj3Yzz_dsEs"
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;