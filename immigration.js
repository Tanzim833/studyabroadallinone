/* ===========================================================================
   IMMIGRATION DATA — spouse, PR and citizenship, per country.
   ---------------------------------------------------------------------------
   THESE TWO DATES ARE THE ONLY THING YOU CHANGE EVERY THREE MONTHS.
   Change them here and every page on the site updates itself.
   =========================================================================== */

window.SITE_UPDATED = { en: 'November 2026', bn: 'নভেম্বর ২০২৬' };
window.SITE_REVIEW  = { en: 'February 2027', bn: 'ফেব্রুয়ারি ২০২৭' };

/* ---------------------------------------------------------------------------
   FIELD VALUES
     spouse      : 'all'  spouse allowed at bachelor, master and PhD
                   'pg'   master's and PhD only  (most common)
                   'phd'  PhD / research degrees only
                   'none' not allowed on a student visa
     spouseWork  : 'yes'  open work rights
                   'cond' allowed but needs a permit or meets conditions
                   'no'   cannot work
     prYears     : years of legal residence normally needed for permanent residence
     prStudy     : 'half' student years count 50%   <-- the rule agencies hide
                   'full' student years count fully
                   'none' student years do not count at all
                   'na'   no realistic PR route from a student visa
     citizenYears: years of residence normally needed to apply for citizenship
     changed     : true if the rules moved in the last ~18 months — review first
   --------------------------------------------------------------------------- */

const M = (spouse, spouseWork, prYears, prStudy, citizenYears, changed, note) =>
  ({ spouse, spouseWork, prYears, prStudy, citizenYears, changed: !!changed, note: note || null });

