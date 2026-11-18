const {Button,IconButton,Icon}=window.StudyAbroadAllInOneDesignSystem_c572a1;
const {useState,useEffect,useRef,useMemo}=React;

function labelPos(geo,k,n){
  const a=(k/n)*Math.PI*2+Math.PI/n;
  const c=Math.cos(a),hw=76;
  let x=geo.cx+c*(geo.rx*1.08+hw*Math.abs(c)+12), y=geo.cy+Math.sin(a)*geo.ry*1.4;
  const sn=Math.sin(a);if(sn>0.5)y=Math.max(y,geo.cy+geo.ry*1.1*sn+geo.ch*0.6+14);
  x=Math.max(hw+8,Math.min(geo.W-hw-8,x)); y=Math.max(28,Math.min(geo.H-56,y));
  return {left:x,top:y};
}

function CityChips({filter,setFilter,total}){
  return <React.Fragment>
    <button className={'chip'+(!filter?' act':'')} onClick={()=>setFilter(null)}>All cities<sup>{total}</sup></button>
    {window.CITIES.map(c=><button key={c.name} className={'chip'+(filter===c.name?' act':'')} onClick={()=>setFilter(filter===c.name?null:c.name)}>{c.name}<sup>{c.count}</sup></button>)}
  </React.Fragment>;
}

function Hero({filter,setFilter,onGrid,onOpen,onBook}){
  const stageRef=useRef(null),ringRef=useRef(null),lastRef=useRef(null);
  const [geo,setGeo]=useState(null),[hov,setHov]=useState(null),[sel,setSel]=useState(null);
  useEffect(()=>{
    const r=window.createRing(stageRef.current,window.PROGRAMMES,{onHover:setHov,onSelect:setSel,onLayout:setGeo});
    ringRef.current=r;r.setFilter(filter);
    return ()=>r.destroy();
  },[]);
  useEffect(()=>{ringRef.current&&ringRef.current.setFilter(filter);},[filter]);
  const shown=sel||hov; if(shown)lastRef.current=shown; const p=lastRef.current;
  const nU=window.UNIVERSITIES.length,nC=window.CITIES.length;
  return <section className="hero" ref={stageRef} tabIndex={0} aria-label="Romanian university ring gallery. Use left and right arrow keys to select a programme, Escape to clear." data-screen-label="Hero ring">
    {geo&&<div className="ring-center" style={{top:geo.cy,width:geo.mobile?undefined:Math.min(620,geo.rx*1.6)}}>
      <div className={'rc-default'+(shown?' out':'')+(!geo.mobile&&geo.ry-geo.ch*0.6<150?' tight':'')} aria-hidden={!!shown}>
        <h1>Study in Romania.<span className="h1-line"> Apply now for the new 2027 intake.</span></h1>
        <p>See the full process here, then apply yourself. {nU} accredited universities across {nC} cities, with one intake a year starting in October. Check where you stand before you pay anything.</p>
        <div className="rc-actions"><button type="button" className="bk3d  " onClick={onBook}><span className="bk-face"><i className="bk-orbit" aria-hidden="true"></i>Book Free Consultation<b aria-hidden="true">→</b></span></button><span className="btn-2"><button type="button" className="bk3d alt" onClick={onGrid}><span className="bk-face">See All Universities<b aria-hidden="true">→</b></span></button></span></div>
      </div>
      <div className={'rc-preview'+(shown?' in':'')} aria-live="polite">
        {p&&<React.Fragment>
          <div className="rc-eyebrow">{p.level} · {p.city}</div>
          <div className="rc-title">{p.title}</div>
          <div className="rc-img" style={{'--tone':p.tone}}><img key={p.id} src={p.image} alt={p.university} onError={e=>{e.currentTarget.style.display='none';}}/></div>
          <div className="rc-meta">{p.university}<span>{p.fee}</span></div>
          <div className="rc-cta" style={{visibility:sel?'visible':'hidden'}}>
            <button type="button" className="bk3d sm" onClick={()=>onOpen(p.uid)}><span className="bk-face"><i className="bk-orbit" aria-hidden="true"></i>View University<b aria-hidden="true">+</b></span></button>
            <button type="button" className="rc-close" onClick={()=>ringRef.current.deselect()}>Close</button>
          </div>
        </React.Fragment>}
      </div>
    </div>}
    {geo&&!geo.mobile&&window.CITIES.map((c,k)=><button key={c.name} className={'ring-label'+(filter===c.name?' act':'')+(filter&&filter!==c.name?' off':'')} style={labelPos(geo,k,nC)} onClick={()=>setFilter(filter===c.name?null:c.name)} aria-pressed={filter===c.name}>
      <span className="u">{c.name}</span><sup>{c.count}</sup>
    </button>)}
    <div className="m-chips"><CityChips filter={filter} setFilter={setFilter} total={nU}/></div>
    <div className="hero-bar">
      <button className="btn3d" onClick={()=>setFilter(null)} style={{visibility:filter?'visible':'hidden'}}>All cities <b>+</b></button>
      <span className="hint">Move to explore<i></i>Click to lock a programme</span>
      <button className="btn3d dark" onClick={onGrid}>Grid view <b>+</b></button>
    </div>
  </section>;
}

function GridView({filter,setFilter,onRing,onOpen}){
  const list=useMemo(()=>window.UNIVERSITIES.filter(u=>!filter||u.city===filter),[filter]);
  const tilt=e=>{if(e.pointerType==='touch')return;const el=e.currentTarget,r=el.getBoundingClientRect();el.style.setProperty('--rx',(-((e.clientY-r.top)/r.height-.5)*10).toFixed(1)+'deg');el.style.setProperty('--ry',(((e.clientX-r.left)/r.width-.5)*12).toFixed(1)+'deg');el.style.setProperty('--mx',((e.clientX-r.left)/r.width*100).toFixed(0)+'%');el.style.setProperty('--my',((e.clientY-r.top)/r.height*100).toFixed(0)+'%');};
  const flat=e=>{e.currentTarget.style.setProperty('--rx','0deg');e.currentTarget.style.setProperty('--ry','0deg');};
  return <section className="gv" data-screen-label="Grid view"><div className="gv-sky" aria-hidden="true"></div><div className="gv-planet" aria-hidden="true"></div>
    <div className="sa-container">
      <div className="gv-head">
        <div><h1>Universities in Romania</h1><p className="gv-count"><b>{list.length}</b> accredited universities{filter?<React.Fragment> in <b>{filter}</b></React.Fragment>:<React.Fragment> across <b>{window.CITIES.length}</b> cities</React.Fragment>}</p></div>
        <button type="button" className="gv-ring" onClick={onRing}>Ring view <b aria-hidden="true">+</b></button>
      </div>
      <div className="chips"><CityChips filter={filter} setFilter={setFilter} total={window.UNIVERSITIES.length}/></div>
      <div className="gv-grid" key={filter||'all'}>
        {list.map((u,i)=><article className="gv-card" key={u.id} style={{'--i':i}} onPointerMove={tilt} onPointerLeave={flat}>
          <div className="gv-img" style={{'--tone':u.tone}}><img loading="lazy" src={u.card} alt={u.name} onError={e=>{e.currentTarget.style.display='none';}}/></div>
          <div className="m">{u.city} · {u.type}</div>
          <h3>{u.name}</h3>
          <div className="tp">{u.fee}</div>
          <div className="tp mute">{u.ba.length+u.ma.length} English programmes · {u.ba.slice(0,2).join(' · ')}</div>
          <button type="button" className="gv-open" onClick={()=>onOpen(u.id)}>View University <b aria-hidden="true">→</b></button>
          <span className="gv-shine" aria-hidden="true"></span>
        </article>)}
      </div>
    </div>
  </section>;
}

