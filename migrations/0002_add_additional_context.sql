-- Migration number: 0002 	 2026-08-01T20:51:23.857Z

-- Optional free-text field on step 2 of the assessment form: "Is there
-- anything else you'd like to share or ask?" Same handling as `frustration`
-- — stored only on submission, never sent to the anonymous event stream.
ALTER TABLE assessments ADD COLUMN additional_context TEXT;
