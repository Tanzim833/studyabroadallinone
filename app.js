/* ============================================================
   StudyPath — application logic
   Pages are rendered from COUNTRIES / UNIVERSITIES / IMMIG.
   Add data, not code.
   ============================================================ */
(function () {
'use strict';

/* ============================================================
   YOUR WHATSAPP NUMBER — the only line you change to redirect
   where the contact form sends messages.
   Country code first, no +, no spaces, no dashes.
   ============================================================ */
var WHATSAPP = '393509549869';

/* ---------- state ---------- */
var lang = localStorage.getItem('sp_lang') || 'bn';
var MONTHS = {
  en: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  bn: ['জানু','ফেব','মার্চ','এপ্রি','মে','জুন','জুল','আগ','সেপ','অক্টো','নভে','ডিসে']
};

/* ---------- helpers ---------- */
function t(k){ var v = (window.T[lang]||{})[k]; return v === undefined ? (window.T.en[k]||k) : v; }
function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g, function(m){
  return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]; }); }
function nm(c){ return c.name[lang] || c.name.en; }
function L(o){ return o ? (o[lang] || o.en) : ''; }
function regionName(id){ var r = window.REGIONS.filter(function(x){return x.id===id;})[0]; return r ? (r[lang]||r.en) : id; }
function subjName(id){ var s = window.SUBJECTS.filter(function(x){return x.id===id;})[0]; return s ? (s[lang]||s.en) : id; }
function mon(n){ return MONTHS[lang][(n-1+12)%12]; }

function fx(c){ return window.FX[c.cur] || 1; }
function costRange(c){
  var lo = (c.tuition[0] + c.living[0]*12) * fx(c);
  var hi = (c.tuition[1] + c.living[1]*12) * fx(c);
  return [lo, hi];
}
function lakh(bdt){ return Math.round(bdt/10000)/10; }
function lakhStr(bdt){ return lakh(bdt) + ' ' + t('lakh'); }
function cur(v, c){ return (c.cur==='EUR'?'€':c.cur==='GBP'?'£':c.cur==='USD'?'$':c.cur+' ') + v.toLocaleString('en-US'); }
function tk(v){ return '৳' + Math.round(v).toLocaleString('en-US'); }

function trendBadge(c){
  return c.trending ? ' <span class="pill pill-hot" title="'+esc(t('trendBadgeLong'))+'">'+esc(t('trendBadge'))+'</span>' : '';
}
function trendingCountries(){
  return window.COUNTRIES.filter(function(c){ return c.trending; })
    .sort(function(a,b){ return a.trendRank - b.trendRank; });
}
function trendCard(c){
  var r = costRange(c);
  return '<a class="trend" href="#/country/'+c.slug+'">'+
    '<span class="tr-top"><span class="tr-fl" aria-hidden="true">'+c.flag+'</span>'+
      '<span class="tr-nm">'+esc(nm(c))+'</span></span>'+
    '<dl>'+
      '<dt>'+esc(t('thIelts'))+'</dt><dd>'+esc(t(c.ielts==='not_required'?'ieltsNotReq':c.ielts==='flexible'?'ieltsFlex':'ieltsReq'))+'</dd>'+
      '<dt>'+esc(t('secCost'))+'</dt><dd>'+lakh(r[0])+'–'+lakh(r[1])+' '+esc(t('lakh'))+'</dd>'+
      '<dt>'+esc(t('thIntakes'))+'</dt><dd>'+c.intakes.length+'</dd>'+
    '</dl></a>';
}
function trendSection(){
  return '<section class="sect" style="padding-bottom:0"><div class="wrap">'+
    '<div class="sect-head"><h2 class="serif">'+esc(t('trendTitle'))+'</h2><p>'+esc(t('trendSub'))+'</p></div>'+
    '<div class="trend-grid">'+trendingCountries().map(trendCard).join('')+'</div>'+
    '<div class="note" style="margin-top:16px;max-width:none"><p><strong>'+esc(t('trendWhat'))+'</strong></p>'+
      '<p>'+esc(t('trendWhatBody'))+'</p></div>'+
    '</div></section>';
}

function ieltsPill(c){
  var m = { not_required:['pill-ok','ieltsNotReq'], flexible:['pill-mid','ieltsFlex'], required:['pill-no','ieltsReq'] }[c.ielts];
  return '<span class="pill '+m[0]+'">'+esc(t(m[1]))+'</span>';
}
function im(slug){ return window.IMMIG[slug] || null; }

function spouseShort(v){ return t({all:'spAllS',pg:'spPgS',phd:'spPhdS',none:'spNoneS'}[v]||'spNoneS'); }
function spouseLong(v){ return t({all:'spAll',pg:'spPg',phd:'spPhd',none:'spNone'}[v]||'spNone'); }
function spousePill(v){
  var cls = {all:'pill-ok', pg:'pill-mid', phd:'pill-mid', none:'pill-no'}[v] || 'pill-grey';
  return '<span class="pill '+cls+'">'+esc(spouseShort(v))+'</span>';
}
function workShort(v){ return t({yes:'swYesS',cond:'swCondS',no:'swNoS'}[v]||'swNaS'); }
function workLong(v){ return t({yes:'swYes',cond:'swCond',no:'swNo'}[v]||'swNa'); }
function studyPill(v){
  var cls = {half:'pill-mid', full:'pill-ok', none:'pill-no', na:'pill-grey'}[v] || 'pill-grey';
  return '<span class="pill '+cls+'">'+esc(t({half:'psHalf',full:'psFull',none:'psNone',na:'psNa'}[v]||'psNa'))+'</span>';
}
function studyLong(v){ return t({half:'psHalfL',full:'psFullL',none:'psNoneL',na:'psNaL'}[v]||'psNaL'); }

/* PR cell: years if there is a residence count, otherwise distinguish
   "no route at all" from "a route exists, just not straight from studying" */
function prCell(m){
  if (m.prYears) return m.prYears+' '+esc(t('prYearsV'));
  if (m.prStudy === 'na') return '<span class="pill pill-no">'+esc(t('prNoRoute'))+'</span>';
  return '<span class="pill pill-mid">'+esc(t('prViaWork'))+'</span>';
}

/* the standing update note — one place, every page */
function updBox(){
  return '<div class="note"><p><strong>'+esc(t('updBox'))+'</strong></p>'+
    '<p style="margin:6px 0 0;font-size:.9rem">'+esc(t('updLast'))+': '+esc(L(window.SITE_UPDATED))+
    ' · '+esc(t('updNext'))+': '+esc(L(window.SITE_REVIEW))+'</p></div>';
}
function fraudBox(){
  return '<div class="note alert"><p><strong>'+esc(t('fraudTitle'))+'</strong></p>'+
    '<p>'+esc(t('fraudBody'))+'</p>'+
    '<ol class="steps" style="margin-top:12px">'+
      '<li>'+esc(t('fraudCheck1'))+'</li><li>'+esc(t('fraudCheck2'))+'</li>'+
      '<li>'+esc(t('fraudCheck3'))+'</li><li>'+esc(t('fraudCheck4'))+'</li>'+
    '</ol></div>';
}

/* ============================================================
   SHELL
   ============================================================ */
var NAVLINKS = [
  ['#/', 'navHome'], ['#/countries','navCountries'], ['#/eligibility','navEligibility'],
  ['#/pr-spouse','navPr'], ['#/without-ielts','navNoIelts'], ['#/calendar','navCalendar'],
  ['#/cost','navCost'], ['#/courses','navCourses'], ['#/contact','navContact']
];

function header(route){
  var links = NAVLINKS.map(function(l){
    var cu = (l[0] === '#/'+route || (route==='' && l[0]==='#/')) ? ' aria-current="page"' : '';
    return '<a href="'+l[0]+'"'+cu+'>'+esc(t(l[1]))+'</a>';
  }).join('');
  return '<header class="hdr"><div class="hdr-in">'+
    '<a class="brand" href="#/"><b>'+esc(t('siteName'))+'</b><span>'+esc(t('siteTag'))+'</span></a>'+
    '<button class="burger" id="burger" aria-expanded="false">'+esc(t('menu'))+'</button>'+
    '<nav class="nav" id="nav">'+links+'</nav>'+
    '<div class="lang" role="group">'+
      '<button data-lang="bn" aria-pressed="'+(lang==='bn')+'">বাংলা</button>'+
      '<button data-lang="en" aria-pressed="'+(lang==='en')+'">EN</button>'+
    '</div></div></header>';
}

function footer(){
  var regions = window.REGIONS.filter(function(r){return r.id!=='all';}).map(function(r){
    return '<a href="#/countries?region='+r.id+'">'+esc(r[lang]||r.en)+'</a>'; }).join('');
  return '<footer class="ftr"><div class="wrap"><div class="ftr-grid">'+
    '<div><h4>'+esc(t('siteName'))+'</h4><p style="margin:0;max-width:34ch;line-height:1.6">'+esc(t('heroSub'))+'</p></div>'+
    '<div><h4>'+esc(t('ftrTools'))+'</h4>'+
      '<a href="#/eligibility">'+esc(t('navEligibility'))+'</a>'+
      '<a href="#/pr-spouse">'+esc(t('navPr'))+'</a>'+
      '<a href="#/without-ielts">'+esc(t('navNoIelts'))+'</a>'+
      '<a href="#/calendar">'+esc(t('navCalendar'))+'</a>'+
      '<a href="#/cost">'+esc(t('navCost'))+'</a></div>'+
    '<div><h4>'+esc(t('ftrRegions'))+'</h4>'+regions+'</div>'+
    '<div><h4>'+esc(t('ftrLegal'))+'</h4>'+
      '<a href="#/privacy">'+esc(t('ftrPrivacy'))+'</a>'+
      '<a href="#/disclaimer">'+esc(t('ftrDisclaimer'))+'</a>'+
      '<a href="#/contact">'+esc(t('navContact'))+'</a>'+
      '<a href="#/data">'+esc(t('dsTitle'))+'</a></div>'+
    '</div><p class="disc">'+esc(t('ftrDisc'))+'</p></div></footer>';
}

/* ============================================================
   HOME
   ============================================================ */