function Facts(){
  const F=window.ROMANIA_FACTS,[i,setI]=useState(0),[auto,setAuto]=useState(true),[dir,setDir]=useState(1);
  useEffect(()=>{if(!auto)return;const t=setInterval(()=>{setDir(1);setI(v=>(v+1)%F.length);},7000);return ()=>clearInterval(t);},[auto,F.length]);
  const pick=n=>{setDir(n>=i?1:-1);setI((n+F.length)%F.length);setAuto(false);};
  const f=F[i],AC=['#7FE8DA','#FF8FB5','#9DB4FF','#FFC27A'],ac=AC[i%4];
  const tilt=e=>{if(e.pointerType==='touch')return;const el=e.currentTarget,r=el.getBoundingClientRect();el.style.setProperty('--rx',(-((e.clientY-r.top)/r.height-.5)*6).toFixed(1)+'deg');el.style.setProperty('--ry',(((e.clientX-r.left)/r.width-.5)*8).toFixed(1)+'deg');};
  const flat=e=>{e.currentTarget.style.setProperty('--rx','0deg');e.currentTarget.style.setProperty('--ry','0deg');};
  return <section className="band facts-band fx" data-screen-label="Romania facts">
    <div className="sa-container">
      <p className="eyebrow">Studying in Romania from Bangladesh</p>
      <h2 className="h3d"><span className="h3-a">What to know</span> <span className="h3-b">before you apply.</span></h2>
      <div className="fx-wrap">
        <div className="fx-list" role="tablist" aria-label="Facts about studying in Romania">
          {F.map((x,k)=><button type="button" role="tab" aria-selected={k===i} key={x[0]} className={'fx-tab'+(k===i?' on':'')} style={{'--c':AC[k%4],'--i':k}} onClick={()=>pick(k)}>
            <span className="fx-num">{String(k+1).padStart(2,'0')}</span><span className="fx-lab">{x[0]}</span><span className="fx-val">{x[2]}</span></button>)}
        </div>
        <div className="fx-stage" onPointerMove={tilt} onPointerLeave={flat} onMouseEnter={()=>setAuto(false)}>
          <article className={'fx-panel '+(dir>0?'fwd':'bck')} key={i} style={{'--c':ac}} aria-live="polite">
            <span className="fx-count">{String(i+1).padStart(2,'0')} <i>/ {String(F.length).padStart(2,'0')}</i></span>
            <h3 className="fx-title">{f[0]}</h3>
            <div className="fx-big">{f[2]}</div>
            {f[3]&&<span className="fx-small">{f[3]}</span>}
            <p className="fx-text">{f[1]}</p>
            <div className="fx-nav"><button type="button" className="rc-close" onClick={()=>pick(i-1)} aria-label="Previous fact">← Prev</button><button type="button" className="rc-close" onClick={()=>pick(i+1)} aria-label="Next fact">Next →</button></div>
          </article>
          {auto&&<span className="fx-bar" key={'b'+i} aria-hidden="true"></span>}
          <span className="fx-orb" style={{'--c':ac}} aria-hidden="true"></span>
        </div>
      </div>
    </div>
  </section>;
}

function UniDrawer({u,onClose,onBook}){
  useEffect(()=>{
    if(!u)return;
    const k=e=>{if(e.key==='Escape')onClose();};
    document.addEventListener('keydown',k);document.body.style.overflow='hidden';
    return ()=>{document.removeEventListener('keydown',k);document.body.style.overflow='';};
  },[u]);
  return <div className={'drw-wrap'+(u?' open':'')} aria-hidden={!u}>
    <div className="drw-bg" onClick={onClose}></div>
    <aside className="drw" role="dialog" aria-modal="true" aria-label={u?u.name:''}>
      {u&&<React.Fragment>
        <div className="drw-top"><span className="rc-eyebrow">{u.city} · {u.type}</span><button className="ulink" onClick={onClose}>Close</button></div>
        <h2>{u.name}</h2>
        <div className="drw-img" style={{'--tone':u.tone}}><img src={u.image} alt={u.name} onError={e=>{e.currentTarget.style.display='none';}}/></div>
        <p className="drw-why">{u.why}</p>
        <dl className="drw-dl">
          <div><dt>Tuition</dt><dd>{u.fee}</dd></div>
          <div><dt>Intake</dt><dd><b className="in-big">October</b> <span className="in-sm">Sep / Oct</span></dd></div>
          <div><dt>PhD and preparatory</dt><dd>{u.phd}</dd></div>
        </dl>
        {u.ba.length>0&&<div className="drw-list"><h3>Bachelor’s programmes</h3><ul>{u.ba.map(t=><li key={t}>{t}</li>)}</ul></div>}
        {u.ma.length>0&&<div className="drw-list"><h3>Master’s programmes</h3><ul>{u.ma.map(t=><li key={t}>{t}</li>)}</ul></div>}
        {u.notes&&<div className="drw-list"><h3>Admission rules</h3><ul>{u.notes.map(t=><li key={t}>{t}</li>)}</ul></div>}
        <p className="drw-note">Programme availability depends on the yearly Ministry quota.</p>
        <button type="button" className="bk3d  full" onClick={onBook}><span className="bk-face"><i className="bk-orbit" aria-hidden="true"></i>Book Free Consultation<b aria-hidden="true">→</b></span></button>
      </React.Fragment>}
    </aside>
  </div>;
}

