-- Create indexes for profiles table
CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles(email);
CREATE INDEX IF NOT EXISTS idx_profiles_created_at ON public.profiles(created_at);
CREATE INDEX IF NOT EXISTS idx_profiles_updated_at ON public.profiles(updated_at);

-- Create a GIN index for full-text search on full_name and bio
CREATE INDEX IF NOT EXISTS idx_profiles_search ON public.profiles USING GIN (
  to_tsvector('english', COALESCE(full_name, '') || ' ' || COALESCE(bio, ''))
); 