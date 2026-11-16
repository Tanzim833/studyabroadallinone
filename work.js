/* ===========================================================================
   WORK — what students actually do for money in each country.
   ---------------------------------------------------------------------------
   This is the question every student asks and almost no website answers
   honestly. Agencies say "you will easily cover your costs". For most
   countries that is false, and a student who believes it runs out of money
   in the first semester.

     jobs    : job ids, see JOBTYPES below — the work students actually get
     pay     : [low, high] typical hourly pay in the country's own currency
               (the same currency as the country's tuition figures)
     lang    : 'none'   English is enough for most student jobs
               'basic'  you will get by, but the local language doubles options
               'needed' without the local language there is almost no work
     covers  : can legal part-time work realistically cover LIVING costs?
               'yes'    yes, with the legal hours
               'partly' it helps, but you still need money from home
               'no'     no — either work is banned or wages are too low
     note    : the country-specific thing a student needs to hear

   Pay figures are approximate and move every year. They are here so a student
   can compare countries, not so they can plan a budget to the last taka.
   =========================================================================== */

window.JOBTYPES = {
  resto:   { en: 'Restaurants and kitchens',  bn: 'রেস্টুরেন্ট ও রান্নাঘর' },
  delivery:{ en: 'Food delivery',             bn: 'ফুড ডেলিভারি' },
  retail:  { en: 'Shops and supermarkets',    bn: 'দোকান ও সুপারমার্কেট' },
  warehouse:{ en: 'Warehouse and packing',    bn: 'গুদাম ও প্যাকিং' },
  campus:  { en: 'On-campus jobs',            bn: 'ক্যাম্পাসের ভেতরে কাজ' },
  cleaning:{ en: 'Cleaning and housekeeping', bn: 'পরিষ্কার-পরিচ্ছন্নতা' },
  care:    { en: 'Care work for the elderly', bn: 'বয়স্কদের সেবা' },
  farm:    { en: 'Seasonal farm work',        bn: 'মৌসুমি কৃষিকাজ' },
  hotel:   { en: 'Hotels and tourism',        bn: 'হোটেল ও ট্যুরিজম' },
  call:    { en: 'Call centres',              bn: 'কল সেন্টার' },
  tutor:   { en: 'Tutoring',                  bn: 'টিউশনি' },
  it:      { en: 'IT and freelance work',     bn: 'আইটি ও ফ্রিল্যান্স' },
  security:{ en: 'Security',                  bn: 'নিরাপত্তাকর্মী' },
  factory: { en: 'Factory work',              bn: 'কারখানার কাজ' },
  teaching:{ en: 'Teaching English',          bn: 'ইংরেজি শেখানো' }
};

const W = (jobs, pay, lang, covers, note) => ({ jobs, pay, lang, covers, note: note || null });