function pageHome(){
  var tools = [
    ['#/eligibility','🧭','t1','t1d'], ['#/pr-spouse','👪','navPr','prSub'],
    ['#/without-ielts','🗣️','t3','t3d'], ['#/calendar','🗓️','t4','t4d'], ['#/cost','🧮','t5','t5d']
  ].map(function(x){
    return '<a class="tool" href="'+x[0]+'"><span class="tool-ic" aria-hidden="true">'+x[1]+'</span>'+
      '<h3>'+esc(t(x[2]))+'</h3><p>'+esc(t(x[3]))+'</p></a>'; }).join('');

  return '<section class="hero"><div class="hero-grid">'+
    '<div><h1>'+esc(t('heroH1'))+'</h1><p>'+esc(t('heroSub'))+'</p>'+
      '<ul class="hero-trust"><li>'+esc(t('heroT1'))+'</li><li>'+esc(t('heroT2'))+'</li><li>'+esc(t('heroT3'))+'</li></ul></div>'+
    '<div>'+quickCheckCard()+'</div>'+
    '</div></section>'+

    trendSection()+

    '<section class="sect"><div class="wrap">'+
      '<div class="sect-head"><h2 class="serif">'+esc(t('toolsTitle'))+'</h2><p>'+esc(t('toolsSub'))+'</p></div>'+
      '<div class="tools">'+tools+'</div>'+
    '</div></section>'+

    '<section class="sect" style="padding-top:0"><div class="wrap">'+
      '<div class="sect-head"><h2 class="serif">'+esc(t('prExplainTitle'))+'</h2></div>'+
      '<div class="tools">'+
        '<div class="tool"><h3>'+esc(t('prEx1Title'))+'</h3><p>'+esc(t('prEx1'))+'</p></div>'+
        '<div class="tool"><h3>'+esc(t('prEx2Title'))+'</h3><p>'+esc(t('prEx2'))+'</p></div>'+
        '<div class="tool"><h3>'+esc(t('prEx3Title'))+'</h3><p>'+esc(t('prEx3'))+'</p></div>'+
      '</div></div></section>'+

    '<section class="sect" style="padding-top:0"><div class="wrap">'+fraudBox()+'</div></section>'+
    '<section class="sect" style="padding-top:0"><div class="wrap">'+contactBlock()+'</div></section>';
}

/* ---------- the quick-check card (hero + eligibility page) ---------- */
var ans = { level:'bachelor', result:'', scale:'4', budget:'15', ielts:'no', band:'6.0' };

function quickCheckCard(){
  return '<form class="qc" id="qcForm">'+
    '<h2 class="serif">'+esc(t('qcTitle'))+'</h2><p class="qc-sub">'+esc(t('qcSub'))+'</p>'+

    '<div class="field"><label>'+esc(t('qcLevel'))+'</label><div class="seg" data-seg="level">'+
      ['bachelor','master','phd'].map(function(v){
        return '<button type="button" data-v="'+v+'" aria-pressed="'+(ans.level===v)+'">'+
          esc(t(v==='bachelor'?'lvlBachelor':v==='master'?'lvlMaster':'lvlPhd'))+'</button>'; }).join('')+
    '</div></div>'+

    '<div class="field"><label for="qcRes">'+esc(t('qcCgpa'))+' <span class="hint">— '+esc(t('qcCgpaHint'))+'</span></label>'+
      '<div style="display:flex;gap:8px">'+
      '<input id="qcRes" type="number" step="0.01" min="0" inputmode="decimal" placeholder="3.50" value="'+esc(ans.result)+'" style="flex:1 1 auto">'+
      '<select id="qcScale" style="flex:0 0 118px" aria-label="scale">'+
        '<option value="4"'+(ans.scale==='4'?' selected':'')+'>/ 4.00</option>'+
        '<option value="5"'+(ans.scale==='5'?' selected':'')+'>/ 5.00</option>'+
        '<option value="100"'+(ans.scale==='100'?' selected':'')+'>%</option>'+
      '</select></div></div>'+

    '<div class="field"><label for="qcBudget">'+esc(t('qcBudget'))+' <span class="hint">— '+esc(t('qcBudgetHint'))+'</span></label>'+
      '<select id="qcBudget">'+
      [['5','< 5'],['10','5 – 10'],['15','10 – 15'],['25','15 – 25'],['40','25 – 40'],['200','40+']]
        .map(function(b){ return '<option value="'+b[0]+'"'+(ans.budget===b[0]?' selected':'')+'>'+b[1]+' '+esc(t('lakh'))+'</option>'; }).join('')+
      '</select></div>'+

    '<div class="field"><label>'+esc(t('qcIelts'))+'</label><div class="seg" data-seg="ielts">'+
      [['yes','ieltsYes'],['no','ieltsNo'],['plan','ieltsPlan']].map(function(v){
        return '<button type="button" data-v="'+v[0]+'" aria-pressed="'+(ans.ielts===v[0])+'">'+esc(t(v[1]))+'</button>'; }).join('')+
    '</div></div>'+

    '<div class="field" id="bandWrap"'+(ans.ielts==='yes'?'':' hidden')+'>'+
      '<label for="qcBand">'+esc(t('ieltsBand'))+'</label><select id="qcBand">'+
      ['5.0','5.5','6.0','6.5','7.0','7.5','8.0+'].map(function(b){
        return '<option value="'+b+'"'+(ans.band===b?' selected':'')+'>'+b+'</option>'; }).join('')+
      '</select></div>'+

    '<button class="btn" type="submit">'+esc(t('qcGo'))+'</button>'+
  '</form>';
}

/* ---------- matching logic ---------- */
function strength(){
  var v = parseFloat(ans.result);
  if (isNaN(v)) return null;
  if (ans.scale==='4') return v/4*100;
  if (ans.scale==='5') return v/5*100;
  return v;
}

function evaluate(){
  var budget = parseFloat(ans.budget);
  var st = strength();
  return window.COUNTRIES.map(function(c){
    var r = costRange(c), loL = lakh(r[0]), hiL = lakh(r[1]);
    var why = [], band;

    /* budget */
    var bState;
    if (hiL <= budget)       { bState='ok';  why.push(['ok', t('resWhyBudget')]); }
    else if (loL <= budget)  { bState='ok';  why.push(['ok', t('resWhyBudget')+' ('+loL+'–'+budget+' '+t('lakh')+')']); }
    else if (loL <= budget*1.2){ bState='mid'; why.push(['mid', t('resWhyOver')+' '+(Math.round((loL-budget)*10)/10)+' '+t('lakh')]); }
    else                     { bState='no';  why.push(['no', t('resWhyOver')+' '+(Math.round((loL-budget)*10)/10)+' '+t('lakh')]); }

    /* english */
    var iState;
    if (c.ielts==='not_required'){ iState='ok'; why.push(['ok', t('resWhyIelts')]); }
    else if (c.ielts==='flexible'){
      iState = ans.ielts==='yes' ? 'ok' : 'mid';
      why.push([iState, ans.ielts==='yes' ? t('resWhyIelts') : t('resWhyIeltsSoft')]);
    } else {
      iState = ans.ielts==='yes' ? 'ok' : 'mid';
      why.push([iState, ans.ielts==='yes' ? t('resWhyIelts') : t('resWhyIeltsHard')]);
    }

    /* level availability */
    var hasLevel = window.UNIVERSITIES.some(function(u){
      return u.country===c.slug && u.levels.indexOf(ans.level)>-1; });

    if (bState==='no' || !hasLevel) band='no';
    else if (bState==='mid' || iState!=='ok') band='mid';
    else band='ok';

    /* a weak result closes the most selective destinations */
    if (st !== null && st < 50 && ['usa','uk','canada','australia','netherlands','sweden','denmark'].indexOf(c.slug)>-1){
      if (band==='ok') band='mid';
    }

    var m = im(c.slug);
    return { c:c, band:band, why:why, loL:loL, hiL:hiL, spouse:m?m.spouse:null, prStudy:m?m.prStudy:null };
  }).sort(function(a,b){
    var o={ok:0,mid:1,no:2};
    return (o[a.band]-o[b.band]) || (a.c.trendRank-b.c.trendRank) || (a.loL-b.loL);
  });
}

function pageEligibility(showRes){
  var html = '<section class="sect"><div class="wrap">'+
    '<div class="sect-head"><h2 class="serif">'+esc(t('t1'))+'</h2><p>'+esc(t('t1d'))+'</p></div>'+
    '<div class="elig-grid">'+
      '<div>'+quickCheckCard()+'</div><div id="resArea">'+(showRes?renderResults():resPlaceholder())+'</div>'+
    '</div></div></section>';
  return html;
}
function resPlaceholder(){
  return '<div class="empty"><h3 class="serif">'+esc(t('resTitle'))+'</h3><p>'+esc(t('qcSub'))+'</p></div>';
}

/* one country card */
function resCard(r){
  var extra = [];
  if (r.spouse)  extra.push(esc(t('fSpouse'))+': '+esc(spouseShort(r.spouse)));
  if (r.prStudy) extra.push(esc(t('fPrStudy'))+' '+esc(t({half:'psHalf',full:'psFull',none:'psNone',na:'psNa'}[r.prStudy])));
  return '<div class="res '+r.band+'"><div class="res-top">'+
    '<h4><span aria-hidden="true">'+r.c.flag+'</span> <a href="#/country/'+r.c.slug+'">'+esc(nm(r.c))+'</a>'+trendBadge(r.c)+'</h4>'+
    '<span class="res-cost">'+r.loL+'–'+r.hiL+' '+esc(t('lakh'))+esc(t('perYear'))+'</span></div>'+
    '<p class="res-why">'+r.why.map(function(w){
      return (w[0]==='ok'?'✓ ':w[0]==='mid'?'! ':'✕ ')+'<b>'+esc(w[1])+'</b>'; }).join(' · ')+
      (extra.length?'<br>'+extra.join(' · '):'')+'</p></div>';
}

