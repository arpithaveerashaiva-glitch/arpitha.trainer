/* Intro assembly + cover reveal. Hand-drawn SVG interpretation of the brand idea;
   swap in the real logo file for the final reveal (see README). */
(function () {
  var root = document.documentElement, intro = document.getElementById('intro'), skip = document.getElementById('skip');
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, seen = false, finished = false;
  try { seen = sessionStorage.getItem('introSeen') === '1'; } catch (e) {}
  function finish() {
    if (finished) return; finished = true;
    root.classList.remove('intro-on'); root.classList.add('ready');
    if (intro) { intro.classList.add('out'); setTimeout(function () { intro.remove(); }, 1000); }
    try { sessionStorage.setItem('introSeen', '1'); } catch (e) {}
  }
  if (!intro || reduce) { finish(); }
  else {
    if (seen) root.classList.add('short');
    setTimeout(finish, seen ? 1300 : 3600);
    if (skip) skip.addEventListener('click', finish);
  }
  if (!reduce) {
    var ticking = false;
    addEventListener('scroll', function () {
      if (ticking) return; ticking = true;
      requestAnimationFrame(function () {
        root.style.setProperty('--py', Math.min(scrollY * .12, 60) + 'px'); ticking = false;
      });
    }, { passive: true });
  }
})();
