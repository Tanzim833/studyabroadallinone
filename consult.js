/* ===========================================================================
   FREE CONSULTATION BOOKING — a 4-step student data form in a 3D modal.
   Anything with the attribute  data-consult  opens it (header button, hero,
   country pages). Submissions go to the same Google Sheet as the quick check
   (SHEET_URL in app.js); if that fails the student is shown the WhatsApp number.

   You normally edit nothing here. To add or remove a choice in a dropdown,
   edit the OPTIONS block below (both languages sit side by side).
   =========================================================================== */
(function () {
'use strict';

/* ---------------------------------------------------------------- choices */
var OPTIONS = {
  level: [
    ['bachelor', "Bachelor's", 'ব্যাচেলর'],
    ['master',   "Master's",   'মাস্টার্স'],
    ['phd',      'PhD',        'পিএইচডি']
  ],
  qual: [
    ['ssc_hsc',  'SSC + HSC (General Education Board)', 'SSC + HSC (সাধারণ শিক্ষা বোর্ড)'],
    ['olevel',   'O-Level + A-Level',                   'O-Level + A-Level'],
    ['bteb',     'Diploma (BTEB polytechnic)',          'ডিপ্লোমা (BTEB পলিটেকনিক)'],
    ['madrasah', 'Madrasah board (Dakhil / Alim / Fazil)', 'মাদ্রাসা বোর্ড (দাখিল / আলিম / ফাজিল)'],
    ['bachelor', "Bachelor's degree completed",         'ব্যাচেলর ডিগ্রি সম্পন্ন'],
    ['master',   "Master's degree completed",           'মাস্টার্স ডিগ্রি সম্পন্ন'],
    ['other',    'Something else',                      'অন্য কিছু']
  ],
  gap: [
    ['0', 'No gap', 'গ্যাপ নেই'],
    ['1', '1 year', '১ বছর'],
    ['2', '2 years', '২ বছর'],
    ['3', '3 years or more', '৩ বছর বা বেশি']
  ],
  ielts: [
    ['have',   'I have a score',        'স্কোর আছে'],
    ['booked', 'Test already booked',   'পরীক্ষার তারিখ নেওয়া আছে'],
    ['plan',   'Planning to take it',   'দেওয়ার পরিকল্পনা আছে'],
    ['no',     'Have not taken any',    'কোনো পরীক্ষা দিইনি']
  ],
  budget: [
    ['5', 'Under 5 lakh', '৫ লাখের কম'],
    ['10', '5 – 10 lakh', '৫ – ১০ লাখ'],
    ['15', '10 – 15 lakh', '১০ – ১৫ লাখ'],
    ['25', '15 – 25 lakh', '১৫ – ২৫ লাখ'],
    ['40', '25 – 40 lakh', '২৫ – ৪০ লাখ'],
    ['200', '40 lakh +', '৪০ লাখের বেশি']
  ],
  subject: [
    ['business','Business / Management','ব্যবসা / ম্যানেজমেন্ট'],
    ['cs','Computer Science / IT','কম্পিউটার সায়েন্স / আইটি'],
    ['engineering','Engineering','ইঞ্জিনিয়ারিং'],
    ['law','Law','আইন'],
    ['medicine','Medicine / Health','মেডিসিন / স্বাস্থ্য'],
    ['social','Social Science','সমাজবিজ্ঞান'],
    ['arts','Arts / Design','আর্টস / ডিজাইন'],
    ['science','Science','বিজ্ঞান'],
    ['agri','Agriculture','কৃষি'],
    ['hospitality','Hospitality / Tourism','হসপিটালিটি / ট্যুরিজম'],
    ['unsure','Not sure yet','এখনো ঠিক করিনি']
  ],
  passport: [
    ['valid',   'Yes, valid passport',  'হ্যাঁ, বৈধ পাসপোর্ট আছে'],
    ['applied', 'Applied, waiting',     'আবেদন করেছি, অপেক্ষায়'],
    ['none',    'Not yet',              'এখনো না']
  ],
  refusal: [
    ['no',  'No',  'না'],
    ['yes', 'Yes', 'হ্যাঁ']
  ],
  time: [
    ['morning',   'Morning',   'সকাল'],
    ['afternoon', 'Afternoon', 'দুপুর / বিকাল'],
    ['evening',   'Evening',   'সন্ধ্যা / রাত'],
    ['any',       'Any time',  'যেকোনো সময়']
  ]
};

/* ---------------------------------------------------------------- strings */
var TX = {
  en: {
    title: 'Book your free consultation',
    sub: 'Tell us about yourself once. A real adviser reads this before replying, so the first call is useful.',
    steps: ['About you', 'Education', 'Plans', 'Confirm'],
    stepOf: 'Step {a} of {b}',
    name: 'Full name (as in passport)', phone: 'WhatsApp number', email: 'Email', optional: 'optional',
    city: 'District / city in Bangladesh',
    level: 'What do you want to study?', qual: 'Your last completed education', year: 'Year you passed',
    result: 'Result', scale: 'Scale', gap: 'Study gap since then',
    ielts: 'English test (IELTS)', band: 'Overall band',
    dest: 'Where are you interested in?', subject: 'Subject you are interested in',
    budget: 'Total budget you can arrange for the first year', passport: 'Passport',
    refusal: 'Visa refused anywhere before?', time: 'Best time to call you',
    note: 'Anything else we should know', notePh: 'Subjects, worries, questions, deadlines…',
    consent: 'I agree that my details may be used to contact me about this enquiry.',
    docs: 'Do not send passport scans, bank statements or certificates here. Those are handled privately after the first conversation.',
    next: 'Continue', back: 'Back', send: 'Send my details', sending: 'Sending…', close: 'Close',
    required: 'Please fill in this field.', badPhone: 'Enter a valid number, with country code if outside Bangladesh.',
    badEmail: 'That email does not look right.', needConsent: 'Please tick the box to continue.',
    gateTitle: 'Important — please read before you pay anyone',
    gateBody: 'Romania does not accept a BTEB polytechnic diploma in place of HSC, and does not treat Madrasah board certificates as equivalent. The Letter of Acceptance is not issued in either case. You can still send your details so we can explain the options honestly.',
    reviewTitle: 'Check your details',
    okTitle: 'Received. Thank you.', okBody: 'Your details have reached us. We will reply on the WhatsApp number you gave.',
    failTitle: 'It did not go through.', failBody: 'Check your internet and try once more. If it still fails, message directly on WhatsApp:',
    waOpen: 'Open WhatsApp', intakeLine: 'Intake', yes: 'Yes', no: 'No', pick: 'Choose…',
    bandPh: 'e.g. 6.5'
  },
  bn: {
    title: 'আপনার ফ্রি কনসাল্টেশন বুক করুন',
    sub: 'নিজের তথ্য একবারই দিন। উত্তর দেওয়ার আগে একজন আসল পরামর্শদাতা এটি পড়েন, তাই প্রথম কলেই কাজের কথা হয়।',
    steps: ['আপনার পরিচয়', 'পড়াশোনা', 'পরিকল্পনা', 'নিশ্চিত করুন'],
    stepOf: 'ধাপ {a} / {b}',
    name: 'পূর্ণ নাম (পাসপোর্ট অনুযায়ী)', phone: 'WhatsApp নম্বর', email: 'ইমেইল', optional: 'ঐচ্ছিক',
    city: 'জেলা / শহর (বাংলাদেশে)',
    level: 'কী পড়তে চান?', qual: 'সর্বশেষ সম্পন্ন শিক্ষা', year: 'পাসের বছর',
    result: 'ফলাফল', scale: 'স্কেল', gap: 'এরপর পড়াশোনায় গ্যাপ',
    ielts: 'ইংরেজি পরীক্ষা (IELTS)', band: 'ওভারঅল ব্যান্ড',
    dest: 'কোন দেশে আগ্রহী?', subject: 'কোন বিষয়ে আগ্রহী?',
    budget: 'প্রথম বছরের জন্য মোট যত বাজেট ম্যানেজ করতে পারবেন', passport: 'পাসপোর্ট',
    refusal: 'আগে কোথাও ভিসা রিফিউজ হয়েছে?', time: 'কোন সময়ে ফোন করলে সুবিধা',
    note: 'আর কিছু জানাতে চাইলে', notePh: 'বিষয়, দুশ্চিন্তা, প্রশ্ন, সময়সীমা…',
    consent: 'আমি সম্মত যে এই অনুসন্ধানের জন্য আমার সঙ্গে যোগাযোগে আমার তথ্য ব্যবহার করা যাবে।',
    docs: 'এখানে পাসপোর্টের স্ক্যান, ব্যাংক স্টেটমেন্ট বা সার্টিফিকেট পাঠাবেন না। সেগুলো প্রথম আলোচনার পর আলাদাভাবে নেওয়া হয়।',
    next: 'পরের ধাপ', back: 'পিছনে', send: 'আমার তথ্য পাঠান', sending: 'পাঠানো হচ্ছে…', close: 'বন্ধ করুন',
    required: 'এই ঘরটি পূরণ করুন।', badPhone: 'সঠিক নম্বর দিন; বাংলাদেশের বাইরের হলে কান্ট্রি কোডসহ।',
    badEmail: 'ইমেইলটি ঠিক মনে হচ্ছে না।', needConsent: 'এগোতে বাক্সটিতে টিক দিন।',
    gateTitle: 'জরুরি — কাউকে টাকা দেওয়ার আগে পড়ুন',
    gateBody: 'রোমানিয়া HSC-র বদলে BTEB পলিটেকনিক ডিপ্লোমা নেয় না, আর মাদ্রাসা বোর্ডের সার্টিফিকেটও সমমান ধরে না। দুই ক্ষেত্রেই Letter of Acceptance ইস্যু হয় না। তবুও আপনি তথ্য পাঠাতে পারেন, আমরা সৎভাবে বিকল্পগুলো বুঝিয়ে দেব।',
    reviewTitle: 'আপনার তথ্য একবার দেখে নিন',
    okTitle: 'পৌঁছে গেছে। ধন্যবাদ।', okBody: 'আপনার তথ্য আমাদের কাছে পৌঁছেছে। যে WhatsApp নম্বর দিয়েছেন সেখানেই উত্তর দেব।',
    failTitle: 'পাঠানো যায়নি।', failBody: 'ইন্টারনেট দেখে আরেকবার চেষ্টা করুন। তাতেও না হলে সরাসরি WhatsApp-এ মেসেজ করুন:',
    waOpen: 'WhatsApp খুলুন', intakeLine: 'ইনটেক', yes: 'হ্যাঁ', no: 'না', pick: 'বাছাই করুন…',
    bandPh: 'যেমন 6.5'
  }
};

/* ---------------------------------------------------------------- helpers */
function lang(){ return (window.SP && window.SP.getLang()) || 'bn'; }
function X(k){ return (TX[lang()] || TX.en)[k]; }
function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, function (m) {
  return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]; }); }