window.WORK = {

/* ---------- EUROPE / EU ---------- */
romania: W(['delivery','resto','call','it','retail'], [3, 5], 'basic', 'partly', {
  en: 'Bucharest and Cluj have real call-centre and IT work in English, which pays better than restaurant work. Outside those two cities options drop sharply.',
  bn: 'বুখারেস্ট ও ক্লুজে ইংরেজিতে কল সেন্টার ও আইটির কাজ আছে, যা রেস্টুরেন্টের কাজের চেয়ে ভালো বেতন দেয়। এই দুই শহরের বাইরে সুযোগ অনেক কমে যায়।'
}),
italy: W(['resto','delivery','retail','tutor','hotel'], [6, 9], 'needed', 'partly', {
  en: 'Without Italian you are limited to delivery and kitchen work. Many student jobs are paid off the books, which leaves you with no payslip — and a payslip is what the permit office wants to see.',
  bn: 'ইতালিয়ান না জানলে ডেলিভারি আর রান্নাঘরের কাজেই সীমাবদ্ধ থাকবে। অনেক কাজ হয় কাগজপত্র ছাড়া, ফলে কোনো পে-স্লিপ থাকে না — আর পারমিট অফিস ঠিক সেই পে-স্লিপই দেখতে চায়।'
}),
germany: W(['warehouse','resto','retail','campus','delivery','it'], [12, 14], 'needed', 'yes', {
  en: 'The best student wages in continental Europe, and campus jobs (HiWi) pay well and look good on a CV. But the limit is 120 full days or 240 half days a year — not 20 hours every week forever. Plan around that number.',
  bn: 'মহাদেশীয় ইউরোপে শিক্ষার্থীদের সবচেয়ে ভালো মজুরি, আর ক্যাম্পাসের কাজ (HiWi) ভালো বেতন দেয় ও CV-তে ভালো দেখায়। তবে সীমা বছরে ১২০ পূর্ণ দিন বা ২৪০ অর্ধ দিন — সারা বছর প্রতি সপ্তাহে ২০ ঘণ্টা না। এই সংখ্যাটি মাথায় রেখে পরিকল্পনা করুন।'
}),
poland: W(['call','resto','delivery','warehouse','it'], [5, 7], 'basic', 'partly', {
  en: 'Warsaw and Kraków have large English-speaking shared-service and call-centre sectors that genuinely hire students. This is one of the better low-cost countries for finding work.',
  bn: 'ওয়ারশ ও ক্রাকোভে বড় ইংরেজিভাষী শেয়ার্ড-সার্ভিস ও কল সেন্টার খাত আছে, যারা সত্যিই স্টুডেন্ট নেয়। কম খরচের দেশগুলোর মধ্যে কাজ পাওয়ার দিক থেকে এটা ভালোগুলোর একটি।'
}),
hungary: W(['resto','retail','call','delivery','tutor'], [4, 6], 'needed', 'partly', null),
czechia: W(['resto','warehouse','retail','it','delivery'], [5, 7], 'basic', 'partly', null),
netherlands: W(['resto','retail','warehouse','delivery','campus'], [11, 14], 'basic', 'partly', {
  en: 'Wages are good but the legal limit is 16 hours a week in term time, and rent is very high. Work helps; it will not pay for Amsterdam.',
  bn: 'মজুরি ভালো, তবে সেমিস্টার চলাকালে আইনি সীমা সপ্তাহে ১৬ ঘণ্টা, আর বাসা ভাড়া খুব বেশি। কাজ সাহায্য করবে, কিন্তু আমস্টারডামের খরচ এতে উঠবে না।'
}),
france: W(['resto','retail','tutor','campus','delivery'], [11, 13], 'needed', 'partly', {
  en: 'Housing aid (CAF) often does more for your budget than a part-time job does. Apply for it as soon as you have an address.',
  bn: 'পার্ট-টাইম কাজের চেয়ে বাসস্থান সহায়তা (CAF) প্রায়ই বাজেটে বেশি কাজে আসে। ঠিকানা পাওয়ার সঙ্গে সঙ্গেই আবেদন করুন।'
}),
spain: W(['resto','hotel','tutor','teaching','retail'], [7, 10], 'needed', 'partly', {
  en: 'Thirty legal hours a week is generous, and teaching English pays better than hospitality. Tourist-season work on the coast is the easiest to find.',
  bn: 'সপ্তাহে ৩০ ঘণ্টা আইনি অনুমতি উদার, আর ইংরেজি শেখানোর কাজ হোটেল-রেস্টুরেন্টের চেয়ে ভালো বেতন দেয়। উপকূলে পর্যটন মৌসুমের কাজ সবচেয়ে সহজে পাওয়া যায়।'
}),
portugal: W(['resto','hotel','call','delivery','retail'], [5, 7], 'basic', 'partly', {
  en: 'Lisbon and Porto have big multilingual call centres that hire English speakers. That is the most reliable student job here.',
  bn: 'লিসবন ও পোর্তোতে বড় বহুভাষিক কল সেন্টার আছে, যারা ইংরেজিভাষীদের নেয়। এখানে এটাই সবচেয়ে নির্ভরযোগ্য স্টুডেন্ট কাজ।'
}),
sweden: W(['resto','retail','cleaning','campus','delivery'], [13, 17], 'basic', 'partly', {
  en: 'No legal cap on hours, but the job market is small and competitive, and most employers want Swedish. Do not count on finding work quickly.',
  bn: 'ঘণ্টার আইনি সীমা নেই, কিন্তু চাকরির বাজার ছোট ও প্রতিযোগিতামূলক, আর বেশিরভাগ নিয়োগকর্তা সুইডিশ চায়। দ্রুত কাজ পাওয়ার ওপর ভরসা করবেন না।'
}),
finland: W(['cleaning','resto','warehouse','campus','delivery'], [11, 14], 'basic', 'partly', null),
denmark: W(['resto','cleaning','retail','delivery','warehouse'], [15, 20], 'basic', 'yes', {
  en: 'Among the highest student wages anywhere, which you will need — Copenhagen is expensive. Getting a CPR number early is what unlocks legal work.',
  bn: 'যেকোনো জায়গার তুলনায় শিক্ষার্থীদের সবচেয়ে বেশি মজুরিগুলোর একটি, আর দরকারও হবে — কোপেনহেগেন ব্যয়বহুল। দ্রুত CPR নম্বর পাওয়াই বৈধ কাজের দরজা খোলে।'
}),
ireland: W(['resto','retail','hotel','care','security'], [12, 14], 'none', 'partly', {
  en: 'English-speaking, so work is easier to find than in most of Europe. Dublin rent will still swallow most of what you earn.',
  bn: 'ইংরেজিভাষী, তাই ইউরোপের বেশিরভাগ জায়গার চেয়ে কাজ পাওয়া সহজ। তবুও ডাবলিনের বাসা ভাড়া আয়ের বেশিরভাগটাই গিলে ফেলবে।'
}),
austria: W(['resto','retail','campus','cleaning','delivery'], [11, 14], 'needed', 'partly', null),
belgium: W(['resto','retail','warehouse','campus','delivery'], [12, 14], 'needed', 'partly', null),
lithuania: W(['it','call','resto','delivery','retail'], [5, 7], 'basic', 'partly', {
  en: 'Vilnius has a growing fintech and IT sector that hires English-speaking students for support and QA roles.',
  bn: 'ভিলনিয়ুসে ফিনটেক ও আইটি খাত বাড়ছে, যারা সাপোর্ট ও QA-র কাজে ইংরেজিভাষী স্টুডেন্ট নেয়।'
}),
latvia: W(['call','resto','retail','it','delivery'], [5, 7], 'basic', 'partly', null),
estonia: W(['it','call','resto','retail','delivery'], [5, 8], 'basic', 'partly', {
  en: 'The most digital economy in Europe for its size — remote and IT support work is realistic here if you have the skills.',
  bn: 'আকারের তুলনায় ইউরোপের সবচেয়ে ডিজিটাল অর্থনীতি — দক্ষতা থাকলে রিমোট ও আইটি সাপোর্টের কাজ এখানে বাস্তবসম্মত।'
}),
slovakia: W(['resto','retail','factory','call','delivery'], [5, 7], 'needed', 'partly', null),
slovenia: W(['resto','hotel','retail','tutor','farm'], [6, 8], 'needed', 'partly', null),
croatia: W(['hotel','resto','retail','farm','delivery'], [5, 7], 'basic', 'partly', {
  en: 'Tourist-season work on the coast between May and September pays several times what you can earn in winter. Many students earn a year\'s living in one summer.',
  bn: 'মে থেকে সেপ্টেম্বর উপকূলে পর্যটন মৌসুমের কাজে শীতকালের চেয়ে কয়েকগুণ বেশি আয় হয়। অনেক স্টুডেন্ট এক গ্রীষ্মেই বছরের খরচ তুলে ফেলে।'
}),
greece: W(['hotel','resto','teaching','retail','farm'], [5, 7], 'basic', 'partly', {
  en: 'Island and coastal tourism work from May to October is the main earning season, and English is often enough there. Athens has year-round call-centre work.',
  bn: 'মে থেকে অক্টোবর দ্বীপ ও উপকূলের পর্যটনের কাজই মূল আয়ের মৌসুম, আর সেখানে ইংরেজিই প্রায়ই যথেষ্ট। এথেন্সে সারা বছর কল সেন্টারের কাজ আছে।'
}),
cyprus: W(['hotel','resto','retail','call','security'], [5, 8], 'none', 'partly', {
  en: 'English is widely spoken, so finding work is easier than in most of the EU. Hotel and restaurant work peaks between April and October; winter is much quieter.',
  bn: 'ইংরেজি ব্যাপকভাবে চলে, তাই EU-র বেশিরভাগ জায়গার চেয়ে কাজ পাওয়া সহজ। হোটেল ও রেস্টুরেন্টের কাজ এপ্রিল থেকে অক্টোবরে সবচেয়ে বেশি; শীতকাল অনেক শান্ত।'
}),
bulgaria: W(['call','hotel','resto','retail','it'], [3, 5], 'basic', 'partly', {
  en: 'Sofia has a large outsourcing sector hiring English speakers, and the Black Sea coast hires heavily in summer.',
  bn: 'সোফিয়ায় বড় আউটসোর্সিং খাত আছে যারা ইংরেজিভাষী নেয়, আর কৃষ্ণ সাগরের উপকূলে গ্রীষ্মে প্রচুর লোক নেওয়া হয়।'
}),
malta: W(['hotel','resto','call','it','retail'], [5, 8], 'none', 'partly', {
  en: 'English is an official language and the gaming and finance sectors hire students. One of the easiest places in the EU to find English-speaking work.',
  bn: 'ইংরেজি সরকারি ভাষা, আর গেমিং ও ফাইন্যান্স খাত স্টুডেন্ট নেয়। EU-তে ইংরেজিতে কাজ পাওয়ার সবচেয়ে সহজ জায়গাগুলোর একটি।'
}),

/* ---------- MAJOR ENGLISH-SPEAKING ---------- */
usa: W(['campus','tutor','it','resto'], [10, 16], 'none', 'partly', {
  en: 'In the first year you may only work ON campus — library, dining hall, labs, teaching assistance. Off-campus work without authorisation ends your status and your degree. This is the rule students break most often and pay most dearly for.',
  bn: 'প্রথম বছরে শুধু ক্যাম্পাসের ভেতরেই কাজ করা যায় — লাইব্রেরি, ডাইনিং হল, ল্যাব, শিক্ষকের সহকারী। অনুমতি ছাড়া বাইরে কাজ করলে স্ট্যাটাস আর ডিগ্রি দুটোই শেষ। শিক্ষার্থীরা এই নিয়মটাই সবচেয়ে বেশি ভাঙে, আর তার মূল্যও সবচেয়ে বেশি দেয়।'
}),
uk: W(['resto','retail','warehouse','care','security','campus'], [11, 12], 'none', 'partly', {
  en: 'Twenty hours a week in term time is checked, and employers report it. Care work pays better than retail and is always hiring. London rent will still outrun your wages.',
  bn: 'সেমিস্টার চলাকালে সপ্তাহে ২০ ঘণ্টা — এটা যাচাই করা হয়, আর নিয়োগকর্তারা রিপোর্ট করে। কেয়ার ওয়ার্কে খুচরা দোকানের চেয়ে বেশি বেতন, আর লোক সবসময় লাগে। তবুও লন্ডনের বাসা ভাড়া আয়ের চেয়ে বেশি হবে।'
}),
canada: W(['resto','retail','warehouse','campus','delivery','care'], [15, 18], 'none', 'yes', {
  en: 'Off-campus work is allowed and wages are decent, so a student who works the legal hours can cover most living costs. The hour limit has changed more than once — check the current number before you rely on it.',
  bn: 'ক্যাম্পাসের বাইরে কাজের অনুমতি আছে আর মজুরিও ভালো, তাই আইনি ঘণ্টা কাজ করলে জীবনযাত্রার বেশিরভাগ খরচ উঠে আসে। ঘণ্টার সীমা একাধিকবার বদলেছে — ভরসা করার আগে বর্তমান সংখ্যা দেখে নাও।'
}),
australia: W(['resto','retail','cleaning','care','farm','delivery'], [24, 30], 'none', 'yes', {
  en: 'The highest student wages of any destination here, and 48 hours a fortnight is enough to genuinely cover living costs. This is the one country where the "work and study" promise is mostly true.',
  bn: 'এখানের সব গন্তব্যের মধ্যে শিক্ষার্থীদের সবচেয়ে বেশি মজুরি, আর পনেরো দিনে ৪৮ ঘণ্টা দিয়ে সত্যিই জীবনযাত্রার খরচ ওঠে। "কাজ করে পড়াশোনা" প্রতিশ্রুতিটা একমাত্র এই দেশেই মোটামুটি সত্যি।'
}),

/* ---------- ASIA ---------- */
malaysia: W(['resto','retail','hotel','tutor','it'], [2, 4], 'none', 'partly', {
  en: 'Work is limited to 20 hours a week and only during semester breaks or holidays at many institutions. English is enough, but the pay is low — treat it as pocket money, not as funding.',
  bn: 'কাজ সপ্তাহে ২০ ঘণ্টায় সীমিত, আর অনেক প্রতিষ্ঠানে শুধু সেমিস্টার বিরতি বা ছুটিতে। ইংরেজিই যথেষ্ট, তবে বেতন কম — এটিকে হাতখরচ হিসেবে ধরুন, পড়ার খরচের উৎস হিসেবে নয়।'
}),
china: W([], [0, 0], 'needed', 'no', {
  en: 'Students generally cannot work. Some universities allow on-campus or internship work with written permission, but you cannot plan on it. Your full budget must be in place before you fly.',
  bn: 'শিক্ষার্থীরা সাধারণত কাজ করতে পারে না। কিছু বিশ্ববিদ্যালয় লিখিত অনুমতি নিয়ে ক্যাম্পাসে বা ইন্টার্নশিপে কাজ করতে দেয়, কিন্তু এর উপর পরিকল্পনা করা যায় না। প্লেনে ওঠার আগেই পুরো বাজেট হাতে থাকতে হবে।'
}),
japan: W(['resto','retail','teaching','warehouse','cleaning'], [7, 10], 'needed', 'partly', {
  en: 'Twenty-eight hours a week is the most generous limit in Asia, but you need a separate work permission stamp first, and most jobs need conversational Japanese. Teaching English is the exception.',
  bn: 'সপ্তাহে ২৮ ঘণ্টা এশিয়ার সবচেয়ে উদার সীমা, তবে আগে আলাদা কাজের অনুমতির স্ট্যাম্প লাগে, আর বেশিরভাগ কাজে কথা বলার মতো জাপানি লাগে। ইংরেজি শেখানো ব্যতিক্রম।'
}),
'south-korea': W(['resto','teaching','retail','cleaning','factory'], [7, 9], 'needed', 'partly', {
  en: 'You need permission from your university and immigration before working, and a minimum TOPIK level is often required to get it.',
  bn: 'কাজ শুরুর আগে বিশ্ববিদ্যালয় ও ইমিগ্রেশনের অনুমতি লাগে, আর সেটা পেতে প্রায়ই ন্যূনতম TOPIK লেভেল চাওয়া হয়।'
}),
turkey: W(['resto','teaching','hotel','retail','tutor'], [2, 4], 'needed', 'partly', {
  en: 'Bachelor\'s students generally cannot work in the first year. Teaching English pays far better than local wages.',
  bn: 'ব্যাচেলরের শিক্ষার্থীরা সাধারণত প্রথম বছরে কাজ করতে পারে না। ইংরেজি শেখানোর কাজে স্থানীয় মজুরির চেয়ে অনেক বেশি আয় হয়।'
}),
uae: W([], [0, 0], 'none', 'no', {
  en: 'Student visas generally do not carry work rights, and working without a permit is taken seriously here. Budget for the full cost.',
  bn: 'স্টুডেন্ট ভিসায় সাধারণত কাজের অধিকার থাকে না, আর অনুমতি ছাড়া কাজ করাকে এখানে খুব গুরুত্বের সঙ্গে দেখা হয়। পুরো খরচের বাজেট হাতে রাখুন।'
}),

/* ---------- OTHER ---------- */
'north-cyprus': W(['hotel','resto','retail','call','security'], [3, 5], 'none', 'partly', {
  en: 'English is enough and student work is common, but wages are low and often paid informally. Many students work in campus cafés and hotels.',
  bn: 'ইংরেজিই যথেষ্ট আর শিক্ষার্থীদের কাজ সাধারণ ব্যাপার, তবে মজুরি কম আর প্রায়ই অনানুষ্ঠানিকভাবে দেওয়া হয়। অনেক স্টুডেন্ট ক্যাম্পাসের ক্যাফে ও হোটেলে কাজ করে।'
}),
georgia: W(['resto','teaching','hotel','call','retail'], [2, 4], 'basic', 'partly', {
  en: 'Teaching English and call-centre work pay best. Local wages are low, but so is the cost of living.',
  bn: 'ইংরেজি শেখানো আর কল সেন্টারের কাজে সবচেয়ে ভালো আয়। স্থানীয় মজুরি কম, তবে জীবনযাত্রার খরচও কম।'
}),
russia: W(['resto','teaching','retail','delivery','tutor'], [2, 4], 'needed', 'partly', {
  en: 'You need a work permit tied to your student status. Russian is required for almost all work apart from teaching English.',
  bn: 'স্টুডেন্ট স্ট্যাটাসের সাথে যুক্ত ওয়ার্ক পারমিট লাগে। ইংরেজি শেখানো ছাড়া প্রায় সব কাজেই রুশ ভাষা লাগে।'
})
};