window.IMMIG = {

/* ---------- EU: the 5-year EU long-term residence rule applies, and
   Directive 2003/109/EC Article 4(2) lets member states count study years
   at only half. That half-count is the single most misrepresented fact
   in this whole industry. ---------- */

romania: M('pg', 'cond', 5, 'half', 8, false, {
  en: 'Romania is an education route, not a fast migration route. Agencies in Dhaka sell it as "EU PR in 2 years" — that is false. Five years of residence is the minimum for long-term status, and your study years count at half.',
  bn: 'রোমানিয়া শিক্ষার পথ, দ্রুত মাইগ্রেশনের পথ না। ঢাকার এজেন্সিরা এটাকে "২ বছরে EU PR" বলে বিক্রি করে — এটা মিথ্যা। দীর্ঘমেয়াদি স্ট্যাটাসের জন্য ন্যূনতম ৫ বছর বসবাস লাগে, আর পড়ার বছরগুলো গোনা হয় অর্ধেক।'
}),

italy: M('pg', 'cond', 5, 'half', 10, false, {
  en: 'Citizenship takes ten years of residence — one of the longest in the EU. Permanent residence at five years is realistic; a passport is a long project.',
  bn: 'নাগরিকত্বে দশ বছর বসবাস লাগে — EU-র মধ্যে সবচেয়ে দীর্ঘগুলোর একটি। ৫ বছরে স্থায়ী বসবাস বাস্তবসম্মত; পাসপোর্ট অনেক লম্বা পথ।'
}),

germany: M('all', 'yes', 5, 'half', 5, true, {
  en: 'The spouse can usually work without a separate permit, which is rare. But the three-year fast track to citizenship was removed in 2025 and the baseline is five years again — check the current position before relying on any timeline.',
  bn: 'স্ত্রী/স্বামী সাধারণত আলাদা পারমিট ছাড়াই কাজ করতে পারে, যা বিরল সুবিধা। তবে নাগরিকত্বের তিন বছরের দ্রুত পথটি ২০২৫ সালে বাতিল হয়েছে, আবার পাঁচ বছরই ভিত্তি — কোনো সময়সীমার উপর ভরসা করার আগে বর্তমান অবস্থা দেখে নাও।'
}),

poland: M('pg', 'cond', 5, 'half', 10, true, {
  en: 'Four years of study counts as two years towards long-term residence, and you generally cannot even file the application while you are still on a student permit. Citizenship is three years after permanent residence, so roughly ten years in total.',
  bn: 'চার বছর পড়া মানে দীর্ঘমেয়াদি বসবাসের হিসাবে দুই বছর, আর স্টুডেন্ট পারমিটে থাকা অবস্থায় সাধারণত আবেদনই করা যায় না। স্থায়ী বসবাসের পর নাগরিকত্বে তিন বছর, অর্থাৎ মোটামুটি দশ বছর।'
}),

hungary: M('pg', 'cond', 5, 'half', 8, false, null),
czechia: M('pg', 'cond', 5, 'half', 5, false, {
  en: 'Citizenship is counted from permanent residence, not from arrival. Plan on roughly ten years in total from the day you land as a student.',
  bn: 'নাগরিকত্বের হিসাব স্থায়ী বসবাস থেকে শুরু, দেশে পৌঁছানোর দিন থেকে না। স্টুডেন্ট হিসেবে নামার দিন থেকে মোটামুটি দশ বছর ধরে রাখুন।'
}),

netherlands: M('all', 'cond', 5, 'half', 5, false, {
  en: 'Two different permits, two different rules: for the EU long-term permit your study years count at half, and for the Dutch national permanent permit they do not count at all. Study years also do not count towards naturalisation. A spouse can usually join at any level, but normally only after you have lived there about a year.',
  bn: 'দুই রকম পারমিট, দুই রকম নিয়ম: EU দীর্ঘমেয়াদি পারমিটে পড়ার বছর অর্ধেক গোনে, আর ডাচ জাতীয় স্থায়ী পারমিটে একেবারেই গোনে না। নাগরিকত্বের হিসাবেও পড়ার বছর গোনে না। স্ত্রী/স্বামী সাধারণত যেকোনো লেভেলেই আসতে পারে, তবে সাধারণত এক বছর বসবাসের পর।'
}),

france: M('pg', 'cond', 5, 'half', 5, false, null),
spain: M('pg', 'cond', 5, 'half', 10, false, {
  en: 'Five years of residence for long-term status with study years counted at half, but ten years for citizenship. A long road to a passport.',
  bn: 'দীর্ঘমেয়াদি স্ট্যাটাসে পাঁচ বছর, পড়ার বছর অর্ধেক গোনে; কিন্তু নাগরিকত্বে দশ বছর। পাসপোর্ট পর্যন্ত পথ অনেক লম্বা।'
}),

portugal: M('pg', 'cond', 5, 'half', 10, true, {
  en: 'Portugal was the shortest route to an EU passport in Europe at five years. That changed: amendments approved in late 2025 raised naturalisation towards seven to ten years. Anyone still quoting five years is working from old information.',
  bn: 'পর্তুগাল ছিল ইউরোপে EU পাসপোর্টের সবচেয়ে ছোট পথ — পাঁচ বছর। সেটা বদলে গেছে: ২০২৫ সালের শেষে অনুমোদিত সংশোধনীতে নাগরিকত্বের সময় সাত থেকে দশ বছরে উঠেছে। যে এখনো পাঁচ বছর বলছে, সে পুরনো তথ্যে কাজ করছে।'
}),

sweden: M('pg', 'yes', 5, 'half', 8, true, {
  en: 'The spouse gets full work rights from day one, which is among the best in Europe. But naturalisation rose from five years to eight from June 2026, with new language, civics and income tests.',
  bn: 'স্ত্রী/স্বামী প্রথম দিন থেকেই পূর্ণ কাজের অধিকার পায় — ইউরোপে এটা সবচেয়ে ভালোগুলোর একটি। তবে ২০২৬ সালের জুন থেকে নাগরিকত্বের সময় পাঁচ থেকে আট বছরে উঠেছে, সাথে নতুন ভাষা, নাগরিক জ্ঞান ও আয়ের পরীক্ষা।'
}),

finland: M('pg', 'yes', 5, 'half', 8, true, {
  en: 'Spouse gets full work rights, and the two-year post-study permit is the most generous in the Nordics. Citizenship was tightened to eight years in 2024.',
  bn: 'স্ত্রী/স্বামী পূর্ণ কাজের অধিকার পায়, আর পড়া শেষে দুই বছরের পারমিট নর্ডিক দেশগুলোর মধ্যে সবচেয়ে উদার। ২০২৪ সালে নাগরিকত্ব কঠিন করে আট বছর করা হয়েছে।'
}),

denmark: M('pg', 'yes', 5, 'half', 9, false, {
  en: 'Spouse gets full work rights. Citizenship needs nine years of continuous residence — the longest in the Nordics.',
  bn: 'স্ত্রী/স্বামী পূর্ণ কাজের অধিকার পায়। নাগরিকত্বে নয় বছর একটানা বসবাস লাগে — নর্ডিক দেশগুলোর মধ্যে সবচেয়ে বেশি।'
}),

ireland: M('phd', 'cond', 5, 'none', 5, false, {
  en: 'Ireland generally does not admit dependants of students at all, and time on a student permission does not count towards residence for citizenship. Students regularly discover this after arriving.',
  bn: 'আয়ারল্যান্ড সাধারণত শিক্ষার্থীদের পরিবারকে একেবারেই ঢুকতে দেয় না, আর স্টুডেন্ট অনুমতিতে কাটানো সময় নাগরিকত্বের বসবাসের হিসাবে গোনে না। শিক্ষার্থীরা প্রায়ই পৌঁছানোর পর এটা জানতে পারে।'
}),

austria: M('pg', 'cond', 5, 'half', 10, false, null),
belgium: M('pg', 'cond', 5, 'half', 5, false, null),
lithuania: M('pg', 'cond', 5, 'half', 10, false, {
  en: 'Spouses can join master\'s and PhD students only — bachelor\'s students cannot bring a spouse. You must arrive first, then apply for the spouse.',
  bn: 'শুধু মাস্টার্স ও পিএইচডি শিক্ষার্থীদের সাথে স্ত্রী/স্বামী আসতে পারে — ব্যাচেলরে পারে না। আগে নিজে পৌঁছাতে হবে, তারপর আবেদন করতে হবে।'
}),
latvia: M('pg', 'cond', 5, 'half', 5, false, null),
estonia: M('pg', 'cond', 5, 'half', 8, false, null),
slovakia: M('pg', 'cond', 5, 'half', 8, false, null),
slovenia: M('pg', 'cond', 5, 'half', 10, false, null),
croatia: M('pg', 'cond', 5, 'half', 8, true, {
  en: 'Croatia joined Schengen recently and its procedures are still settling. Treat every figure here as provisional.',
  bn: 'ক্রোয়েশিয়া সম্প্রতি শেনজেনে যোগ দিয়েছে, নিয়মকানুন এখনো থিতু হচ্ছে। এখানের প্রতিটা সংখ্যা সাময়িক ধরে নাও।'
}),
greece: M('pg', 'cond', 5, 'half', 7, false, null),
cyprus: M('none', 'no', 5, 'none', 7, false, {
  en: 'Student permits in Cyprus are treated as temporary and generally do not build towards permanent residence. This is an education route only — do not plan a future around it.',
  bn: 'সাইপ্রাসে স্টুডেন্ট পারমিট সাময়িক হিসেবে গণ্য, সাধারণত স্থায়ী বসবাসের দিকে এগোয় না। এটি শুধু শিক্ষার পথ। এটিকে ঘিরে ভবিষ্যৎ পরিকল্পনা করবেন না।'
}),
bulgaria: M('pg', 'cond', 5, 'half', 5, false, null),
malta: M('pg', 'cond', 5, 'half', 5, false, null),

/* ---------- MAJOR ENGLISH-SPEAKING ---------- */
usa: M('all', 'no', null, 'none', 5, false, {
  en: 'An F-2 spouse can come at any study level but cannot work under any circumstances — not part-time, not remotely, not ever. There is no direct route from a student visa to a green card: you need an employer or family sponsorship first, and the wait can run many years. Citizenship is five years after a green card, not five years after arriving.',
  bn: 'F-2 ভিসায় স্ত্রী/স্বামী যেকোনো লেভেলেই আসতে পারে, কিন্তু কোনো অবস্থাতেই কাজ করতে পারে না — পার্ট-টাইমও না, রিমোটও না, কখনোই না। স্টুডেন্ট ভিসা থেকে গ্রিন কার্ডে সরাসরি পথ নেই: আগে নিয়োগকর্তা বা পরিবারের স্পনসর লাগবে, আর অপেক্ষা অনেক বছর হতে পারে। নাগরিকত্ব গ্রিন কার্ডের পর পাঁচ বছর — দেশে পৌঁছানোর পর পাঁচ বছর না।'
}),

uk: M('phd', 'cond', 5, 'none', 6, true, {
  en: 'Since January 2024 only PhD and research-degree students, or government-sponsored scholars, can bring a spouse. Bachelor\'s and taught master\'s students cannot. Time on a student visa does not count towards settlement, so the five years for ILR starts from a work visa, not from your arrival as a student.',
  bn: '২০২৪ সালের জানুয়ারি থেকে শুধু পিএইচডি ও রিসার্চ ডিগ্রির স্টুডেন্ট, বা সরকারি স্পনসরপ্রাপ্তরা স্ত্রী/স্বামী আনতে পারে। ব্যাচেলর ও টট মাস্টার্সের শিক্ষার্থীরা পারে না। স্টুডেন্ট ভিসার সময় সেটেলমেন্টের হিসাবে গোনে না, তাই ILR-এর পাঁচ বছর শুরু হয় ওয়ার্ক ভিসা থেকে — স্টুডেন্ট হিসেবে পৌঁছানো থেকে না।'
}),

canada: M('pg', 'cond', null, 'half', 3, true, {
  en: 'An open work permit for the spouse is limited to master\'s and doctoral students; spouses of bachelor\'s and diploma students generally get a visitor visa with no work rights. For citizenship, time before you become a permanent resident counts as half a day per day, capped at one year — so study years help a little, not fully. Study permit rules and PGWP eligibility have changed repeatedly; re-check before every intake.',
  bn: 'স্ত্রী/স্বামীর ওপেন ওয়ার্ক পারমিট শুধু মাস্টার্স ও ডক্টরাল শিক্ষার্থীদের জন্য; ব্যাচেলর ও ডিপ্লোমার ক্ষেত্রে সাধারণত ভিজিটর ভিসা, কাজের অধিকার ছাড়া। নাগরিকত্বের হিসাবে স্থায়ী বাসিন্দা হওয়ার আগের সময় দিনে আধা দিন করে গোনে, সর্বোচ্চ এক বছর — তাই পড়ার বছর কিছুটা কাজে লাগে, পুরোপুরি না। স্টাডি পারমিটের নিয়ম আর PGWP যোগ্যতা বারবার বদলেছে; প্রতি ইনটেকের আগে যাচাই করে নিন।'
}),

australia: M('phd', 'cond', null, 'full', 4, true, {
  en: 'Dependant rules were tightened in late 2026 and now favour PhD, research, and government-sponsored students. Do not assume a spouse can come — this is one of the fastest-moving rules on this site.',
  bn: '২০২৬ সালের শেষে পরিবার আনার নিয়ম কঠোর হয়েছে, এখন পিএইচডি, রিসার্চ ও সরকারি স্পনসরপ্রাপ্তদের দিকে ঝোঁক। স্ত্রী/স্বামী আনা যাবে ধরে নেবেন না — এই সাইটের সবচেয়ে দ্রুত বদলানো নিয়মগুলোর একটি।'
}),

/* ---------- ASIA & OTHER: education routes, not migration routes ---------- */
malaysia: M('all', 'no', null, 'na', null, false, {
  en: 'Malaysia is not a migration route. A spouse can usually join on a dependent pass but cannot work, and a student visa does not build towards permanent residence or citizenship. Come here for an affordable degree, not for a future passport.',
  bn: 'মালয়েশিয়া মাইগ্রেশনের পথ না। স্ত্রী/স্বামী সাধারণত ডিপেনডেন্ট পাসে আসতে পারে কিন্তু কাজ করতে পারে না, আর স্টুডেন্ট ভিসা স্থায়ী বসবাস বা নাগরিকত্বের দিকে এগোয় না। সস্তায় ডিগ্রির জন্য এসো, ভবিষ্যতের পাসপোর্টের জন্য না।'
}),

china: M('none', 'no', null, 'na', null, false, {
  en: 'Students generally cannot bring a spouse on a study visa and cannot work part-time. There is effectively no path to permanent residence. Worth it for a funded scholarship, not as a migration plan.',
  bn: 'স্টাডি ভিসায় সাধারণত স্ত্রী/স্বামী আনা যায় না, পার্ট-টাইম কাজও করা যায় না। স্থায়ী বসবাসের কার্যত কোনো পথ নেই। ফান্ডেড স্কলারশিপের জন্য ভালো, মাইগ্রেশনের পরিকল্পনা হিসেবে না।'
}),

japan: M('all', 'cond', 10, 'full', 5, false, {
  en: 'Japan is unusual: student years do count in full towards the ten years normally needed for permanent residence, and a spouse can come at any level. But without Japanese language ability, staying on after graduation is very hard.',
  bn: 'জাপান ব্যতিক্রম: স্থায়ী বসবাসের জন্য সাধারণত যে দশ বছর লাগে, তাতে পড়ার বছর পুরোপুরি গোনে, আর স্ত্রী/স্বামী যেকোনো লেভেলেই আসতে পারে। তবে জাপানি ভাষা না জানলে পড়া শেষে থেকে যাওয়া খুব কঠিন।'
}),

'south-korea': M('pg', 'cond', 5, 'full', 5, false, {
  en: 'Student years generally count towards residence, but Korean language ability decides whether you can actually stay and work afterwards.',
  bn: 'পড়ার বছর সাধারণত বসবাসের হিসাবে গোনে, তবে পড়া শেষে আসলে থাকতে ও কাজ করতে পারবে কি না তা কোরিয়ান ভাষার দক্ষতাই ঠিক করে।'
}),

turkey: M('all', 'cond', 8, 'none', 5, false, {
  en: 'Time on a student residence permit does not count towards long-term residence in Turkey. A spouse can usually join but work permits are employer-dependent.',
  bn: 'তুরস্কে স্টুডেন্ট রেসিডেন্স পারমিটের সময় দীর্ঘমেয়াদি বসবাসের হিসাবে গোনে না। স্ত্রী/স্বামী সাধারণত আসতে পারে, তবে ওয়ার্ক পারমিট নিয়োগকর্তার ওপর নির্ভর করে।'
}),

uae: M('all', 'cond', null, 'na', null, false, {
  en: 'There is no citizenship route in the UAE for ordinary residents, and residence depends on continuous sponsorship. A good place for a degree and a job, not a place to become a citizen.',
  bn: 'সাধারণ বাসিন্দাদের জন্য আমিরাতে নাগরিকত্বের কোনো পথ নেই, আর বসবাস নির্ভর করে একটানা স্পনসরশিপের উপর। ডিগ্রি আর চাকরির জন্য ভালো জায়গা, নাগরিক হওয়ার জায়গা না।'
}),

'north-cyprus': M('none', 'no', null, 'na', null, false, {
  en: 'Not an EU territory and recognised by only one country. There is no meaningful residence or citizenship pathway, and degree recognition is limited. If an agency sells this as a route to Europe, they are lying to you.',
  bn: 'এটি EU-র অংশ নয়, আর মাত্র একটি দেশ এটিকে স্বীকৃতি দেয়। অর্থবহ কোনো বসবাস বা নাগরিকত্বের পথ নেই, ডিগ্রির স্বীকৃতিও সীমিত। কোনো এজেন্সি যদি এটিকে ইউরোপে যাওয়ার পথ বলে বিক্রি করে, তারা আপনাকে মিথ্যা বলছে।'
}),

georgia: M('all', 'cond', 10, 'none', 10, false, {
  en: 'Student years do not count towards residence. For medicine, the real question is not residence at all — it is whether BMDC will recognise the degree and let you sit the licensing exam. Settle that before you pay anyone.',
  bn: 'পড়ার বছর বসবাসের হিসাবে গোনে না। মেডিসিনের ক্ষেত্রে আসল প্রশ্ন বসবাস না — BMDC ডিগ্রি স্বীকৃতি দেবে কি না, আর লাইসেন্সিং পরীক্ষায় বসতে দেবে কি না। কাউকে টাকা দেওয়ার আগে এটি নিশ্চিত করুন।'
}),

russia: M('all', 'cond', 5, 'none', 5, true, {
  en: 'Sanctions make banking, fee payment and travel complicated, and rules shift with little notice. Confirm how you would actually pay tuition before committing.',
  bn: 'নিষেধাজ্ঞার কারণে ব্যাংকিং, ফি দেওয়া আর যাতায়াত জটিল, আর নিয়ম হঠাৎ বদলায়। সিদ্ধান্ত নেওয়ার আগে নিশ্চিত করুন, টিউশন আসলে কীভাবে দেবেন।'
})
};