const NAV_LINKS=['Universities','Scholarships','Visa Guides'];
function SiteNav({onHome,onBook,onOpen,onSch,onVisa}){
  const [open,setOpen]=useState(false),[menu,setMenu]=useState(false),[ex,setEx]=useState(null);
  useEffect(()=>{if(!menu)return;const k=e=>{if(e.key==='Escape')setMenu(false);};document.addEventListener('keydown',k);return ()=>document.removeEventListener('keydown',k);},[menu]);
  const pick=id=>{setMenu(false);setOpen(false);onOpen(id);};
  const navLink=(l,after)=>l==='Universities'?<button key={l} type="button" className={'nav-uni'+(menu?' on':'')} aria-expanded={menu} aria-haspopup="true" onClick={()=>{setMenu(!menu);if(after)after();}}>Universities<i aria-hidden="true">▾</i></button>:<a key={l} href="#" onClick={e=>{e.preventDefault();setMenu(false);if(l==='Scholarships')onSch();if(l==='Visa Guides')onVisa();if(after)after();}}>{l}</a>;
  const [mobile,setMobile]=useState(window.innerWidth<900);
  useEffect(()=>{const f=()=>setMobile(window.innerWidth<900);window.addEventListener('resize',f);return ()=>window.removeEventListener('resize',f);},[]);
  useEffect(()=>{if(!mobile)setOpen(false);},[mobile]);
  return <header className="site-nav">
    <nav>
      <a className="brand-mark" href="#" onClick={e=>{e.preventDefault();setOpen(false);onHome();}}><i className="bm-orb" aria-hidden="true"></i><span className="bm-w"><span className="bm-t">STUDY ABROAD</span><span className="bm-s">ALL IN ONE</span></span></a>
      {!mobile&&<div>{NAV_LINKS.map(l=>navLink(l))}</div>}
      {!mobile&&<button type="button" className="bk3d sm " onClick={onBook}><span className="bk-face"><i className="bk-orbit" aria-hidden="true"></i>Book Free Consultation<b aria-hidden="true">→</b></span></button>}
      {mobile&&<div className="nav-burger"><IconButton label={open?'Close menu':'Open menu'} onClick={()=>setOpen(!open)}><Icon name={open?'x':'menu'} size={18}/></IconButton></div>}
    </nav>
    {menu&&<React.Fragment><div className="um-bg" onClick={()=>setMenu(false)}></div>
      <div className="um" role="menu" aria-label="All universities">
        <div className="um-head"><div><p className="um-k">Romania</p><h3>All {window.UNIVERSITIES.length} universities</h3></div><button type="button" className="rc-close" onClick={()=>setMenu(false)}>Close</button></div>
        <div className="um-grid">{window.UNIVERSITIES.map((u,i)=>{const on=false;return <div key={u.id} className={'um-cell'+(on?' open':'')} style={{'--i':i}}>
          <button type="button" role="menuitem" className="um-item" aria-expanded={on} onClick={()=>pick(u.id)}>
            <span className="um-th" style={{'--tone':u.tone}}><img src={u.image} alt="" loading="lazy" onError={e=>{e.currentTarget.style.display='none';}}/></span>
            <span className="um-tx"><b>{u.name}</b><span>{u.city} · {u.type}</span><em>{u.fee}</em></span><i className="um-ar" aria-hidden="true">→</i></button>
        </div>;})}
        </div>
      </div></React.Fragment>}
    {mobile&&open&&<div className="nav-sheet">
      {NAV_LINKS.map(l=>navLink(l,()=>setOpen(false)))}
      <button type="button" className="bk3d  full" onClick={()=>{setOpen(false);onBook();}}><span className="bk-face"><i className="bk-orbit" aria-hidden="true"></i>Book Free Consultation<b aria-hidden="true">→</b></span></button>
    </div>}
  </header>;
}

/* ---------------- Book Free Consultation: 4-step 3D student data form ---------------- */
const SHEET_URL='https://script.google.com/macros/s/AKfycbz9lbhPqqRJCjE8fo_SL_rx6RkLAJDGC-Vu0l80Q33CsJOMP1EMh0vmjOndVASiGhZh/exec';
const WA_NUMBER='393509549869';
const OPT={
  level:[['bachelor','Bachelor’s'],['master','Master’s'],['phd','PhD']],
  qual:[['ssc_hsc','SSC + HSC (General Education Board)'],['olevel','O-Level + A-Level'],['bteb','Diploma (BTEB polytechnic)'],['madrasah','Madrasah board (Dakhil / Alim / Fazil)'],['bachelor','Bachelor’s degree completed'],['master','Master’s degree completed'],['other','Something else']],
  gap:[['0','No gap'],['1','1 year'],['2','2 years'],['3','3 years or more']],
  ielts:[['have','I have a score'],['booked','Test already booked'],['plan','Planning to take it'],['no','Have not taken any']],
  budget:[['5','Under 5 lakh'],['10','5 – 10 lakh'],['15','10 – 15 lakh'],['25','15 – 25 lakh'],['40','25 – 40 lakh'],['200','40 lakh +']],
  subject:[['business','Business / Management'],['cs','Computer Science / IT'],['engineering','Engineering'],['law','Law'],['medicine','Medicine / Health'],['social','Social Science'],['arts','Arts / Design'],['science','Science'],['agri','Agriculture'],['hospitality','Hospitality / Tourism'],['unsure','Not sure yet']],
  passport:[['valid','Yes, valid passport'],['applied','Applied, waiting'],['none','Not yet']],
  refusal:[['no','No'],['yes','Yes']],
  time:[['morning','Morning'],['afternoon','Afternoon'],['evening','Evening'],['any','Any time']]
};
const lab=(k,v)=>{const h=OPT[k].find(o=>o[0]===v);return h?h[1]:'';};
const STEPS=['About you','Education','Plans','Confirm'];

function Chips({k,value,onPick}){
  return <div className="cm-chips" role="group">{OPT[k].map(o=><button type="button" key={o[0]} className="cm-chip" aria-pressed={value===o[0]} onClick={()=>onPick(o[0])}>{o[1]}</button>)}</div>;
}
function Fld({label,hint,err,children,full}){
  return <label className={'cm-fld'+(err?' bad':'')+(full?' full':'')}><span>{label}{hint&&<em> {hint}</em>}</span>{children}{err&&<p className="cm-err" role="alert">{err}</p>}</label>;
}

