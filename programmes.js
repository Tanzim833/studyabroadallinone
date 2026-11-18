/* Romania data from the client's university list. To use a real photo, put a file in assets/ and set photo:'assets/name.jpg'. */
(function(){
var UNIS=[
{name:'University of Bucharest',slug:'bucharest',city:'Bucharest',type:'Public',fee:'€2,200 – €3,000 / year',
 why:'One of Romania’s top-ranked comprehensive public universities, with English programmes in Business, Political Science, International Relations, IT and Humanities. Being in the capital means more part-time work and networking.',
 ba:['Business Administration','Computer Science','International Relations & European Studies','Political Science','American Studies','Applied Modern Languages'],
 ma:['Business Consulting','Business Administration','Artificial Intelligence','Data Science','International Arbitration','New Technologies Law','Sociology'],
 phd:'English PhD (select fields) + 1-year Preparatory Year'},
{name:'Babeș-Bolyai University',slug:'ubb',short:'UBB',city:'Cluj-Napoca',type:'Public',fee:'€2,200 – €3,200 / year',
 why:'Romania’s largest multilingual public university, consistently at the top of international rankings. Strong in Computer Science, Economics, Business Administration and International Relations.',
 ba:['Computer Science','Artificial Intelligence','Mathematics & Computer Science','Information Engineering','International Business','Accounting & Management Information Systems','Political Science','Communication & PR'],
 ma:['Software Engineering','Cybersecurity','Data Science for Industry & Society','Applied Computational Intelligence','International Business Management','Corporate Finance & Insurance','European Studies'],
 phd:'English PhD (Economics, CS, Humanities) + Preparatory Year'},
{name:'National University of Science and Technology POLITEHNICA Bucharest',slug:'politehnica-bucharest',short:'POLITEHNICA',city:'Bucharest',type:'Public',fee:'€2,430 – €3,500 / year',
 why:'Romania’s premier technical university for Engineering, Computer Science, Electronics, Mechanical and Aerospace, with many English-taught programmes and strong industry links.',
 ba:['Computer Science & Engineering','Electronics & Telecommunications','Mechanical Engineering','Industrial Engineering','Aerospace Engineering','Chemical Engineering','Medical Engineering'],
 ma:['Artificial Intelligence','Cybersecurity','Software Engineering','Automotive Engineering','Renewable Energy','Biomedical Engineering','Project Management'],
 phd:'English PhD (Engineering & IT) + 1-year Preparatory Year'},
{name:'Bucharest University of Economic Studies',slug:'ase',short:'ASE',city:'Bucharest',type:'Public',fee:'€2,200 – €2,700 / year',
 why:'Romania’s leading specialised public university for Business, Accounting, Finance, Economics and Management. A first choice for students from a Commerce or Business background.',
 ba:['Business Administration','Finance & Banking','Accounting & Management Information Systems','International Business & Economics','Economic Cybernetics','Marketing'],
 ma:['International Business & Entrepreneurship','Finance & Risk Management','Financial Analysis & Valuation','Digital Business & Innovation','Management & Marketing'],
 phd:'English PhD (Economics, Finance, Accounting) + Preparatory Year'},
{name:'Alexandru Ioan Cuza University of Iași',slug:'uaic',short:'UAIC',city:'Iași',type:'Public',fee:'€2,200 – €2,800 / year',
 why:'Romania’s oldest modern public university (1860), with English programmes in Computer Science, Economics, Law and Social Sciences. Living costs in Iași are much lower than in Bucharest.',
 ba:['Computer Science','Economics & Finance','Business Administration','International Relations & European Studies'],
 ma:['Software Engineering','Computational Optimization','Finance & Risk Management','Strategic Human Resource Management','European Studies'],
 phd:'English PhD (select fields) + Preparatory Year'},
{name:'West University of Timișoara',slug:'uvt',short:'UVT',city:'Timișoara',type:'Public',fee:'€2,200 – €3,000 / year',
 why:'Western Romania’s top multidisciplinary university, with English courses in Economics, IT, Mathematics, Political Science and Arts. Close to the Hungary and Serbia borders.',
 ba:['Computer Science','Finance & Banking','Management','International Relations','English Language & Literature'],
 ma:['Artificial Intelligence & Distributed Computing','Cybersecurity','Big Data','International Corporate Finance','Global Studies'],
 phd:'English PhD (select fields) + Preparatory Year'},
{name:'Politehnica University of Timișoara',slug:'upt',short:'UPT',city:'Timișoara',type:'Public',fee:'€2,430 – €3,200 / year',
 why:'A well-regarded public technical university for Civil and Mechanical Engineering, Telecommunications and IT, with good international student support and dorms.',
 ba:['Computer & Information Technology','Electronics & Telecommunications','Civil Engineering','Mechanical Engineering','Communication & PR'],
 ma:['Software Engineering','Information Technology','Automotive Embedded Software','Structural Engineering','Communication & Media'],
 phd:'English PhD (Engineering) + 1-year Preparatory Year'},
{name:'Technical University of Cluj-Napoca',slug:'utcn',short:'UTCN',city:'Cluj-Napoca',type:'Public',fee:'€2,430 – €3,300 / year',
 why:'Cluj-Napoca is known as Romania’s Silicon Valley. English programmes in Software Engineering, Automation, Robotics and Electrical Engineering, with good IT internship options.',
 ba:['Computer Science','Automation & Applied Informatics','Electronics & Telecommunications','Robotics','Industrial Engineering','Architecture (6 years)'],
 ma:['Cybersecurity','Artificial Intelligence & Vision','Embedded Systems','Advanced Manufacturing','Structural Engineering'],
 phd:'English PhD (Engineering & CS) + 1-year Preparatory Year'},
{name:'Gheorghe Asachi Technical University of Iași',slug:'tuiasi',short:'TUIASI',city:'Iași',type:'Public',fee:'€2,430 – €3,000 / year',
 why:'An established public university for Engineering, Architecture, Textiles and Computer Engineering. Both tuition and living costs are student-friendly.',
 ba:['Computer Engineering','Electrical Engineering','Mechanical Engineering','Civil Engineering','Architecture (6 years)','Chemical Engineering'],
 ma:['Information Technology','Structural Engineering','Environmental Management','Industrial Design','Power Systems'],
 phd:'English PhD (Engineering) + Preparatory Year'},
{name:'Transilvania University of Brașov',slug:'unitbv',short:'UNITBV',city:'Brașov',type:'Public',fee:'€2,200 – €3,000 / year',
 why:'Central Romania’s largest comprehensive university, with English programmes in Automotive and Mechanical Engineering, Business and Computer Science. Brașov is a safe, attractive city.',
 ba:['Automotive Engineering','Mechanical Engineering','Computer Science','Business Administration','American Studies'],
 ma:['Automotive Engineering for Sustainable Mobility','Eco-Design','Business Administration','Applied Electronics'],
 phd:'English PhD (select fields) + 1-year Preparatory Year'},
{name:'Ovidius University of Constanța',slug:'ovidius',short:'Ovidius',city:'Constanța',type:'Public',fee:'€2,200 – €2,800 / year · Medicine/Dentistry €5,000 – €6,500',
 why:'The largest coastal public university on the Black Sea. Popular with international students for English-taught Medicine, Dentistry, Pharmacy and some Engineering and Economics programmes.',
 ba:['General Medicine (6 years)','Dentistry (6 years)','Pharmacy (5 years)','International Relations','Computer Science'],
 ma:['Political Science & Security Studies','Petroleum & Gas Engineering','Business Administration'],
 phd:'English PhD (Medicine/Science) + 1-year Preparatory Year'},
{name:'Romanian-American University',slug:'rau',short:'RAU',city:'Bucharest',type:'Private',fee:'€2,900 – €3,900 / year',
 why:'Accredited private university with a US-style curriculum in Business Administration, Computer Science, International Business and Tourism Management. Admission processing is usually faster than at public universities.',
 ba:['Computer Science for Economics','International Business','Management-Marketing','Finance & Banking','Tourism & Hospitality Management'],
 ma:['Strategic Marketing','International Business & Entrepreneurship','Software Development & Business Information Systems','Finance'],
 phd:'1-year Preparatory Year'},
{name:'Valahia University of Târgoviște',slug:'valahia',short:'Valahia',city:'Târgoviște',type:'Public',fee:'€2,300 / year · Engineering €2,800 · Arts €4,200',
 why:'Founded in 1992, about 80 km from Bucharest. Low living costs. The main English Bachelor’s is Business Administration; the 1-year Romanian Preparatory Year (no IELTS) opens all 10 faculties.',
 ba:['Business Administration (English)','Romanian Preparatory Year','Accounting & MIS','Finance & Banking','Marketing','Law','Computer Science','Electrical Engineering','Automotive Engineering','Mechatronics'],
 ma:[],
 phd:'PhD in Romanian track (€2,400 – €2,900 / year)'},
{name:'1 Decembrie 1918 University of Alba Iulia',slug:'uab',short:'UAB',city:'Alba Iulia',type:'Public',fee:'€2,500 – €3,000 / year',
 why:'Founded in 1991, about 100 km from Cluj-Napoca. Well known among Bangladeshi students for English-taught Business Administration and Computer Science. Campus dorms cost €60 – €85 a month, and admitted non-EU students can compete for an internal merit scholarship (full tuition waiver, free dorm and a 1,000 RON monthly stipend).',
 ba:['Computer Science','Business Administration','Romanian Preparatory Year','Accounting & Management Informatics','Finance & Banking','Marketing','Law','Public Administration','Electronics','Environmental Engineering'],
 ma:['Master of Business Administration (MBA)','MA in English Language and Literature'],
 phd:'Romanian-taught PhD after the Preparatory Year (€2,500 – €3,000 / year)',
 notes:['Application fee €150, non-refundable, paid before you apply','Online English interview with the international commission, usually in July','First-year tuition is paid after the Letter of Acceptance and before the visa application']}
];
var POOL=['1486406146926-c627a92ad1ab','1449824913935-59a10b8d2000','1477959858617-67f85cf4f1df','1480714378408-67cf0d13bc1b','1513635269975-59663e0ac1ad','1502602898657-3e91760cbb34','1541339907198-e08756dedf3f','1562774053-701939374585','1507842217343-583bb7270b66','1524995997946-a1c2e315a42f','1481026469463-66327c86e544','1467269204594-9661b134dd2b','1506973035872-a4ec16b8e8d9','1517935706615-2717063c2225','1499856871958-5b9627545d1a','1488646953014-85cb44e25828','1503220317375-aaad61436b1b','1522202176988-66273c2fd55f','1434030216411-0b793f4b4173','1497366216548-37526070297c','1519389950473-47ba0277781c'];
var TONES=['#f5e9d4','#a8d8c4','#fcab79','#f4d35e','#e0e2e6','#d9a441'];
function img(i,q){return 'https://images.unsplash.com/photo-'+POOL[i%POOL.length]+'?auto=format&fit=crop&q=60&'+q;}
var unis=UNIS.map(function(u,i){
  u.id=i+1;u.tone=TONES[i%TONES.length];
  if(u.slug){u.photo='assets/uni/'+u.slug+'.jpg';u.thumbPhoto='assets/uni/'+u.slug+'-t.jpg';}
  u.card=u.photo||img(i*3,'w=480&h=600');u.image=u.photo||img(i*3,'w=900&h=560');
  return u;
});
var progs=[],id=0;
unis.forEach(function(u,i){
  [['Bachelor’s',u.ba],['Master’s',u.ma]].forEach(function(L,j){L[1].forEach(function(t,k){
    id++;var pi=i*3+j*5+k;
    progs.push({id:id,uid:u.id,title:t,university:u.name,city:u.city,level:/MBA|^MA /.test(t)?'Master’s':/6 years|5 years/.test(t)?'Long-cycle degree':(t.indexOf('Preparatory')>=0?'Preparatory year':L[0]),
      intake:'October',fee:u.fee,type:u.type,tone:TONES[id%TONES.length],
      thumb:u.thumbPhoto||img(pi,'w=96&h=240'),image:u.photo||img(pi,'w=720&h=450')});
  });});
});
var cities=[];unis.forEach(function(u){var c=cities.filter(function(x){return x.name===u.city;})[0];if(c)c.count++;else cities.push({name:u.city,count:1});});
window.UNIVERSITIES=unis;window.PROGRAMMES=progs;window.CITIES=cities;
window.ROMANIA_FACTS=[
 ['Intake','Romania has one start of study a year, in October. Each university runs its own application sessions from about March to August, and all of them lead to that same October start. Always read your own university’s calendar.','October','Sep / Oct'],
 ['Who can apply','Bachelor’s needs SSC and HSC from a General Education Board, or O-Level and A-Level. A BTEB polytechnic diploma is not accepted in place of HSC, and Madrasah certificates (Dakhil, Alim, Fazil) are not treated as equivalent. No Letter of Acceptance is issued in either case.','SSC + HSC'],
 ['English test','IELTS only. MOI letters, TOEFL, PTE and Duolingo are not accepted. Without IELTS the one route in is the 1-year Romanian Preparatory Year, after which you study in Romanian.','IELTS only'],
 ['Tuition','About €2,000 – €3,500 a year at most public universities. Medicine, Dentistry and Pharmacy cost much more. Confirm the exact figure on your university’s own website before you pay.','€2k – 3.5k'],
 ['Total cost','৳5,00,000 – ৳7,00,000 from starting the application to landing, including first-year tuition, visa, flight, documents and processing. Living costs after you arrive are separate.','৳5 – 7 lakh'],
 ['Embassy','There is no Romanian embassy in Dhaka. The visa file goes to a mission abroad: New Delhi, Kuala Lumpur, Bangkok or Hanoi. An embassy in Dhaka has been talked about for around 2027, but nothing is confirmed.','New Delhi'],
 ['Letter of Acceptance','Issued by the Romanian Ministry of Education through your university. It takes 4 – 8 weeks, and a full year’s tuition is usually paid before the visa application. Start by May or June for an October start.','4 – 8 weeks'],
 ['Part-time work','The residence permit allows 20 hours a week. Delivery, restaurant and shop work is what students actually find, mostly in the big university cities, at roughly €3 – €5 an hour. Living costs run about €200 – €300 a month.','20 hrs / week'],
 ['Spouse','A spouse can join you at Bachelor’s, Master’s and PhD level, and the spouse can work. Ask about “can come” and “can work” as two separate questions.','Allowed'],
 ['After graduation','A 9-month stay to look for a job after you finish your degree.','9 months'],
 ['PR and passport','Study years count at only half towards residence. From a student permit, permanent residence takes roughly 10 years and a passport roughly 20. Nobody can guarantee either.','~10 yrs PR'],
 ['Funds to show','A bank balance of about €4,000 – €6,000 is expected for the visa. This is an estimate, so confirm the current amount with the mission before you move any money.','€4k – 6k']
];
})();