function opt(list, key){
  var i = lang() === 'bn' ? 2 : 1;
  return list.map(function (o) { return '<option value="' + o[0] + '">' + esc(o[i]) + '</option>'; }).join('');
}
function labelOf(list, v){
  var i = lang() === 'bn' ? 2 : 1, hit = list.filter(function (o) { return o[0] === v; })[0];
  return hit ? hit[i] : '';
}

/* ---------------------------------------------------------------- state */
var S = null;          // { step, data, root, lastFocus }
var TOTAL = 4;

function fresh(){
  return { step: 0, sent: false, d: {
    name: '', phone: '', email: '', city: '',
    level: 'bachelor', qual: '', year: '', result: '', scale: '4', gap: '0',
    ielts: 'plan', band: '', dest: '', subject: '', budget: '15', passport: 'valid',
    refusal: 'no', time: 'any', note: '', consent: false
  } };
}

/* ---------------------------------------------------------------- markup */
function field(id, label, inner, hint){
  return '<div class="cb-field" data-f="' + id + '"><label for="cb-' + id + '">' + esc(label) +
    (hint ? ' <em>' + esc(hint) + '</em>' : '') + '</label>' + inner + '<p class="cb-err" role="alert" hidden></p></div>';
}
function sel(id, list, withBlank){
  return '<select id="cb-' + id + '">' + (withBlank ? '<option value="">' + esc(X('pick')) + '</option>' : '') + opt(list) + '</select>';
}
function chips(id, list){
  var i = lang() === 'bn' ? 2 : 1;
  return '<div class="cb-chips" data-chips="' + id + '" role="group">' + list.map(function (o) {
    return '<button type="button" class="cb-chip" data-v="' + o[0] + '" aria-pressed="false">' + esc(o[i]) + '</button>'; }).join('') + '</div>';
}

