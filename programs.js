/* ===========================================================================
   PROGRAMS — the actual courses inside each university.
   ---------------------------------------------------------------------------
   HOW TO ADD ONE (this is the only thing you need to copy):

     P('Computer Science', 'bachelor', 4, 'English', 'cs', 3000)
        │                   │           │   │          │     │
        │                   │           │   │          │     └ tuition per year
        │                   │           │   │          │       in the country's
        │                   │           │   │          │       currency.
        │                   │           │   │          │       LEAVE IT OUT
        │                   │           │   │          │       until you have
        │                   │           │   │          │       confirmed it on
        │                   │           │   │          │       the university's
        │                   │           │   │          │       own website.
        │                   │           │   │          └ subject id, see
        │                   │           │   │            SUBJECTS in data.js
        │                   │           │   └ teaching language
        │                   │           └ length in years
        │                   └ 'bachelor' | 'master' | 'phd'
        └ programme name exactly as the university writes it

   The university name on the left must match UNIVERSITIES in data.js letter
   for letter, otherwise the programmes will not show up on the page.

   WHAT IS HERE NOW: programme names only, no tuition figures. Programme names
   are stable and publicly listed; per-programme fees change every year and are
   the single easiest thing to get wrong. A missing fee shows as "—" on the
   page, which is honest. An invented fee is how students get misled, so none
   are invented here.
   =========================================================================== */

const P = (name, level, years, language, subject, tuition) =>
  ({ name, level, years, language, subject, tuition: tuition || null });