function ConsultModal({onClose}){
  const [step,setStep]=useState(0),[dir,setDir]=useState(1),[errs,setErrs]=useState({}),[state,setState]=useState('idle');
  const [d,setD]=useState({name:'',phone:'',email:'',city:'',level:'bachelor',qual:'',year:'',result:'',scale:'4',gap:'0',ielts:'plan',band:'',subject:'',budget:'15',passport:'valid',refusal:'no',time:'any',note:'',consent:false});
  const cardRef=useRef(null),lastFocus=useRef(document.activeElement);
  const set=(k,v)=>setD(o=>({...o,[k]:v}));
  const inp=k=>({value:d[k],onChange:e=>set(k,e.target.value)});
  useEffect(()=>{
    const k=e=>{if(e.key==='Escape')onClose();};
    document.addEventListener('keydown',k);document.body.style.overflow='hidden';
    const f=cardRef.current&&cardRef.current.querySelector('input');if(f)f.focus();
    return ()=>{document.removeEventListener('keydown',k);document.body.style.overflow='';if(lastFocus.current&&lastFocus.current.focus)lastFocus.current.focus();};
  },[]);
  const tilt=e=>{
    if(e.pointerType==='touch'||!cardRef.current)return;
    const r=e.currentTarget.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5,s=cardRef.current.style;
    s.setProperty('--rx',(-y*5).toFixed(2)+'deg');s.setProperty('--ry',(x*7).toFixed(2)+'deg');
  };
  const untilt=()=>{const s=cardRef.current&&cardRef.current.style;if(s){s.setProperty('--rx','0deg');s.setProperty('--ry','0deg');}};
  const validate=()=>{
    const e={};
    if(step===0){
      if(!d.name.trim())e.name='Please fill in this field.';
      const dg=d.phone.replace(/\D/g,'');
      if(!d.phone.trim())e.phone='Please fill in this field.';else if(dg.length<8||dg.length>15)e.phone='Enter a valid number, with country code if outside Bangladesh.';
      if(d.email&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.email))e.email='That email does not look right.';
    }
    if(step===1&&!d.qual)e.qual='Please choose one.';
    if(step===2&&!d.subject)e.subject='Please choose one.';
    if(step===3&&!d.consent)e.consent='Please tick the box to continue.';
    setErrs(e);return Object.keys(e).length===0;
  };
  const summary=()=>['CONSULTATION REQUEST','Name: '+d.name,'WhatsApp: '+d.phone,d.email&&'Email: '+d.email,d.city&&'City: '+d.city,
    'Level: '+lab('level',d.level)+' · Destination: Romania · Intake: October',
    'Last education: '+lab('qual',d.qual)+(d.year?' ('+d.year+')':'')+(d.result?' · Result '+d.result+(d.scale==='100'?'%':'/'+d.scale):'')+' · Gap: '+lab('gap',d.gap),
    'English: '+lab('ielts',d.ielts)+(d.band?' '+d.band:''),'Subject: '+lab('subject',d.subject)+' · Budget: '+lab('budget',d.budget),
    'Passport: '+lab('passport',d.passport)+' · Visa refused before: '+lab('refusal',d.refusal),'Contact: WhatsApp, whenever the student is free',d.note&&'Note: '+d.note].filter(Boolean).join('\n');
  const go=n=>{setDir(n>step?1:-1);setStep(n);};
  const next=e=>{
    e.preventDefault();
    if(!validate())return;
    if(step<3){go(step+1);return;}
    setState('sending');
    const p={source:'consultation',name:d.name,phone:d.phone,note:summary(),lang:'en',level:d.level,result:d.result,scale:d.scale,budget:d.budget,ielts:d.ielts,band:d.band,at:new Date().toISOString(),
      email:d.email,city:d.city,qualification:d.qual,passYear:d.year,gap:d.gap,destination:'Romania',subject:d.subject,passport:d.passport,refused:d.refusal,callTime:'WhatsApp (whenever free)',intake:'October'};
    fetch(SHEET_URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(p)})
      .then(()=>setState('ok')).catch(()=>setState('fail'));
  };
  const romaniaGate=step===1&&(d.qual==='bteb'||d.qual==='madrasah');
  const rows=[['Full name',d.name],['WhatsApp',d.phone],['Email',d.email],['District / city',d.city],['Studying',lab('level',d.level)],['Last education',lab('qual',d.qual)],
    ['Result',d.result?d.result+(d.scale==='100'?'%':' / '+d.scale):''],['Pass year',d.year],['Study gap',lab('gap',d.gap)],['English',lab('ielts',d.ielts)+(d.ielts==='have'&&d.band?' · '+d.band:'')],
    ['Subject',lab('subject',d.subject)],['Budget',lab('budget',d.budget)],['Passport',lab('passport',d.passport)],['Visa refused before',lab('refusal',d.refusal)]].filter(r=>r[1]);
  return <div className="cm-wrap">
    <div className="cm-bg" onClick={onClose}></div>
    <div className="cm-stage" onPointerMove={tilt} onPointerLeave={untilt}>
      <div className={'cm-card'+(state==='ok'?' sent':'')} ref={cardRef} role="dialog" aria-modal="true" aria-labelledby="cm-t">
        <button type="button" className="cm-x" onClick={onClose} aria-label="Close">×</button>
        <p className="cm-kick">Free consultation · Romania</p>
        <h2 id="cm-t">Book your free consultation</h2>
        <p className="cm-sub">Tell us about yourself once. A real adviser reads this before replying, so the first call is useful.</p>
        {state==='ok'?<div className="cm-done"><div className="cm-ball" aria-hidden="true">✓</div><h3>Received. Thank you.</h3><p>Your details have been submitted. We will reply on the WhatsApp number you gave. You can also message us first whenever you are free.</p><div className="cm-done-a"><a className="btn3d dark" href={'https://wa.me/'+WA_NUMBER+'?text='+encodeURIComponent('Hello, I just submitted my details for a free consultation.\n'+summary())} target="_blank" rel="noopener noreferrer">Chat on WhatsApp <b>→</b></a><button type="button" className="btn3d" onClick={onClose}>Close</button></div></div>:
        <form onSubmit={next} noValidate>
          <ol className="cm-steps" aria-label="Progress">{STEPS.map((s,i)=><li key={s} className={i<step?'done':i===step?'now':''} aria-current={i===step?'step':undefined}><span className="cm-dot">{i+1}</span><span className="cm-dl">{s}</span></li>)}</ol>
          <div key={step} className={'cm-body '+(dir>0?'in':'inb')}>
            {step===0&&<React.Fragment>
              <Fld label="Full name (as in passport)" err={errs.name} full><input type="text" autoComplete="name" {...inp('name')}/></Fld>
              <Fld label="WhatsApp number" err={errs.phone}><input type="tel" inputMode="tel" autoComplete="tel" placeholder="01XXXXXXXXX" {...inp('phone')}/></Fld>
              <Fld label="Email" hint="optional" err={errs.email}><input type="email" autoComplete="email" placeholder="name@example.com" {...inp('email')}/></Fld>
              <Fld label="District / city in Bangladesh" hint="optional" full><input type="text" {...inp('city')}/></Fld>
            </React.Fragment>}
            {step===1&&<React.Fragment>
              <div className="cm-fld full"><span>What do you want to study?</span><Chips k="level" value={d.level} onPick={v=>set('level',v)}/></div>
              <Fld label="Your last completed education" err={errs.qual} full><select value={d.qual} onChange={e=>set('qual',e.target.value)}><option value="">Choose…</option>{OPT.qual.map(o=><option key={o[0]} value={o[0]}>{o[1]}</option>)}</select></Fld>
              {romaniaGate&&<div className="cm-gate full" role="note"><strong>Important — please read before you pay anyone</strong><p>Romania does not accept a BTEB polytechnic diploma in place of HSC, and does not treat Madrasah board certificates as equivalent. The Letter of Acceptance is not issued in either case. You can still send your details so we can explain the options honestly.</p></div>}
              <Fld label="Year you passed"><input type="number" inputMode="numeric" min="1990" max="2030" placeholder="2024" {...inp('year')}/></Fld>
              <Fld label="Study gap since then"><select {...inp('gap')}>{OPT.gap.map(o=><option key={o[0]} value={o[0]}>{o[1]}</option>)}</select></Fld>
              <Fld label="Result"><input type="number" step="0.01" min="0" inputMode="decimal" placeholder="3.75" {...inp('result')}/></Fld>
              <Fld label="Scale"><select {...inp('scale')}><option value="4">/ 4.00</option><option value="5">/ 5.00</option><option value="100">%</option></select></Fld>
            </React.Fragment>}
            {step===2&&<React.Fragment>
              <Fld label="Subject you are interested in" err={errs.subject} full><select value={d.subject} onChange={e=>set('subject',e.target.value)}><option value="">Choose…</option>{OPT.subject.map(o=><option key={o[0]} value={o[0]}>{o[1]}</option>)}</select></Fld>
              <div className="cm-fld full"><span>English test (IELTS)</span><Chips k="ielts" value={d.ielts} onPick={v=>set('ielts',v)}/></div>
              {d.ielts==='have'&&<Fld label="Overall band" full><input type="text" inputMode="decimal" placeholder="e.g. 6.5" {...inp('band')}/></Fld>}
              <Fld label="Total budget you can arrange for the first year" full><select {...inp('budget')}>{OPT.budget.map(o=><option key={o[0]} value={o[0]}>{o[1]}</option>)}</select></Fld>
              <Fld label="Passport"><select {...inp('passport')}>{OPT.passport.map(o=><option key={o[0]} value={o[0]}>{o[1]}</option>)}</select></Fld>
              <Fld label="Visa refused anywhere before?"><select {...inp('refusal')}>{OPT.refusal.map(o=><option key={o[0]} value={o[0]}>{o[1]}</option>)}</select></Fld>
            </React.Fragment>}
            {step===3&&<React.Fragment>
              <div className="cm-wa full"><span className="cm-wa-i" aria-hidden="true">✆</span><div><b>We will talk on WhatsApp</b><p>Message us whenever you feel free. There is no fixed call time, and we reply on the WhatsApp number you gave.</p></div></div>
              <Fld label="Anything else we should know" hint="optional" full><textarea rows="3" placeholder="Subjects, worries, questions, deadlines…" {...inp('note')}/></Fld>
              <div className="cm-review full"><h4>Check your details</h4><dl>{rows.map(r=><div key={r[0]}><dt>{r[0]}</dt><dd>{r[1]}</dd></div>)}</dl></div>
              <label className="cm-consent full"><input type="checkbox" checked={d.consent} onChange={e=>set('consent',e.target.checked)}/><span>I agree that my details may be used to contact me about this enquiry.</span></label>
              {errs.consent&&<p className="cm-err full" role="alert">{errs.consent}</p>}
              <p className="cm-docs full">Do not send passport scans, bank statements or certificates here. Those are handled privately after the first conversation.</p>
            </React.Fragment>}
          </div>
          {state==='fail'&&<div className="cm-fail" role="alert"><strong>It did not go through.</strong> Check your internet and try once more, or message directly on WhatsApp: <a href={'https://wa.me/'+WA_NUMBER+'?text='+encodeURIComponent(summary())} target="_blank" rel="noopener">+{WA_NUMBER}</a></div>}
          <div className="cm-ft">
            <button type="button" className="btn3d" style={{visibility:step===0?'hidden':'visible'}} onClick={()=>go(step-1)}>Back</button>
            <span className="cm-count">Step {step+1} of 4</span>
            <button type="submit" className="btn3d dark" disabled={state==='sending'}>{state==='sending'?'Sending…':step===3?'Send my details':'Continue'} <b>{step===3?'→':'+'}</b></button>
          </div>
        </form>}
      </div>
    </div>
  </div>;
}

