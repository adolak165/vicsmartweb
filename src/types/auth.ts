import { User as SupabaseUser } from '@supabase/supabase-js';

export interface AuthFormData {
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface AuthError {
  message: string;
  status?: number;
}

export type User = SupabaseUser; 