function panel(n){
  var countries = window.SP.countries();
  if (n === 0) {
    return field('name', X('name'), '<input id="cb-name" type="text" autocomplete="name">') +
      '<div class="cb-row">' +
        field('phone', X('phone'), '<input id="cb-phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="01XXXXXXXXX">') +
        field('email', X('email'), '<input id="cb-email" type="email" autocomplete="email" placeholder="name@example.com">', X('optional')) +
      '</div>' +
      field('city', X('city'), '<input id="cb-city" type="text" autocomplete="address-level2">', X('optional'));
  }
  if (n === 1) {
    return field('level', X('level'), chips('level', OPTIONS.level)) +
      field('qual', X('qual'), sel('qual', OPTIONS.qual, true)) +
      '<div class="cb-gate" id="cb-gate" hidden><strong>' + esc(X('gateTitle')) + '</strong><p>' + esc(X('gateBody')) + '</p></div>' +
      '<div class="cb-row">' +
        field('year', X('year'), '<input id="cb-year" type="number" inputmode="numeric" min="1990" max="2030" placeholder="2024">') +
        field('gap', X('gap'), sel('gap', OPTIONS.gap)) +
      '</div>' +
      '<div class="cb-row">' +
        field('result', X('result'), '<input id="cb-result" type="number" step="0.01" min="0" inputmode="decimal" placeholder="3.75">') +
        field('scale', X('scale'), '<select id="cb-scale"><option value="4">/ 4.00</option><option value="5">/ 5.00</option><option value="100">%</option></select>') +
      '</div>';
  }
  if (n === 2) {
    var dest = countries.length > 1
      ? field('dest', X('dest'), '<select id="cb-dest"><option value="">' + esc(X('pick')) + '</option>' +
          countries.map(function (c) { return '<option value="' + esc(c.name) + '">' + c.flag + ' ' + esc(c.name) + '</option>'; }).join('') + '</select>')
      : '';
    return dest +
      field('subject', X('subject'), sel('subject', OPTIONS.subject, true)) +
      field('ielts', X('ielts'), chips('ielts', OPTIONS.ielts)) +
      '<div id="cb-bandwrap" hidden>' + field('band', X('band'), '<input id="cb-band" type="text" inputmode="decimal" placeholder="' + esc(X('bandPh')) + '">') + '</div>' +
      field('budget', X('budget'), sel('budget', OPTIONS.budget)) +
      '<div class="cb-row">' +
        field('passport', X('passport'), sel('passport', OPTIONS.passport)) +
        field('refusal', X('refusal'), sel('refusal', OPTIONS.refusal)) +
      '</div>';
  }
  /* step 3: confirm */
  return field('time', X('time'), chips('time', OPTIONS.time)) +
    field('note', X('note'), '<textarea id="cb-note" rows="3" placeholder="' + esc(X('notePh')) + '"></textarea>', X('optional')) +
    '<div class="cb-review"><h4>' + esc(X('reviewTitle')) + '</h4><dl id="cb-review"></dl></div>' +
    '<label class="cb-consent"><input type="checkbox" id="cb-consent"><span>' + esc(X('consent')) + '</span></label>' +
    '<p class="cb-err" id="cb-consent-err" role="alert" hidden></p>' +
    '<p class="cb-docs">🔒 ' + esc(X('docs')) + '</p>';
}