/* ---------------- Full university page ---------------- */
function UniPage({u,onBack,onBook}){
  const ref=useRef(null);
  const tilt=e=>{const el=ref.current;if(!el||e.pointerType==='touch')return;const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.setProperty('--rx',(-y*10).toFixed(2)+'deg');el.style.setProperty('--ry',(x*14).toFixed(2)+'deg');};
  const flat=()=>{const el=ref.current;if(el){el.style.setProperty('--rx','0deg');el.style.setProperty('--ry','0deg');}};
  const lists=[['Bachelor’s programmes',u.ba],['Master’s programmes',u.ma],['Admission rules',u.notes]].filter(l=>l[1]&&l[1].length);
  return <main className="up">
    <div className="sa-container">
      <button type="button" className="rc-close up-back" onClick={onBack}>← Back</button>
      <section className="up-hero">
        <div className="up-copy">
          <p className="up-k">{u.city} · {u.type}</p>
          <h1>{u.name}</h1>
          <p className="up-why">{u.why}</p>
          <div className="up-cta">
            <button type="button" className="bk3d" onClick={onBook}><span className="bk-face"><i className="bk-orbit" aria-hidden="true"></i>Book Free Consultation<b aria-hidden="true">→</b></span></button>
            <button type="button" className="rc-close" onClick={onBack}>All universities</button>
          </div>
        </div>
        <div className="up-stage" onPointerMove={tilt} onPointerLeave={flat}>
          <div className="up-pic" ref={ref} style={{'--tone':u.tone}}><img src={u.image} alt={u.name} onError={e=>{e.currentTarget.style.display='none';}}/><span className="up-glare" aria-hidden="true"></span></div>
          <span className="up-ring" aria-hidden="true"></span>
        </div>
      </section>
      <section className="up-stats" aria-label="Key facts">
        <div className="up-stat" style={{'--i':0}}><span>Tuition</span><b>{u.fee}</b></div>
        <div className="up-stat" style={{'--i':1}}><span>Intake</span><b><span className="in-big">October</span> <small>Sep / Oct</small></b></div>
        <div className="up-stat" style={{'--i':2}}><span>PhD and preparatory</span><b>{u.phd}</b></div>
      </section>
      <section className="up-lists">
        {lists.map((l,k)=><article className="up-card" key={l[0]} style={{'--i':k}}><h2>{l[0]}</h2><ul>{l[1].map((t,n)=><li key={t} style={{'--n':n}}>{t}</li>)}</ul></article>)}
      </section>
      <p className="up-note">Programme availability depends on the yearly Ministry quota. Check your university’s own calendar before you apply.</p>
    </div>
  </main>;
}

