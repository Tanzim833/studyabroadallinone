/* Elliptical 3D ring gallery — vanilla JS, transform/opacity only, one rAF loop. */
(function(){
var TAU=Math.PI*2;
function clamp(v,a,b){return v<a?a:v>b?b:v;}
function createRing(stage,all,cb){
  cb=cb||{};
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var layer=document.createElement('div');layer.className='ring-layer';stage.appendChild(layer);
  var dot=document.createElement('div');dot.className='cur';stage.appendChild(dot);
  var cards=[],els=[],zs=[],far=[],N=0,W=0,H=0,cx=0,cy=0,rx=0,ry=0,cw=38,ch=100,mobile=false;
  var rot=0,vel=-0.045,mx=0,my=0,tmx=0,tmy=0,hover=-1,sel=-1,filter=null,drag=null,inside=false,targetRot=null;
  var dx=0,dy=0,px=0,py=0,leaveT=0,raf=0,last=performance.now(),t0=last,visible=true;

  function pick(n){
    var by={},keys=[];all.forEach(function(p){if(!by[p.university]){by[p.university]=[];keys.push(p.university);}by[p.university].push(p);});
    var out=[],k=0;while(out.length<n){var arr=by[keys[k%keys.length]];out.push(arr[Math.floor(k/keys.length)%arr.length]);k++;}
    return out;
  }
  function build(n){
    layer.innerHTML='';els=[];zs=[];far=[];N=n;cards=pick(n);
    var frag=document.createDocumentFragment();
    cards.forEach(function(p,i){
      var el=document.createElement('div');el.className='ring-card';el.dataset.i=i;el.style.setProperty('--tone',p.tone);
      var img=document.createElement('img');img.alt=p.title+', '+p.university;img.loading='lazy';img.decoding='async';img.draggable=false;
      img.onerror=function(){img.style.visibility='hidden';};img.src=p.thumb;el.appendChild(img);
      frag.appendChild(el);els.push(el);zs.push(-1);far.push(false);
    });
    layer.appendChild(frag);
  }
  function measure(){
    var r=stage.getBoundingClientRect();W=r.width;H=r.height;mobile=W<900||W/H<0.95;stage.classList.toggle('compact',mobile);
    var tab=mobile&&W>=600;
    cx=W/2;cy=H*(mobile?(tab?0.7:0.71):0.5);
    rx=mobile?W*(tab?0.42:0.46):Math.min(W*(W<1200?0.34:0.38),780);ry=mobile?Math.min(H*(tab?0.14:0.13),H-cy-80):H*0.33;
    cw=mobile?(tab?32:24):(W<1100?32:38);ch=mobile?(tab?84:64):(W<1100?86:100);
    stage.style.setProperty('--cw',cw+'px');stage.style.setProperty('--ch',ch+'px');
    if(!mobile){ry=Math.min(ry,(H-cy-ch*0.6-76)/1.1);}
    var n=mobile?(tab?96:64):(W<1100?104:132);if(n!==N)build(n);
    cb.onLayout&&cb.onLayout({W:W,H:H,cx:cx,cy:cy,rx:rx,ry:ry,ch:ch,mobile:mobile});
  }
  function frontIndex(){var b=-1,bi=0;for(var i=0;i<N;i++){var s=Math.sin(i/N*TAU+rot);if(s>b){b=s;bi=i;}}return bi;}
  function setHover(i){
    clearTimeout(leaveT);
    if(i===hover)return;
    if(hover>=0&&els[hover])els[hover].classList.remove('hov');
    hover=i;if(i>=0)els[i].classList.add('hov');
    dot.classList.toggle('big',i>=0);
    cb.onHover&&cb.onHover(i>=0?cards[i]:null);
  }
  function select(i){
    if(sel>=0&&els[sel])els[sel].classList.remove('sel');
    sel=i;
    if(i<0){targetRot=null;cb.onSelect&&cb.onSelect(null);return;}
    els[i].classList.add('sel');
    var r0=Math.PI/2-i/N*TAU;r0+=Math.round((rot-r0)/TAU)*TAU;targetRot=r0;
    cb.onSelect&&cb.onSelect(cards[i]);
  }
  function frame(now){
    raf=requestAnimationFrame(frame);
    if(!visible)return;
    var dt=Math.min(0.05,(now-last)/1000);last=now;
    mx+=(tmx-mx)*0.06;my+=(tmy-my)*0.06;
    dx+=(px-dx)*0.22;dy+=(py-dy)*0.22;
    dot.style.transform='translate3d('+dx+'px,'+dy+'px,0)';
    if(drag){}
    else if(targetRot!==null){rot+=(targetRot-rot)*Math.min(1,dt*4);vel=0;}
    else{
      var want=reduce?0:(hover>=0?-0.004:-0.045)-(inside&&!mobile?mx*0.32:0);
      vel+=(want-vel)*Math.min(1,dt*1.8);rot+=vel*dt;
    }
    var ryE=ry*(1+my*0.1),cyE=cy-my*10,xo=-mx*16,el,p,th,s,c,d,x,y,sc,op,z,isFar;
    for(var i=0;i<N;i++){
      el=els[i];p=cards[i];th=i/N*TAU+rot;s=Math.sin(th);c=Math.cos(th);d=(s+1)/2;
      x=cx+xo+c*rx-cw/2;y=cyE+s*ryE-ch/2;
      sc=0.5+0.55*d;op=0.24+0.76*Math.pow(d,1.25);z=Math.round(d*300);
      if(i===hover){sc*=1.25;op=1;z=900;}
      if(filter&&p.city!==filter)op*=0.12;
      else if(sel>=0&&i!==sel)op*=0.6;
      var k=reduce?1:clamp((now-t0-150-i*6)/700,0,1);k=1-Math.pow(1-k,3);op*=k;sc*=0.88+0.12*k;
      el.style.transform='translate3d('+x.toFixed(1)+'px,'+y.toFixed(1)+'px,0) perspective(700px) rotateY('+(-c*58).toFixed(1)+'deg) scale('+sc.toFixed(3)+')';
      el.style.opacity=op.toFixed(3);
      if(z!==zs[i]){el.style.zIndex=z;zs[i]=z;}
      isFar=d<0.2;if(isFar!==far[i]){el.classList.toggle('far',isFar);far[i]=isFar;}
    }
  }
  function local(e){var r=stage.getBoundingClientRect();return [e.clientX-r.left,e.clientY-r.top];}
  function onMove(e){
    var l=local(e);px=l[0];py=l[1];tmx=clamp(l[0]/W*2-1,-1,1);tmy=clamp(l[1]/H*2-1,-1,1);inside=true;dot.classList.add('on');
    if(drag){
      var ddx=e.clientX-drag.x;
      if(!drag.moved&&Math.abs(ddx)>5){drag.moved=true;stage.setPointerCapture&&stage.setPointerCapture(e.pointerId);targetRot=null;setHover(-1);}
      if(drag.moved){var nr=drag.rot-ddx/rx*0.9;var t=performance.now();var dtt=Math.max(1,t-drag.t)/1000;drag.v=(nr-rot)/dtt*0.6+drag.v*0.4;rot=nr;drag.t=t;}
    }
  }
  function onOver(e){
    if(drag&&drag.moved)return;
    var el=e.target.closest&&e.target.closest('.ring-card');
    if(el)setHover(+el.dataset.i);
    else if(e.target.closest&&e.target.closest('button,a,.ring-label'))dot.classList.add('big');
  }
  function onOut(e){
    var to=e.relatedTarget;
    if(!(to&&to.closest&&to.closest('.ring-card'))&&hover>=0){clearTimeout(leaveT);leaveT=setTimeout(function(){setHover(-1);},260);}
    if(!(to&&to.closest&&to.closest('button,a,.ring-label,.ring-card')))dot.classList.remove('big');
  }
  function onDown(e){
    if(e.button!==0||e.target.closest('button,a,input,select,textarea'))return;
    drag={x:e.clientX,rot:rot,t:performance.now(),v:0,moved:false,target:e.target};
  }
  function onUp(){
    if(!drag)return;var d=drag;drag=null;
    if(d.moved){vel=clamp(d.v,-3,3);return;}
    var el=d.target.closest&&d.target.closest('.ring-card');
    if(el)select(+el.dataset.i);else if(sel>=0&&!d.target.closest('.ring-center'))select(-1);
  }
  function onLeave(){inside=false;tmx=0;tmy=0;dot.classList.remove('on');}
  function onKey(e){
    if(e.target!==stage)return;
    if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();var b=sel>=0?sel:frontIndex();select((b+(e.key==='ArrowRight'?-1:1)+N)%N);}
    else if(e.key==='Enter'&&sel>=0){cb.onOpen&&cb.onOpen(cards[sel]);}
    else if(e.key==='Escape'&&sel>=0)select(-1);
  }
  stage.addEventListener('pointermove',onMove);
  stage.addEventListener('pointerover',onOver);
  stage.addEventListener('pointerout',onOut);
  stage.addEventListener('pointerdown',onDown);
  window.addEventListener('pointerup',onUp);
  stage.addEventListener('pointerleave',onLeave);
  stage.addEventListener('keydown',onKey);
  var ro=new ResizeObserver(measure);ro.observe(stage);
  var io=new IntersectionObserver(function(en){visible=en[0].isIntersecting;});io.observe(stage);
  measure();raf=requestAnimationFrame(frame);
  return {
    setFilter:function(f){filter=f||null;if(sel>=0&&filter&&cards[sel].city!==filter)select(-1);},
    deselect:function(){select(-1);},
    destroy:function(){cancelAnimationFrame(raf);ro.disconnect();io.disconnect();clearTimeout(leaveT);window.removeEventListener('pointerup',onUp);
      stage.removeEventListener('pointermove',onMove);stage.removeEventListener('pointerover',onOver);stage.removeEventListener('pointerout',onOut);
      stage.removeEventListener('pointerdown',onDown);stage.removeEventListener('pointerleave',onLeave);stage.removeEventListener('keydown',onKey);
      layer.remove();dot.remove();}
  };
}
window.createRing=createRing;
})();