/* the three bands inside one region */
function bandsHtml(list){
  var groups = [['ok','resStrong','resStrongD'],['mid','resPossible','resPossibleD'],['no','resNot','resNotD']];
  return groups.map(function(g){
    var sub = list.filter(function(r){ return r.band===g[0]; });
    if (!sub.length) return '';
    return '<div class="res-band"><div class="res-band-hd">'+
      '<h3 class="serif">'+esc(t(g[1]))+'</h3>'+
      '<span class="pill '+(g[0]==='ok'?'pill-ok':g[0]==='mid'?'pill-mid':'pill-no')+'">'+sub.length+'</span></div>'+
      '<p style="margin:-4px 0 11px;color:var(--slate);font-size:.92rem">'+esc(t(g[2]))+'</p>'+
      '<div class="res-list">'+sub.map(resCard).join('')+'</div></div>';
  }).join('');
}

/* results, grouped by region — click a region to open its full list */
function renderResults(){
  var rows = evaluate();
  var by = {};
  rows.forEach(function(r){ (by[r.c.region] = by[r.c.region] || []).push(r); });

  var groups = window.REGIONS.filter(function(x){ return x.id!=='all'; })
    .map(function(rg){
      var list = by[rg.id] || [];
      return { id:rg.id, label:(rg[lang]||rg.en), list:list,
        ok:  list.filter(function(r){return r.band==='ok';}).length,
        mid: list.filter(function(r){return r.band==='mid';}).length,
        no:  list.filter(function(r){return r.band==='no';}).length };
    })
    .filter(function(g){ return g.list.length; })
    .sort(function(a,b){ return (b.ok-a.ok) || (b.mid-a.mid) || (b.list.length-a.list.length); });

  if (!groups.length)
    return '<div class="empty"><h3 class="serif">'+esc(t('resNone'))+'</h3><p>'+esc(t('resNoneD'))+'</p></div>';

  var out = '<div class="res-band-hd" style="margin-bottom:4px"><h3 class="serif">'+esc(t('resTitle'))+'</h3></div>'+
    '<p style="margin:0 0 14px;color:var(--slate);font-size:.93rem">'+esc(t('resPickRegion'))+'</p>';

  /* the countries working well right now, pulled out of the regions and shown first */
  var hot = rows.filter(function(r){ return r.c.trending; });
  if (hot.length){
    out += '<div class="res-band"><div class="res-band-hd">'+
      '<h3 class="serif">'+esc(t('trendTitle'))+'</h3>'+
      '<span class="pill pill-hot">'+esc(t('trendFirst'))+'</span></div>'+
      '<p style="margin:-4px 0 11px;color:var(--slate);font-size:.92rem">'+esc(t('trendSub'))+'</p>'+
      '<div class="res-list">'+hot.map(resCard).join('')+'</div></div>';
  }

  groups.forEach(function(g, i){
    var open = (i === 0);
    out += '<div class="rgroup" data-open="'+(open?1:0)+'">'+
      '<button type="button" class="rgroup-hd" data-rg="'+esc(g.id)+'" aria-expanded="'+open+'">'+
        '<span class="rg-flags" aria-hidden="true">'+g.list.slice(0,4).map(function(r){return r.c.flag;}).join('')+'</span>'+
        '<span class="rg-name">'+esc(g.label)+
          '<span class="rg-sub">'+g.list.length+' '+esc(t('resCountries'))+'</span></span>'+
        '<span class="rg-counts">'+
          (g.ok ? '<span class="pill pill-ok">'+g.ok+'</span>' : '')+
          (g.mid? '<span class="pill pill-mid">'+g.mid+'</span>' : '')+
          (g.no ? '<span class="pill pill-no">'+g.no+'</span>' : '')+
        '</span><span class="rg-chev" aria-hidden="true">▾</span>'+
      '</button>'+
      '<div class="rgroup-body"'+(open?'':' hidden')+'>'+bandsHtml(g.list)+'</div>'+
    '</div>';
  });

  out += '<div class="note good" style="max-width:none"><p><strong>'+esc(t('resNext'))+'</strong></p>'+
    '<ol class="steps"><li>'+esc(t('resStep1'))+'</li><li>'+esc(t('resStep2'))+'</li>'+
    '<li>'+esc(t('resStep3'))+'</li><li>'+esc(t('resStep4'))+'</li></ol></div>';
  return '<div class="reveal">'+out+'</div>';
}

/* toggle handlers — called after results are injected */
function bindGroups(scope){
  Array.prototype.forEach.call((scope||document).querySelectorAll('.rgroup-hd'), function(b){
    b.addEventListener('click', function(){
      var box = b.parentNode, body = box.querySelector('.rgroup-body');
      var open = box.getAttribute('data-open') === '1';
      box.setAttribute('data-open', open ? '0' : '1');
      b.setAttribute('aria-expanded', String(!open));
      body.hidden = open;
      if (!open) box.scrollIntoView({ block:'nearest', behavior:'smooth' });
    });
  });
}

/* ============================================================
   COUNTRY INDEX
   ============================================================ */
var cf = { region:'all', ielts:'all', budget:'all', q:'', sort:'trend', dir:1, hot:false };

function pageCountries(qs){
  if (qs && qs.region) cf.region = qs.region;
  return '<section class="sect"><div class="wrap">'+
    '<div class="sect-head"><h2 class="serif">'+esc(t('cTitle'))+'</h2><p>'+esc(t('cSub'))+'</p></div>'+
    '<div class="filters">'+
      '<div class="field"><label for="fRegion">'+esc(t('cFilterRegion'))+'</label><select id="fRegion">'+
        window.REGIONS.map(function(r){ return '<option value="'+r.id+'"'+(cf.region===r.id?' selected':'')+'>'+esc(r[lang]||r.en)+'</option>'; }).join('')+
      '</select></div>'+
      '<div class="field"><label for="fIelts">'+esc(t('cFilterIelts'))+'</label><select id="fIelts">'+
        [['all',t('cFilterIelts')],['not_required',t('ieltsNotReq')],['flexible',t('ieltsFlex')],['required',t('ieltsReq')]]
          .map(function(o){ return '<option value="'+o[0]+'"'+(cf.ielts===o[0]?' selected':'')+'>'+esc(o[1])+'</option>'; }).join('')+
      '</select></div>'+
      '<div class="field"><label for="fBudget">'+esc(t('cFilterBudget'))+'</label><select id="fBudget">'+
        [['all',t('budgetAny')],['10','10 '+t('lakh')],['15','15 '+t('lakh')],['25','25 '+t('lakh')],['40','40 '+t('lakh')]]
          .map(function(o){ return '<option value="'+o[0]+'"'+(cf.budget===o[0]?' selected':'')+'>'+esc(o[1])+'</option>'; }).join('')+
      '</select></div>'+
      '<div class="field"><label for="fQ">'+esc(t('cFilterSearch'))+'</label><input id="fQ" type="text" placeholder="'+esc(t('cFilterSearchPh'))+'" value="'+esc(cf.q)+'"></div>'+
      '<div class="field" style="flex:0 0 auto"><label style="display:flex;align-items:center;gap:7px;cursor:pointer">'+
        '<input type="checkbox" id="fHot"'+(cf.hot?' checked':'')+' style="width:auto;margin:0">'+esc(t('trendOnly'))+'</label></div>'+
      '<div class="cnt" id="fCount"></div>'+
    '</div><div id="cTable"></div>'+
    '<div style="margin-top:18px">'+updBox()+'</div>'+
    '</div></section>';
}

function filteredCountries(){
  return window.COUNTRIES.filter(function(c){
    if (cf.region!=='all' && c.region!==cf.region) return false;
    if (cf.ielts!=='all' && c.ielts!==cf.ielts) return false;
    if (cf.budget!=='all' && lakh(costRange(c)[0]) > parseFloat(cf.budget)) return false;
    if (cf.hot && !c.trending) return false;
    if (cf.q){
      var q = cf.q.toLowerCase();
      if (nm(c).toLowerCase().indexOf(q)<0 && c.name.en.toLowerCase().indexOf(q)<0) return false;
    }
    return true;
  }).sort(function(a,b){
    var va, vb;
    if (cf.sort==='tuition'){ va=costRange(a)[0]; vb=costRange(b)[0]; }
    else if (cf.sort==='living'){ va=a.living[0]*fx(a); vb=b.living[0]*fx(b); }
    else if (cf.sort==='ielts'){ var o={not_required:0,flexible:1,required:2}; va=o[a.ielts]; vb=o[b.ielts]; }
    else if (cf.sort==='trend'){
      if (a.trendRank !== b.trendRank) return (a.trendRank - b.trendRank) * cf.dir;
      va=nm(a); vb=nm(b);
    }
    else { va=nm(a); vb=nm(b); }
    return (va>vb?1:va<vb?-1:0) * cf.dir;
  });
}

function renderCountryTable(){
  var list = filteredCountries();
  var el = document.getElementById('fCount');
  if (el) el.textContent = t('cShowing')+' '+list.length+' '+t('cOf')+' '+window.COUNTRIES.length;

  var th = function(key, label){
    return '<th><button data-sort="'+key+'">'+esc(label)+(cf.sort===key?(cf.dir>0?' ▲':' ▼'):'')+'</button></th>'; };

  var html = '<div class="tbl-scroll"><table class="idx"><thead><tr>'+
    th('name',t('thCountry'))+th('ielts',t('thIelts'))+th('tuition',t('thTuition'))+
    th('living',t('thLiving'))+'<th>'+esc(t('fSpouse'))+'</th><th>'+esc(t('fPrStudy'))+'</th><th>'+esc(t('thIntakes'))+'</th>'+
    '</tr></thead><tbody>';

  if (!list.length){
    html += '<tr><td colspan="7"><div class="empty" style="border:0"><h3 class="serif">'+esc(t('resNone'))+'</h3><p>'+esc(t('resNoneD'))+'</p></div></td></tr>';
  }
  list.forEach(function(c){
    var r = costRange(c), m = im(c.slug);
    html += '<tr>'+
      '<td><span class="c-name"><span class="fl" aria-hidden="true">'+c.flag+'</span>'+
        '<a href="#/country/'+c.slug+'">'+esc(nm(c))+'</a>'+trendBadge(c)+'</span></td>'+
      '<td>'+ieltsPill(c)+'</td>'+
      '<td class="nowrap num">'+cur(c.tuition[0],c)+' – '+cur(c.tuition[1],c)+'</td>'+
      '<td class="nowrap num">'+cur(c.living[0],c)+' – '+cur(c.living[1],c)+'</td>'+
      '<td>'+(m?spousePill(m.spouse):'—')+'</td>'+
      '<td>'+(m?studyPill(m.prStudy):'—')+'</td>'+
      '<td class="nowrap">'+c.intakes.map(function(i){return esc(L(i.name));}).join(', ')+'</td>'+
    '</tr>';
  });
  return html + '</tbody></table></div>';
}

