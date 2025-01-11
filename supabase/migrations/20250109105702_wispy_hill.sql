/*
  # Initial Schema Setup for MomEase

  1. New Tables
    - `profiles`
      - Base table for all users (both mothers and nannies)
      - Contains common fields like name, email, role
    - `mother_profiles`
      - Extended information for mothers
      - Health, financial, and work-related information
    - `nanny_profiles`
      - Extended information for nannies
      - Verification and professional details
    - `subscription_plans`
      - Available subscription plans
      - Includes government-subsidized options

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  role text NOT NULL CHECK (role IN ('mother', 'nanny')),
  name text NOT NULL,
  verified boolean DEFAULT false,
  language text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create mother_profiles table
CREATE TABLE IF NOT EXISTS mother_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  postpartum_stage text NOT NULL,
  medical_conditions text[] DEFAULT '{}',
  dietary_restrictions text[] DEFAULT '{}',
  income_range text NOT NULL,
  government_scheme_eligible boolean DEFAULT false,
  employed boolean DEFAULT false,
  maternity_leave_status text,
  subscription_plan_id uuid,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create nanny_profiles table
CREATE TABLE IF NOT EXISTS nanny_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  experience integer NOT NULL,
  mother_tongue text NOT NULL,
  aadhar_number text UNIQUE NOT NULL,
  police_verification boolean DEFAULT false,
  training_completed boolean DEFAULT false,
  specializations text[] DEFAULT '{}',
  availability boolean DEFAULT true,
  rating decimal(3,2) DEFAULT 0.00,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create subscription_plans table
CREATE TABLE IF NOT EXISTS subscription_plans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  price decimal(10,2) NOT NULL,
  features text[] NOT NULL,
  duration text NOT NULL,
  is_government_subsidized boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE mother_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE nanny_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscription_plans ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Mothers can view their own extended profile"
  ON mother_profiles
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = mother_profiles.profile_id
      AND profiles.user_id = auth.uid()
    )
  );

CREATE POLICY "Nannies can view their own extended profile"
  ON nanny_profiles
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = nanny_profiles.profile_id
      AND profiles.user_id = auth.uid()
    )
  );

CREATE POLICY "Anyone can view subscription plans"
  ON subscription_plans
  FOR SELECT
  TO authenticated
  USING (true);

-- Create function to handle user registration
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO profiles (user_id, email, role, name, language)
  VALUES (new.id, new.email, new.raw_user_meta_data->>'role', new.raw_user_meta_data->>'name', new.raw_user_meta_data->>'language');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();