function shell(){
  var orbit = X('steps').map(function (s, i) {
    return '<li data-i="' + i + '"><span class="cb-dot">' + (i + 1) + '</span><span class="cb-dot-l">' + esc(s) + '</span></li>'; }).join('');
  return '<div class="cb-stage" id="cb-stage">' +
    '<div class="cb-card" id="cb-card" role="dialog" aria-modal="true" aria-labelledby="cb-title">' +
      '<span class="cb-glow" aria-hidden="true"></span>' +
      '<button type="button" class="cb-x" id="cb-x" aria-label="' + esc(X('close')) + '">×</button>' +
      '<header class="cb-hd"><p class="cb-kicker">✦ ' + esc(window.T[lang()].siteName) + '</p>' +
        '<h2 id="cb-title">' + esc(X('title')) + '</h2><p class="cb-sub">' + esc(X('sub')) + '</p></header>' +
      '<ol class="cb-steps" aria-hidden="true">' + orbit + '</ol>' +
      '<form id="cb-form" novalidate><div class="cb-body" id="cb-body"></div>' +
        '<div class="cb-out" id="cb-out" hidden></div>' +
        '<footer class="cb-ft"><button type="button" class="cb-btn cb-ghost" id="cb-back">' + esc(X('back')) + '</button>' +
        '<span class="cb-count" id="cb-count"></span>' +
        '<button type="submit" class="cb-btn cb-go" id="cb-next"></button></footer>' +
      '</form></div></div>';
}

