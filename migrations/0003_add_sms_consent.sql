-- Migration number: 0003 	 2026-08-24T23:30:00.000Z

-- Explicit SMS consent captured at the point of collection (the assessment
-- form's phone field), required to support the Twilio texting program
-- described in /terms. 1 = consented, 0 = not consented (default).
ALTER TABLE assessments ADD COLUMN sms_consent INTEGER NOT NULL DEFAULT 0;