/* ---------- universities and their programmes ---------- */
function progs(uniName){ return (window.PROGRAMS && window.PROGRAMS[uniName]) || []; }
function progUniCount(){ return window.UNIVERSITIES.filter(function(u){ return progs(u.name).length; }).length; }
function progTotalCount(){ return window.UNIVERSITIES.reduce(function(n,u){ return n + progs(u.name).length; }, 0); }
function lvlName(l){ return t(l==='bachelor'?'lvlBachelor':l==='master'?'lvlMaster':'lvlPhd'); }

function progTable(list, c){
  return '<div class="tbl-scroll"><table class="idx" style="min-width:560px"><thead><tr>'+
    '<th>'+esc(t('thProgram'))+'</th><th>'+esc(t('thLevels'))+'</th><th>'+esc(t('thYears'))+'</th>'+
    '<th>'+esc(t('thLang'))+'</th><th>'+esc(t('thTuitionY'))+'</th></tr></thead><tbody>'+
    list.map(function(p){
      return '<tr><td style="font-weight:600">'+esc(p.name)+'</td>'+
        '<td class="nowrap">'+esc(lvlName(p.level))+'</td>'+
        '<td class="nowrap num">'+p.years+' '+esc(t('yrs'))+'</td>'+
        '<td class="nowrap">'+esc(p.language)+'</td>'+
        '<td class="nowrap num">'+(p.tuition
            ? cur(p.tuition, c)
            : '<span class="pill pill-grey" title="'+esc(t('progTbdL'))+'">'+esc(t('progTbd'))+'</span>')+'</td></tr>';
    }).join('')+'</tbody></table></div>';
}

/* one university, collapsed; opens to its course list */
function uniBlock(u){
  var c = window.COUNTRIES.filter(function(x){return x.slug===u.country;})[0];
  var list = progs(u.name);
  var meta = [esc(u.city), esc(t(u.type==='public'?'cfPublic':'cfPrivate'))];
  meta.push(list.length
    ? list.length+' '+esc(t(list.length===1?'progOne':'progCount'))
    : esc(u.levels.map(lvlName).join(', ')));

  var body = list.length
    ? progTable(list, c)
    : '<div class="note" style="margin:0;max-width:none"><p><strong>'+esc(t('progNone'))+'</strong></p>'+
      '<p style="font-size:.92rem">'+esc(t('progNoneD'))+'</p>'+
      '<p style="font-size:.92rem;margin-bottom:0"><b>'+esc(t('thLevels'))+':</b> '+esc(u.levels.map(lvlName).join(', '))+
      ' · <b>'+esc(t('thSubjects'))+':</b> '+esc(u.subjects.map(subjName).join(', '))+'</p></div>';

  return '<div class="rgroup" data-open="0">'+
    '<button type="button" class="rgroup-hd" aria-expanded="false">'+
      '<span class="rg-name">'+esc(u.name)+(u.moi?' <span class="pill pill-ok">MOI</span>':'')+
        '<span class="rg-sub">'+meta.join(' · ')+'</span></span>'+
      '<span class="rg-chev" aria-hidden="true">▾</span>'+
    '</button><div class="rgroup-body" hidden>'+body+'</div></div>';
}

/* ---------- work: what students actually do for money ---------- */
function coversPill(v){
  var cls = { yes:'pill-ok', partly:'pill-mid', no:'pill-no' }[v] || 'pill-grey';
  var k   = { yes:'coversYes', partly:'coversPartly', no:'coversNo' }[v] || 'coversNo';
  return '<span class="pill '+cls+'">'+esc(t(k))+'</span>';
}

function workSection(c){
  var w = window.WORK && window.WORK[c.slug];
  if (!w) return '';
  var out = '<h2 class="serif">'+esc(t('secWork'))+'</h2>';

  if (!w.jobs.length){
    return out + '<div class="note alert"><p><strong>'+esc(t('workNone'))+'</strong></p>'+
      (w.note ? '<p>'+esc(L(w.note))+'</p>' : '')+'</div>';
  }

  out += '<p><b>'+esc(t('workJobs'))+':</b> '+
      w.jobs.map(function(j){ return esc(L(window.JOBTYPES[j])); }).join(' · ')+'</p>'+
    '<p><b>'+esc(t('workPay'))+':</b> '+cur(w.pay[0],c)+' – '+cur(w.pay[1],c)+esc(t('workPerHour'))+
      ' <span style="color:var(--slate);font-size:.88rem">— '+esc(t('workApprox'))+'</span></p>'+
    '<p><b>'+esc(t('fWork'))+':</b> '+(c.workHours? c.workHours+' '+esc(t('hrsWeek')) : esc(t('hrsNone')))+'</p>'+
    '<p><b>'+esc(t('workLang'))+':</b> '+
      esc(t({none:'langNone',basic:'langBasic',needed:'langNeeded'}[w.lang]||'langNeeded'))+'</p>'+
    '<p><b>'+esc(t('workCovers'))+':</b> '+coversPill(w.covers)+'</p>'+
    (w.note ? '<p>'+esc(L(w.note))+'</p>' : '')+
    '<div class="note alert"><p><strong>'+esc(t('workWarn'))+'</strong></p><p>'+esc(t('workWarnBody'))+'</p></div>';
  return out;
}

/* ---------- FAQ: answers built from this country's own data ---------- */
function faqSection(c, m){
  var w = (window.WORK && window.WORK[c.slug]) || {};

  var aWork = !c.workHours
    ? t('hrsNone') + '. ' + (w.note ? L(w.note) : '')
    : c.workHours + ' ' + t('hrsWeek') + '. ' + t('workCovers') + ' ' +
      t({yes:'coversYes',partly:'coversPartly',no:'coversNo'}[w.covers]||'coversNo') + '. ' +
      t({none:'langNone',basic:'langBasic',needed:'langNeeded'}[w.lang]||'langNeeded') + '.';

  var aSpouse = (m.spouse ? spouseLong(m.spouse) : '—') + '. ' +
    t('fSpouseWork') + ': ' + (m.spouseWork ? workLong(m.spouseWork) : '—') + '.';

  var aPr = (m.prYears ? m.prYears + ' ' + t('prYearsV') : t('prNone')) + '. ' +
    (m.prStudy ? studyLong(m.prStudy) + ' ' : '') +
    t('fCitizen') + ': ' + (m.citizenYears ? m.citizenYears + ' ' + t('citizenAfter') : t('citizenNa')) + '.';

  var aIelts = t(c.ielts==='not_required'?'ieltsNotReqL':c.ielts==='flexible'?'ieltsFlexL':'ieltsReqL') +
    ' ' + L(c.ieltsNote);

  var aMoney = c.solvency + '. ' + t('fVisa') + ': ' + c.visaWeeks[0] + '–' + c.visaWeeks[1] + ' ' + t('weeks') + '.';

  var aIntake = c.intakes.map(function(i){
    return L(i.name) + ' — ' + mon(i.applyFrom) + ' → ' + mon(i.deadline); }).join(' · ') + '.';

  var items = [
    [t('faqWork'),   aWork],
    [t('faqSpouse'), aSpouse],
    [t('faqPr'),     aPr],
    [t('faqIelts'),  aIelts],
    [t('faqMoney'),  aMoney],
    [t('faqIntake'), aIntake],
    [t('faqRecog'),  t('faqRecogA')],
    [t('faqGap'),    t('faqGapA')],
    [t('faqFail'),   t('faqFailA')]
  ];

  return '<h2 class="serif">'+esc(t('faqTitleShort'))+'</h2>'+
    items.map(function(it){
      return '<div class="rgroup" data-open="0">'+
        '<button type="button" class="rgroup-hd" aria-expanded="false">'+
          '<span class="rg-name">'+esc(it[0])+'</span>'+
          '<span class="rg-chev" aria-hidden="true">▾</span></button>'+
        '<div class="rgroup-body" hidden><p style="margin:0;max-width:68ch">'+esc(it[1])+'</p></div></div>';
    }).join('');
}

/* ============================================================
   COUNTRY PAGE
   ============================================================ */
