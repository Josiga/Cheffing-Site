# Supabase Setup Guide

Follow these steps to connect CulinaryConnect to Supabase.

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click **New Project**
3. Choose your organization, name the project (e.g. `culinary-connect`), set a database password, and select a region
4. Click **Create new project**

## 2. Run the Database Schema

1. In your Supabase project, go to **SQL Editor**
2. Click **New query**
3. Copy the **entire** contents of `supabase/schema.sql` and paste into the editor
4. Click **Run** (or press Ctrl+Enter)

This creates the `bookings` and `chef_registrations` tables with RLS policies and **GRANT** statements that allow anonymous inserts.

**If inserts still fail with RLS error:** Run `supabase/fix-rls.sql` in the SQL Editor to add the required GRANT permissions.

## 3. Get Your API Keys

1. Go to **Project Settings** (gear icon) > **API**
2. Copy the **Project URL** and **anon public** key

## 4. Configure the Frontend

1. In the `frontend` folder, create a file named `.env` (copy from `.env.example`)
2. Add your Supabase credentials:

```
REACT_APP_SUPABASE_URL=https://your-project-id.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your-anon-key-here
```

3. Replace the placeholder values with your actual Project URL and anon key
4. **Restart the dev server** (`npm start`) for the changes to take effect

## 5. View Your Data

- **Bookings**: Table Editor > `bookings`
- **Chef Registrations**: Table Editor > `chef_registrations`

## Notes

- The Express backend (`server.js`) is no longer required for bookings—Supabase handles storage
- The anon key is safe to use in the frontend (it's designed for client-side use)
- Row Level Security (RLS) allows public inserts but restricts other operations by default