/* ---------------- Scholarships page ---------------- */
const SCH=[
 {n:'Romanian Government Scholarship',s:'MFA · Ministry of Foreign Affairs',tag:'Main scholarship',lv:['Bachelor’s','Master’s','PhD'],
  d:'The main and most reliable government scholarship. Bangladeshi students apply directly, online, and it is free to apply.',
  rows:[['Levels','Bachelor’s (3–6 years), Master’s (1.5–2 years), PhD (3–4 years)'],['Not covered','Medicine, Dental Medicine and Pharmacy. Engineering, IT, Economics, Agriculture, Arts, Science and most other subjects are open.'],['Language','Bachelor’s and Master’s are taught in Romanian only. Students who do not know Romanian get a free 1-year preparatory year first. PhD can be in English or another foreign language if the doctoral school approves, with no preparatory year.']],
  ben:[['Tuition','100% waiver, preparatory year included'],['Accommodation','Free university dorm, subject to seat availability'],['Monthly stipend','About €65 Bachelor’s · €75 Master’s · €85 PhD, paid in RON'],['Medical and transport','Emergency medical support and student public-transport discount']],
  no:'Not covered: the plane ticket from Bangladesh, the visa fee, and daily food and personal costs.',
  link:'https://scholarships.studyinromania.gov.ro/',alt:'https://www.mae.ro/en/node/10251'},
 {n:'ARICE · Ministry of Economy Scholarship',s:'Ministry of Economy',tag:'Subject-limited',lv:['Bachelor’s','Master’s','PhD'],
  d:'Given for Economics, Business, Technical, Oil and Gas, and Agriculture subjects. Benefits are similar to the MFA scholarship, but there are fewer seats and the dates are irregular.',
  rows:[['Check','Exact dates and seats on the official portal before you plan around it.']],ben:[],no:'',link:'https://arice.gov.ro/'},
 {n:'Eugen Ionescu Research Scholarship',s:'AUF',tag:'Researchers only',lv:['PhD','Postdoc'],
  d:'A 3-month research mobility grant. Only researchers from Bangladeshi universities that are AUF members (for example DU, BUET, JU) can apply, and the research must be in French. Airfare and a stipend are covered.',
  rows:[],ben:[],no:'',link:'https://www.auf.org/'},
 {n:'Erasmus+ (Joint Masters / Exchange)',s:'European Union',tag:'Master’s and exchange',lv:['Master’s','Exchange'],
  d:'Many Romanian universities, including the University of Bucharest and Babeș-Bolyai University, are partners in Erasmus Mundus programmes. It usually covers full tuition, a travel allowance and a stipend of about €1,000–€1,400 a month.',
  rows:[],ben:[],no:'',link:'https://erasmus-plus.ec.europa.eu/'}
];
const SCH_STEPS=[['Dec – Jan','Applications usually open'],['By March','Applications close'],['Jun – Jul','Results, for the October start'],['October','Study starts']];
const SCH_DOCS=['Valid passport, at least 6 months valid after the programme start date','Birth certificate, translated into English','Academic certificates and transcripts: SSC/O-Level, HSC/A-Level, and every earlier degree for the level you apply to. Translated by an authorised translator into English, French, Spanish or Romanian. Check the current Apostille and attestation rules on the portal.','CV in Europass format','Motivation letter / letter of intent','PhD only: a research proposal, plus a Letter of Acceptance from a Romanian supervisor. Email the professor before you apply.'];
const SCH_WARN=[['Embassy and visa delay','There is no resident Romanian embassy in Dhaka. The long-stay student visa (D/SD) is processed through New Delhi. You apply online on eviza.mae.ro first, then go for biometrics and documents. Indian visa delays make many students miss the October start.'],['The stipend is small','€65–€85 a month does not cover food and living costs in Romania. Plan monthly money from your family.'],['No English at Bachelor’s or Master’s','Government scholarships teach Bachelor’s and Master’s in Romanian. To study in English you need a self-funded place (roughly €2,000–€3,500 a year in tuition) or Erasmus+.'],['No agent needed','Applying is fully online and 100% free. Do not trust anyone who promises a “guaranteed scholarship” or a “scholarship for a work permit”.']];
const SCH_EMB=[['New Delhi, India','Primary accredited embassy','The main designated mission for Bangladesh. If you have a valid Indian visa, or can arrange one, you submit your file and biometrics here.'],['Hanoi, Vietnam','Main official alternative','Romania’s foreign ministry has allowed Hanoi as the main alternative for students who cannot get an Indian visa. The Vietnam e-visa is comparatively easy, so most Bangladeshi students now process the visa from here.'],['Bangkok, Thailand','Designated alternative','Possible under a special ministry waiver. You need a Thai visa and approval to select Bangkok on the eViza portal.'],['Kuala Lumpur, Malaysia','Alternative mission','Some Bangladeshi students have been allowed to file here. If you go on a tourist visa, check the embassy’s current circular carefully because it can be strict.'],['UAE, Saudi Arabia, Qatar, UK and others','Legal residents only','Only if you already hold a valid residence permit, work visa or student visa for that country. Then you can apply at that country’s Romanian embassy without special permission.']];
const SCH_RULES=['A tourist visa is not enough. Going to Dubai, Qatar or any European country on a tourist visa does not let you apply at the Romanian embassy there. Outside the approved alternatives (Vietnam, Thailand, Malaysia), a long-term residence permit for that country is required.','Get approval on eviza.mae.ro before you buy a flight or a hotel. Submit the online application first and wait for the green checkmark or appointment slot. If you are applying at an alternative embassy without an Indian visa, that may need to be stated on the portal or at the embassy.','The embassy list changes. Hanoi, Bangkok and Kuala Lumpur depend on a temporary arrangement by the foreign ministry, and which embassy accepts which file can change at any time. Confirm on eviza.mae.ro and by email with the embassy before you book anything.'];