function pageCountry(slug){
  var c = window.COUNTRIES.filter(function(x){return x.slug===slug;})[0];
  if (!c) return page404();
  var m = im(slug) || {};
  var r = costRange(c);
  var unis = window.UNIVERSITIES.filter(function(u){return u.country===slug;});

  var facts =
    '<div class="facts"><div class="facts-hd"><span class="fl" aria-hidden="true">'+c.flag+'</span>'+
      '<h1 class="serif">'+esc(nm(c))+'</h1>'+
      (c.trending ? '<p style="margin:8px 0 0"><span class="pill pill-hot">'+esc(t('trendBadge'))+'</span></p>' : '')+
      '</div><dl>'+
    '<dt>'+esc(t('fRegion'))+'</dt><dd>'+esc(regionName(c.region))+'</dd>'+
    '<dt>'+esc(t('fTuition'))+'</dt><dd>'+cur(c.tuition[0],c)+' – '+cur(c.tuition[1],c)+'</dd>'+
    '<dt>'+esc(t('fLiving'))+'</dt><dd>'+cur(c.living[0],c)+' – '+cur(c.living[1],c)+esc(t('perMonth'))+'</dd>'+
    '<dt>'+esc(t('fWork'))+'</dt><dd>'+(c.workHours?c.workHours+' '+esc(t('hrsWeek')):esc(t('hrsNone')))+'</dd>'+
    '<dt>'+esc(t('fSpouse'))+'</dt><dd>'+(m.spouse?esc(spouseLong(m.spouse)):'—')+'</dd>'+
    '<dt>'+esc(t('fSpouseWork'))+'</dt><dd>'+(m.spouseWork?esc(workLong(m.spouseWork)):'—')+'</dd>'+
    '<dt>'+esc(t('fPr'))+'</dt><dd>'+prCell(m)+'</dd>'+
    '<dt>'+esc(t('fPrStudy'))+'</dt><dd>'+(m.prStudy?studyPill(m.prStudy):'—')+'</dd>'+
    '<dt>'+esc(t('fCitizen'))+'</dt><dd>'+(m.citizenYears?m.citizenYears+' '+esc(t('citizenAfter')):esc(t('citizenNa')))+'</dd>'+
    '<dt>'+esc(t('fPsw'))+'</dt><dd>'+esc(L(c.psw))+'</dd>'+
    '<dt>'+esc(t('fVisa'))+'</dt><dd>'+c.visaWeeks[0]+'–'+c.visaWeeks[1]+' '+esc(t('weeks'))+'</dd>'+
    '<dt>'+esc(t('fSolvency'))+'</dt><dd>'+esc(c.solvency)+'</dd>'+
    '<dt>'+esc(t('fEmbassy'))+'</dt><dd>'+esc(c.embassyDhaka?t('yes'):t('no'))+'</dd>'+
    '</dl></div>';

  /* only shown for countries that carry the extra verified fields */
  var confirmedBox = c.confirmed
    ? '<div class="note good"><p><strong>✓ '+esc(t('confirmedTitle'))+'</strong></p>'+
      '<p style="margin:6px 0 8px"><b>'+L(c.confirmed).map(esc).join(' · ')+'</b></p>'+
      '<p style="font-size:.9rem;margin-bottom:0">'+esc(t('confirmedNote'))+'</p></div>'
    : '';

  var eligibilityBox = c.eligibility
    ? '<h2 class="serif">'+esc(t('secEligibility'))+'</h2>'+
      '<div class="note alert"><p>'+esc(L(c.eligibility))+'</p></div>'
    : '';

  var visaViaBox = c.visaVia
    ? '<h2 class="serif">'+esc(t('secVisaVia'))+'</h2>'+
      '<p>'+esc(t('visaViaNote'))+'</p><ul>'+
      c.visaVia.map(function(m){ return '<li>'+esc(m)+'</li>'; }).join('')+'</ul>'
    : '';

  var body = '<div class="cbody">'+
    '<h2 class="serif">'+esc(t('secWho'))+'</h2><p>'+esc(L(c.bestFor))+'</p>'+
    confirmedBox+
    eligibilityBox+
    (c.trending ? '<div class="note"><p><strong>'+esc(t('trendWhat'))+'</strong></p><p>'+esc(t('trendWhatBody'))+'</p></div>' : '')+
    (m.changed ? '<div class="note alert"><p><strong>'+esc(t('ruleChanged'))+'</strong> — '+esc(t('ruleChangedL'))+'</p></div>' : '')+

    '<h2 class="serif">'+esc(t('secImmig'))+'</h2>'+
    '<p><b>'+esc(t('fSpouse'))+':</b> '+(m.spouse?esc(spouseLong(m.spouse)):'—')+'<br>'+
       '<b>'+esc(t('fSpouseWork'))+':</b> '+(m.spouseWork?esc(workLong(m.spouseWork)):'—')+'<br>'+
       '<b>'+esc(t('fPr'))+':</b> '+prCell(m)+'<br>'+
       '<b>'+esc(t('fCitizen'))+':</b> '+(m.citizenYears?m.citizenYears+' '+esc(t('citizenAfter')):esc(t('citizenNa')))+'</p>'+
    (m.prStudy ? '<div class="note'+(m.prStudy==='full'?' good':'')+'"><p><strong>'+esc(t('fPrStudy'))+' '+
        esc(t({half:'psHalf',full:'psFull',none:'psNone',na:'psNa'}[m.prStudy]))+'</strong></p><p>'+esc(studyLong(m.prStudy))+'</p></div>' : '')+
    (m.note ? '<p>'+esc(L(m.note))+'</p>' : '')+
    updBox()+

    '<h2 class="serif">'+esc(t('secIelts'))+'</h2>'+
    '<p>'+ieltsPill(c)+' '+esc(t(c.ielts==='not_required'?'ieltsNotReqL':c.ielts==='flexible'?'ieltsFlexL':'ieltsReqL'))+'</p>'+
    '<p>'+esc(L(c.ieltsNote))+'</p>'+

    visaViaBox+

    '<h2 class="serif">'+esc(t('secIntakes'))+'</h2>'+
    '<ul>'+c.intakes.map(function(i){
      return '<li><b>'+esc(L(i.name))+'</b> — '+esc(t('cFilterSearch')==='Search'?'apply from':'আবেদন শুরু')+' '+
        esc(mon(i.applyFrom))+', '+esc(t('calDl').toLowerCase())+' '+esc(mon(i.deadline))+', '+
        esc(t('calClass').toLowerCase())+' '+esc(mon(i.classStarts))+'</li>'; }).join('')+'</ul>'+
    '<p><a href="#/calendar">'+esc(t('navCalendar'))+' →</a></p>'+

    '<h2 class="serif">'+esc(t('secCost'))+'</h2>'+
    '<p>'+esc(t('approx'))+' <b>'+lakh(r[0])+' – '+lakh(r[1])+' '+esc(t('lakh'))+'</b> '+esc(t('perYear'))+
      ' (' + esc(t('costTuition').toLowerCase()) + ' + ' + esc(t('costLivingY').toLowerCase()) + ').</p>'+
    '<p><a href="#/cost?c='+c.slug+'">'+esc(t('costTitle'))+' →</a></p>'+

    workSection(c)+

    (unis.length ? '<h2 class="serif">'+esc(t('secUnis'))+' <span class="pill pill-grey">'+unis.length+'</span></h2>'+
      unis.map(uniBlock).join('') : '')+

    '<h2 class="serif">'+esc(t('secWatch'))+'</h2>'+
    '<div class="note alert"><p>'+esc(L(c.caution))+'</p></div>'+

    faqSection(c, m)+
    fraudBox()+
    '</div>';

  return '<div class="wrap"><nav class="breadcrumb"><a href="#/countries">← '+esc(t('backCountries'))+'</a></nav>'+
    '<div class="cpage">'+facts+body+'</div>'+
    '<div style="padding-bottom:50px">'+contactBlock()+'</div></div>';
}

/* ============================================================
   SPOUSE / PR / CITIZENSHIP TABLE
   ============================================================ */
var pf = { spouse:'all', study:'all', sort:'name', dir:1 };

function pagePr(){
  return '<section class="sect"><div class="wrap">'+
    '<div class="sect-head"><h2 class="serif">'+esc(t('prTitle'))+'</h2><p>'+esc(t('prSub'))+'</p></div>'+
    '<div class="tools" style="margin-bottom:20px">'+
      '<div class="tool"><h3>'+esc(t('prEx1Title'))+'</h3><p>'+esc(t('prEx1'))+'</p></div>'+
      '<div class="tool"><h3>'+esc(t('prEx2Title'))+'</h3><p>'+esc(t('prEx2'))+'</p></div>'+
      '<div class="tool"><h3>'+esc(t('prEx3Title'))+'</h3><p>'+esc(t('prEx3'))+'</p></div>'+
    '</div>'+
    '<div class="filters">'+
      '<div class="field"><label for="pSpouse">'+esc(t('prFilterSpouse'))+'</label><select id="pSpouse">'+
        [['all',t('prAnySpouse')],['all_lv',t('spAllS')],['pg',t('spPgS')],['phd',t('spPhdS')],['none',t('spNoneS')]]
          .map(function(o){ return '<option value="'+o[0]+'"'+(pf.spouse===o[0]?' selected':'')+'>'+esc(o[1])+'</option>'; }).join('')+
      '</select></div>'+
      '<div class="field"><label for="pStudy">'+esc(t('prFilterStudy'))+'</label><select id="pStudy">'+
        [['all',t('prAnyStudy')],['full',t('psFull')],['half',t('psHalf')],['none',t('psNone')],['na',t('psNa')]]
          .map(function(o){ return '<option value="'+o[0]+'"'+(pf.study===o[0]?' selected':'')+'>'+esc(o[1])+'</option>'; }).join('')+
      '</select></div>'+
      '<div class="cnt" id="pCount"></div>'+
    '</div><div id="pTable"></div>'+
    '<p style="color:var(--slate);font-size:.9rem;max-width:72ch;margin-top:12px">'+esc(t('prFoot'))+'</p>'+
    '<div style="margin-top:18px">'+updBox()+fraudBox()+'</div>'+
    '</div></section>';
}

function renderPrTable(){
  var list = window.COUNTRIES.filter(function(c){
    var m = im(c.slug); if (!m) return false;
    if (pf.spouse!=='all'){
      var want = pf.spouse==='all_lv' ? 'all' : pf.spouse;
      if (m.spouse!==want) return false;
    }
    if (pf.study!=='all' && m.prStudy!==pf.study) return false;
    return true;
  }).sort(function(a,b){
    var ma=im(a.slug), mb=im(b.slug), va, vb;
    if (pf.sort==='pr'){ va=ma.prYears||99; vb=mb.prYears||99; }
    else if (pf.sort==='cit'){ va=ma.citizenYears||99; vb=mb.citizenYears||99; }
    else { va=nm(a); vb=nm(b); }
    return (va>vb?1:va<vb?-1:0) * pf.dir;
  });

  var el = document.getElementById('pCount');
  if (el) el.textContent = t('cShowing')+' '+list.length+' '+t('cOf')+' '+window.COUNTRIES.length;

  var th = function(k,l){ return '<th><button data-psort="'+k+'">'+esc(l)+(pf.sort===k?(pf.dir>0?' ▲':' ▼'):'')+'</button></th>'; };

  var html = '<div class="tbl-scroll"><table class="idx" style="min-width:860px"><thead><tr>'+
    th('name',t('thCountry'))+'<th>'+esc(t('fSpouse'))+'</th><th>'+esc(t('fSpouseWork'))+'</th>'+
    th('pr',t('fPr'))+'<th>'+esc(t('fPrStudy'))+'</th>'+th('cit',t('fCitizen'))+'</tr></thead><tbody>';

  if (!list.length) html += '<tr><td colspan="6"><div class="empty" style="border:0"><p>'+esc(t('resNoneD'))+'</p></div></td></tr>';

  list.forEach(function(c){
    var m = im(c.slug);
    html += '<tr>'+
      '<td><span class="c-name"><span class="fl" aria-hidden="true">'+c.flag+'</span>'+
        '<a href="#/country/'+c.slug+'">'+esc(nm(c))+'</a>'+
        (m.changed?' <span class="pill pill-no">!</span>':'')+'</span></td>'+
      '<td>'+spousePill(m.spouse)+'</td>'+
      '<td>'+esc(workShort(m.spouseWork))+'</td>'+
      '<td class="nowrap num">'+prCell(m)+'</td>'+
      '<td>'+studyPill(m.prStudy)+'</td>'+
      '<td class="nowrap num">'+(m.citizenYears? m.citizenYears+' '+esc(t('citizenAfter')) : '<span class="pill pill-grey">—</span>')+'</td>'+
    '</tr>';
  });
  return html+'</tbody></table></div>';
}

