/* ===========================================================================
   DATA LAYER  —  edit this file only; every page and tool is generated from it.
   ---------------------------------------------------------------------------
   verified:false  => renders a "verify" marker in the UI and appears in #/data
   volatility      => how fast this country's rules change. 'high' = re-check
                      every intake. Used to sort your verification work.
   All money figures are INDICATIVE RANGES for layout. Replace every one with
   a figure you have personally confirmed on an official source.
   =========================================================================== */

window.FX = { EUR: 142, USD: 122, GBP: 165, CAD: 88, AUD: 80, verified: false };

const C = (slug, name, bn, flag, region, o) => Object.assign({
  slug, flag, region, name: { en: name, bn },
  verified: false, volatility: 'med', embassyDhaka: false
}, o);

/* intake months: applyFrom .. deadline .. classStarts  (1 = January) */
const IN = (name, bn, applyFrom, deadline, classStarts) =>
  ({ name: { en: name, bn }, applyFrom, deadline, classStarts });

window.COUNTRIES = [

/* ---------- EUROPE / EU ---------- */
/* ROMANIA — the one country checked against a working consultant's own
   casework rather than desk research. Everything in `confirmed` below was
   verified by someone who files these applications. Treat this entry as the
   template for how every other country should eventually look. */
C('romania', 'Romania', 'রোমানিয়া', '🇷🇴', 'eu', {
  ielts: 'required', tuition: [2000, 3500], cur: 'EUR', living: [200, 300],
  workHours: 20, visaWeeks: [4, 10], solvency: '€4,000–6,000', volatility: 'med',

  /* who may apply at all — the gate before every other question */
  eligibility: {
    en: 'Bachelor\'s needs SSC and HSC from a General Education Board, or O-Level and A-Level. Two groups are turned away at the Ministry stage, before any university ever sees the file: a four-year BTEB polytechnic diploma is not accepted in place of HSC, and Madrasah Board certificates (Dakhil, Alim, Fazil) are not accepted as equivalent. A Letter of Acceptance is not issued in either case. Any agency that takes money from these students for Romania is taking money for an application that cannot succeed.',
    bn: 'ব্যাচেলরের জন্য সাধারণ শিক্ষা বোর্ডের SSC ও HSC, অথবা O-Level ও A-Level লাগবে। দুই ধরনের শিক্ষার্থী মন্ত্রণালয়ের ধাপেই বাদ পড়ে যান, কোনো বিশ্ববিদ্যালয় ফাইল দেখার আগেই: BTEB-এর চার বছরের পলিটেকনিক ডিপ্লোমা HSC-র বিকল্প হিসেবে নেওয়া হয় না, আর মাদ্রাসা বোর্ডের সার্টিফিকেট (দাখিল, আলিম, ফাজিল) সমমান হিসেবে ধরা হয় না। কোনো ক্ষেত্রেই Letter of Acceptance ইস্যু হয় না। কোনো এজেন্সি যদি এই শিক্ষার্থীদের কাছ থেকে রোমানিয়ার জন্য টাকা নেয়, তারা এমন একটি আবেদনের জন্য টাকা নিচ্ছে যা কখনো সফল হবে না।'
  },

  /* no Romanian embassy in Dhaka — this is where the file actually goes */
  visaVia: ['New Delhi · India', 'Kuala Lumpur · Malaysia', 'Bangkok · Thailand', 'Hanoi · Vietnam'],
  visaViaNote: {
    en: 'There has been talk of Romania opening an embassy in Bangladesh around 2027. Nothing is confirmed, so plan your file around a mission abroad and treat an embassy in Dhaka as a bonus if it happens.',
    bn: '২০২৭ সালের দিকে বাংলাদেশে রোমানিয়ার দূতাবাস খোলার কথা শোনা যাচ্ছে। এখনো কিছু নিশ্চিত নয়, তাই বিদেশের মিশন ধরেই পরিকল্পনা করুন — ঢাকায় দূতাবাস হলে সেটা বাড়তি পাওয়া।'
  },

  /* the law says 20; what students actually do is different, and saying so is
     the point of this site */
  workNote: {
    en: 'The residence permit allows 20 hours a week. In practice most students work more than that, and employers in the student job market are used to it. The 20 hours is what is written in the rule.',
    bn: 'রেসিডেন্স পারমিটে সপ্তাহে ২০ ঘণ্টা কাজের অনুমতি থাকে। বাস্তবে বেশিরভাগ শিক্ষার্থী এর চেয়ে বেশি কাজ করেন, আর স্টুডেন্ট জব মার্কেটের মালিকরাও এতে অভ্যস্ত। ২০ ঘণ্টা হলো নিয়মে যা লেখা আছে সেটা।'
  },

  /* What it actually costs to GET THERE, in BDT: from starting the application
     to landing in the country. One year's tuition paid up front, visa, flight,
     documents, processing. Living costs after arrival are NOT in this figure.
     This is the number students actually ask for, so it is kept separate from
     the annual tuition-plus-living estimate below. */
  goCost: [500000, 700000],

  /* checked against real casework, not desk research */
  confirmed: {
    en: ['One start a year: October', 'IELTS only — MOI, TOEFL, PTE, Duolingo are not accepted', 'Who is eligible to apply', 'Work hours'],
    bn: ['বছরে একবারই শুরু: অক্টোবর', 'শুধু IELTS — MOI, TOEFL, PTE, Duolingo নেওয়া হয় না', 'কারা আবেদনের যোগ্য', 'কাজের ঘণ্টা']
  },

  /* overrides the generic "flexible" one-liner, which mentions MOI and would
     contradict the rule below */
  ieltsSummary: {
    en: 'IELTS only. MOI, TOEFL, PTE and Duolingo are not accepted. Without IELTS the one route in is the Romanian language preparatory year.',
    bn: 'শুধু IELTS। MOI, TOEFL, PTE বা Duolingo নেওয়া হয় না। IELTS ছাড়া একটাই পথ — রোমানিয়ান ভাষার প্রিপারেটরি বছর।'
  },

  ieltsNote: {
    en: 'For an English-taught degree, IELTS is the test Romania takes. A Medium of Instruction (MOI) letter from a Bangladeshi college or university is NOT accepted — the Ministry and the universities reject it, because the national curriculum is taught in Bangla. TOEFL, PTE and Duolingo are not accepted either. There is exactly one way in without IELTS: the Romanian language preparatory year, after which you study in Romanian. If an agency tells you MOI or Duolingo is enough for Romania, they are wrong.',
    bn: 'ইংরেজি মাধ্যমে পড়তে চাইলে রোমানিয়া শুধু IELTS নেয়। বাংলাদেশি কলেজ বা বিশ্ববিদ্যালয়ের দেওয়া MOI চিঠি নেওয়া হয় না — মন্ত্রণালয় ও বিশ্ববিদ্যালয়গুলো এটি বাতিল করে, কারণ জাতীয় শিক্ষাক্রম বাংলা মাধ্যমে পড়ানো হয়। TOEFL, PTE বা Duolingo-ও নেওয়া হয় না। IELTS ছাড়া ভেতরে ঢোকার একটাই পথ — রোমানিয়ান ভাষার প্রিপারেটরি বছর, এরপর পড়তে হয় রোমানিয়ান ভাষায়। কোনো এজেন্সি যদি বলে রোমানিয়ার জন্য MOI বা Duolingo-ই যথেষ্ট, তারা ভুল বলছে।'
  },
  psw: { en: '9-month job-search stay after graduation', bn: 'পড়া শেষে ৯ মাস চাকরি খোঁজার সুযোগ' },
  bestFor: { en: 'Low tuition inside the EU with a realistic document load, and Romania is now fully inside Schengen, so the residence card travels. The usual first choice when budget is the binding constraint.', bn: 'EU-র ভেতরে কম টিউশন, কাগজপত্রের চাপও বাস্তবসম্মত। রোমানিয়া এখন পুরোপুরি শেনজেনভুক্ত, তাই রেসিডেন্স কার্ড দিয়ে ভ্রমণ করা যায়। বাজেট মূল সমস্যা হলে সাধারণত প্রথম পছন্দ।' },
  caution: { en: 'There is no Romanian embassy in Dhaka, so the visa file goes to a mission abroad and the whole process is slow. The Ministry\'s Letter of Acceptance alone takes four to eight weeks, and a full year\'s tuition must usually be paid before the visa is applied for. Start by May or June for an October start.', bn: 'ঢাকায় রোমানিয়ার দূতাবাস নেই, তাই ভিসা ফাইল বিদেশের মিশনে যায় এবং পুরো প্রক্রিয়া ধীর। শুধু মন্ত্রণালয়ের Letter of Acceptance পেতেই চার থেকে আট সপ্তাহ লাগে, আর ভিসার আবেদনের আগে সাধারণত পুরো এক বছরের টিউশন দিয়ে দিতে হয়। অক্টোবরে শুরু করতে চাইলে মে বা জুনের মধ্যেই শুরু করুন।' },

  /* ONE start of study a year: October. `small` is the secondary label shown
     in small type under the big month. Application sessions run through
     spring and summer (each university sets its own dates) and every one of
     them feeds this single October start. */
  intakes: [{ name: { en: 'October', bn: 'অক্টোবর' }, small: { en: 'Sep / Oct', bn: 'সেপ্টেম্বর / অক্টোবর' },
              applyFrom: 3, deadline: 8, classStarts: 10 }],
  intakeNote: {
    en: 'Romania has one start of study a year, in October. Each university runs its own application sessions in spring and summer, and all of them lead to that same October start. Dates differ by university: for example the University of Bucharest\'s second 2026–27 session for non-EU candidates took files from 9 March to 7 April 2026 (EUR 100 processing fee), and the FILS faculty of Politehnica Bucharest took non-EU files from 3 March to 31 July 2025. Always read the calendar on your own university\'s website.',
    bn: 'রোমানিয়ায় বছরে একবারই পড়া শুরু হয়, অক্টোবরে। প্রতিটি বিশ্ববিদ্যালয় বসন্ত ও গ্রীষ্মে নিজেদের মতো আবেদনের সেশন চালায়, আর সবগুলোই ওই একই অক্টোবরের শুরুতে গিয়ে মেলে। তারিখ বিশ্ববিদ্যালয়ভেদে আলাদা: যেমন ইউনিভার্সিটি অব বুখারেস্টের ২০২৬–২৭ সালের দ্বিতীয় সেশনে নন-EU প্রার্থীদের ফাইল নেওয়া হয়েছিল ৯ মার্চ থেকে ৭ এপ্রিল ২০২৬ পর্যন্ত (প্রসেসিং ফি ১০০ ইউরো), আর পলিটেকনিকা বুখারেস্টের FILS অনুষদ নন-EU ফাইল নিয়েছিল ৩ মার্চ থেকে ৩১ জুলাই ২০২৫ পর্যন্ত। নিজের বিশ্ববিদ্যালয়ের ওয়েবসাইটের ক্যালেন্ডারটাই সবসময় দেখে নিন।'
  }
}),

C('italy', 'Italy', 'ইতালি', '🇮🇹', 'eu', {
  ielts: 'flexible', tuition: [0, 4000], cur: 'EUR', living: [500, 800],
  workHours: 20, visaWeeks: [4, 12], solvency: '€6,000–7,500', volatility: 'med',
  embassyDhaka: true,
  ieltsNote: { en: 'Public universities often accept B2-level evidence, MOI, or their own assessment. Pre-enrolment runs through Universitaly.', bn: 'পাবলিক বিশ্ববিদ্যালয়গুলো প্রায়ই B2 লেভেলের প্রমাণ, MOI, বা নিজেদের পরীক্ষা নেয়। প্রি-এনরোলমেন্ট হয় Universitaly দিয়ে।' },
  psw: { en: '12-month post-study job-search permit', bn: 'পড়া শেষে ১২ মাস চাকরি খোঁজার পারমিট' },
  bestFor: { en: 'Need-based tuition waivers and regional scholarships (DSU) can bring a public-university year close to zero tuition plus a stipend.', bn: 'আর্থিক অবস্থার ভিত্তিতে টিউশন মাফ আর আঞ্চলিক স্কলারশিপ (DSU) মিলিয়ে পাবলিক বিশ্ববিদ্যালয়ে টিউশন প্রায় শূন্যে নামতে পারে, সাথে ভাতা।' },
  caution: { en: 'Scholarship paperwork is strict and deadlines sit months before class. Missing the DSU window costs you the whole year.', bn: 'স্কলারশিপের কাগজপত্র কঠিন, আর ডেডলাইন ক্লাস শুরুর অনেক আগে। DSU-র সময় মিস করলে পুরো বছর চলে যাবে।' },
  intakes: [IN('September', 'সেপ্টেম্বর', 1, 5, 9), IN('February', 'ফেব্রুয়ারি', 9, 11, 2)]
}),

C('germany', 'Germany', 'জার্মানি', '🇩🇪', 'eu', {
  ielts: 'flexible', tuition: [0, 1500], cur: 'EUR', living: [850, 1100],
  workHours: 20, visaWeeks: [6, 16], solvency: 'Blocked account (verify current amount)', volatility: 'med',
  embassyDhaka: true,
  ieltsNote: { en: 'English-taught programmes usually want IELTS/TOEFL; some accept MOI. German-taught programmes want TestDaF or DSH instead.', bn: 'ইংরেজি মাধ্যমের প্রোগ্রামে সাধারণত IELTS/TOEFL চায়, কিছু জায়গায় MOI চলে। জার্মান মাধ্যমে TestDaF বা DSH লাগে।' },
  psw: { en: '18-month post-study residence permit to find work', bn: 'পড়া শেষে ১৮ মাস চাকরি খোঁজার রেসিডেন্স পারমিট' },
  bestFor: { en: 'Public universities charge no tuition in most states — only a semester contribution. The strongest long-term value in Europe.', bn: 'বেশিরভাগ রাজ্যে পাবলিক বিশ্ববিদ্যালয়ে টিউশন নেই, শুধু সেমিস্টার ফি। ইউরোপে দীর্ঘমেয়াদে সবচেয়ে ভালো মূল্য।' },
  caution: { en: 'The blocked account is the real barrier, not tuition, and the required amount is revised. Verify it before you promise a figure.', bn: 'আসল বাধা টিউশন নয়, ব্লকড অ্যাকাউন্ট — আর এর পরিমাণ বদলায়। কোনো সংখ্যা বলার আগে যাচাই করে নিন।' },
  intakes: [IN('Winter (Oct)', 'উইন্টার (অক্টো)', 4, 7, 10), IN('Summer (Apr)', 'সামার (এপ্রিল)', 10, 1, 4)]
}),

C('poland', 'Poland', 'পোল্যান্ড', '🇵🇱', 'eu', {
  ielts: 'flexible', tuition: [2000, 5000], cur: 'EUR', living: [400, 600],
  workHours: 20, visaWeeks: [4, 12], solvency: '€4,000–6,000', volatility: 'med',
  ieltsNote: { en: 'Many private universities accept MOI or an online interview. Public universities are stricter.', bn: 'অনেক প্রাইভেট বিশ্ববিদ্যালয় MOI বা অনলাইন ইন্টারভিউ নেয়। পাবলিকগুলো কঠোর।' },
  psw: { en: 'Job-search stay available via residence permit', bn: 'রেসিডেন্স পারমিটের মাধ্যমে চাকরি খোঁজার সুযোগ' },
  bestFor: { en: 'A large private-university market with rolling admissions, so a late applicant still has somewhere to go.', bn: 'বড় প্রাইভেট বিশ্ববিদ্যালয়ের বাজার, রোলিং ভর্তি — দেরি করে আবেদন করলেও জায়গা পাওয়া যায়।' },
  caution: { en: 'Quality varies sharply between institutions. Check accreditation before you place a student.', bn: 'প্রতিষ্ঠান ভেদে মান অনেক আলাদা। শিক্ষার্থী পাঠানোর আগে অ্যাক্রেডিটেশন দেখে নাও।' },
  intakes: [IN('October', 'অক্টোবর', 3, 8, 10), IN('February', 'ফেব্রুয়ারি', 10, 1, 2)]
}),

C('hungary', 'Hungary', 'হাঙ্গেরি', '🇭🇺', 'eu', {
  ielts: 'flexible', tuition: [3000, 6500], cur: 'EUR', living: [400, 600],
  workHours: 20, visaWeeks: [4, 10], solvency: '€5,000–6,000', volatility: 'med',
  ieltsNote: { en: 'Entrance exams and interviews are common and can replace IELTS at some universities.', bn: 'ভর্তি পরীক্ষা ও ইন্টারভিউ সাধারণ ব্যাপার, কিছু বিশ্ববিদ্যালয়ে এগুলো IELTS-এর বদলে চলে।' },
  psw: { en: '9-month job-search residence permit', bn: '৯ মাসের চাকরি খোঁজার রেসিডেন্স পারমিট' },
  bestFor: { en: 'Stipendium Hungaricum is a genuine full scholarship route, and medical/engineering programmes have real reputation.', bn: 'Stipendium Hungaricum সত্যিকারের ফুল স্কলারশিপের পথ, আর মেডিকেল/ইঞ্জিনিয়ারিং প্রোগ্রামের ভালো নামডাক আছে।' },
  caution: { en: 'Scholarship competition is heavy and the application window is short. Self-funded tuition is not cheap.', bn: 'স্কলারশিপে প্রতিযোগিতা প্রচণ্ড, আবেদনের সময়ও কম। নিজের টাকায় পড়লে টিউশন সস্তা না।' },
  intakes: [IN('September', 'সেপ্টেম্বর', 1, 6, 9), IN('February', 'ফেব্রুয়ারি', 9, 11, 2)]
}),

C('czechia', 'Czechia', 'চেকিয়া', '🇨🇿', 'eu', {
  ielts: 'flexible', tuition: [0, 7000], cur: 'EUR', living: [450, 650],
  workHours: 20, visaWeeks: [6, 14], solvency: '€4,500–6,000',
  ieltsNote: { en: 'Czech-taught degrees are tuition-free but need a Czech language certificate. English-taught programmes charge fees and usually want a test.', bn: 'চেক ভাষায় পড়া ফ্রি, কিন্তু চেক ভাষার সার্টিফিকেট লাগে। ইংরেজি মাধ্যমে ফি লাগে আর সাধারণত টেস্ট চায়।' },
  psw: { en: '9-month job-search stay', bn: '৯ মাস চাকরি খোঁজার সুযোগ' },
  bestFor: { en: 'Free tuition is real if the student will commit a year to learning Czech first.', bn: 'এক বছর চেক ভাষা শেখায় সময় দিলে ফ্রি টিউশন সত্যিই সম্ভব।' },
  caution: { en: 'Visa appointment slots are the bottleneck, not admission.', bn: 'সমস্যা ভর্তিতে না, ভিসা অ্যাপয়েন্টমেন্টের স্লট পাওয়ায়।' },
  intakes: [IN('September', 'সেপ্টেম্বর', 1, 4, 9), IN('February', 'ফেব্রুয়ারি', 9, 11, 2)]
}),

C('netherlands', 'Netherlands', 'নেদারল্যান্ডস', '🇳🇱', 'eu', {
  ielts: 'required', tuition: [8000, 16000], cur: 'EUR', living: [800, 1150],
  workHours: 16, visaWeeks: [4, 8], solvency: '€12,000–14,000', volatility: 'med',
  ieltsNote: { en: 'A recognised English test is normally required and minimum scores are enforced. MOI is rarely accepted.', bn: 'স্বীকৃত ইংরেজি টেস্ট সাধারণত বাধ্যতামূলক, ন্যূনতম স্কোর মানতে হয়। MOI খুব কম জায়গায় চলে।' },
  psw: { en: '1-year orientation year for graduates', bn: 'গ্র্যাজুয়েটদের জন্য ১ বছরের ওরিয়েন্টেশন ইয়ার' },
  bestFor: { en: 'Large, well-ranked English-taught catalogue and a fast, predictable visa handled by the university itself.', bn: 'বড় ও ভালো র‍্যাঙ্কের ইংরেজি মাধ্যম প্রোগ্রাম, আর ভিসা বিশ্ববিদ্যালয়ই করে — দ্রুত ও অনুমানযোগ্য।' },
  caution: { en: 'Housing shortage is severe. A student without confirmed accommodation can arrive with nowhere to live.', bn: 'বাসস্থানের তীব্র সংকট। থাকার জায়গা নিশ্চিত না করে গেলে পৌঁছে থাকার জায়গা না-ও পেতে পারে।' },
  intakes: [IN('September', 'সেপ্টেম্বর', 10, 5, 9), IN('February', 'ফেব্রুয়ারি', 6, 10, 2)]
}),

C('france', 'France', 'ফ্রান্স', '🇫🇷', 'eu', {
  ielts: 'flexible', tuition: [2800, 9000], cur: 'EUR', living: [700, 1050],
  workHours: 20, visaWeeks: [4, 10], solvency: '€7,500–9,000', volatility: 'med',
  embassyDhaka: true,
  ieltsNote: { en: 'English-taught programmes usually want a test; French-taught want DELF/DALF or TCF. Campus France runs the process.', bn: 'ইংরেজি মাধ্যমে সাধারণত টেস্ট চায়; ফরাসি মাধ্যমে DELF/DALF বা TCF। পুরো প্রক্রিয়া Campus France চালায়।' },
  psw: { en: '1-year job-search permit (APS) after a master\'s', bn: 'মাস্টার্সের পর ১ বছরের চাকরি খোঁজার পারমিট (APS)' },
  bestFor: { en: 'Public tuition is state-subsidised even for non-EU students, and housing aid (CAF) cuts real living costs.', bn: 'নন-EU শিক্ষার্থীদের জন্যও পাবলিক টিউশনে রাষ্ট্রীয় ভর্তুকি আছে, আর বাসস্থান সহায়তা (CAF) আসল খরচ কমায়।' },
  caution: { en: 'The Campus France interview is a real filter. Weak study plans get refused there, not at the university.', bn: 'Campus France-এর ইন্টারভিউ আসল ছাঁকনি। দুর্বল স্টাডি প্ল্যান ওখানেই বাদ পড়ে, বিশ্ববিদ্যালয়ে না।' },
  intakes: [IN('September', 'সেপ্টেম্বর', 10, 4, 9), IN('January', 'জানুয়ারি', 6, 10, 1)]
}),

C('spain', 'Spain', 'স্পেন', '🇪🇸', 'eu', {
  ielts: 'flexible', tuition: [1200, 6000], cur: 'EUR', living: [600, 900],
  workHours: 30, visaWeeks: [4, 10], solvency: '€7,000–8,500',
  ieltsNote: { en: 'Varies widely. Spanish-taught degrees need DELE; English-taught programmes may accept MOI or an internal test.', bn: 'অনেক ভিন্নতা আছে। স্পেনীয় মাধ্যমে DELE লাগে; ইংরেজি মাধ্যমে MOI বা অভ্যন্তরীণ টেস্ট চলতে পারে।' },
  psw: { en: '1-year job-search permit', bn: '১ বছরের চাকরি খোঁজার পারমিট' },
  bestFor: { en: 'Generous student work rights and a low cost of living outside Madrid and Barcelona.', bn: 'শিক্ষার্থীদের কাজের অনুমতি উদার, আর মাদ্রিদ-বার্সেলোনার বাইরে জীবনযাত্রার খরচ কম।' },
  caution: { en: 'Degree recognition (homologación) for onward study is slow. Explain this before a student commits.', bn: 'পরবর্তী পড়াশোনার জন্য ডিগ্রি স্বীকৃতি (homologación) ধীর। স্টুডেন্ট সিদ্ধান্ত নেওয়ার আগেই বুঝিয়ে দাও।' },
  intakes: [IN('September', 'সেপ্টেম্বর', 1, 6, 9), IN('February', 'ফেব্রুয়ারি', 9, 12, 2)]
}),

C('portugal', 'Portugal', 'পর্তুগাল', '🇵🇹', 'eu', {
  ielts: 'flexible', tuition: [1500, 7000], cur: 'EUR', living: [500, 750],
  workHours: 20, visaWeeks: [6, 16], solvency: '€6,500–8,000',
  ieltsNote: { en: 'Several universities accept MOI or B2 evidence for English-taught programmes.', bn: 'ইংরেজি মাধ্যমের প্রোগ্রামে কিছু বিশ্ববিদ্যালয় MOI বা B2 প্রমাণ নেয়।' },
  psw: { en: 'Job-search stay via residence permit', bn: 'রেসিডেন্স পারমিটে চাকরি খোঁজার সুযোগ' },
  bestFor: { en: 'Among the cheapest living costs in Western Europe with a clear residence pathway.', bn: 'পশ্চিম ইউরোপে সবচেয়ে কম জীবনযাত্রার খরচের একটি, রেসিডেন্সির পথও পরিষ্কার।' },
  caution: { en: 'Visa processing and residence appointments are notoriously slow.', bn: 'ভিসা প্রসেসিং আর রেসিডেন্স অ্যাপয়েন্টমেন্ট কুখ্যাতভাবে ধীর।' },
  intakes: [IN('September', 'সেপ্টেম্বর', 2, 7, 9), IN('February', 'ফেব্রুয়ারি', 9, 12, 2)]
}),

C('sweden', 'Sweden', 'সুইডেন', '🇸🇪', 'eu', {
  ielts: 'required', tuition: [8000, 16000], cur: 'EUR', living: [800, 1050],
  workHours: 0, visaWeeks: [6, 14], solvency: 'Monthly minimum × study length (verify)',
  ieltsNote: { en: 'A recognised English test is normally required. Upper-secondary English from Bangladesh is rarely sufficient on its own.', bn: 'স্বীকৃত ইংরেজি টেস্ট সাধারণত লাগে। বাংলাদেশের উচ্চমাধ্যমিকের ইংরেজি একাই যথেষ্ট হয় না।' },
  psw: { en: '1-year job-search permit after graduation', bn: 'পড়া শেষে ১ বছরের চাকরি খোঁজার পারমিট' },
  bestFor: { en: 'No formal cap on student working hours, strong research universities, and a single national application portal.', bn: 'শিক্ষার্থীদের কাজের ঘণ্টায় আনুষ্ঠানিক সীমা নেই, গবেষণা বিশ্ববিদ্যালয় শক্তিশালী, আর আবেদন একটাই জাতীয় পোর্টালে।' },
  caution: { en: 'One national deadline in mid-January for the autumn intake. Miss it and the year is gone.', bn: 'শরৎ সেমিস্টারের জন্য জানুয়ারির মাঝামাঝি একটাই জাতীয় ডেডলাইন। মিস করলে বছর শেষ।' },
  intakes: [IN('August', 'আগস্ট', 10, 1, 8), IN('January', 'জানুয়ারি', 6, 8, 1)]
}),

C('finland', 'Finland', 'ফিনল্যান্ড', '🇫🇮', 'eu', {
  ielts: 'flexible', tuition: [6000, 18000], cur: 'EUR', living: [700, 950],
  workHours: 30, visaWeeks: [4, 12], solvency: '€7,000–8,500',
  ieltsNote: { en: 'Many universities run their own entrance exam that can replace IELTS entirely.', bn: 'অনেক বিশ্ববিদ্যালয় নিজেদের ভর্তি পরীক্ষা নেয়, যা পুরোপুরি IELTS-এর বদলে চলে।' },
  psw: { en: '2-year post-study residence permit', bn: 'পড়া শেষে ২ বছরের রেসিডেন্স পারমিট' },
  bestFor: { en: 'Scholarships commonly cover 50–100% of tuition, and the 2-year post-study permit is the most generous in the Nordics.', bn: 'স্কলারশিপে সাধারণত টিউশনের ৫০–১০০% কভার হয়, আর নর্ডিক দেশগুলোর মধ্যে ২ বছরের পোস্ট-স্টাডি পারমিট সবচেয়ে উদার।' },
  caution: { en: 'Entrance exams are competitive and sit early in the year.', bn: 'ভর্তি পরীক্ষায় প্রতিযোগিতা বেশি, আর হয় বছরের শুরুতেই।' },
  intakes: [IN('August', 'আগস্ট', 11, 1, 8), IN('January', 'জানুয়ারি', 8, 9, 1)]
}),

C('denmark', 'Denmark', 'ডেনমার্ক', '🇩🇰', 'eu', {
  ielts: 'required', tuition: [6000, 16000], cur: 'EUR', living: [850, 1200],
  workHours: 20, visaWeeks: [8, 16], solvency: 'Verify current monthly requirement',
  ieltsNote: { en: 'English B/English proficiency evidence is required and documented strictly.', bn: 'ইংরেজি দক্ষতার প্রমাণ বাধ্যতামূলক, আর কাগজপত্র কঠোরভাবে দেখা হয়।' },
  psw: { en: 'Job-search stay available; verify current length', bn: 'চাকরি খোঁজার সুযোগ আছে; বর্তমান সময়সীমা যাচাই করে নিন' },
  bestFor: { en: 'Strong design, engineering and sustainability programmes with real industry links.', bn: 'ডিজাইন, ইঞ্জিনিয়ারিং ও সাসটেইনেবিলিটি প্রোগ্রাম শক্তিশালী, ইন্ডাস্ট্রির সঙ্গে সত্যিকার যোগাযোগ।' },
  caution: { en: 'High living costs make part-time income essential, not optional.', bn: 'জীবনযাত্রার খরচ বেশি, তাই পার্ট-টাইম আয় ঐচ্ছিক না — বাধ্যতামূলক।' },
  intakes: [IN('September', 'সেপ্টেম্বর', 11, 3, 9), IN('February', 'ফেব্রুয়ারি', 8, 9, 2)]
}),

C('ireland', 'Ireland', 'আয়ারল্যান্ড', '🇮🇪', 'eu', {
  ielts: 'flexible', tuition: [10000, 26000], cur: 'EUR', living: [900, 1350],
  workHours: 20, visaWeeks: [4, 10], solvency: '€10,000+', volatility: 'med',
  ieltsNote: { en: 'MOI and Duolingo are accepted at a number of institutions, but the visa office applies its own English expectations.', bn: 'কিছু প্রতিষ্ঠানে MOI ও Duolingo চলে, তবে ভিসা অফিস নিজের ইংরেজি মানদণ্ড ধরে।' },
  psw: { en: '2-year Third Level Graduate Scheme after a master\'s', bn: 'মাস্টার্সের পর ২ বছরের Third Level Graduate Scheme' },
  bestFor: { en: 'English-speaking, inside the EU, with a 2-year stay-back and a large tech employer base.', bn: 'ইংরেজিভাষী, EU-র ভেতরে, ২ বছর থাকার সুযোগ আর বড় টেক কর্মসংস্থান।' },
  caution: { en: 'Total first-year cost is close to the UK. Rent in Dublin can exceed tuition.', bn: 'প্রথম বছরের মোট খরচ UK-র কাছাকাছি। ডাবলিনে বাসা ভাড়া টিউশনকেও ছাড়িয়ে যেতে পারে।' },
  intakes: [IN('September', 'সেপ্টেম্বর', 10, 6, 9), IN('January', 'জানুয়ারি', 7, 10, 1)]
}),

C('austria', 'Austria', 'অস্ট্রিয়া', '🇦🇹', 'eu', {
  ielts: 'flexible', tuition: [1500, 5000], cur: 'EUR', living: [800, 1100],
  workHours: 20, visaWeeks: [8, 20], solvency: 'Verify current monthly requirement',
  ieltsNote: { en: 'German-taught degrees dominate and need German proficiency. English-taught master\'s usually want a test.', bn: 'জার্মান মাধ্যমের ডিগ্রি বেশি, জার্মান ভাষার দক্ষতা লাগে। ইংরেজি মাধ্যমের মাস্টার্সে সাধারণত টেস্ট চায়।' },
  psw: { en: '12-month residence permit to seek work', bn: 'চাকরি খোঁজার জন্য ১২ মাসের রেসিডেন্স পারমিট' },
  bestFor: { en: 'Low public tuition for non-EU students compared with the rest of Western Europe.', bn: 'পশ্চিম ইউরোপের বাকি দেশের তুলনায় নন-EU শিক্ষার্থীদের জন্য পাবলিক টিউশন কম।' },
  caution: { en: 'Residence permit processing is among the slowest in the EU. Apply very early.', bn: 'EU-র মধ্যে রেসিডেন্স পারমিট প্রসেসিং সবচেয়ে ধীরগুলোর একটি। অনেক আগে আবেদন করুন।' },
  intakes: [IN('October', 'অক্টোবর', 3, 7, 10), IN('March', 'মার্চ', 10, 1, 3)]
}),

C('belgium', 'Belgium', 'বেলজিয়াম', '🇧🇪', 'eu', {
  ielts: 'flexible', tuition: [4000, 7000], cur: 'EUR', living: [750, 1050],
  workHours: 20, visaWeeks: [8, 16], solvency: 'Verify current monthly requirement',
  ieltsNote: { en: 'Requirements differ between the Flemish and French communities. Check which region the university sits in.', bn: 'ফ্লেমিশ ও ফরাসি অঞ্চলে শর্ত আলাদা। বিশ্ববিদ্যালয় কোন অঞ্চলে, দেখে নাও।' },
  psw: { en: '12-month search year', bn: '১২ মাসের সার্চ ইয়ার' },
  bestFor: { en: 'Brussels puts students next to EU institutions — a genuine advantage for law and policy careers.', bn: 'ব্রাসেলসে থাকলে EU প্রতিষ্ঠানগুলোর পাশে থাকা যায় — আইন ও নীতি-বিষয়ক কেরিয়ারে সত্যিকার সুবিধা।' },
  caution: { en: 'Two separate administrative systems means two sets of rules. Do not generalise across the country.', bn: 'দুটি আলাদা প্রশাসনিক ব্যবস্থা মানে দুই রকম নিয়ম। পুরো দেশের জন্য এক নিয়ম ধরে নেবেন না।' },
  intakes: [IN('September', 'সেপ্টেম্বর', 11, 4, 9), IN('February', 'ফেব্রুয়ারি', 9, 11, 2)]
}),

C('lithuania', 'Lithuania', 'লিথুয়ানিয়া', '🇱🇹', 'eu', {
  ielts: 'flexible', tuition: [2000, 5500], cur: 'EUR', living: [400, 600],
  workHours: 20, visaWeeks: [4, 10], solvency: '€4,500–6,000',
  ieltsNote: { en: 'MOI or an online interview is commonly accepted.', bn: 'MOI বা অনলাইন ইন্টারভিউ সাধারণত গৃহীত হয়।' },
  psw: { en: 'Job-search stay via residence permit', bn: 'রেসিডেন্স পারমিটে চাকরি খোঁজার সুযোগ' },
  bestFor: { en: 'Low cost, fast processing, and a growing IT and fintech sector in Vilnius.', bn: 'কম খরচ, দ্রুত প্রসেসিং, আর ভিলনিয়ুসে বাড়তে থাকা IT ও ফিনটেক সেক্টর।' },
  caution: { en: 'Small job market. A student planning to self-fund through work should think twice.', bn: 'চাকরির বাজার ছোট। কাজ করে নিজের খরচ চালানোর পরিকল্পনা থাকলে দুবার ভাবা উচিত।' },
  intakes: [IN('September', 'সেপ্টেম্বর', 2, 7, 9), IN('February', 'ফেব্রুয়ারি', 10, 12, 2)]
}),

C('latvia', 'Latvia', 'লাটভিয়া', '🇱🇻', 'eu', {
  ielts: 'flexible', tuition: [2000, 5500], cur: 'EUR', living: [400, 600],
  workHours: 20, visaWeeks: [4, 10], solvency: '€4,500–6,000',
  ieltsNote: { en: 'MOI or an institutional test is often enough.', bn: 'MOI বা প্রতিষ্ঠানের নিজের টেস্টই প্রায়ই যথেষ্ট।' },
  psw: { en: 'Job-search stay via residence permit', bn: 'রেসিডেন্স পারমিটে চাকরি খোঁজার সুযোগ' },
  bestFor: { en: 'Cheap, quick, and inside Schengen — a practical route for a student who needs to start soon.', bn: 'সস্তা, দ্রুত, আর শেনজেনের ভেতরে — দ্রুত শুরু করতে চাইলে বাস্তবসম্মত পথ।' },
  caution: { en: 'Fewer English-taught options than Poland or Lithuania.', bn: 'পোল্যান্ড বা লিথুয়ানিয়ার চেয়ে ইংরেজি মাধ্যমের অপশন কম।' },
  intakes: [IN('September', 'সেপ্টেম্বর', 2, 7, 9), IN('February', 'ফেব্রুয়ারি', 10, 12, 2)]
}),

C('estonia', 'Estonia', 'এস্তোনিয়া', '🇪🇪', 'eu', {
  ielts: 'flexible', tuition: [2000, 6500], cur: 'EUR', living: [450, 700],
  workHours: 20, visaWeeks: [4, 10], solvency: '€5,000–6,500',
  ieltsNote: { en: 'Institutional English tests and interviews are widely used.', bn: 'প্রতিষ্ঠানের নিজের ইংরেজি টেস্ট ও ইন্টারভিউ ব্যাপকভাবে ব্যবহৃত হয়।' },
  psw: { en: '9-month job-search stay', bn: '৯ মাস চাকরি খোঁজার সুযোগ' },
  bestFor: { en: 'Europe\'s most digital government and a serious startup scene for its size.', bn: 'ইউরোপের সবচেয়ে ডিজিটাল সরকার, আর আকারের তুলনায় শক্তিশালী স্টার্টআপ পরিবেশ।' },
  caution: { en: 'Very small intake numbers mean competitive selection.', bn: 'খুব কম সিট, তাই নির্বাচন প্রতিযোগিতামূলক।' },
  intakes: [IN('September', 'সেপ্টেম্বর', 1, 4, 9), IN('February', 'ফেব্রুয়ারি', 9, 11, 2)]
}),

C('slovakia', 'Slovakia', 'স্লোভাকিয়া', '🇸🇰', 'eu', {
  ielts: 'flexible', tuition: [2000, 5000], cur: 'EUR', living: [350, 550],
  workHours: 20, visaWeeks: [6, 14], solvency: '€4,000–5,500',
  ieltsNote: { en: 'MOI is commonly accepted; Slovak-taught degrees are tuition-free with a language certificate.', bn: 'MOI সাধারণত নেওয়া হয়; স্লোভাক মাধ্যমে ভাষার সার্টিফিকেট থাকলে টিউশন ফ্রি।' },
  psw: { en: 'Job-search stay via residence permit', bn: 'রেসিডেন্স পারমিটে চাকরি খোঁজার সুযোগ' },
  bestFor: { en: 'One of the lowest total costs in the EU, with free tuition if the student learns Slovak.', bn: 'EU-তে সবচেয়ে কম মোট খরচের একটি; স্লোভাক শিখলে টিউশন ফ্রি।' },
  caution: { en: 'Limited English-taught catalogue outside medicine.', bn: 'মেডিসিন ছাড়া ইংরেজি মাধ্যমের অপশন সীমিত।' },
  intakes: [IN('September', 'সেপ্টেম্বর', 1, 6, 9), IN('February', 'ফেব্রুয়ারি', 9, 12, 2)]
}),

C('slovenia', 'Slovenia', 'স্লোভেনিয়া', '🇸🇮', 'eu', {
  ielts: 'flexible', tuition: [2000, 6000], cur: 'EUR', living: [400, 650],
  workHours: 20, visaWeeks: [6, 14], solvency: '€5,000–6,500',
  ieltsNote: { en: 'Varies by institution; MOI and B2 evidence are often accepted.', bn: 'প্রতিষ্ঠান ভেদে ভিন্ন; MOI ও B2 প্রমাণ প্রায়ই গৃহীত।' },
  psw: { en: '9-month job-search stay', bn: '৯ মাস চাকরি খোঁজার সুযোগ' },
  bestFor: { en: 'Low cost, very safe, and well placed for travel across central Europe.', bn: 'কম খরচ, খুব নিরাপদ, আর মধ্য ইউরোপ ঘোরার জন্য ভালো অবস্থান।' },
  caution: { en: 'Small country, small job market.', bn: 'ছোট দেশ, ছোট চাকরির বাজার।' },
  intakes: [IN('October', 'অক্টোবর', 2, 6, 10), IN('February', 'ফেব্রুয়ারি', 9, 12, 2)]
}),

C('croatia', 'Croatia', 'ক্রোয়েশিয়া', '🇭🇷', 'eu', {
  ielts: 'flexible', tuition: [2000, 5500], cur: 'EUR', living: [400, 650],
  workHours: 20, visaWeeks: [6, 14], solvency: '€5,000–6,500',
  ieltsNote: { en: 'Institutional assessment is common for English-taught programmes.', bn: 'ইংরেজি মাধ্যমের প্রোগ্রামে প্রতিষ্ঠানের নিজের মূল্যায়ন সাধারণ।' },
  psw: { en: 'Job-search stay via residence permit', bn: 'রেসিডেন্স পারমিটে চাকরি খোঁজার সুযোগ' },
  bestFor: { en: 'Tourism and hospitality programmes with genuine paid-placement seasons.', bn: 'ট্যুরিজম ও হসপিটালিটি প্রোগ্রাম, সত্যিকারের বেতনসহ প্লেসমেন্ট সিজন আছে।' },
  caution: { en: 'Joined Schengen recently; procedures are still settling. Verify everything.', bn: 'সম্প্রতি শেনজেনে যোগ দিয়েছে; নিয়মকানুন এখনো থিতু হচ্ছে। সবকিছু যাচাই করে নিন।' },
  intakes: [IN('October', 'অক্টোবর', 3, 7, 10), IN('March', 'মার্চ', 10, 1, 3)]
}),

C('greece', 'Greece', 'গ্রিস', '🇬🇷', 'eu', {
  ielts: 'flexible', tuition: [1500, 5500], cur: 'EUR', living: [450, 700],
  workHours: 20, visaWeeks: [6, 14], solvency: '€5,000–6,500',
  ieltsNote: { en: 'English-taught master\'s programmes often accept MOI or B2 certificates.', bn: 'ইংরেজি মাধ্যমের মাস্টার্সে প্রায়ই MOI বা B2 সার্টিফিকেট চলে।' },
  psw: { en: 'Job-search stay via residence permit', bn: 'রেসিডেন্স পারমিটে চাকরি খোঁজার সুযোগ' },
  bestFor: { en: 'Low tuition and low living costs for a Mediterranean EU country.', bn: 'ভূমধ্যসাগরীয় EU দেশ হিসেবে টিউশন ও জীবনযাত্রার খরচ কম।' },
  caution: { en: 'Bureaucracy is slow and much of it is conducted in Greek.', bn: 'আমলাতন্ত্র ধীর, আর অনেক কাজ গ্রিক ভাষায় হয়।' },
  intakes: [IN('September', 'সেপ্টেম্বর', 2, 6, 9), IN('February', 'ফেব্রুয়ারি', 9, 12, 2)]
}),

C('cyprus', 'Cyprus', 'সাইপ্রাস', '🇨🇾', 'eu', {
  ielts: 'flexible', tuition: [3500, 9000], cur: 'EUR', living: [500, 750],
  workHours: 20, visaWeeks: [4, 10], solvency: '€6,000–7,500',
  ieltsNote: { en: 'Most private universities accept MOI or run their own placement test.', bn: 'বেশিরভাগ প্রাইভেট বিশ্ববিদ্যালয় MOI নেয় বা নিজেদের প্লেসমেন্ট টেস্ট নেয়।' },
  psw: { en: 'Limited; verify current rules', bn: 'সীমিত; বর্তমান নিয়ম যাচাই করে নিন' },
  bestFor: { en: 'English-taught, EU degree, warm climate, and relatively relaxed admission.', bn: 'ইংরেজি মাধ্যম, EU ডিগ্রি, উষ্ণ আবহাওয়া, আর ভর্তি তুলনামূলক সহজ।' },
  caution: { en: 'Post-study work rights are weak. Not a migration route — sell it as an education route only.', bn: 'পড়া শেষে কাজের অধিকার দুর্বল। এটা মাইগ্রেশনের পথ না — শুধু শিক্ষার পথ হিসেবেই বলো।' },
  intakes: [IN('September', 'সেপ্টেম্বর', 2, 7, 9), IN('February', 'ফেব্রুয়ারি', 10, 12, 2)]
}),

C('bulgaria', 'Bulgaria', 'বুলগেরিয়া', '🇧🇬', 'eu', {
  ielts: 'flexible', tuition: [1500, 4500], cur: 'EUR', living: [350, 550],
  workHours: 20, visaWeeks: [6, 14], solvency: '€4,000–5,500',
  ieltsNote: { en: 'MOI is widely accepted; medical programmes run entrance exams in biology and chemistry.', bn: 'MOI ব্যাপকভাবে গৃহীত; মেডিকেল প্রোগ্রামে জীববিজ্ঞান ও রসায়নে ভর্তি পরীক্ষা হয়।' },
  psw: { en: '9-month job-search stay', bn: '৯ মাস চাকরি খোঁজার সুযোগ' },
  bestFor: { en: 'The cheapest realistic route to an EU medical degree taught in English.', bn: 'ইংরেজি মাধ্যমে EU মেডিকেল ডিগ্রির সবচেয়ে সস্তা বাস্তবসম্মত পথ।' },
  caution: { en: 'Check whether the medical degree is recognised by BMDC before a student enrols.', bn: 'স্টুডেন্ট ভর্তি হওয়ার আগে দেখে নাও মেডিকেল ডিগ্রি BMDC স্বীকৃত কি না।' },
  intakes: [IN('October', 'অক্টোবর', 2, 8, 10), IN('February', 'ফেব্রুয়ারি', 10, 12, 2)]
}),

C('malta', 'Malta', 'মাল্টা', '🇲🇹', 'eu', {
  ielts: 'flexible', tuition: [5000, 13000], cur: 'EUR', living: [600, 900],
  workHours: 20, visaWeeks: [6, 14], solvency: '€7,000–8,500',
  ieltsNote: { en: 'English is an official language; MOI is usually straightforward to use here.', bn: 'ইংরেজি সরকারি ভাষা; এখানে MOI সাধারণত সহজেই চলে।' },
  psw: { en: 'Limited; verify current rules', bn: 'সীমিত; বর্তমান নিয়ম যাচাই করে নিন' },
  bestFor: { en: 'English-speaking EU country with gaming, finance and maritime niches.', bn: 'ইংরেজিভাষী EU দেশ, গেমিং-ফাইন্যান্স-মেরিটাইম সেক্টরে বিশেষত্ব।' },
  caution: { en: 'Tiny island economy; housing is expensive and seasonal.', bn: 'ছোট দ্বীপ অর্থনীতি; বাসস্থান দামি ও মৌসুমি।' },
  intakes: [IN('September', 'সেপ্টেম্বর', 2, 6, 9), IN('February', 'ফেব্রুয়ারি', 9, 12, 2)]
}),

/* ---------- MAJOR ENGLISH-SPEAKING ---------- */
C('usa', 'USA', 'যুক্তরাষ্ট্র', '🇺🇸', 'na', {
  ielts: 'flexible', tuition: [8000, 55000], cur: 'USD', living: [800, 1600],
  workHours: 20, visaWeeks: [2, 12], solvency: 'Full first-year cost on I-20', volatility: 'high',
  embassyDhaka: true,
  ieltsNote: { en: 'Thousands of institutions set their own policy. Duolingo and MOI waivers are common at mid-tier universities; top schools rarely waive.', bn: 'হাজারো প্রতিষ্ঠান নিজের নিয়ম ঠিক করে। মধ্যম সারির বিশ্ববিদ্যালয়ে Duolingo ও MOI ছাড় সাধারণ; শীর্ষ বিশ্ববিদ্যালয়গুলো খুব কম ছাড় দেয়।' },
  psw: { en: 'OPT 12 months, +24 months for STEM fields', bn: 'OPT ১২ মাস, STEM বিষয়ে আরও ২৪ মাস' },
  bestFor: { en: 'Assistantships and funded master\'s/PhD places can make the most expensive destination the cheapest one.', bn: 'অ্যাসিস্ট্যান্টশিপ ও ফান্ডেড মাস্টার্স/পিএইচডি পেলে সবচেয়ে দামি গন্তব্যই সবচেয়ে সস্তা হয়ে যায়।' },
  caution: { en: 'The F-1 interview is the real decision point and refusal rates for Bangladeshi applicants are high. A strong I-20 does not guarantee a visa.', bn: 'F-1 ইন্টারভিউই আসল সিদ্ধান্তের জায়গা, আর বাংলাদেশি আবেদনকারীদের রিফিউজাল হার বেশি। শক্ত I-20 থাকলেও ভিসা নিশ্চিত না।' },
  intakes: [IN('Fall (Aug)', 'ফল (আগস্ট)', 9, 2, 8), IN('Spring (Jan)', 'স্প্রিং (জানু)', 4, 9, 1), IN('Summer (May)', 'সামার (মে)', 11, 2, 5)]
}),

C('uk', 'UK', 'যুক্তরাজ্য', '🇬🇧', 'uk', {
  ielts: 'flexible', tuition: [11000, 30000], cur: 'GBP', living: [800, 1400],
  workHours: 20, visaWeeks: [3, 8], solvency: '£1,023–1,334/month × 9 (verify)', volatility: 'high',
  embassyDhaka: true,
  ieltsNote: { en: 'Some universities accept MOI or their own test, but UKVI may still require an approved SELT. Check both layers separately.', bn: 'কিছু বিশ্ববিদ্যালয় MOI বা নিজের টেস্ট নেয়, কিন্তু UKVI তখনও অনুমোদিত SELT চাইতে পারে। দুটি স্তর আলাদাভাবে দেখে নিন।' },
  psw: { en: 'Graduate Route — 2 years (3 for PhD); verify current terms', bn: 'গ্র্যাজুয়েট রুট — ২ বছর (পিএইচডিতে ৩); বর্তমান শর্ত যাচাই করে নিন' },
  bestFor: { en: 'One-year master\'s degrees mean one year of cost instead of two, plus a 2-year work route after.', bn: 'এক বছরের মাস্টার্স মানে দুই বছরের বদলে এক বছরের খরচ, সাথে পরে ২ বছরের কাজের সুযোগ।' },
  caution: { en: 'Dependant and maintenance rules have changed repeatedly. Never quote last year\'s figures.', bn: 'ডিপেনডেন্ট ও মেইনটেন্যান্সের নিয়ম বারবার বদলেছে। গত বছরের সংখ্যা কখনো বলো না।' },
  intakes: [IN('September', 'সেপ্টেম্বর', 10, 6, 9), IN('January', 'জানুয়ারি', 6, 10, 1)]
}),

C('canada', 'Canada', 'কানাডা', '🇨🇦', 'na', {
  ielts: 'required', tuition: [15000, 38000], cur: 'CAD', living: [900, 1600],
  workHours: 24, visaWeeks: [8, 20], solvency: 'Verify current GIC / proof-of-funds amount', volatility: 'high',
  embassyDhaka: true,
  ieltsNote: { en: 'Treat a recognised English test as required. Study-permit rules and streams have changed repeatedly — confirm the current policy every intake.', bn: 'স্বীকৃত ইংরেজি টেস্ট লাগবে ধরে নিন। স্টাডি পারমিটের নিয়ম ও স্ট্রিম বারবার বদলেছে — প্রতি ইনটেকে বর্তমান নীতি নিশ্চিত করুন।' },
  psw: { en: 'PGWP — length tied to programme and field; verify eligibility', bn: 'PGWP — সময়কাল প্রোগ্রাম ও বিষয়ের ওপর নির্ভর করে; যোগ্যতা যাচাই করে নিন' },
  bestFor: { en: 'Still the clearest study-to-residency pathway if the student picks an eligible programme.', bn: 'যোগ্য প্রোগ্রাম বাছলে পড়াশোনা থেকে রেসিডেন্সির সবচেয়ে পরিষ্কার পথ এখনো এটাই।' },
  caution: { en: 'HIGHEST-CHANGE DESTINATION. Caps, PGWP field eligibility and financial requirements have all moved recently. Re-verify before every quote.', bn: 'সবচেয়ে দ্রুত বদলায় এই গন্তব্য। ক্যাপ, PGWP-র বিষয়ভিত্তিক যোগ্যতা আর আর্থিক শর্ত — সবই সাম্প্রতিককালে বদলেছে। প্রতিবার বলার আগে যাচাই করে নিন।' },
  intakes: [IN('Fall (Sep)', 'ফল (সেপ্টে)', 10, 3, 9), IN('Winter (Jan)', 'উইন্টার (জানু)', 3, 8, 1), IN('Summer (May)', 'সামার (মে)', 8, 12, 5)]
}),

C('australia', 'Australia', 'অস্ট্রেলিয়া', '🇦🇺', 'oc', {
  ielts: 'required', tuition: [20000, 48000], cur: 'AUD', living: [1500, 2300],
  workHours: 24, visaWeeks: [4, 16], solvency: 'Verify current savings requirement', volatility: 'high',
  ieltsNote: { en: 'A recognised test is effectively required and minimum scores apply at both university and visa stage.', bn: 'স্বীকৃত টেস্ট কার্যত বাধ্যতামূলক, আর বিশ্ববিদ্যালয় ও ভিসা — দুই জায়গাতেই ন্যূনতম স্কোর লাগে।' },
  psw: { en: 'Temporary Graduate visa; length varies by qualification', bn: 'টেম্পোরারি গ্র্যাজুয়েট ভিসা; সময়কাল যোগ্যতার ওপর নির্ভর করে' },
  bestFor: { en: 'High minimum wage means part-time work genuinely covers living costs — rare among destinations.', bn: 'ন্যূনতম মজুরি বেশি, তাই পার্ট-টাইম কাজে সত্যিই জীবনযাত্রার খরচ উঠে যায় — অন্য গন্তব্যে এটা বিরল।' },
  caution: { en: 'The Genuine Student requirement scrutinises intent hard. Weak or copied statements get refused.', bn: 'Genuine Student শর্তে উদ্দেশ্য কঠোরভাবে যাচাই হয়। দুর্বল বা কপি করা স্টেটমেন্ট রিফিউজ হয়।' },
  intakes: [IN('February', 'ফেব্রুয়ারি', 8, 11, 2), IN('July', 'জুলাই', 1, 4, 7)]
}),

/* ---------- ASIA ---------- */
C('malaysia', 'Malaysia', 'মালয়েশিয়া', '🇲🇾', 'as', {
  ielts: 'not_required', tuition: [2500, 9000], cur: 'USD', living: [300, 550],
  workHours: 20, visaWeeks: [4, 10], solvency: 'USD 4,000–6,000', volatility: 'low',
  embassyDhaka: true,
  ieltsNote: { en: 'Most universities accept HSC/A-level English or run their own placement test. Among the easiest destinations on English requirements.', bn: 'বেশিরভাগ বিশ্ববিদ্যালয় HSC/A-level ইংরেজি নেয় বা নিজেদের প্লেসমেন্ট টেস্ট নেয়। ইংরেজির শর্তে সবচেয়ে সহজ গন্তব্যগুলোর একটি।' },
  psw: { en: 'Limited; graduate pass available in some fields', bn: 'সীমিত; কিছু বিষয়ে গ্র্যাজুয়েট পাস পাওয়া যায়' },
  bestFor: { en: 'UK and Australian branch-campus degrees at a third of the cost, with five intakes a year and no IELTS pressure.', bn: 'UK ও অস্ট্রেলিয়ান ব্রাঞ্চ ক্যাম্পাসের ডিগ্রি এক-তৃতীয়াংশ খরচে, বছরে পাঁচটা ইনটেক, IELTS-এর চাপ নেই।' },
  caution: { en: 'Post-study work rights are weak. A student who wants to settle abroad should not start here.', bn: 'পড়া শেষে কাজের অধিকার দুর্বল। বিদেশে থিতু হতে চাইলে এখান থেকে শুরু করা উচিত না।' },
  intakes: [IN('January', 'জানুয়ারি', 9, 11, 1), IN('May', 'মে', 1, 3, 5), IN('September', 'সেপ্টেম্বর', 5, 7, 9)]
}),

C('china', 'China', 'চীন', '🇨🇳', 'as', {
  ielts: 'not_required', tuition: [2500, 11000], cur: 'USD', living: [300, 650],
  workHours: 0, visaWeeks: [4, 10], solvency: 'USD 4,000–6,000', volatility: 'med',
  embassyDhaka: true,
  ieltsNote: { en: 'English-taught programmes generally do not require IELTS. Chinese-taught degrees need HSK 4–5.', bn: 'ইংরেজি মাধ্যমের প্রোগ্রামে সাধারণত IELTS লাগে না। চীনা মাধ্যমে HSK 4–5 লাগে।' },
  psw: { en: 'Very limited; work permits need an employer and experience', bn: 'খুবই সীমিত; ওয়ার্ক পারমিটে নিয়োগকর্তা ও অভিজ্ঞতা লাগে' },
  bestFor: { en: 'CSC and university scholarships regularly cover full tuition plus accommodation and a monthly stipend.', bn: 'CSC ও বিশ্ববিদ্যালয়ের স্কলারশিপে নিয়মিতভাবে পুরো টিউশন, থাকার জায়গা আর মাসিক ভাতা কভার হয়।' },
  caution: { en: 'Students generally cannot work part-time. The budget must be fully covered before departure.', bn: 'শিক্ষার্থীরা সাধারণত পার্ট-টাইম কাজ করতে পারে না। যাওয়ার আগেই পুরো বাজেট নিশ্চিত থাকতে হবে।' },
  intakes: [IN('September', 'সেপ্টেম্বর', 1, 6, 9), IN('March', 'মার্চ', 9, 12, 3)]
}),

C('japan', 'Japan', 'জাপান', '🇯🇵', 'as', {
  ielts: 'flexible', tuition: [4000, 9000], cur: 'USD', living: [700, 1100],
  workHours: 28, visaWeeks: [8, 16], solvency: 'USD 8,000–12,000',
  ieltsNote: { en: 'English-taught programmes may accept MOI; Japanese-taught degrees need JLPT N2 or higher.', bn: 'ইংরেজি মাধ্যমে MOI চলতে পারে; জাপানি মাধ্যমে JLPT N2 বা উপরে লাগে।' },
  psw: { en: 'Designated Activities visa for job hunting, typically 1 year', bn: 'চাকরি খোঁজার জন্য Designated Activities ভিসা, সাধারণত ১ বছর' },
  bestFor: { en: 'MEXT scholarships are fully funded, and 28 legal work hours a week is the most generous in Asia.', bn: 'MEXT স্কলারশিপ পুরোপুরি ফান্ডেড, আর সপ্তাহে ২৮ ঘণ্টা বৈধ কাজ এশিয়ায় সবচেয়ে উদার।' },
  caution: { en: 'Without Japanese, both job prospects and daily life are hard. Treat language study as part of the plan.', bn: 'জাপানি ভাষা না জানলে চাকরি ও দৈনন্দিন জীবন দুটোই কঠিন। ভাষা শেখাকে পরিকল্পনার অংশ ধরো।' },
  intakes: [IN('April', 'এপ্রিল', 9, 12, 4), IN('October', 'অক্টোবর', 3, 6, 10)]
}),

C('south-korea', 'South Korea', 'দক্ষিণ কোরিয়া', '🇰🇷', 'as', {
  ielts: 'flexible', tuition: [4000, 10000], cur: 'USD', living: [600, 950],
  workHours: 25, visaWeeks: [4, 10], solvency: 'USD 10,000–15,000',
  ieltsNote: { en: 'English-taught programmes often accept MOI or TOEFL; Korean-taught degrees need TOPIK level 3+.', bn: 'ইংরেজি মাধ্যমে প্রায়ই MOI বা TOEFL চলে; কোরিয়ান মাধ্যমে TOPIK লেভেল ৩+ লাগে।' },
  psw: { en: 'D-10 job-seeking visa after graduation', bn: 'পড়া শেষে D-10 চাকরি খোঁজার ভিসা' },
  bestFor: { en: 'GKS scholarships are fully funded, and tuition discounts for international students are common.', bn: 'GKS স্কলারশিপ পুরোপুরি ফান্ডেড, আর আন্তর্জাতিক শিক্ষার্থীদের টিউশন ছাড় সাধারণ ব্যাপার।' },
  caution: { en: 'Proof-of-funds requirements are high relative to tuition and are checked carefully.', bn: 'টিউশনের তুলনায় ফান্ডের প্রমাণের শর্ত বেশি, আর তা মন দিয়ে দেখা হয়।' },
  intakes: [IN('March', 'মার্চ', 9, 11, 3), IN('September', 'সেপ্টেম্বর', 3, 5, 9)]
}),

C('turkey', 'Turkey', 'তুরস্ক', '🇹🇷', 'as', {
  ielts: 'flexible', tuition: [2000, 9000], cur: 'USD', living: [350, 600],
  workHours: 20, visaWeeks: [4, 10], solvency: 'USD 3,000–5,000',
  embassyDhaka: true,
  ieltsNote: { en: 'Many universities run their own English proficiency exam or offer a one-year prep year instead.', bn: 'অনেক বিশ্ববিদ্যালয় নিজেদের ইংরেজি পরীক্ষা নেয়, নয়তো এক বছরের প্রিপ ইয়ার দেয়।' },
  psw: { en: 'Limited; work permit requires an employer', bn: 'সীমিত; ওয়ার্ক পারমিটে নিয়োগকর্তা লাগে' },
  bestFor: { en: 'Türkiye Bursları is a full scholarship with stipend, and self-funded costs are low.', bn: 'Türkiye Bursları ভাতাসহ ফুল স্কলারশিপ, আর নিজের টাকায় পড়লেও খরচ কম।' },
  caution: { en: 'Currency volatility changes the real cost between the offer and the first payment.', bn: 'মুদ্রার ওঠানামায় অফার আর প্রথম পেমেন্টের মাঝে আসল খরচ বদলে যায়।' },
  intakes: [IN('September', 'সেপ্টেম্বর', 1, 6, 9), IN('February', 'ফেব্রুয়ারি', 10, 12, 2)]
}),

C('uae', 'UAE', 'সংযুক্ত আরব আমিরাত', '🇦🇪', 'as', {
  ielts: 'flexible', tuition: [8000, 22000], cur: 'USD', living: [800, 1300],
  workHours: 0, visaWeeks: [2, 6], solvency: 'Sponsored by the university',
  embassyDhaka: true,
  ieltsNote: { en: 'Branch campuses usually follow their home-country policy. Some accept MOI.', bn: 'ব্রাঞ্চ ক্যাম্পাসগুলো সাধারণত নিজ দেশের নীতি মানে। কিছু জায়গায় MOI চলে।' },
  psw: { en: 'Graduate visa options exist; verify current rules', bn: 'গ্র্যাজুয়েট ভিসার সুযোগ আছে; বর্তমান নিয়ম যাচাই করে নিন' },
  bestFor: { en: 'Western branch-campus degrees close to home, with fast visas and a large Bangladeshi community.', bn: 'দেশের কাছেই পশ্চিমা ব্রাঞ্চ ক্যাম্পাসের ডিগ্রি, দ্রুত ভিসা আর বড় বাংলাদেশি কমিউনিটি।' },
  caution: { en: 'Tuition is high and part-time work for students is tightly restricted.', bn: 'টিউশন বেশি, আর শিক্ষার্থীদের পার্ট-টাইম কাজ কঠোরভাবে সীমিত।' },
  intakes: [IN('September', 'সেপ্টেম্বর', 3, 7, 9), IN('January', 'জানুয়ারি', 8, 11, 1)]
}),

/* ---------- OTHER ---------- */
C('north-cyprus', 'North Cyprus', 'উত্তর সাইপ্রাস', '🇹🇷', 'other', {
  ielts: 'not_required', tuition: [3000, 7000], cur: 'USD', living: [400, 650],
  workHours: 20, visaWeeks: [2, 6], solvency: 'USD 3,000–5,000', volatility: 'low',
  ieltsNote: { en: 'IELTS is generally not required; universities use their own English placement test.', bn: 'সাধারণত IELTS লাগে না; বিশ্ববিদ্যালয়গুলো নিজেদের ইংরেজি প্লেসমেন্ট টেস্ট নেয়।' },
  psw: { en: 'None meaningful', bn: 'উল্লেখযোগ্য কিছু নেই' },
  bestFor: { en: 'Easiest admission and fastest visa of any destination here. A real option for a student with a weak profile.', bn: 'এখানের সব গন্তব্যের মধ্যে ভর্তি সবচেয়ে সহজ, ভিসাও সবচেয়ে দ্রুত। দুর্বল প্রোফাইলের স্টুডেন্টের জন্য বাস্তব অপশন।' },
  caution: { en: 'Degree recognition is limited internationally and the territory is not EU. Say this plainly to every student.', bn: 'আন্তর্জাতিকভাবে ডিগ্রির স্বীকৃতি সীমিত, আর এই অঞ্চল EU-র অংশ না। প্রতিটি স্টুডেন্টকে এটা স্পষ্ট করে বলো।' },
  intakes: [IN('September', 'সেপ্টেম্বর', 3, 8, 9), IN('February', 'ফেব্রুয়ারি', 10, 1, 2)]
}),

C('georgia', 'Georgia', 'জর্জিয়া', '🇬🇪', 'other', {
  ielts: 'not_required', tuition: [3000, 7000], cur: 'USD', living: [300, 550],
  workHours: 20, visaWeeks: [3, 8], solvency: 'USD 3,000–5,000', volatility: 'low',
  ieltsNote: { en: 'IELTS is generally not required; an internal interview or test is used instead.', bn: 'সাধারণত IELTS লাগে না; বদলে অভ্যন্তরীণ ইন্টারভিউ বা টেস্ট হয়।' },
  psw: { en: 'None meaningful', bn: 'উল্লেখযোগ্য কিছু নেই' },
  bestFor: { en: 'Low-cost English-taught MBBS with a fast, simple admission process.', bn: 'কম খরচে ইংরেজি মাধ্যমে MBBS, ভর্তি প্রক্রিয়া দ্রুত ও সহজ।' },
  caution: { en: 'For medicine, confirm BMDC recognition and licensing-exam eligibility first. This is the single most common mis-sell in the market.', bn: 'মেডিসিনের ক্ষেত্রে আগে BMDC স্বীকৃতি আর লাইসেন্সিং পরীক্ষার যোগ্যতা নিশ্চিত করুন। বাজারে সবচেয়ে বেশি ভুল বোঝানো হয় এটি নিয়েই।' },
  intakes: [IN('September', 'সেপ্টেম্বর', 3, 8, 9), IN('February', 'ফেব্রুয়ারি', 10, 1, 2)]
}),

C('russia', 'Russia', 'রাশিয়া', '🇷🇺', 'other', {
  ielts: 'not_required', tuition: [2500, 7000], cur: 'USD', living: [300, 550],
  workHours: 20, visaWeeks: [4, 10], solvency: 'USD 3,000–5,000', volatility: 'high',
  ieltsNote: { en: 'IELTS is generally not required. Russian-taught degrees include a preparatory language year.', bn: 'সাধারণত IELTS লাগে না। রুশ মাধ্যমে পড়লে এক বছরের ভাষা প্রস্তুতি কোর্স থাকে।' },
  psw: { en: 'Limited', bn: 'সীমিত' },
  bestFor: { en: 'Long-established medical and engineering programmes at low cost.', bn: 'দীর্ঘদিনের প্রতিষ্ঠিত মেডিকেল ও ইঞ্জিনিয়ারিং প্রোগ্রাম, খরচ কম।' },
  caution: { en: 'Banking, payments and travel are complicated by sanctions. Verify how fees can actually be paid.', bn: 'নিষেধাজ্ঞার কারণে ব্যাংকিং, পেমেন্ট আর যাতায়াত জটিল। ফি আসলে কীভাবে দেওয়া যাবে, তা যাচাই করে নিন।' },
  intakes: [IN('September', 'সেপ্টেম্বর', 2, 7, 9)]
})
];

