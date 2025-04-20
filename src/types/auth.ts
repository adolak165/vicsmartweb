import { User as SupabaseUser, UserMetadata } from '@supabase/supabase-js';

export interface AuthFormData {
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface AuthError {
  message: string;
  status?: number;
}

export interface User extends SupabaseUser {
  user_metadata: UserMetadata & {
    name?: string;
    avatar_url?: string;
  };
} 