/* ============================================================
   WITHOUT IELTS
   ============================================================ */
function pageNoIelts(){
  var notReq = window.COUNTRIES.filter(function(c){return c.ielts==='not_required';});
  var flex   = window.COUNTRIES.filter(function(c){return c.ielts==='flexible';});
  var moiUnis= window.UNIVERSITIES.filter(function(u){return u.moi;});

  var chips = function(arr){ return '<p>'+arr.map(function(c){
    return '<a href="#/country/'+c.slug+'" style="display:inline-block;margin:0 7px 7px 0;padding:5px 11px;background:#fff;border:1px solid var(--line);border-radius:999px;font-size:.9rem">'+
      c.flag+' '+esc(nm(c))+'</a>'; }).join('')+'</p>'; };

  return '<section class="sect"><div class="wrap">'+
    '<div class="sect-head"><h2 class="serif">'+esc(t('niTitle'))+'</h2><p>'+esc(t('niSub'))+'</p></div>'+

    '<h3 class="serif" style="font-size:1.2rem;margin:0 0 6px">1 · '+esc(t('ni1'))+' <span class="pill pill-ok">'+notReq.length+'</span></h3>'+
    '<p style="max-width:68ch;color:var(--slate)">'+esc(t('ni1d'))+'</p>'+chips(notReq)+

    '<h3 class="serif" style="font-size:1.2rem;margin:26px 0 6px">2 · '+esc(t('ni2'))+' <span class="pill pill-mid">'+moiUnis.length+'</span></h3>'+
    '<p style="max-width:68ch;color:var(--slate)">'+esc(t('ni2d'))+'</p>'+
    '<p><a href="#/courses?moi=1">'+esc(t('cfMoiOnly'))+' →</a></p>'+

    '<h3 class="serif" style="font-size:1.2rem;margin:26px 0 6px">3 · '+esc(t('ni3'))+'</h3>'+
    '<p style="max-width:68ch;color:var(--slate)">'+esc(t('ni3d'))+'</p>'+chips(flex.slice(0,12))+

    '<h3 class="serif" style="font-size:1.2rem;margin:26px 0 6px">4 · '+esc(t('ni4'))+'</h3>'+
    '<p style="max-width:68ch;color:var(--slate)">'+esc(t('ni4d'))+'</p>'+

    '<div class="note alert" style="margin-top:28px"><p><strong>'+esc(t('niWarn'))+'</strong></p><p>'+esc(t('niWarnBody'))+'</p></div>'+
    updBox()+
    '</div></section>';
}

/* ============================================================
   INTAKE CALENDAR
   ============================================================ */
var calRegion = 'all';
function pageCalendar(){
  return '<section class="sect"><div class="wrap">'+
    '<div class="sect-head"><h2 class="serif">'+esc(t('calTitle'))+'</h2><p>'+esc(t('calSub'))+'</p></div>'+
    '<div class="filters"><div class="field"><label for="calR">'+esc(t('calFilter'))+'</label><select id="calR">'+
      window.REGIONS.map(function(r){
        return '<option value="'+r.id+'"'+(calRegion===r.id?' selected':'')+'>'+esc(r.id==='all'?t('calAll'):(r[lang]||r.en))+'</option>'; }).join('')+
      '</select></div></div>'+
    '<div id="calBox"></div>'+
    '<div class="cal-legend">'+
      '<span><i style="background:#DDE9E0;border:1px solid #BFD6C6"></i>'+esc(t('calApply'))+'</span>'+
      '<span><i style="background:var(--stamp)"></i>'+esc(t('calDl'))+'</span>'+
      '<span><i style="background:var(--forest)"></i>'+esc(t('calClass'))+'</span>'+
    '</div><div style="margin-top:18px">'+updBox()+'</div></div></section>';
}

function segs(from, to){ return (to>=from) ? [[from,to]] : [[from,12],[1,to]]; }
function barHtml(cls, from, to, label){
  return segs(from,to).map(function(s){
    var left = (s[0]-1)/12*100, w = (s[1]-s[0]+1)/12*100;
    return '<span class="bar '+cls+'" style="left:'+left+'%;width:'+w+'%">'+esc(label||'')+'</span>';
  }).join('');
}

function renderCalendar(){
  var list = window.COUNTRIES.filter(function(c){ return calRegion==='all' || c.region===calRegion; });
  var head = '<div class="cal-row cal-head"><div>'+esc(t('thCountry'))+'</div>'+
    MONTHS[lang].map(function(m){return '<div>'+esc(m)+'</div>';}).join('')+'</div>';

  var rows = list.map(function(c){
    return c.intakes.map(function(i){
      var dlStart = i.deadline, applyEnd = (i.deadline-1)<1?12:(i.deadline-1);
      var bars = '';
      if (i.applyFrom !== i.deadline) bars += barHtml('bar-apply', i.applyFrom, applyEnd, '');
      bars += barHtml('bar-dl', dlStart, dlStart, '');
      bars += barHtml('bar-class', i.classStarts, i.classStarts, '');
      return '<div class="cal-row"><div class="cal-lbl"><span class="fl" aria-hidden="true">'+c.flag+'</span>'+
        '<a href="#/country/'+c.slug+'">'+esc(nm(c))+'</a> <span style="color:var(--slate);font-weight:500">· '+esc(L(i.name))+'</span></div>'+
        '<div class="cal-track">'+Array.apply(null,Array(12)).map(function(){return '<span class="cal-cell"></span>';}).join('')+bars+'</div></div>';
    }).join('');
  }).join('');

  return '<div class="cal">'+head+rows+'</div>';
}

/* ============================================================
   COST CALCULATOR
   ============================================================ */
var costSel = { slug:'romania', std:'mid' };
function pageCost(qs){
  if (qs && qs.c) costSel.slug = qs.c;
  return '<section class="sect"><div class="wrap">'+
    '<div class="sect-head"><h2 class="serif">'+esc(t('costTitle'))+'</h2><p>'+esc(t('costSub'))+'</p></div>'+
    '<div class="filters">'+
      '<div class="field"><label for="ccCountry">'+esc(t('costCountry'))+'</label><select id="ccCountry">'+
        window.COUNTRIES.map(function(c){ return '<option value="'+c.slug+'"'+(costSel.slug===c.slug?' selected':'')+'>'+c.flag+' '+esc(nm(c))+'</option>'; }).join('')+
      '</select></div>'+
      '<div class="field"><label for="ccStd">'+esc(t('costCity'))+'</label><select id="ccStd">'+
        [['low',t('costLow')],['mid',t('costMid')],['high',t('costHigh')]].map(function(o){
          return '<option value="'+o[0]+'"'+(costSel.std===o[0]?' selected':'')+'>'+esc(o[1])+'</option>'; }).join('')+
      '</select></div></div>'+
    '<div id="costBox"></div>'+
    '<div style="margin-top:18px"><div class="note"><p>'+esc(t('costNote'))+'</p></div></div>'+
    '</div></section>';
}

function renderCost(){
  var c = window.COUNTRIES.filter(function(x){return x.slug===costSel.slug;})[0];
  if (!c) return '';
  var f = fx(c);
  var tui = costSel.std==='low' ? c.tuition[0] : costSel.std==='high' ? c.tuition[1] : (c.tuition[0]+c.tuition[1])/2;
  var liv = costSel.std==='low' ? c.living[0]  : costSel.std==='high' ? c.living[1]  : (c.living[0]+c.living[1])/2;

  var rows = [
    ['costTuition', Math.round(tui*f)],
    ['costLivingY', Math.round(liv*12*f)],
    ['costVisa',    30000],
    ['costFlight',  85000],
    ['costIns',     35000],
    ['costMisc',    40000]
  ];
  var html = '<div class="tbl-scroll"><table class="idx" style="min-width:420px"><tbody>';
  rows.forEach(function(r){
    html += '<tr><td style="font-weight:600">'+esc(t(r[0]))+'</td>'+
      '<td style="text-align:right"><input type="number" class="ccIn" data-k="'+r[0]+'" value="'+r[1]+'" style="max-width:170px;text-align:right"></td></tr>';
  });
  html += '<tr style="background:#F7F9F5"><td style="font-weight:700;font-size:1.05rem">'+esc(t('costTotal'))+'</td>'+
    '<td style="text-align:right;font-weight:700;font-size:1.12rem" id="ccTotal"></td></tr>'+
    '<tr><td style="font-weight:600">'+esc(t('costSolvency'))+'</td><td style="text-align:right">'+esc(c.solvency)+'</td></tr>'+
    '</tbody></table></div>';
  return html;
}
function recalcCost(){
  var tot = 0;
  Array.prototype.forEach.call(document.querySelectorAll('.ccIn'), function(i){ tot += parseFloat(i.value||0); });
  var el = document.getElementById('ccTotal');
  if (el) el.textContent = tk(tot) + '  (' + lakhStr(tot) + ')';
}

/* ============================================================
   COURSE FINDER
   ============================================================ */