/* ---------------------------------------------------------------- rendering a step */
function paint(dir){
  var body = document.getElementById('cb-body');
  body.className = 'cb-body';
  body.innerHTML = panel(S.step);
  void body.offsetWidth;
  body.className = 'cb-body ' + (dir < 0 ? 'cb-in-back' : 'cb-in');
  restore();
  var steps = S.root.querySelectorAll('.cb-steps li');
  Array.prototype.forEach.call(steps, function (li, i) {
    li.className = i < S.step ? 'done' : i === S.step ? 'now' : '';
  });
  document.getElementById('cb-back').style.visibility = S.step === 0 ? 'hidden' : 'visible';
  document.getElementById('cb-count').textContent = X('stepOf').replace('{a}', S.step + 1).replace('{b}', TOTAL);
  var nx = document.getElementById('cb-next');
  nx.textContent = S.step === TOTAL - 1 ? X('send') : X('next') + ' →';
  if (S.step === 1) gate();
  if (S.step === 2) bandToggle();
  if (S.step === 3) review();
  var first = body.querySelector('input,select,textarea,button');
  if (first && dir !== 0) setTimeout(function () { try { first.focus({ preventScroll: true }); } catch (e) {} }, 60);
}

/* write saved values back into the freshly built inputs */
function restore(){
  var d = S.d;
  ['name','phone','email','city','year','result','band','note'].forEach(function (k) {
    var el = document.getElementById('cb-' + k); if (el) el.value = d[k];
  });
  ['qual','scale','gap','subject','budget','passport','refusal','dest'].forEach(function (k) {
    var el = document.getElementById('cb-' + k); if (el && d[k] !== '') el.value = d[k];
  });
  var c = document.getElementById('cb-consent'); if (c) c.checked = d.consent;
  Array.prototype.forEach.call(S.root.querySelectorAll('[data-chips]'), function (g) {
    var k = g.getAttribute('data-chips');
    Array.prototype.forEach.call(g.querySelectorAll('.cb-chip'), function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-v') === d[k]));
    });
  });
}
function collect(){
  var d = S.d;
  ['name','phone','email','city','year','result','band','note'].forEach(function (k) {
    var el = document.getElementById('cb-' + k); if (el) d[k] = el.value.trim();
  });
  ['qual','scale','gap','subject','budget','passport','refusal','dest'].forEach(function (k) {
    var el = document.getElementById('cb-' + k); if (el) d[k] = el.value;
  });
  var c = document.getElementById('cb-consent'); if (c) d.consent = c.checked;
}

function gate(){
  var g = document.getElementById('cb-gate'); if (!g) return;
  var q = document.getElementById('cb-qual').value;
  var romaniaLive = window.SP.countries().some(function (c) { return c.slug === 'romania'; });
  g.hidden = !(romaniaLive && (q === 'bteb' || q === 'madrasah'));
}
function bandToggle(){
  var w = document.getElementById('cb-bandwrap'); if (w) w.hidden = S.d.ielts !== 'have';
}
function review(){
  var d = S.d, rows = [
    [X('name'), d.name], [X('phone'), d.phone], [X('email'), d.email], [X('city'), d.city],
    [X('level'), labelOf(OPTIONS.level, d.level)], [X('qual'), labelOf(OPTIONS.qual, d.qual)],
    [X('result'), d.result ? d.result + ' (' + (d.scale === '100' ? '%' : '/ ' + d.scale) + ')' : ''],
    [X('year'), d.year], [X('gap'), labelOf(OPTIONS.gap, d.gap)],
    [X('ielts'), labelOf(OPTIONS.ielts, d.ielts) + (d.ielts === 'have' && d.band ? ' · ' + d.band : '')],
    [X('dest'), d.dest], [X('subject'), labelOf(OPTIONS.subject, d.subject)],
    [X('budget'), labelOf(OPTIONS.budget, d.budget)], [X('passport'), labelOf(OPTIONS.passport, d.passport)],
    [X('refusal'), labelOf(OPTIONS.refusal, d.refusal)]
  ].filter(function (r) { return r[1]; });
  document.getElementById('cb-review').innerHTML = rows.map(function (r) {
    return '<div><dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>'; }).join('');
}

