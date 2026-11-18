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

function Hero({filter,setFilter,onGrid,onOpen}){
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
        <h1>Study in Romania with one team handling admission, scholarship and visa.</h1>
        <p>{nU} accredited universities across {nC} cities, one intake a year in September/October. Check where you stand before you pay anything.</p>
        <div className="rc-actions"><Button variant="primary">Book Free Consultation</Button><span className="btn-2"><Button variant="secondary" onClick={onGrid}>See All Universities</Button></span></div>
      </div>
      <div className={'rc-preview'+(shown?' in':'')} aria-live="polite">
        {p&&<React.Fragment>
          <div className="rc-eyebrow">{p.level} · {p.city}</div>
          <div className="rc-title">{p.title}</div>
          <div className="rc-img" style={{'--tone':p.tone}}><img key={p.id} src={p.image} alt={p.university} onError={e=>{e.currentTarget.style.display='none';}}/></div>
          <div className="rc-meta">{p.university}<span>{p.fee}</span></div>
          <div className="rc-cta" style={{visibility:sel?'visible':'hidden'}}>
            <Button variant="primary" size="sm" onClick={()=>onOpen(p.uid)}>View University +</Button>
            <button className="ulink" onClick={()=>ringRef.current.deselect()}>Close</button>
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
  return <section className="gv" data-screen-label="Grid view">
    <div className="sa-container">
      <div className="gv-head">
        <div><h1>Universities in Romania</h1><p>{list.length} accredited universities{filter?' in '+filter:' across '+window.CITIES.length+' cities'}</p></div>
        <button className="btn3d dark" onClick={onRing}>Ring view <b>+</b></button>
      </div>
      <div className="chips"><CityChips filter={filter} setFilter={setFilter} total={window.UNIVERSITIES.length}/></div>
      <div className="gv-grid">
        {list.map(u=><article className="gv-card" key={u.id}>
          <div className="gv-img" style={{'--tone':u.tone}}><img loading="lazy" src={u.card} alt={u.name} onError={e=>{e.currentTarget.style.display='none';}}/></div>
          <div className="m">{u.city} · {u.type}</div>
          <h3>{u.name}</h3>
          <div className="tp">{u.fee}</div>
          <div className="tp mute">{u.ba.length+u.ma.length} English programmes · {u.ba.slice(0,2).join(' · ')}</div>
          <button className="ulink" onClick={()=>onOpen(u.id)}>View University +</button>
        </article>)}
      </div>
    </div>
  </section>;
}

function Facts(){
  return <section className="band facts-band" data-screen-label="Romania facts">
    <div className="sa-container">
      <p className="eyebrow">Studying in Romania from Bangladesh</p>
      <h2 className="h3d">What to know before you apply.</h2>
      <div className="facts">{window.ROMANIA_FACTS.map((f,i)=><div className="fact" key={f[0]}><span className="n">{String(i+1).padStart(2,'0')}</span><div className="big">{f[2]}</div><h3>{f[0]}</h3><p>{f[1]}</p></div>)}</div>
    </div>
  </section>;
}

function UniDrawer({u,onClose}){
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
          <div><dt>Intake</dt><dd>September / October</dd></div>
          <div><dt>PhD and preparatory</dt><dd>{u.phd}</dd></div>
        </dl>
        {u.ba.length>0&&<div className="drw-list"><h3>Bachelor’s programmes</h3><ul>{u.ba.map(t=><li key={t}>{t}</li>)}</ul></div>}
        {u.ma.length>0&&<div className="drw-list"><h3>Master’s programmes</h3><ul>{u.ma.map(t=><li key={t}>{t}</li>)}</ul></div>}
        {u.notes&&<div className="drw-list"><h3>Admission rules</h3><ul>{u.notes.map(t=><li key={t}>{t}</li>)}</ul></div>}
        <p className="drw-note">Programme availability depends on the yearly Ministry quota.</p>
        <Button variant="primary" fullWidth>Book Free Consultation</Button>
      </React.Fragment>}
    </aside>
  </div>;
}

const NAV_LINKS=['Universities','Scholarships','Visa Guides'];
function SiteNav({onHome}){
  const [open,setOpen]=useState(false);
  const [mobile,setMobile]=useState(window.innerWidth<900);
  useEffect(()=>{const f=()=>setMobile(window.innerWidth<900);window.addEventListener('resize',f);return ()=>window.removeEventListener('resize',f);},[]);
  useEffect(()=>{if(!mobile)setOpen(false);},[mobile]);
  return <header className="site-nav">
    <nav>
      <a href="#" onClick={e=>{e.preventDefault();setOpen(false);onHome();}}>STUDY ABROAD ALL IN ONE</a>
      {!mobile&&<div>{NAV_LINKS.map(l=><a key={l} href="#" onClick={e=>e.preventDefault()}>{l}</a>)}</div>}
      {!mobile&&<Button variant="primary" size="sm">Book Free Consultation</Button>}
      {mobile&&<div className="nav-burger"><IconButton label={open?'Close menu':'Open menu'} onClick={()=>setOpen(!open)}><Icon name={open?'x':'menu'} size={18}/></IconButton></div>}
    </nav>
    {mobile&&open&&<div className="nav-sheet">
      {NAV_LINKS.map(l=><a key={l} href="#" onClick={e=>{e.preventDefault();setOpen(false);}}>{l}</a>)}
      <Button variant="primary" fullWidth onClick={()=>setOpen(false)}>Book Free Consultation</Button>
    </div>}
  </header>;
}

function App(){
  const [view,setView]=useState('ring'),[filter,setFilter]=useState(null),[open,setOpen]=useState(null);
  const onOpen=id=>setOpen(window.UNIVERSITIES.find(u=>u.id===id));
  const go=v=>{setView(v);window.scrollTo(0,0);};
  return <React.Fragment>
    <SiteNav onHome={()=>go('ring')}/>
    {view==='ring'?<React.Fragment><Hero filter={filter} setFilter={setFilter} onGrid={()=>go('grid')} onOpen={onOpen}/><Facts/></React.Fragment>:<GridView filter={filter} setFilter={setFilter} onRing={()=>go('ring')} onOpen={onOpen}/>}
    <UniDrawer u={open} onClose={()=>setOpen(null)}/>
  </React.Fragment>;
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
