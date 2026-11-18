STUDY ABROAD ALL IN ONE - final website (ring + grid view, space theme)

Run / upload:
  Upload everything in this folder to your hosting (Cloudflare Pages / GitHub).
  Open index.html. It needs internet (React + Babel load from unpkg, fonts from Google).

Google Sheet (consultation form):
  1) Open your Google Sheet -> Extensions -> Apps Script.
  2) Paste the contents of apps-script.gs, Save.
  3) Deploy -> Manage deployments -> pencil -> Version: New version -> Deploy.
  The form posts to the same web-app link already set in app.jsx (SHEET_URL).
  A "Consultations" tab is created automatically on the first submission.

Check before going live (not verified online):
  - 2027 application dates (studyinromania.gov.ro)
  - Embassy list and visa fee (eviza.mae.ro)
  - Scholarship stipend amounts
