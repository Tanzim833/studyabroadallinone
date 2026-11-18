/* Space background: twinkling stars in 3 depth layers, a slow drift, the odd
   shooting star. Pure canvas, no libraries. Stops itself for reduced motion. */
(function () {
  'use strict';
  var cv = document.createElement('canvas');
  cv.id = 'space'; cv.setAttribute('aria-hidden', 'true');
  document.body.insertBefore(cv, document.body.firstChild);
  var neb = document.createElement('div'); neb.className = 'nebula'; neb.setAttribute('aria-hidden', 'true');
  document.body.insertBefore(neb, document.body.firstChild);
  var planet = document.createElement('div'); planet.className = 'planet'; planet.setAttribute('aria-hidden', 'true');
  document.body.insertBefore(planet, document.body.firstChild);

  var ctx = cv.getContext('2d'), W = 0, H = 0, stars = [], shoot = null, dpr = Math.min(window.devicePixelRatio || 1, 2);
  var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var tint = ['255,255,255', '190,215,255', '255,230,200', '200,190,255'];

  function size() {
    W = window.innerWidth; H = window.innerHeight;
    cv.width = W * dpr; cv.height = H * dpr; cv.style.width = W + 'px'; cv.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var n = Math.round(Math.min(260, W * H / 6500));
    stars = [];
    for (var i = 0; i < n; i++) {
      var z = Math.random();
      stars.push({ x: Math.random() * W, y: Math.random() * H, z: z,
        r: 0.4 + z * 1.5, s: 0.03 + z * 0.12, p: Math.random() * 6.28, f: 0.6 + Math.random() * 1.8,
        c: tint[(Math.random() * tint.length) | 0] });
    }
  }
  function frame(t) {
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      var a = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t / 1000 * s.f + s.p));
      ctx.fillStyle = 'rgba(' + s.c + ',' + (a * (0.5 + s.z * 0.5)).toFixed(3) + ')';
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.283); ctx.fill();
      if (!calm) { s.y += s.s; if (s.y > H + 2) { s.y = -2; s.x = Math.random() * W; } }
    }
    if (!calm) {
      if (!shoot && Math.random() < 0.004) shoot = { x: Math.random() * W * 0.8 + W * 0.2, y: Math.random() * H * 0.4, l: 0 };
      if (shoot) {
        var g = ctx.createLinearGradient(shoot.x, shoot.y, shoot.x + 120, shoot.y - 70);
        g.addColorStop(0, 'rgba(255,255,255,.95)'); g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.strokeStyle = g; ctx.lineWidth = 1.6; ctx.beginPath();
        ctx.moveTo(shoot.x, shoot.y); ctx.lineTo(shoot.x + 120, shoot.y - 70); ctx.stroke();
        shoot.x -= 16; shoot.y += 9; shoot.l++;
        if (shoot.l > 50) shoot = null;
      }
      requestAnimationFrame(frame);
    }
  }
  size(); window.addEventListener('resize', size);
  requestAnimationFrame(frame);
})();