function SchPage({onBack,onBook}){
  const [i,setI]=useState(0);
  const m=SCH[i];
  const tilt=e=>{if(e.pointerType==='touch')return;const el=e.currentTarget,r=el.getBoundingClientRect();el.style.setProperty('--rx',(-((e.clientY-r.top)/r.height-.5)*8).toFixed(1)+'deg');el.style.setProperty('--ry',(((e.clientX-r.left)/r.width-.5)*10).toFixed(1)+'deg');};
  const flat=e=>{e.currentTarget.style.setProperty('--rx','0deg');e.currentTarget.style.setProperty('--ry','0deg');};
  return <main className="sp">
    <div className="sa-container">
      <button type="button" className="rc-close up-back" onClick={onBack}>← Back</button>
      <header className="sp-head">
        <p className="up-k">Romania · For Bangladeshi students</p>
        <h1>Scholarships you can <span className="h1-line2">actually apply for.</span></h1>
        <p className="up-why">Every scholarship below, with who it is for, what it pays, and the official portal. Always confirm the latest dates on the official site before you plan around them.</p>
      </header>
      <div className="sp-tabs" role="tablist" aria-label="Scholarships">{SCH.map((s,k)=><button type="button" role="tab" aria-selected={i===k} key={s.n} className={'sp-tab'+(i===k?' on':'')} style={{'--i':k}} onClick={()=>setI(k)}><span>{String(k+1).padStart(2,'0')}</span>{s.n.split(' · ')[0].replace(' Scholarship','')}</button>)}</div>
      <article className="sp-main" key={i}>
        <div className="sp-title">
          <span className="sp-tag">{m.tag}</span>
          <h2 className="sp-name">{m.n}</h2>
          <p className="sp-src">{m.s}</p>
          <div className="sp-lv">{m.lv.map(l=><span key={l}>{l}</span>)}</div>
          <p className="sp-d">{m.d}</p>
          <div className="sp-links"><a className="bk3d sm" href={m.link} target="_blank" rel="noopener noreferrer"><span className="bk-face">Official portal<b aria-hidden="true">↗</b></span></a>{m.alt&&<a className="rc-close" href={m.alt} target="_blank" rel="noopener noreferrer">Ministry page ↗</a>}</div>
        </div>
        {m.ben.length>0&&<div className="sp-ben">{m.ben.map((b,k)=><div className="sp-b" key={b[0]} style={{'--i':k}} onPointerMove={tilt} onPointerLeave={flat}><span>{b[0]}</span><b>{b[1]}</b></div>)}</div>}
        {m.rows.length>0&&<dl className="sp-rows">{m.rows.map((r,k)=><div key={r[0]} style={{'--i':k}}><dt>{r[0]}</dt><dd>{r[1]}</dd></div>)}</dl>}
        {m.no&&<p className="sp-no">{m.no}</p>}
      </article>
      <section className="sp-sec"><h2 className="sp-h">MFA timeline</h2>
        <ol className="sp-steps">{SCH_STEPS.map((s,k)=><li key={s[0]} style={{'--i':k}} onPointerMove={tilt} onPointerLeave={flat}><b>{s[0]}</b><span>{s[1]}</span></li>)}</ol>
        <p className="up-note">The exact 2027 dates have not been announced officially yet. Check the latest dates on studyinromania.gov.ro before you publish or plan.</p></section>
      <section className="sp-sec"><h2 className="sp-h">Documents for the MFA scholarship</h2>
        <p className="sp-sub">Upload everything as PDF on the online portal.</p>
        <ol className="sp-docs">{SCH_DOCS.map((d,k)=><li key={k} style={{'--i':k}}><span>{k+1}</span>{d}</li>)}</ol></section>
      <section className="sp-sec"><h2 className="sp-h">Real challenges, said honestly</h2>
        <div className="sp-warn">{SCH_WARN.map((w,k)=><div key={w[0]} style={{'--i':k}} onPointerMove={tilt} onPointerLeave={flat}><b>{w[0]}</b><p>{w[1]}</p></div>)}</div></section>
      <section className="sp-sec"><h2 className="sp-h">Where Bangladeshi students can face the Romanian embassy</h2>
        <div className="sp-emb">{SCH_EMB.map((e,k)=><div key={e[0]} style={{'--i':k}} onPointerMove={tilt} onPointerLeave={flat}><span className="sp-badge">{e[1]}</span><h3>{e[0]}</h3><p>{e[2]}</p></div>)}</div>
        <h3 className="sp-h3">Three rules to read before you book</h3>
        <ol className="sp-rules">{SCH_RULES.map((r,k)=><li key={k} style={{'--i':k}}>{r}</li>)}</ol></section>
      <div className="sp-end"><p>Not sure which route fits you?</p><button type="button" className="bk3d" onClick={onBook}><span className="bk-face"><i className="bk-orbit" aria-hidden="true"></i>Book Free Consultation<b aria-hidden="true">→</b></span></button></div>
    </div>
  </main>;
}

