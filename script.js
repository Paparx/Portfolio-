// Typed effect
  const roles = [
    "Backend Developer",
    "AI Enthusiast",
    "Django Developer",
    "Cloud Learner",
  ];
  let ri = 0, ci = 0, del = false;
  const el = document.getElementById('typed');
  function type() {
    const cur = roles[ri];
    if (!del) {
      el.textContent = cur.slice(0, ++ci);
      if (ci === cur.length) { del = true; setTimeout(type, 1800); return; }
    } else {
      el.textContent = cur.slice(0, --ci);
      if (ci === 0) { del = false; ri = (ri + 1) % roles.length; }
    }
    setTimeout(type, del ? 55 : 90);
  }
  type();

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  reveals.forEach(r => io.observe(r));

  // Nav scroll class
  window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 40);
  });

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('drawer');
  hamburger.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
  });
  function closeDrawer() {
    drawer.classList.remove('open');
    hamburger.classList.remove('open');
  }
  // Close drawer on outside click
  document.addEventListener('click', e => {
    if (!drawer.contains(e.target) && !hamburger.contains(e.target)) closeDrawer();
  });