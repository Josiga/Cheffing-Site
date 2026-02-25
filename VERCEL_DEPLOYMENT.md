# Deploying to Vercel

This guide covers deploying the Chef Booking Platform to Vercel.

## Prerequisites

- Vercel account ([vercel.com](https://vercel.com))
- Supabase project (recommended for persistent data)

## Quick Deploy

1. **Connect your repo** to Vercel (GitHub, GitLab, or Bitbucket)
2. **Set environment variables** in Vercel Dashboard → Project Settings → Environment Variables:

   | Variable | Required | Description |
   |----------|-----------|-------------|
   | `REACT_APP_SUPABASE_URL` | Yes* | Your Supabase project URL |
   | `REACT_APP_SUPABASE_ANON_KEY` | Yes* | Your Supabase anon/public key |
   | `REACT_APP_API_URL` | No | Only if using a separate backend (leave unset for same-origin `/api`) |

   \*Required for persistent bookings/registrations. Without Supabase, the Express API fallback uses ephemeral storage (data is lost on cold starts).

3. **Deploy** – Vercel will use the existing `vercel.json` configuration.

## Configuration

The project includes:

- **Build**: React app in `frontend/` → output to `frontend/build`
- **API**: Express backend runs as a serverless function at `/api/*`
- **Rewrites**: `/api/*` → serverless function, all other routes → SPA `index.html`

## Data Persistence

| Storage | Behavior |
|---------|-----------|
| **Supabase** (recommended) | Persistent. Configure `REACT_APP_SUPABASE_*` and run `supabase/schema.sql` in Supabase SQL Editor. |
| **Express fallback** | Ephemeral. Uses `/tmp` on Vercel; data is lost between cold starts. |

For production, use Supabase for all data storage.

## Post-Deploy Checklist

- [ ] Verify site loads at your Vercel URL
- [ ] Test booking form submission
- [ ] Test chef registration form
- [ ] Test contact form
- [ ] Confirm Supabase tables exist and RLS policies are applied
- [ ] Check `/api/health` returns `{"success":true}`

## Troubleshooting

**API returns 404** – Ensure `api/index.js` and `backend/app.js` are in the repo. The rewrite sends `/api/*` to the serverless function.

**Supabase errors** – Verify env vars are set for Production (and Preview if needed). Re-run `supabase/schema.sql` if tables are missing.

**Build fails** – Run `npm install && cd frontend && npm install && cd frontend && npm run build` locally to reproduce.