/* ---------------- Visa guide page ---------------- */
const VISA_KEY=[['60 days','to file your visa after the Letter of Acceptance or scholarship decree'],['€300','Type D visa fee. €0 for Government (MFA) and ARICE scholarship holders'],['15–30','working days is how long most complete files take. The legal limit is 60 days'],['20 hrs','a week of part-time work is allowed once you hold your residence permit']];
const VISA_STEPS=[
 ['Get the official Letter of Acceptance','Wait for the formal Letter of Acceptance from the Romanian Ministry of Education. A conditional university offer alone is not enough for a visa.'],
 ['Pay first-year tuition','Self-funded students transfer at least the first academic year’s tuition to the university’s official bank account and keep the SWIFT or bank receipt. Government and ARICE scholarship winners skip this step.'],
 ['Submit your file on eViza','Create an account on eviza.mae.ro, fill in the D/SD study visa form, upload clear PDF scans of every document, and submit for online pre-validation.'],
 ['Book your embassy appointment','Once the embassy reviews and validates your online file, pick an available date on the portal for your in-person submission and biometrics.'],
 ['Attend biometrics and submit originals','Go to the designated Romanian embassy with all originals, photocopies and the visa fee.'],
 ['Collect your visa, then get your residence permit','After you arrive in Romania, apply online on the IGI (General Inspectorate for Immigration) portal at least 30 days before your visa expires. You receive a 1-year Temporary Residence Permit (Permis de Ședere).']
];
const VISA_DOCS=[
 ['Valid passport','Issued within the last 10 years, with at least 2 blank pages, valid for 3 to 6 months beyond your intended visa duration.',''],
 ['Ministry Letter of Acceptance','The official acceptance from the Romanian Ministry of Education, or your official scholarship award notice.',''],
 ['Proof of tuition payment','University receipt or SWIFT confirmation for at least one full year of tuition.','Not needed for state scholarship holders'],
 ['Proof of financial means','A personal or sponsor bank statement showing about the Romanian minimum monthly net wage for the whole visa period: roughly €500+ a month, or about €5,000–€6,000 in total. It should show real transaction history, not a sudden last-minute deposit.','Exempt for MFA and ARICE scholarship holders'],
 ['Police clearance certificate','Issued by Bangladesh Police, attested and apostilled.',''],
 ['Travel and medical insurance','Valid across Romania for your whole visa period, with at least €30,000 medical cover.',''],
 ['Proof of accommodation','An official university dormitory confirmation letter, or a legally registered rental contract in Romania.',''],
 ['Academic certificates and transcripts','SSC, HSC, and Bachelor’s or Master’s certificates and mark sheets, translated into English or Romanian and properly attested.',''],
 ['Two recent photographs','3 cm × 4 cm, colour, ICAO standard, plain white background.','']
];
function VisaPage({onBack,onBook,onSch}){
  const tilt=e=>{if(e.pointerType==='touch')return;const el=e.currentTarget,r=el.getBoundingClientRect();el.style.setProperty('--rx',(-((e.clientY-r.top)/r.height-.5)*8).toFixed(1)+'deg');el.style.setProperty('--ry',(((e.clientX-r.left)/r.width-.5)*10).toFixed(1)+'deg');};
  const flat=e=>{e.currentTarget.style.setProperty('--rx','0deg');e.currentTarget.style.setProperty('--ry','0deg');};
  return <main className="sp vg">
    <div className="sa-container">
      <button type="button" className="rc-close up-back" onClick={onBack}>← Back</button>
      <header className="sp-head">
        <p className="up-k">Romania · Type D/SD study visa · 2026</p>
        <h1>Apply for your visa <span className="h1-line2">yourself. No middlemen.</span></h1>
        <p className="up-why">The full honest breakdown of the Romanian student visa for Bangladeshi students: the steps, documents, official fees and where to give biometrics. Check the official portal, <a className="vg-a" href="https://eviza.mae.ro/" target="_blank" rel="noopener noreferrer">eviza.mae.ro</a>, for the latest updates before you book flights or appointments.</p>
        <p className="vg-intake">Main intake: <b>October</b> <small>Sep / Oct</small>. Most Romanian universities run one main intake a year.</p>
      </header>
      <section className="vg-key" aria-label="Key numbers">{VISA_KEY.map((k,i)=><div className="vg-k" key={k[0]} style={{'--i':i}} onPointerMove={tilt} onPointerLeave={flat}><b>{k[0]}</b><span>{k[1]}</span></div>)}</section>
      <p className="vg-cat">Non-EU students, including Bangladeshi citizens, must get a National Long-Stay Visa for Studies (symbol D/SD) before travelling to Romania. Start preparing your bank statement, police clearance and document attestations as soon as you apply to a university, so you can file on eViza the moment your acceptance letter arrives.</p>
      <section className="sp-sec"><h2 className="sp-h">Step by step, on your own</h2>
        <p className="sp-sub">You do not need an agency to submit your file. The Romanian Ministry of Foreign Affairs processes applications directly through its official online system.</p>
        <ol className="vg-steps">{VISA_STEPS.map((s,i)=><li key={s[0]} style={{'--i':i}} onPointerMove={tilt} onPointerLeave={flat}><span className="vg-n">{i+1}</span><div><h3>{s[0]}</h3><p>{s[1]}</p></div></li>)}</ol></section>
      <section className="sp-sec"><h2 className="sp-h">Complete document checklist</h2>
        <p className="sp-sub">Prepare original hard copies and clean scanned PDFs of every document.</p>
        <div className="vg-docs">{VISA_DOCS.map((d,i)=><div className="vg-d" key={d[0]} style={{'--i':i}} onPointerMove={tilt} onPointerLeave={flat}><span className="vg-dn">{String(i+1).padStart(2,'0')}</span><h3>{d[0]}</h3><p>{d[1]}</p>{d[2]&&<em>{d[2]}</em>}</div>)}</div></section>
      <section className="sp-sec"><h2 className="sp-h">Where Bangladeshi students can face the embassy</h2>
        <p className="sp-sub">Romania has no resident embassy in Dhaka, so you travel abroad to submit originals and biometrics. Because of Indian visa restrictions, the foreign ministry lets Bangladeshi students apply through designated alternative missions.</p>
        <div className="sp-emb">{SCH_EMB.map((e,k)=><div key={e[0]} style={{'--i':k}} onPointerMove={tilt} onPointerLeave={flat}><span className="sp-badge">{e[1]}</span><h3>{e[0]}</h3><p>{e[2]}</p></div>)}</div>
        <p className="sp-no">Important: exemptions for alternative embassies can change with ministry instructions. Confirm that the mission accepts you on eviza.mae.ro before you buy flight tickets to Vietnam, Thailand or Malaysia. A tourist visa for the Middle East or Europe does not make you eligible to apply there.</p></section>
      <section className="sp-sec"><h2 className="sp-h">Official fees, processing time and work rights</h2>
        <div className="vg-fees">
          <div style={{'--i':0}} onPointerMove={tilt} onPointerLeave={flat}><span>Visa fee</span><b>€300</b><p>The Long-Stay (Type D) visa fee, paid at the embassy in local currency, for example INR in New Delhi.</p></div>
          <div style={{'--i':1}} onPointerMove={tilt} onPointerLeave={flat}><span>Scholarship waiver</span><b>€0</b><p>Romanian Government (MFA) and ARICE scholarship holders pay no visa fee. <button type="button" className="vg-link" onClick={onSch}>See scholarships →</button></p></div>
          <div style={{'--i':2}} onPointerMove={tilt} onPointerLeave={flat}><span>Processing time</span><b>15–30 days</b><p>Working days for most complete files. The legal decision period is up to 60 calendar days from your biometrics date.</p></div>
          <div style={{'--i':3}} onPointerMove={tilt} onPointerLeave={flat}><span>Part-time work</span><b>20 hrs / week</b><p>Up to 4 hours a day without a separate work permit, once you are in Romania with your Temporary Residence Permit.</p></div>
        </div>
        <p className="vg-ag">No agent advantage: the foreign ministry gives no priority or special access to agencies. Every applicant goes through the same eViza queue.</p></section>
      <div className="sp-end"><p>Want a second pair of eyes on your file?</p><p className="vg-endsub">Before you submit, we can check your acceptance letter, sponsor bank statement or eViza form for mistakes. Guidance for Bangladeshi students is free, with no hidden charges and no processing fees.</p><button type="button" className="bk3d" onClick={onBook}><span className="bk-face"><i className="bk-orbit" aria-hidden="true"></i>Book Free Consultation<b aria-hidden="true">→</b></span></button></div>
    </div>
  </main>;
}

function App(){
  const [view,setView]=useState('ring'),[prev,setPrev]=useState('ring'),[filter,setFilter]=useState(null),[page,setPage]=useState(null),[book,setBook]=useState(false);
  const onBook=()=>setBook(true);
  const go=v=>{setView(v);window.scrollTo(0,0);};
  const onOpen=id=>{const u=window.UNIVERSITIES.find(x=>x.id===id);if(!u)return;if(view!=='uni')setPrev(view);setPage(u);setView('uni');window.scrollTo(0,0);};
  return <React.Fragment>
    <SiteNav onHome={()=>go('ring')} onBook={onBook} onOpen={onOpen} onSch={()=>{if(view!=='sch'&&view!=='uni'&&view!=='visa')setPrev(view);go('sch');}} onVisa={()=>{if(view!=='sch'&&view!=='uni'&&view!=='visa')setPrev(view);go('visa');}}/>
    {view==='ring'&&<React.Fragment><Hero filter={filter} setFilter={setFilter} onGrid={()=>go('grid')} onOpen={onOpen} onBook={onBook}/><Facts/></React.Fragment>}
    {view==='grid'&&<GridView filter={filter} setFilter={setFilter} onRing={()=>go('ring')} onOpen={onOpen}/>}
    {view==='visa'&&<VisaPage onBack={()=>go(prev)} onBook={onBook} onSch={()=>go('sch')}/>}
    {view==='sch'&&<SchPage onBack={()=>go(prev)} onBook={onBook}/>}
    {view==='uni'&&page&&<UniPage key={page.id} u={page} onBack={()=>go(prev)} onBook={onBook}/>}
    {book&&<ConsultModal onClose={()=>setBook(false)}/>}
  </React.Fragment>;
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