/* ---------------------------------------------------------------------------
   TRENDING — the countries currently working well for Bangladeshi applicants.
   These are pushed to the top of every list on the site.

   THIS IS THE ONLY LINE YOU EDIT. Add a slug, remove a slug, change the order
   — the whole site follows. Use the slug exactly as it appears above.

   Be careful what you put here. This list is a judgement call from your own
   casework, not an official statistic, and the site says so wherever the badge
   appears. Keep it honest: if a country stops working, take it out the same
   week. A trending badge on a country that is refusing everyone would make
   this site exactly what it was built to replace.
   --------------------------------------------------------------------------- */
window.TRENDING = [
  'romania', 'slovakia', 'cyprus', 'italy', 'lithuania', 'germany', 'hungary'
];
window.COUNTRIES.forEach(function (c) {
  c.trending = window.TRENDING.indexOf(c.slug) > -1;
  c.trendRank = c.trending ? window.TRENDING.indexOf(c.slug) : 999;
});

/* Regions */
window.REGIONS = [
  { id: 'all', en: 'All regions', bn: 'সব অঞ্চল' },
  { id: 'eu', en: 'Europe — European Union', bn: 'ইউরোপ — ইউরোপীয় ইউনিয়ন' },
  { id: 'uk', en: 'United Kingdom', bn: 'যুক্তরাজ্য (UK)' },
  { id: 'na', en: 'North America — USA & Canada', bn: 'উত্তর আমেরিকা — USA ও কানাডা' },
  { id: 'oc', en: 'Australia & Oceania', bn: 'অস্ট্রেলিয়া ও ওশেনিয়া' },
  { id: 'as', en: 'Asia', bn: 'এশিয়া' },
  { id: 'other', en: 'Other', bn: 'অন্যান্য' }
];