var uf = { subject:'all', level:'all', type:'all', moi:false, q:'' };
function pageCourses(qs){
  if (qs && qs.moi) uf.moi = true;
  return '<section class="sect"><div class="wrap">'+
    '<div class="sect-head"><h2 class="serif">'+esc(t('cfTitle'))+'</h2><p>'+esc(t('cfSub'))+'</p></div>'+
    '<div class="filters">'+
      '<div class="field"><label for="uSub">'+esc(t('cfSubject'))+'</label><select id="uSub">'+
        '<option value="all">'+esc(t('cfAnySubject'))+'</option>'+
        window.SUBJECTS.map(function(s){ return '<option value="'+s.id+'"'+(uf.subject===s.id?' selected':'')+'>'+esc(s[lang]||s.en)+'</option>'; }).join('')+
      '</select></div>'+
      '<div class="field"><label for="uLvl">'+esc(t('cfLevel'))+'</label><select id="uLvl">'+
        [['all',t('cfAnyLevel')],['bachelor',t('lvlBachelor')],['master',t('lvlMaster')],['phd',t('lvlPhd')]]
          .map(function(o){ return '<option value="'+o[0]+'"'+(uf.level===o[0]?' selected':'')+'>'+esc(o[1])+'</option>'; }).join('')+
      '</select></div>'+
      '<div class="field"><label for="uType">'+esc(t('cfType'))+'</label><select id="uType">'+
        [['all',t('cfAnyType')],['public',t('cfPublic')],['private',t('cfPrivate')]]
          .map(function(o){ return '<option value="'+o[0]+'"'+(uf.type===o[0]?' selected':'')+'>'+esc(o[1])+'</option>'; }).join('')+
      '</select></div>'+
      '<div class="field"><label for="uQ">'+esc(t('cFilterSearch'))+'</label><input id="uQ" type="text" value="'+esc(uf.q)+'" placeholder="'+esc(t('thUni'))+'…"></div>'+
      '<div class="field" style="flex:0 0 auto"><label><input type="checkbox" id="uMoi"'+(uf.moi?' checked':'')+' style="width:auto;margin-right:7px">'+esc(t('cfMoiOnly'))+'</label></div>'+
      '<div class="cnt" id="uCount"></div>'+
    '</div><div id="uTable"></div></div></section>';
}

function renderUniTable(){
  var list = window.UNIVERSITIES.filter(function(u){
    if (uf.subject!=='all' && u.subjects.indexOf(uf.subject)<0) return false;
    if (uf.level!=='all' && u.levels.indexOf(uf.level)<0) return false;
    if (uf.type!=='all' && u.type!==uf.type) return false;
    if (uf.moi && !u.moi) return false;
    if (uf.q){
      var q = uf.q.toLowerCase();
      var hit = u.name.toLowerCase().indexOf(q)>-1 ||
        progs(u.name).some(function(p){ return p.name.toLowerCase().indexOf(q)>-1; });
      if (!hit) return false;
    }
    return true;
  });
  var el = document.getElementById('uCount');
  if (el) el.textContent = list.length+' '+t('cfFound');

  var html = '<div class="tbl-scroll"><table class="idx"><thead><tr>'+
    '<th>'+esc(t('thUni'))+'</th><th>'+esc(t('thCountry'))+'</th><th>'+esc(t('thCity'))+'</th>'+
    '<th>'+esc(t('thType'))+'</th><th>'+esc(t('thLevels'))+'</th><th>'+esc(t('thProgram'))+'</th></tr></thead><tbody>';
  if (!list.length) html += '<tr><td colspan="6"><div class="empty" style="border:0"><p>'+esc(t('resNoneD'))+'</p></div></td></tr>';
  list.forEach(function(u){
    var c = window.COUNTRIES.filter(function(x){return x.slug===u.country;})[0] || {flag:'',name:{en:u.country,bn:u.country}};
    var pl = progs(u.name);
    html += '<tr><td style="font-weight:600">'+esc(u.name)+(u.moi?' <span class="pill pill-ok">MOI</span>':'')+'</td>'+
      '<td class="nowrap"><a href="#/country/'+u.country+'">'+c.flag+' '+esc(nm(c))+'</a></td>'+
      '<td>'+esc(u.city)+'</td><td>'+esc(t(u.type==='public'?'cfPublic':'cfPrivate'))+'</td>'+
      '<td class="nowrap">'+u.levels.map(lvlName).join(', ')+'</td>'+
      '<td class="nowrap">'+(pl.length
        ? '<a href="#/country/'+u.country+'">'+pl.length+' '+esc(t(pl.length===1?'progOne':'progCount'))+'</a>'
        : '<span class="pill pill-grey">—</span>')+'</td></tr>';
  });
  return html+'</tbody></table></div>';
}

/* ============================================================
   CONTACT
   ============================================================ */
function contactBlock(){
  return '<div class="contact"><div>'+
    '<h2 class="serif">'+esc(t('ctTitle'))+'</h2><p>'+esc(t('ctBody'))+'</p>'+
    '<div class="note alert" style="margin:0;max-width:none"><p style="font-size:.9rem">'+esc(t('ctNoDocs'))+'</p></div>'+
    '</div><form class="cform" id="ctForm">'+
    '<div class="field"><label for="ctN">'+esc(t('ctName'))+'</label><input id="ctN" type="text" required></div>'+
    '<div class="field"><label for="ctP">'+esc(t('ctPhone'))+'</label><input id="ctP" type="tel" required placeholder="01XXXXXXXXX"></div>'+
    '<div class="field"><label for="ctC">'+esc(t('ctCountry'))+'</label><select id="ctC">'+
      '<option value="">'+esc(t('ctPick'))+'</option>'+
      window.COUNTRIES.map(function(c){return '<option>'+esc(nm(c))+'</option>';}).join('')+'</select></div>'+
    '<div class="field"><label for="ctM">'+esc(t('ctMsg'))+'</label><textarea id="ctM" rows="3"></textarea></div>'+
    '<label class="chk"><input type="checkbox" id="ctOk" required><span>'+esc(t('ctConsent'))+'</span></label>'+
    '<button class="btn" type="submit">'+esc(t('ctSend'))+'</button>'+
    '<p style="margin:10px 0 0;font-size:.84rem;color:#9FBCAD;line-height:1.5">'+esc(t('ctWaHint'))+'</p>'+
    '<div id="ctDone" hidden></div>'+
    '</form></div>';
}
function pageContact(){
  return '<section class="sect"><div class="wrap">'+contactBlock()+'</div></section>';
}

/* ============================================================
   DATA STATUS (your own review checklist)
   ============================================================ */
function pageData(){
  var total = window.COUNTRIES.length;
  var ver = window.COUNTRIES.filter(function(c){return c.verified;}).length;
  var high = window.COUNTRIES.filter(function(c){return c.volatility==='high';});
  var changed = window.COUNTRIES.filter(function(c){ var m=im(c.slug); return m && m.changed; });

  var rows = window.COUNTRIES.slice().sort(function(a,b){
    var o={high:0,med:1,low:2};
    return (o[a.volatility]-o[b.volatility]) || (nm(a)>nm(b)?1:-1);
  }).map(function(c){
    var m = im(c.slug) || {};
    return '<tr><td><span class="c-name"><span class="fl">'+c.flag+'</span><a href="#/country/'+c.slug+'">'+esc(nm(c))+'</a></span></td>'+
      '<td>'+(c.verified?'<span class="pill pill-ok">'+esc(t('dsVerified'))+'</span>':'<span class="pill pill-mid">'+esc(t('dsDraft'))+'</span>')+'</td>'+
      '<td>'+esc(t({low:'volLow',med:'volMed',high:'volHigh'}[c.volatility]))+'</td>'+
      '<td>'+(m.changed?'<span class="pill pill-no">'+esc(t('ruleChanged'))+'</span>':'—')+'</td></tr>';
  }).join('');

  return '<section class="sect"><div class="wrap">'+
    '<div class="sect-head"><h2 class="serif">'+esc(t('dsTitle'))+'</h2><p>'+esc(t('dsSub'))+'</p></div>'+
    '<div class="ds-sum">'+
      '<div class="ds-card"><span class="n serif">'+total+'</span><span class="l">'+esc(t('dsTotal'))+'</span></div>'+
      '<div class="ds-card"><span class="n serif">'+ver+'</span><span class="l">'+esc(t('dsVerified'))+'</span></div>'+
      '<div class="ds-card"><span class="n serif">'+(total-ver)+'</span><span class="l">'+esc(t('dsDraft'))+'</span></div>'+
      '<div class="ds-card"><span class="n serif">'+high.length+'</span><span class="l">'+esc(t('dsHigh'))+'</span></div>'+
      '<div class="ds-card"><span class="n serif">'+changed.length+'</span><span class="l">'+esc(t('ruleChanged'))+'</span></div>'+
      '<div class="ds-card"><span class="n serif">'+progTotalCount()+'</span><span class="l">'+esc(t('progTotal'))+'</span></div>'+
      '<div class="ds-card"><span class="n serif">'+progUniCount()+' / '+window.UNIVERSITIES.length+'</span>'+
        '<span class="l">'+esc(t('progUnisWith'))+'</span></div>'+
    '</div>'+
    '<div class="note"><p>'+esc(t('dsHighNote'))+'</p>'+
      '<p style="margin:6px 0 0;font-size:.9rem">'+esc(t('updLast'))+': '+esc(L(window.SITE_UPDATED))+
      ' · '+esc(t('updNext'))+': '+esc(L(window.SITE_REVIEW))+'</p></div>'+
    '<div class="tbl-scroll"><table class="idx"><thead><tr><th>'+esc(t('thCountry'))+'</th><th>'+esc(t('thStatus'))+
      '</th><th>'+esc(t('thVolatility'))+'</th><th>'+esc(t('ruleChanged'))+'</th></tr></thead><tbody>'+rows+'</tbody></table></div>'+
    '</div></section>';
}

/* ============================================================
   STATIC PAGES
   ============================================================ */
