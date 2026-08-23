-- Migration number: 0001 	 2026-07-31T17:52:14.412Z

-- Assessment submissions from the two-step "Get a free assessment" form.
-- Free-text answers are stored here only (never sent to the anonymous
-- Analytics Engine event stream).
CREATE TABLE IF NOT EXISTS assessments (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,

  -- Contact details (step 2)
  name TEXT NOT NULL,
  business_name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  preferred_next_step TEXT NOT NULL,

  -- About the opportunity (step 1)
  improve_focus TEXT NOT NULL,
  business_area TEXT NOT NULL,
  team_size TEXT NOT NULL,
  frustration TEXT,

  -- First-touch marketing attribution, if present
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  utm_term TEXT,
  referrer_hostname TEXT,
  landing_pathname TEXT
);

CREATE INDEX IF NOT EXISTS idx_assessments_created_at ON assessments (created_at);