window.SUBJECTS = [
  { id: 'business', en: 'Business & Management', bn: 'বিজনেস ও ম্যানেজমেন্ট' },
  { id: 'cs', en: 'Computer Science & IT', bn: 'কম্পিউটার সায়েন্স ও আইটি' },
  { id: 'engineering', en: 'Engineering', bn: 'ইঞ্জিনিয়ারিং' },
  { id: 'law', en: 'Law', bn: 'আইন' },
  { id: 'medicine', en: 'Medicine & Health', bn: 'মেডিসিন ও স্বাস্থ্য' },
  { id: 'social', en: 'Social Sciences', bn: 'সামাজিক বিজ্ঞান' },
  { id: 'arts', en: 'Arts & Humanities', bn: 'কলা ও মানবিক' },
  { id: 'science', en: 'Natural Sciences', bn: 'প্রাকৃতিক বিজ্ঞান' },
  { id: 'agri', en: 'Agriculture & Food', bn: 'কৃষি ও খাদ্য' },
  { id: 'hospitality', en: 'Tourism & Hospitality', bn: 'ট্যুরিজম ও হসপিটালিটি' }
];

/* ---------------------------------------------------------------------------
   UNIVERSITIES — names are real; every requirement field needs verification.
   Add rows here and they appear automatically in the finder and country pages.
   --------------------------------------------------------------------------- */