function pageLegal(kind){
  var title = kind==='privacy' ? t('ftrPrivacy') : t('ftrDisclaimer');
  var body = kind==='privacy'
    ? (lang==='bn'
      ? '<p>এই ওয়েবসাইটে কোনো অ্যাকাউন্ট লাগে না, কোনো বিজ্ঞাপন দেখানো হয় না, আর কোনো ট্র্যাকিং কুকি ব্যবহার করা হয় না।</p>'+
        '<p>যোগাযোগ ফর্মটি কোনো তথ্য এই সাইটে জমা রাখে না। আপনি যা লেখেন তা দিয়ে একটি WhatsApp বার্তা তৈরি হয়, আর সেটি পাঠানো হবে কি না তা আপনার সিদ্ধান্ত। বার্তাটি সরাসরি আপনার WhatsApp থেকে পরামর্শদাতার WhatsApp-এ যায়। মাঝখানে কোনো তৃতীয় পক্ষের সার্ভারে আপনার তথ্য সংরক্ষিত হয় না।</p>'+
        '<p>পাসপোর্ট, ব্যাংক স্টেটমেন্ট বা সার্টিফিকেটের স্ক্যান এই সাইটের কোনো ফর্মে পাঠাবেন না। সেগুলো ওয়েব ফর্মে কখনো নেওয়া হয় না।</p>'
      : '<p>This site needs no account, shows no advertising, and sets no tracking cookies.</p>'+
        '<p>The contact form stores nothing on this site. What you type is used to compose a WhatsApp message, and whether to send it is your decision. The message goes directly from your WhatsApp to the adviser\'s. No third-party server holds your details in between.</p>'+
        '<p>Do not send scans of a passport, bank statement or certificate through any form on this site — those are never collected through a web form.</p>')
    : (lang==='bn'
      ? '<p>'+esc(t('ftrDisc'))+'</p><p>'+esc(t('fraudBody'))+'</p>'
      : '<p>'+esc(t('ftrDisc'))+'</p><p>'+esc(t('fraudBody'))+'</p>');
  return '<section class="sect"><div class="wrap" style="max-width:720px">'+
    '<div class="sect-head"><h2 class="serif">'+esc(title)+'</h2></div><div class="cbody">'+body+
    updBox()+'</div></div></section>';
}
function page404(){
  return '<section class="sect"><div class="wrap"><div class="empty">'+
    '<h3 class="serif">'+esc(t('notFound'))+'</h3><p>'+esc(t('notFoundD'))+'</p>'+
    '<p style="margin-top:14px"><a class="btn-ghost btn" href="#/" style="display:inline-flex;width:auto">'+esc(t('navHome'))+'</a></p>'+
    '</div></div></section>';
}

/* ============================================================
   ROUTER
   ============================================================ */
function parse(){
  var h = (location.hash||'#/').replace(/^#\/?/,'');
  var qi = h.indexOf('?'), qs = {};
  if (qi>-1){
    h.slice(qi+1).split('&').forEach(function(p){ var kv=p.split('='); if(kv[0]) qs[decodeURIComponent(kv[0])]=decodeURIComponent(kv[1]||''); });
    h = h.slice(0,qi);
  }
  return { parts:h.split('/').filter(Boolean), qs:qs };
}

function render(){
  var r = parse(), p = r.parts, root = p[0]||'', body;
  switch(root){
    case '':            body = pageHome(); break;
    case 'countries':   body = pageCountries(r.qs); break;
    case 'country':     body = pageCountry(p[1]); break;
    case 'eligibility': body = pageEligibility(false); break;
    case 'pr-spouse':   body = pagePr(); break;
    case 'without-ielts': body = pageNoIelts(); break;
    case 'calendar':    body = pageCalendar(); break;
    case 'cost':        body = pageCost(r.qs); break;
    case 'courses':     body = pageCourses(r.qs); break;
    case 'contact':     body = pageContact(); break;
    case 'data':        body = pageData(); break;
    case 'privacy':     body = pageLegal('privacy'); break;
    case 'disclaimer':  body = pageLegal('disclaimer'); break;
    default:            body = page404();
  }
  document.documentElement.lang = lang;
  document.getElementById('app').innerHTML = header(root)+'<main id="main">'+body+'</main>'+footer();
  wire(root);
  if (!location.hash || location.hash==='#/') window.scrollTo(0,0);
}

/* ============================================================
   EVENT WIRING
   ============================================================ */
function on(id, ev, fn){ var el = document.getElementById(id); if (el) el.addEventListener(ev, fn); }

function wire(root){
  /* language + menu */
  Array.prototype.forEach.call(document.querySelectorAll('[data-lang]'), function(b){
    b.addEventListener('click', function(){
      lang = b.getAttribute('data-lang');
      try{ localStorage.setItem('sp_lang', lang); }catch(e){}
      render();
    });
  });
  on('burger','click', function(){
    var n = document.getElementById('nav'), b = document.getElementById('burger');
    var open = n.classList.toggle('open');
    b.setAttribute('aria-expanded', String(open));
  });

  /* quick-check form (hero + eligibility) */
  Array.prototype.forEach.call(document.querySelectorAll('[data-seg]'), function(seg){
    seg.addEventListener('click', function(e){
      var b = e.target.closest('button[data-v]'); if (!b) return;
      var key = seg.getAttribute('data-seg');
      ans[key] = b.getAttribute('data-v');
      Array.prototype.forEach.call(seg.querySelectorAll('button'), function(x){
        x.setAttribute('aria-pressed', String(x===b)); });
      var bw = document.getElementById('bandWrap');
      if (bw && key==='ielts') bw.hidden = (ans.ielts!=='yes');
    });
  });
  on('qcForm','submit', function(e){
    e.preventDefault();
    ans.result = (document.getElementById('qcRes')||{}).value || '';
    ans.scale  = (document.getElementById('qcScale')||{}).value || '4';
    ans.budget = (document.getElementById('qcBudget')||{}).value || '15';
    ans.band   = (document.getElementById('qcBand')||{}).value || '6.0';
    if (root !== 'eligibility'){ location.hash = '#/eligibility'; setTimeout(showRes, 30); }
    else showRes();
  });
  function showRes(){
    var a = document.getElementById('resArea');
    if (a){
      a.innerHTML = renderResults();
      bindGroups(a);
      a.scrollIntoView({ block:'start', behavior:'smooth' });
    }
  }

  /* country index */
  if (root==='countries'){
    var paint = function(){ document.getElementById('cTable').innerHTML = renderCountryTable(); bindSort(); };
    var bindSort = function(){
      Array.prototype.forEach.call(document.querySelectorAll('[data-sort]'), function(b){
        b.addEventListener('click', function(){
          var k = b.getAttribute('data-sort');
          if (cf.sort===k) cf.dir = -cf.dir; else { cf.sort=k; cf.dir=1; }
          paint();
        });
      });
    };
    on('fRegion','change', function(e){ cf.region=e.target.value; paint(); });
    on('fIelts','change',  function(e){ cf.ielts=e.target.value; paint(); });
    on('fBudget','change', function(e){ cf.budget=e.target.value; paint(); });
    on('fQ','input',       function(e){ cf.q=e.target.value; paint(); });
    on('fHot','change',    function(e){ cf.hot=e.target.checked; paint(); });
    paint();
  }

  /* pr table */
  if (root==='pr-spouse'){
    var paintP = function(){ document.getElementById('pTable').innerHTML = renderPrTable(); bindP(); };
    var bindP = function(){
      Array.prototype.forEach.call(document.querySelectorAll('[data-psort]'), function(b){
        b.addEventListener('click', function(){
          var k = b.getAttribute('data-psort');
          if (pf.sort===k) pf.dir = -pf.dir; else { pf.sort=k; pf.dir=1; }
          paintP();
        });
      });
    };
    on('pSpouse','change', function(e){ pf.spouse=e.target.value; paintP(); });
    on('pStudy','change',  function(e){ pf.study=e.target.value; paintP(); });
    paintP();
  }

  /* calendar */
  if (root==='calendar'){
    var paintC = function(){ document.getElementById('calBox').innerHTML = renderCalendar(); };
    on('calR','change', function(e){ calRegion=e.target.value; paintC(); });
    paintC();
  }

  /* cost */
  if (root==='cost'){
    var paintCost = function(){
      document.getElementById('costBox').innerHTML = renderCost();
      Array.prototype.forEach.call(document.querySelectorAll('.ccIn'), function(i){
        i.addEventListener('input', recalcCost); });
      recalcCost();
    };
    on('ccCountry','change', function(e){ costSel.slug=e.target.value; paintCost(); });
    on('ccStd','change',     function(e){ costSel.std=e.target.value;  paintCost(); });
    paintCost();
  }

  /* courses */
  if (root==='courses'){
    var paintU = function(){ document.getElementById('uTable').innerHTML = renderUniTable(); };
    on('uSub','change',  function(e){ uf.subject=e.target.value; paintU(); });
    on('uLvl','change',  function(e){ uf.level=e.target.value;   paintU(); });
    on('uType','change', function(e){ uf.type=e.target.value;    paintU(); });
    on('uMoi','change',  function(e){ uf.moi=e.target.checked;   paintU(); });
    on('uQ','input',     function(e){ uf.q=e.target.value;       paintU(); });
    paintU();
  }

  /* any region accordions already on the page */
  bindGroups();

  /* contact — builds a WhatsApp message and opens it */
  on('ctForm','submit', function(e){
    e.preventDefault();
    var g = function(id){ var el = document.getElementById(id); return el ? el.value.trim() : ''; };
    var d = document.getElementById('ctDone');
    var name = g('ctN'), phone = g('ctP'), country = g('ctC'), msg = g('ctM');

    if (!name || !phone || !msg){
      if (d){
        d.hidden = false;
        d.className = 'note alert';
        d.style.marginTop = '14px';
        d.innerHTML = '<p style="margin:0">'+esc(t('ctFill'))+'</p>';
      }
      return;
    }

    var lines = [
      t('siteName') + ' — ' + t('navContact'),
      '',
      t('ctName') + ': ' + name,
      t('ctPhone') + ': ' + phone
    ];
    if (country) lines.push(t('ctCountry') + ': ' + country);
    lines.push('', t('ctMsg') + ': ' + msg);

    var url = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(lines.join('\n'));
    window.open(url, '_blank', 'noopener');

    if (d){
      d.hidden = false;
      d.className = 'note good';
      d.style.marginTop = '14px';
      d.innerHTML = '<p><strong>'+esc(t('ctOpening'))+'</strong></p>'+
        '<p style="font-size:.9rem;margin-bottom:0">'+esc(t('ctOpeningBody'))+' '+
        '<a href="'+url+'" target="_blank" rel="noopener" style="font-weight:600">+'+esc(WHATSAPP)+'</a></p>';
      d.scrollIntoView({ block:'nearest', behavior:'smooth' });
    }
  });
}

/* ---------- boot ---------- */
window.addEventListener('hashchange', render);
document.addEventListener('DOMContentLoaded', render);
if (document.readyState !== 'loading') render();

})();