window.PROGRAMS = {

/* ---------- ROMANIA (start here — this is your own market) ---------- */
'Politehnica University of Bucharest': [
  P('Computer Science and Engineering', 'bachelor', 4, 'English', 'cs'),
  P('Electrical Engineering', 'bachelor', 4, 'English', 'engineering'),
  P('Applied Electronics', 'bachelor', 4, 'English', 'engineering'),
  P('Advanced Computing Systems', 'master', 2, 'English', 'cs'),
  P('Engineering and Management', 'master', 2, 'English', 'engineering')
],
'Babeș-Bolyai University': [
  P('Computer Science', 'bachelor', 3, 'English', 'cs'),
  P('Business Administration', 'bachelor', 3, 'English', 'business'),
  P('International Relations and European Studies', 'bachelor', 3, 'English', 'social'),
  P('Business Information Systems', 'master', 2, 'English', 'cs'),
  P('European Studies', 'master', 2, 'English', 'social')
],
'University of Bucharest': [
  P('Business Administration', 'bachelor', 3, 'English', 'business'),
  P('Computer Science', 'bachelor', 3, 'English', 'cs'),
  P('Political Science', 'bachelor', 3, 'English', 'social'),
  P('International Law', 'master', 2, 'English', 'law')
],
'West University of Timișoara': [
  P('Information Technology', 'bachelor', 3, 'English', 'cs'),
  P('Business Administration', 'bachelor', 3, 'English', 'business'),
  P('Computer Science', 'master', 2, 'English', 'cs')
],
'Transilvania University of Brașov': [
  P('Mechanical Engineering', 'bachelor', 4, 'English', 'engineering'),
  P('Computer Science', 'bachelor', 4, 'English', 'cs'),
  P('Business Administration', 'master', 2, 'English', 'business')
],

/* ---------- ITALY ---------- */
'University of Turin': [
  P('Global Law and Transnational Legal Studies', 'bachelor', 3, 'English', 'law'),
  P('Business and Management', 'bachelor', 3, 'English', 'business'),
  P('International Studies', 'master', 2, 'English', 'social')
],
'University of Bologna': [
  P('Business and Economics', 'bachelor', 3, 'English', 'business'),
  P('International Studies', 'bachelor', 3, 'English', 'social'),
  P('Artificial Intelligence', 'master', 2, 'English', 'cs'),
  P('Law and Economics', 'master', 2, 'English', 'law')
],
'Politecnico di Milano': [
  P('Mechanical Engineering', 'bachelor', 3, 'English', 'engineering'),
  P('Computer Science and Engineering', 'master', 2, 'English', 'cs'),
  P('Management Engineering', 'master', 2, 'English', 'business')
],

/* ---------- GERMANY ---------- */
'Technical University of Munich': [
  P('Management and Technology', 'bachelor', 3, 'English', 'business'),
  P('Informatics', 'master', 2, 'English', 'cs'),
  P('Mechanical Engineering', 'master', 2, 'English', 'engineering')
],
'RWTH Aachen University': [
  P('Computer Science', 'master', 2, 'English', 'cs'),
  P('Automotive Engineering', 'master', 2, 'English', 'engineering')
],

/* ---------- POLAND ---------- */
'Vistula University': [
  P('Computer Engineering', 'bachelor', 3.5, 'English', 'cs'),
  P('Management', 'bachelor', 3, 'English', 'business'),
  P('Tourism and Hospitality', 'bachelor', 3, 'English', 'hospitality')
],
'Kozminski University': [
  P('Management', 'bachelor', 3, 'English', 'business'),
  P('Finance and Accounting', 'bachelor', 3, 'English', 'business'),
  P('Big Data Science', 'master', 2, 'English', 'cs')
],
'University of Warsaw': [
  P('International Relations', 'bachelor', 3, 'English', 'social'),
  P('Finance and Accounting', 'master', 2, 'English', 'business')
],

/* ---------- HUNGARY ---------- */
'University of Debrecen': [
  P('Computer Science Engineering', 'bachelor', 3.5, 'English', 'cs'),
  P('Mechanical Engineering', 'bachelor', 3.5, 'English', 'engineering'),
  P('General Medicine', 'master', 6, 'English', 'medicine'),
  P('Business Administration and Management', 'bachelor', 3.5, 'English', 'business')
],

/* ---------- MALAYSIA ---------- */
'Asia Pacific University (APU)': [
  P('Computer Science', 'bachelor', 3, 'English', 'cs'),
  P('Software Engineering', 'bachelor', 3, 'English', 'cs'),
  P('Accounting and Finance', 'bachelor', 3, 'English', 'business')
],
'Multimedia University': [
  P('Information Technology', 'bachelor', 3, 'English', 'cs'),
  P('Electronics Engineering', 'bachelor', 4, 'English', 'engineering')
],

/* ---------- UK ---------- */
'Coventry University': [
  P('Business and Marketing', 'bachelor', 3, 'English', 'business'),
  P('Computer Science', 'bachelor', 3, 'English', 'cs'),
  P('Engineering Management', 'master', 1, 'English', 'engineering')
],
'University of Hertfordshire': [
  P('Business Administration', 'bachelor', 3, 'English', 'business'),
  P('Computer Science', 'master', 1, 'English', 'cs')
],

/* ---------- USA ---------- */
'Arizona State University': [
  P('Computer Science', 'bachelor', 4, 'English', 'cs'),
  P('Business Data Analytics', 'bachelor', 4, 'English', 'business'),
  P('Computer Engineering', 'master', 2, 'English', 'engineering')
],

/* ---------- CANADA ---------- */
'Cape Breton University': [
  P('Business Administration', 'bachelor', 4, 'English', 'business'),
  P('Computer Science', 'bachelor', 4, 'English', 'cs'),
  P('Business Analytics', 'master', 2, 'English', 'business')
],

/* ---------- MALAYSIA (largest Bangladeshi intake of any country here) ---------- */
'INTI International University': [
  P('Business Administration', 'bachelor', 3, 'English', 'business'),
  P('Computer Science', 'bachelor', 3, 'English', 'cs'),
  P('Mechanical Engineering', 'bachelor', 4, 'English', 'engineering'),
  P('Business Administration', 'master', 1.5, 'English', 'business')
],
'Management and Science University (MSU)': [
  P('Business Management', 'bachelor', 3, 'English', 'business'),
  P('Information Technology', 'bachelor', 3, 'English', 'cs'),
  P('Nursing', 'bachelor', 4, 'English', 'medicine'),
  P('Business Administration', 'master', 1.5, 'English', 'business')
],
'SEGi University': [
  P('Business Administration', 'bachelor', 3, 'English', 'business'),
  P('Computer Science', 'bachelor', 3, 'English', 'cs'),
  P('Pharmacy', 'bachelor', 4, 'English', 'medicine')
],
'Limkokwing University': [
  P('Business Administration', 'bachelor', 3, 'English', 'business'),
  P('Information Technology', 'bachelor', 3, 'English', 'cs'),
  P('Graphic Design', 'bachelor', 3, 'English', 'arts')
],
'City University Malaysia': [
  P('Business Administration', 'bachelor', 3, 'English', 'business'),
  P('Software Engineering', 'bachelor', 3, 'English', 'cs'),
  P('Civil Engineering', 'bachelor', 4, 'English', 'engineering')
],
'Lincoln University College': [
  P('Business Administration', 'bachelor', 3, 'English', 'business'),
  P('Information Technology', 'bachelor', 3, 'English', 'cs'),
  P('Nursing', 'bachelor', 4, 'English', 'medicine')
],
'Universiti Teknologi Malaysia (UTM)': [
  P('Civil Engineering', 'bachelor', 4, 'English', 'engineering'),
  P('Computer Science', 'bachelor', 4, 'English', 'cs'),
  P('Mechanical Engineering', 'master', 1.5, 'English', 'engineering')
],

/* ---------- CYPRUS ---------- */
'University of Nicosia': [
  P('Business Administration', 'bachelor', 4, 'English', 'business'),
  P('Computer Science', 'bachelor', 4, 'English', 'cs'),
  P('Medicine (MD)', 'bachelor', 6, 'English', 'medicine'),
  P('Business Administration (MBA)', 'master', 1.5, 'English', 'business')
],
'European University Cyprus': [
  P('Business Administration', 'bachelor', 4, 'English', 'business'),
  P('Computer Science', 'bachelor', 4, 'English', 'cs'),
  P('Medicine (MD)', 'bachelor', 6, 'English', 'medicine'),
  P('Public Health', 'master', 1.5, 'English', 'medicine')
],
'Frederick University': [
  P('Computer Engineering', 'bachelor', 4, 'English', 'engineering'),
  P('Business Administration', 'bachelor', 4, 'English', 'business'),
  P('Civil Engineering', 'bachelor', 4, 'English', 'engineering')
],
'UCLan Cyprus': [
  P('Business Management', 'bachelor', 3, 'English', 'business'),
  P('Computing', 'bachelor', 3, 'English', 'cs'),
  P('Law (LLB)', 'bachelor', 3, 'English', 'law')
],
'Cyprus University of Technology': [
  P('Hotel and Tourism Management', 'bachelor', 4, 'English', 'hospitality'),
  P('Electrical Engineering', 'bachelor', 4, 'English', 'engineering'),
  P('Business Administration (MBA)', 'master', 1.5, 'English', 'business')
],

/* ---------- GREECE ---------- */
'Athens University of Economics and Business': [
  P('International Business', 'bachelor', 4, 'English', 'business'),
  P('Business Analytics', 'master', 1.5, 'English', 'business'),
  P('Data Science', 'master', 1.5, 'English', 'cs')
],
'The American College of Greece': [
  P('Business Administration', 'bachelor', 4, 'English', 'business'),
  P('Computer Science', 'bachelor', 4, 'English', 'cs'),
  P('Communication', 'bachelor', 4, 'English', 'arts')
],
'University of the Aegean': [
  P('Tourism Economics and Management', 'bachelor', 4, 'English', 'hospitality'),
  P('Environmental Studies', 'master', 2, 'English', 'science')
],
'National and Kapodistrian University of Athens': [
  P('Medicine (MD)', 'bachelor', 6, 'English', 'medicine'),
  P('English Language and Literature', 'bachelor', 4, 'English', 'arts')
],
'University of Macedonia': [
  P('International and European Studies', 'bachelor', 4, 'English', 'social'),
  P('Business Administration', 'master', 1.5, 'English', 'business')
],

/* ---------- NORTH CYPRUS ---------- */
'Near East University': [
  P('Business Administration', 'bachelor', 4, 'English', 'business'),
  P('Computer Engineering', 'bachelor', 4, 'English', 'engineering'),
  P('Medicine (MD)', 'bachelor', 6, 'English', 'medicine'),
  P('Dentistry', 'bachelor', 5, 'English', 'medicine')
],
'Eastern Mediterranean University (EMU)': [
  P('Business Administration', 'bachelor', 4, 'English', 'business'),
  P('Computer Engineering', 'bachelor', 4, 'English', 'engineering'),
  P('Architecture', 'bachelor', 4, 'English', 'arts'),
  P('International Relations', 'master', 2, 'English', 'social')
],
'Girne American University': [
  P('Business Administration', 'bachelor', 4, 'English', 'business'),
  P('Software Engineering', 'bachelor', 4, 'English', 'cs')
],

/* ---------- GEORGIA ---------- */
'Tbilisi State Medical University': [
  P('Medicine (MD)', 'bachelor', 6, 'English', 'medicine'),
  P('Dentistry', 'bachelor', 5, 'English', 'medicine'),
  P('Pharmacy', 'bachelor', 4, 'English', 'medicine')
],
'David Tvildiani Medical University': [
  P('Medicine (MD)', 'bachelor', 6, 'English', 'medicine')
],
'Caucasus University': [
  P('Business Administration', 'bachelor', 4, 'English', 'business'),
  P('Law', 'bachelor', 4, 'English', 'law'),
  P('Information Technology', 'bachelor', 4, 'English', 'cs')
],

/* ---------- UK ---------- */
'University of Greenwich': [
  P('Business Management', 'bachelor', 3, 'English', 'business'),
  P('Computer Science', 'bachelor', 3, 'English', 'cs'),
  P('Engineering Management', 'master', 1, 'English', 'engineering')
],
'Teesside University': [
  P('Computer Science', 'bachelor', 3, 'English', 'cs'),
  P('International Business Management', 'master', 1, 'English', 'business'),
  P('Cyber Security', 'master', 1, 'English', 'cs')
],
'University of Sunderland': [
  P('Business and Management', 'bachelor', 3, 'English', 'business'),
  P('Nursing', 'bachelor', 3, 'English', 'medicine'),
  P('Business Administration (MBA)', 'master', 1, 'English', 'business')
],
'University of Bedfordshire': [
  P('Business Administration', 'bachelor', 3, 'English', 'business'),
  P('Computer Science', 'bachelor', 3, 'English', 'cs'),
  P('Public Health', 'master', 1, 'English', 'medicine')
],

/* ---------- HUNGARY / POLAND / GERMANY / ITALY (extra) ---------- */
'University of Pécs': [
  P('General Medicine', 'master', 6, 'English', 'medicine'),
  P('Business Administration', 'bachelor', 3.5, 'English', 'business'),
  P('Computer Science Engineering', 'bachelor', 3.5, 'English', 'cs')
],
'Óbuda University': [
  P('Computer Science Engineering', 'bachelor', 3.5, 'English', 'cs'),
  P('Mechatronics Engineering', 'bachelor', 3.5, 'English', 'engineering')
],
'Lazarski University': [
  P('Business Economics', 'bachelor', 3, 'English', 'business'),
  P('Computer Science', 'bachelor', 3.5, 'English', 'cs'),
  P('International Business', 'master', 2, 'English', 'business')
],
'AGH University of Science and Technology': [
  P('Computer Science', 'bachelor', 3.5, 'English', 'cs'),
  P('Automatics and Robotics', 'master', 1.5, 'English', 'engineering')
],
'Schmalkalden University of Applied Sciences': [
  P('International Business and Economics', 'master', 2, 'English', 'business'),
  P('Applied Computer Science', 'master', 2, 'English', 'cs')
],
'University of Milan': [
  P('International Politics, Law and Economics', 'bachelor', 3, 'English', 'social'),
  P('Data Science for Economics', 'master', 2, 'English', 'cs')
],
'University of Pisa': [
  P('Computer Science', 'master', 2, 'English', 'cs'),
  P('Management Engineering', 'master', 2, 'English', 'engineering')
],

/* ---------- ADD THE REST BELOW ----------
   Copy this shape, paste it above this comment, keep the comma between blocks:

   'Exact University Name From data.js': [
     P('Programme name', 'bachelor', 3, 'English', 'business'),
     P('Another programme', 'master', 2, 'English', 'cs')
   ],
------------------------------------------------------------------------- */
};
