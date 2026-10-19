(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ano do rodapé
  try { document.getElementById('year').textContent = new Date().getFullYear(); } catch (e) {}

  // ---------- revelar ao rolar ----------
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  var stepsEl = document.getElementById('steps');
  function showAll() { reveals.forEach(function (el) { el.classList.add('in'); }); if (stepsEl) stepsEl.classList.add('in'); }
  if (!('IntersectionObserver' in window) || reduce) {
    showAll();
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
    if (stepsEl) {
      var io2 = new IntersectionObserver(function (en) {
        if (en[0].isIntersecting) { stepsEl.classList.add('in'); io2.disconnect(); }
      }, { threshold: 0.2 });
      io2.observe(stepsEl);
    }
    // segurança: se algo não disparar, mostra tudo depois de um tempo
    setTimeout(function () {
      reveals.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) el.classList.add('in');
      });
    }, 2500);
  }

  // ---------- header, barra de progresso e menu ativo ----------
  var topbar = document.getElementById('topbar');
  var progress = document.getElementById('progress');
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav a'));
  var sections = navLinks.map(function (a) { return document.querySelector(a.getAttribute('href')); });
  var ticking = false;
  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    topbar.classList.toggle('scrolled', y > 12);
    progress.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, y / max) : 0) + ')';
    var cur = -1;
    sections.forEach(function (s, i) { if (s && s.getBoundingClientRect().top < window.innerHeight * 0.4) cur = i; });
    navLinks.forEach(function (a, i) { a.classList.toggle('active', i === cur); });
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  // ---------- contadores do hero ----------
  var counters = Array.prototype.slice.call(document.querySelectorAll('[data-count]'));
  function runCounter(el) {
    var end = parseFloat(el.getAttribute('data-count'));
    var dec = parseInt(el.getAttribute('data-dec') || '0', 10);
    var prefix = el.getAttribute('data-prefix') || '';
    var t0 = null, dur = 1600;
    function frame(t) {
      if (t0 === null) t0 = t;
      var p = Math.min(1, (t - t0) / dur);
      var eased = 1 - Math.pow(2, -10 * p);
      el.textContent = prefix + (end * (p === 1 ? 1 : eased)).toFixed(dec);
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  if (!reduce && 'IntersectionObserver' in window) {
    setTimeout(function () { counters.forEach(runCounter); }, 700);
  }

  // ---------- inclinação suave do mockup (só com mouse) ----------
  var stage = document.getElementById('stage');
  var browser = document.getElementById('browser');
  if (!reduce && stage && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    stage.addEventListener('pointermove', function (e) {
      var r = stage.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5;
      var py = (e.clientY - r.top) / r.height - 0.5;
      browser.style.setProperty('--ry', (px * 7).toFixed(2) + 'deg');
      browser.style.setProperty('--rx', (-py * 7).toFixed(2) + 'deg');
    });
    stage.addEventListener('pointerleave', function () {
      browser.style.setProperty('--ry', '0deg');
      browser.style.setProperty('--rx', '0deg');
    });
  }

  // ---------- galeria: só aparece se as imagens existirem ----------
  var section = document.getElementById('design');
  var figs = Array.prototype.slice.call(document.querySelectorAll('#gallery figure'));
  var pending = figs.length, ok = 0;
  function done() { pending--; if (pending === 0 && ok > 0) section.hidden = false; }
  figs.forEach(function (f) {
    var img = f.querySelector('img');
    img.addEventListener('load', function () { ok++; done(); });
    img.addEventListener('error', function () { f.remove(); done(); });
    if (img.complete) { if (img.naturalWidth > 0) { ok++; } else { f.remove(); } done(); }
  });

  // ---------- copiar telefone ----------
  var btn = document.getElementById('copyPhone');
  var txt = document.getElementById('phoneText');
  btn.addEventListener('click', function () {
    var num = '(11) 95776-7799';
    function selectText() {
      try {
        var r = document.createRange(); r.selectNodeContents(txt);
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      } catch (e) {}
    }
    try {
      navigator.clipboard.writeText(num).then(function () {
        txt.textContent = 'Copiado!';
        setTimeout(function () { txt.textContent = num; }, 1600);
      }, selectText);
    } catch (e) { selectText(); }
  });
})();