/* ---------------------------------------------------------------- validation */
function fail(id, msg){
  var f = S.root.querySelector('[data-f="' + id + '"]'); if (!f) return;
  f.classList.add('bad');
  var p = f.querySelector('.cb-err'); p.textContent = msg; p.hidden = false;
}
function clearErr(){
  Array.prototype.forEach.call(S.root.querySelectorAll('.cb-field.bad'), function (f) {
    f.classList.remove('bad'); f.querySelector('.cb-err').hidden = true; });
  var ce = document.getElementById('cb-consent-err'); if (ce) ce.hidden = true;
}
function validate(){
  clearErr(); collect();
  var d = S.d, ok = true;
  if (S.step === 0) {
    if (!d.name) { fail('name', X('required')); ok = false; }
    var digits = d.phone.replace(/[^\d]/g, '');
    if (!d.phone) { fail('phone', X('required')); ok = false; }
    else if (digits.length < 8 || digits.length > 15) { fail('phone', X('badPhone')); ok = false; }
    if (d.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.email)) { fail('email', X('badEmail')); ok = false; }
  }
  if (S.step === 1) {
    if (!d.qual) { fail('qual', X('required')); ok = false; }
  }
  if (S.step === 2) {
    if (!d.subject) { fail('subject', X('required')); ok = false; }
    if (window.SP.countries().length > 1 && !d.dest) { fail('dest', X('required')); ok = false; }
  }
  if (S.step === 3 && !d.consent) {
    var ce = document.getElementById('cb-consent-err'); ce.textContent = X('needConsent'); ce.hidden = false; ok = false;
  }
  if (!ok) { var bad = S.root.querySelector('.cb-field.bad input,.cb-field.bad select,#cb-consent-err:not([hidden])'); if (bad && bad.focus) bad.focus(); }
  return ok;
}

/* ---------------------------------------------------------------- submit */
function payload(){
  var d = S.d, dest = d.dest || (window.SP.countries()[0] || {}).name || '';
  var yr = window.INTAKE_YEAR || '';
  var summary = [
    'CONSULTATION REQUEST',
    'Name: ' + d.name, 'WhatsApp: ' + d.phone, d.email && ('Email: ' + d.email), d.city && ('City: ' + d.city),
    'Level: ' + labelOf(OPTIONS.level, d.level) + (dest ? ' · Destination: ' + dest : '') + (yr ? ' · Intake: ' + yr : ''),
    'Last education: ' + labelOf(OPTIONS.qual, d.qual) + (d.year ? ' (' + d.year + ')' : '') +
      (d.result ? ' · Result ' + d.result + (d.scale === '100' ? '%' : '/' + d.scale) : '') + ' · Gap: ' + labelOf(OPTIONS.gap, d.gap),
    'English: ' + labelOf(OPTIONS.ielts, d.ielts) + (d.band ? ' ' + d.band : ''),
    'Subject: ' + labelOf(OPTIONS.subject, d.subject) + ' · Budget: ' + labelOf(OPTIONS.budget, d.budget),
    'Passport: ' + labelOf(OPTIONS.passport, d.passport) + ' · Visa refused before: ' + labelOf(OPTIONS.refusal, d.refusal),
    'Best time: ' + labelOf(OPTIONS.time, d.time),
    d.note && ('Note: ' + d.note)
  ].filter(Boolean).join('\n');
  return {
    source: 'consultation', name: d.name, phone: d.phone, note: summary, lang: lang(),
    level: d.level, result: d.result, scale: d.scale, budget: d.budget,
    ielts: d.ielts, band: d.band, at: new Date().toISOString(),
    email: d.email, city: d.city, qualification: d.qual, passYear: d.year, gap: d.gap,
    destination: dest, subject: d.subject, passport: d.passport, refused: d.refusal,
    callTime: d.time, intake: yr
  };
}
function waLink(p){
  return 'https://wa.me/' + window.SP.whatsapp() + '?text=' + encodeURIComponent(p.note);
}
function submit(){
  var p = payload(), out = document.getElementById('cb-out'), btn = document.getElementById('cb-next');
  var url = window.SP.sheetUrl();
  btn.disabled = true; btn.textContent = X('sending');
  var done = function (ok) {
    btn.disabled = false;
    if (ok) {
      S.sent = true;
      S.root.querySelector('.cb-card').classList.add('sent');
      document.getElementById('cb-body').hidden = true;
      S.root.querySelector('.cb-steps').hidden = true;
      S.root.querySelector('.cb-ft').hidden = true;
      out.hidden = false; out.className = 'cb-out ok';
      out.innerHTML = '<div class="cb-planet" aria-hidden="true"><span>✓</span></div><h3>' + esc(X('okTitle')) + '</h3><p>' + esc(X('okBody')) + '</p>' +
        '<button type="button" class="cb-btn cb-go" id="cb-done">' + esc(X('close')) + '</button>';
      document.getElementById('cb-done').addEventListener('click', close);
      document.getElementById('cb-done').focus();
    } else {
      btn.textContent = X('send');
      out.hidden = false; out.className = 'cb-out bad';
      out.innerHTML = '<strong>' + esc(X('failTitle')) + '</strong><p>' + esc(X('failBody')) + ' ' +
        '<a href="' + esc(waLink(p)) + '" target="_blank" rel="noopener">+' + esc(window.SP.whatsapp()) + ' · ' + esc(X('waOpen')) + '</a></p>';
    }
  };
  if (!url) { done(false); return; }
  fetch(url, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(p) })
    .then(function (r) { if (!r.ok) throw new Error('bad status'); return r.text(); })
    .then(function () { done(true); })
    .catch(function () { done(false); });
}