const U = (name, country, city, type, subjects, levels, o) => Object.assign({
  name, country, city, type, subjects, levels, verified: false
}, o || {});

window.UNIVERSITIES = [
  U('Babeș-Bolyai University', 'romania', 'Cluj-Napoca', 'public', ['business', 'law', 'cs', 'social'], ['bachelor', 'master', 'phd'], {tuition:[2200,3500]}),
  U('University of Bucharest', 'romania', 'Bucharest', 'public', ['law', 'social', 'science', 'arts'], ['bachelor', 'master', 'phd'], {tuition:[2200,3200]}),
  U('Politehnica University of Bucharest', 'romania', 'Bucharest', 'public', ['engineering', 'cs'], ['bachelor', 'master', 'phd'], {tuition:[2700,3500]}),
  U('West University of Timișoara', 'romania', 'Timișoara', 'public', ['business', 'cs', 'social'], ['bachelor', 'master'], {tuition:[2200,3000]}),
  U('Transilvania University of Brașov', 'romania', 'Brașov', 'public', ['engineering', 'business'], ['bachelor', 'master'], {tuition:[2200,8500]}),

  U('University of Turin', 'italy', 'Turin', 'public', ['law', 'business', 'social', 'science'], ['bachelor', 'master', 'phd'], { moi: true, note: 'Global Law & Transnational Legal Studies is taught in English.' }),
  U('University of Bologna', 'italy', 'Bologna', 'public', ['law', 'business', 'engineering', 'arts'], ['bachelor', 'master', 'phd'], { moi: true }),
  U('Politecnico di Milano', 'italy', 'Milan', 'public', ['engineering', 'cs', 'arts'], ['bachelor', 'master', 'phd']),
  U('University of Padua', 'italy', 'Padua', 'public', ['science', 'engineering', 'medicine'], ['bachelor', 'master', 'phd']),
  U('Sapienza University of Rome', 'italy', 'Rome', 'public', ['engineering', 'medicine', 'arts'], ['bachelor', 'master', 'phd']),

  U('Technical University of Munich', 'germany', 'Munich', 'public', ['engineering', 'cs', 'science'], ['bachelor', 'master', 'phd']),
  U('RWTH Aachen University', 'germany', 'Aachen', 'public', ['engineering', 'cs'], ['bachelor', 'master', 'phd']),
  U('University of Bonn', 'germany', 'Bonn', 'public', ['science', 'law', 'social'], ['bachelor', 'master', 'phd']),
  U('TU Berlin', 'germany', 'Berlin', 'public', ['engineering', 'cs'], ['master', 'phd']),
  U('University of Freiburg', 'germany', 'Freiburg', 'public', ['science', 'social', 'medicine'], ['master', 'phd']),

  U('University of Warsaw', 'poland', 'Warsaw', 'public', ['law', 'business', 'social', 'cs'], ['bachelor', 'master', 'phd'], { moi: true }),
  U('Jagiellonian University', 'poland', 'Kraków', 'public', ['medicine', 'law', 'social'], ['bachelor', 'master', 'phd'], { moi: true }),
  U('Warsaw University of Technology', 'poland', 'Warsaw', 'public', ['engineering', 'cs'], ['bachelor', 'master'], { moi: true }),
  U('Vistula University', 'poland', 'Warsaw', 'private', ['business', 'cs', 'hospitality'], ['bachelor', 'master'], { moi: true }),
  U('Kozminski University', 'poland', 'Warsaw', 'private', ['business', 'cs'], ['bachelor', 'master'], { moi: true }),

  U('University of Debrecen', 'hungary', 'Debrecen', 'public', ['medicine', 'engineering', 'agri'], ['bachelor', 'master', 'phd'], { moi: true }),
  U('Budapest University of Technology and Economics', 'hungary', 'Budapest', 'public', ['engineering', 'cs'], ['bachelor', 'master', 'phd']),
  U('University of Szeged', 'hungary', 'Szeged', 'public', ['medicine', 'science', 'social'], ['bachelor', 'master', 'phd']),
  U('Corvinus University of Budapest', 'hungary', 'Budapest', 'public', ['business', 'social'], ['bachelor', 'master']),

  U('Charles University', 'czechia', 'Prague', 'public', ['medicine', 'law', 'social', 'science'], ['bachelor', 'master', 'phd']),
  U('Czech Technical University', 'czechia', 'Prague', 'public', ['engineering', 'cs'], ['bachelor', 'master', 'phd']),
  U('Masaryk University', 'czechia', 'Brno', 'public', ['cs', 'law', 'social'], ['bachelor', 'master', 'phd']),

  U('University of Amsterdam', 'netherlands', 'Amsterdam', 'public', ['business', 'social', 'law', 'cs'], ['bachelor', 'master', 'phd']),
  U('Delft University of Technology', 'netherlands', 'Delft', 'public', ['engineering', 'cs'], ['bachelor', 'master', 'phd']),
  U('Erasmus University Rotterdam', 'netherlands', 'Rotterdam', 'public', ['business', 'medicine', 'social'], ['bachelor', 'master', 'phd']),
  U('University of Groningen', 'netherlands', 'Groningen', 'public', ['science', 'law', 'business'], ['bachelor', 'master', 'phd']),

  U('Sorbonne University', 'france', 'Paris', 'public', ['science', 'arts', 'medicine'], ['bachelor', 'master', 'phd']),
  U('Université Paris-Saclay', 'france', 'Paris', 'public', ['science', 'engineering', 'cs'], ['master', 'phd']),
  U('Sciences Po', 'france', 'Paris', 'private', ['social', 'law', 'business'], ['bachelor', 'master']),
  U('Université Grenoble Alpes', 'france', 'Grenoble', 'public', ['engineering', 'cs', 'science'], ['bachelor', 'master', 'phd']),

  U('University of Barcelona', 'spain', 'Barcelona', 'public', ['business', 'medicine', 'social'], ['bachelor', 'master', 'phd']),
  U('Universidad Complutense Madrid', 'spain', 'Madrid', 'public', ['law', 'social', 'arts'], ['bachelor', 'master', 'phd']),
  U('Universitat Politècnica de València', 'spain', 'Valencia', 'public', ['engineering', 'cs'], ['bachelor', 'master']),

  U('University of Porto', 'portugal', 'Porto', 'public', ['engineering', 'medicine', 'science'], ['bachelor', 'master', 'phd'], { moi: true }),
  U('University of Lisbon', 'portugal', 'Lisbon', 'public', ['law', 'science', 'business'], ['bachelor', 'master', 'phd'], { moi: true }),
  U('University of Coimbra', 'portugal', 'Coimbra', 'public', ['law', 'engineering', 'arts'], ['bachelor', 'master', 'phd'], { moi: true }),

  U('Lund University', 'sweden', 'Lund', 'public', ['engineering', 'business', 'social'], ['master', 'phd']),
  U('KTH Royal Institute of Technology', 'sweden', 'Stockholm', 'public', ['engineering', 'cs'], ['master', 'phd']),
  U('Uppsala University', 'sweden', 'Uppsala', 'public', ['science', 'medicine', 'social'], ['master', 'phd']),

  U('University of Helsinki', 'finland', 'Helsinki', 'public', ['science', 'law', 'social'], ['master', 'phd']),
  U('Aalto University', 'finland', 'Espoo', 'public', ['engineering', 'cs', 'business'], ['bachelor', 'master', 'phd']),
  U('University of Oulu', 'finland', 'Oulu', 'public', ['engineering', 'cs', 'medicine'], ['bachelor', 'master']),

  U('Aarhus University', 'denmark', 'Aarhus', 'public', ['business', 'engineering', 'science'], ['master', 'phd']),
  U('Technical University of Denmark', 'denmark', 'Lyngby', 'public', ['engineering', 'cs'], ['master', 'phd']),

  U('Trinity College Dublin', 'ireland', 'Dublin', 'public', ['business', 'law', 'cs', 'medicine'], ['bachelor', 'master', 'phd'], { moi: true }),
  U('University College Dublin', 'ireland', 'Dublin', 'public', ['business', 'engineering', 'agri'], ['bachelor', 'master', 'phd'], { moi: true }),
  U('University of Galway', 'ireland', 'Galway', 'public', ['medicine', 'cs', 'social'], ['bachelor', 'master'], { moi: true }),

  U('University of Vienna', 'austria', 'Vienna', 'public', ['law', 'social', 'science'], ['bachelor', 'master', 'phd']),
  U('TU Wien', 'austria', 'Vienna', 'public', ['engineering', 'cs'], ['bachelor', 'master', 'phd']),

  U('KU Leuven', 'belgium', 'Leuven', 'public', ['engineering', 'medicine', 'social'], ['master', 'phd']),
  U('Ghent University', 'belgium', 'Ghent', 'public', ['science', 'engineering', 'agri'], ['master', 'phd']),

  U('Vilnius University', 'lithuania', 'Vilnius', 'public', ['law', 'cs', 'business'], ['bachelor', 'master', 'phd'], { moi: true }),
  U('Kaunas University of Technology', 'lithuania', 'Kaunas', 'public', ['engineering', 'cs'], ['bachelor', 'master'], { moi: true }),

  U('University of Latvia', 'latvia', 'Riga', 'public', ['business', 'cs', 'social'], ['bachelor', 'master'], { moi: true }),
  U('Riga Technical University', 'latvia', 'Riga', 'public', ['engineering', 'cs'], ['bachelor', 'master'], { moi: true }),

  U('University of Tartu', 'estonia', 'Tartu', 'public', ['cs', 'science', 'social'], ['bachelor', 'master', 'phd'], { moi: true }),
  U('Tallinn University of Technology', 'estonia', 'Tallinn', 'public', ['engineering', 'cs', 'business'], ['bachelor', 'master'], { moi: true }),

  U('Comenius University', 'slovakia', 'Bratislava', 'public', ['medicine', 'law', 'science'], ['bachelor', 'master', 'phd']),
  U('Slovak University of Technology', 'slovakia', 'Bratislava', 'public', ['engineering', 'cs'], ['bachelor', 'master']),

  U('University of Ljubljana', 'slovenia', 'Ljubljana', 'public', ['business', 'engineering', 'social'], ['bachelor', 'master', 'phd']),
  U('University of Zagreb', 'croatia', 'Zagreb', 'public', ['engineering', 'medicine', 'social'], ['bachelor', 'master', 'phd']),
  U('Aristotle University of Thessaloniki', 'greece', 'Thessaloniki', 'public', ['engineering', 'medicine', 'arts'], ['bachelor', 'master', 'phd']),
  U('University of Cyprus', 'cyprus', 'Nicosia', 'public', ['business', 'engineering', 'social'], ['bachelor', 'master', 'phd'], { moi: true }),
  U('University of Nicosia', 'cyprus', 'Nicosia', 'private', ['medicine', 'business', 'cs'], ['bachelor', 'master'], { moi: true }),
  U('Medical University of Sofia', 'bulgaria', 'Sofia', 'public', ['medicine'], ['bachelor', 'master'], { moi: true }),
  U('Sofia University', 'bulgaria', 'Sofia', 'public', ['law', 'science', 'social'], ['bachelor', 'master', 'phd'], { moi: true }),
  U('University of Malta', 'malta', 'Msida', 'public', ['business', 'cs', 'medicine'], ['bachelor', 'master'], { moi: true }),

  U('Arizona State University', 'usa', 'Tempe', 'public', ['engineering', 'business', 'cs'], ['bachelor', 'master', 'phd'], { moi: true }),
  U('University of Texas at Arlington', 'usa', 'Arlington', 'public', ['engineering', 'cs', 'business'], ['bachelor', 'master', 'phd'], { moi: true }),
  U('Wichita State University', 'usa', 'Wichita', 'public', ['engineering', 'cs'], ['bachelor', 'master'], { moi: true }),
  U('University of Illinois Chicago', 'usa', 'Chicago', 'public', ['medicine', 'engineering', 'social'], ['bachelor', 'master', 'phd']),
  U('Northeastern University', 'usa', 'Boston', 'private', ['cs', 'engineering', 'business'], ['master']),

  U('University of Manchester', 'uk', 'Manchester', 'public', ['engineering', 'business', 'social'], ['bachelor', 'master', 'phd'], { moi: true }),
  U('University of Glasgow', 'uk', 'Glasgow', 'public', ['law', 'medicine', 'business'], ['bachelor', 'master', 'phd'], { moi: true }),
  U('Coventry University', 'uk', 'Coventry', 'public', ['business', 'engineering', 'cs'], ['bachelor', 'master'], { moi: true }),
  U('University of Hertfordshire', 'uk', 'Hatfield', 'public', ['business', 'cs'], ['bachelor', 'master'], { moi: true }),
  U('Queen Mary University of London', 'uk', 'London', 'public', ['law', 'medicine', 'business'], ['bachelor', 'master', 'phd']),

  U('University of Windsor', 'canada', 'Windsor', 'public', ['engineering', 'business', 'cs'], ['bachelor', 'master']),
  U('Dalhousie University', 'canada', 'Halifax', 'public', ['engineering', 'medicine', 'science'], ['bachelor', 'master', 'phd']),
  U('University of Manitoba', 'canada', 'Winnipeg', 'public', ['agri', 'engineering', 'science'], ['bachelor', 'master', 'phd']),
  U('Cape Breton University', 'canada', 'Sydney', 'public', ['business', 'cs'], ['bachelor', 'master']),

  U('University of Melbourne', 'australia', 'Melbourne', 'public', ['business', 'law', 'medicine'], ['bachelor', 'master', 'phd']),
  U('Monash University', 'australia', 'Melbourne', 'public', ['engineering', 'business', 'medicine'], ['bachelor', 'master', 'phd']),
  U('Deakin University', 'australia', 'Geelong', 'public', ['business', 'cs', 'social'], ['bachelor', 'master']),

  U('Universiti Malaya', 'malaysia', 'Kuala Lumpur', 'public', ['engineering', 'business', 'medicine'], ['bachelor', 'master', 'phd'], { moi: true }),
  U('Multimedia University', 'malaysia', 'Cyberjaya', 'private', ['cs', 'engineering', 'business'], ['bachelor', 'master'], { moi: true }),
  U('UCSI University', 'malaysia', 'Kuala Lumpur', 'private', ['business', 'hospitality', 'medicine'], ['bachelor', 'master'], { moi: true }),
  U('Asia Pacific University (APU)', 'malaysia', 'Kuala Lumpur', 'private', ['cs', 'business', 'engineering'], ['bachelor', 'master'], { moi: true }),
  U('Taylor\'s University', 'malaysia', 'Subang Jaya', 'private', ['hospitality', 'business', 'law'], ['bachelor', 'master'], { moi: true }),

  U('Tsinghua University', 'china', 'Beijing', 'public', ['engineering', 'cs', 'business'], ['bachelor', 'master', 'phd']),
  U('Zhejiang University', 'china', 'Hangzhou', 'public', ['engineering', 'science', 'medicine'], ['bachelor', 'master', 'phd']),
  U('Jiangsu University', 'china', 'Zhenjiang', 'public', ['engineering', 'agri', 'medicine'], ['bachelor', 'master', 'phd']),
  U('Beijing Institute of Technology', 'china', 'Beijing', 'public', ['engineering', 'cs'], ['bachelor', 'master', 'phd']),

  U('University of Tokyo', 'japan', 'Tokyo', 'public', ['science', 'engineering', 'social'], ['master', 'phd']),
  U('Kyushu University', 'japan', 'Fukuoka', 'public', ['engineering', 'agri', 'medicine'], ['bachelor', 'master', 'phd']),
  U('Ritsumeikan University', 'japan', 'Kyoto', 'private', ['social', 'business', 'cs'], ['bachelor', 'master']),

  U('Seoul National University', 'south-korea', 'Seoul', 'public', ['engineering', 'social', 'science'], ['master', 'phd']),
  U('KAIST', 'south-korea', 'Daejeon', 'public', ['engineering', 'cs', 'science'], ['bachelor', 'master', 'phd']),
  U('Yonsei University', 'south-korea', 'Seoul', 'private', ['business', 'social', 'medicine'], ['bachelor', 'master', 'phd']),

  U('Middle East Technical University', 'turkey', 'Ankara', 'public', ['engineering', 'cs', 'science'], ['bachelor', 'master', 'phd']),
  U('Istanbul Technical University', 'turkey', 'Istanbul', 'public', ['engineering', 'cs'], ['bachelor', 'master', 'phd']),
  U('Bilkent University', 'turkey', 'Ankara', 'private', ['business', 'cs', 'arts'], ['bachelor', 'master']),

  U('University of Birmingham Dubai', 'uae', 'Dubai', 'private', ['business', 'cs', 'engineering'], ['bachelor', 'master'], { moi: true }),
  U('Heriot-Watt University Dubai', 'uae', 'Dubai', 'private', ['engineering', 'business', 'cs'], ['bachelor', 'master'], { moi: true }),

  U('Near East University', 'north-cyprus', 'Nicosia', 'private', ['medicine', 'engineering', 'business'], ['bachelor', 'master', 'phd'], { moi: true }),
  U('Cyprus International University', 'north-cyprus', 'Nicosia', 'private', ['business', 'cs', 'engineering'], ['bachelor', 'master'], { moi: true }),

  U('Tbilisi State Medical University', 'georgia', 'Tbilisi', 'public', ['medicine'], ['bachelor', 'master'], { moi: true }),
  U('Ivane Javakhishvili Tbilisi State University', 'georgia', 'Tbilisi', 'public', ['business', 'social', 'science'], ['bachelor', 'master', 'phd'], { moi: true }),

  U('Kazan Federal University', 'russia', 'Kazan', 'public', ['medicine', 'science', 'engineering'], ['bachelor', 'master', 'phd'], { moi: true }),
  U('Peoples\' Friendship University (RUDN)', 'russia', 'Moscow', 'public', ['medicine', 'engineering', 'social'], ['bachelor', 'master', 'phd'], { moi: true })
];