/* ---------------------------------------------------------------- open / close */
function open(){
  if (S) return;
  S = fresh();
  S.lastFocus = document.activeElement;
  var host = document.createElement('div');
  host.className = 'cb-overlay'; host.id = 'cb-root';
  host.innerHTML = '<div class="cb-backdrop" id="cb-bd"></div>' + shell();
  document.body.appendChild(host);
  document.documentElement.classList.add('cb-lock');
  S.root = host;
  paint(0);
  requestAnimationFrame(function () { host.classList.add('on'); });

  document.getElementById('cb-bd').addEventListener('click', close);
  document.getElementById('cb-x').addEventListener('click', close);
  document.getElementById('cb-back').addEventListener('click', function () {
    collect(); if (S.step > 0) { S.step--; paint(-1); } });
  document.getElementById('cb-form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate()) return;
    if (S.step < TOTAL - 1) { S.step++; paint(1); } else submit();
  });
  host.addEventListener('click', function (e) {
    var chip = e.target.closest('.cb-chip'); if (!chip) return;
    var g = chip.parentNode, k = g.getAttribute('data-chips');
    S.d[k] = chip.getAttribute('data-v');
    Array.prototype.forEach.call(g.querySelectorAll('.cb-chip'), function (b) { b.setAttribute('aria-pressed', String(b === chip)); });
    if (k === 'ielts') bandToggle();
  });
  host.addEventListener('change', function (e) { if (e.target.id === 'cb-qual') gate(); });

  /* 3D tilt follows the pointer (skipped for touch and reduced motion) */
  var card = document.getElementById('cb-card'), stage = document.getElementById('cb-stage');
  var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!calm) {
    stage.addEventListener('pointermove', function (e) {
      if (e.pointerType === 'touch') return;
      var r = stage.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      card.style.setProperty('--rx', (-y * 5).toFixed(2) + 'deg');
      card.style.setProperty('--ry', (x * 7).toFixed(2) + 'deg');
      card.style.setProperty('--gx', (50 + x * 60) + '%');
      card.style.setProperty('--gy', (50 + y * 60) + '%');
    });
    stage.addEventListener('pointerleave', function () {
      card.style.setProperty('--rx', '0deg'); card.style.setProperty('--ry', '0deg'); });
  }
  document.addEventListener('keydown', onKey);
}
function onKey(e){
  if (!S) return;
  if (e.key === 'Escape') { close(); return; }
  if (e.key === 'Tab') {
    var f = S.root.querySelectorAll('button:not([disabled]),input,select,textarea,a[href]');
    f = Array.prototype.filter.call(f, function (n) { return n.offsetParent !== null; });
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
}
function close(){
  if (!S) return;
  var host = S.root, back = S.lastFocus;
  host.classList.remove('on');
  document.removeEventListener('keydown', onKey);
  document.documentElement.classList.remove('cb-lock');
  S = null;
  setTimeout(function () { if (host.parentNode) host.parentNode.removeChild(host); }, 260);
  if (back && back.focus) try { back.focus(); } catch (e) {}
}

document.addEventListener('click', function (e) {
  var b = e.target.closest('[data-consult]');
  if (b) { e.preventDefault(); open(); }
});
window.SPConsult = { open: open, close: close };
})();
