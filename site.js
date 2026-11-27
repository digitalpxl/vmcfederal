/* Shared header, footer and behaviour for every page.
   Usage: <body data-page="home|about|pokerrun|remembrance|support|bunker|contact"
                data-cta-label="..." data-cta-href="...">
          <div id="site-header"></div> ... <div id="site-footer"></div>
          <script src="site.js"></script> (before any page script) */
(function () {
  const WP = "https://www.vmcfederal.com.au/";
  const LOGO = "logo.png";
  const body = document.body;
  const page = body.dataset.page || "";
  const act = key => (page === key ? ' class="active" aria-current="page"' : "");

  const ctaLabel = body.dataset.ctaLabel || "Contact us";
  const ctaHref = body.dataset.ctaHref || "contact.html";

  const header = `
<a class="skip" href="#main">Skip to content</a>
<header>
  <div class="wrap nav">
    <a class="brand" href="index.html" aria-label="Veterans MC Federal Chapter home">
      <img src="${LOGO}" alt="">
      <span>Veterans MC<small>FEDERAL CHAPTER · ACT</small></span>
    </a>
    <button class="burger" aria-label="Open menu" aria-expanded="false" aria-controls="menu">☰</button>
    <ul class="menu" id="menu">
      <li class="has-sub"><a${act("about")} href="index.html#about">About</a>
        <ul class="sub">
          <li><a href="index.html#about">About the chapter</a></li>
          <li><a href="find-a-chapter.html">Find a chapter<small>VMC across Australia</small></a></li>
          <li><a href="contact.html">Contact &amp; clubhouse</a></li>
        </ul>
      </li>
      <li class="has-sub"><a${act("pokerrun")} href="poker-run.html">Poker Run</a>
        <ul class="sub">
          <li><a href="poker-run.html">2027 Tour of Duty<small>Upcoming</small></a></li>
          <li><a href="poker-run-2026.html">2026 Poker Run<small>Photos &amp; merch</small></a></li>
          <li><a href="poker-run-2025.html">2025 Poker Run<small>Photos</small></a></li>
        </ul>
      </li>
      <li class="has-sub"><a${act("remembrance")} href="battle-honours.html">Remembrance</a>
        <ul class="sub">
          <li><a href="anzac-day-traditions.html">Anzac Day traditions<small>The Gunfire Breakfast</small></a></li>
          <li><a href="anzac-day-2026.html">Anzac Day 2026<small>Photos</small></a></li>
          <li><a href="fallen-brothers.html">Fallen brothers</a></li>
          <li><a href="battle-honours.html">Battle honours</a></li>
        </ul>
      </li>
      <li><a${act("support")} href="veteran-support.html">Veteran Support</a></li>
      <li><a${act("bunker")} href="coffee-bunker.html">Coffee Bunker</a></li>
      <li><a href="https://vmc-federal-chapter-onlinestore.square.site/">Shop</a></li>
    </ul>
    <a class="btn btn-primary" href="${ctaHref}">${ctaLabel}</a>
  </div>
</header>`;

  const footer = `
<footer>
  <div class="wrap">
    <div class="fgrid">
      <div>
        <a class="brand" href="index.html"><img src="${LOGO}" alt=""><span>Veterans MC<small>FEDERAL CHAPTER · ACT</small></span></a>
        <p class="muted" style="margin-top:16px;max-width:34ch">We ride with purpose. We stand with veterans. We remember always.</p>
        <div class="social">
          <a href="https://www.facebook.com/VMCFederal/" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M14 8V6.5c0-.8.2-1.5 1.5-1.5H17V2h-2.7C11.4 2 10.5 3.8 10.5 6.3V8H8v3h2.5v11H14V11h2.6l.4-3Z"/></svg></a>
          <a href="https://www.instagram.com/veterans_mc_federal" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4ZM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 2c-2.7 0-3 0-4.1.1C4.3 2.2 2.2 4.3 2.1 7.9 2 9 2 9.3 2 12s0 3 .1 4.1c.1 3.6 2.2 5.7 5.8 5.8 1.1.1 1.4.1 4.1.1s3 0 4.1-.1c3.6-.1 5.7-2.2 5.8-5.8.1-1.1.1-1.4.1-4.1s0-3-.1-4.1c-.1-3.6-2.2-5.7-5.8-5.8C15 2 14.7 2 12 2Z"/></svg></a>
        </div>
      </div>
      <div><h4>Chapter</h4><ul><li><a href="index.html#about">About us</a></li><li><a href="coffee-bunker.html">The Coffee Bunker</a></li><li><a href="find-a-chapter.html">Find a chapter</a></li><li><a href="https://vmc-federal-chapter-onlinestore.square.site/">Supporters shop</a></li><li><a href="contact.html">Contact</a></li></ul></div>
      <div><h4>Events</h4><ul><li><a href="poker-run.html">2027 Poker Run</a></li><li><a href="poker-run-2026.html">2026 Poker Run</a></li><li><a href="poker-run-2025.html">2025 Poker Run</a></li><li><a href="anzac-day-2026.html">Anzac Day 2026</a></li></ul></div>
      <div><h4>Remembrance</h4><ul><li><a href="fallen-brothers.html">Fallen brothers</a></li><li><a href="battle-honours.html">Battle honours</a></li><li><a href="anzac-day-traditions.html">Anzac traditions</a></li><li><a href="veteran-support.html">Veteran support</a></li></ul></div>
    </div>
  </div>
  <div class="bigmark" aria-hidden="true">VMC Federal</div>
  <div class="wrap">
    <div class="fbottom">
      <span>© 2026 Veterans MC Federal Chapter · Canberra, ACT · Service. Brotherhood. Respect.</span>
      <span><a href="terms-of-use.html">Terms of use</a> · <a href="privacy-policy.html">Privacy policy</a></span>
      <span>Built by <a href="https://digitalpxl.org/" target="_blank" rel="noopener" style="color:var(--yellow)">Digital PXL</a></span>
    </div>
  </div>
</footer>`;

  const h = document.getElementById("site-header");
  if (h) h.outerHTML = header;
  const f = document.getElementById("site-footer");
  if (f) f.outerHTML = footer;

  // Mobile menu
  const burger = document.querySelector(".burger"), menu = document.getElementById("menu");
  if (burger && menu) {
    burger.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      burger.setAttribute("aria-expanded", open);
      burger.textContent = open ? "✕" : "☰";
    });
    menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); burger.textContent = "☰";
    }));
  }

  // Click-to-load YouTube (privacy-friendly, faster page)
  document.querySelectorAll(".video[data-id]").forEach(v => v.addEventListener("click", () => {
    const s = v.dataset.start ? `&start=${v.dataset.start}` : "";
    v.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${v.dataset.id}?autoplay=1&rel=0${s}" title="Video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
  }, { once: true }));

  // Photo gallery + lightbox: VMC.gallery(el, [{thumb, full}], {initial, label})
  let lb;
  function lightbox() {
    if (lb) return lb;
    const el = document.createElement("div");
    el.className = "lb"; el.setAttribute("role", "dialog"); el.setAttribute("aria-modal", "true"); el.setAttribute("aria-label", "Photo viewer");
    el.innerHTML = `<img alt=""><button class="close" aria-label="Close">✕</button><button class="prev" aria-label="Previous photo">‹</button><button class="next" aria-label="Next photo">›</button><div class="count"></div>`;
    document.body.appendChild(el);
    const img = el.querySelector("img"), count = el.querySelector(".count");
    let set = [], cur = 0, label = "Photo", last;
    const show = i => { cur = (i + set.length) % set.length; img.src = set[cur].full; img.alt = `${label} ${cur + 1}`; count.textContent = `${cur + 1} / ${set.length}`; };
    const close = () => { el.classList.remove("open"); document.body.style.overflow = ""; last && last.focus(); };
    el.querySelector(".close").onclick = close;
    el.querySelector(".prev").onclick = () => show(cur - 1);
    el.querySelector(".next").onclick = () => show(cur + 1);
    el.addEventListener("click", e => { if (e.target === el) close(); });
    document.addEventListener("keydown", e => {
      if (!el.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(cur - 1);
      if (e.key === "ArrowRight") show(cur + 1);
    });
    let sx = 0;
    el.addEventListener("touchstart", e => sx = e.touches[0].clientX, { passive: true });
    el.addEventListener("touchend", e => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1)); });
    lb = { open(photos, i, lab) { set = photos; label = lab; last = document.activeElement; show(i); el.classList.add("open"); document.body.style.overflow = "hidden"; el.querySelector(".close").focus(); } };
    return lb;
  }
  function gallery(el, photos, opts = {}) {
    const initial = opts.initial || 16, label = opts.label || "Photo";
    el.classList.add("gallery");
    el.innerHTML = photos.map((p, i) =>
      `<button class="${i >= initial ? "hide" : ""}" data-i="${i}" aria-label="Open ${label.toLowerCase()} ${i + 1} of ${photos.length}"><img src="${p.thumb}" alt="${p.alt || label + " " + (i + 1)}" loading="lazy"></button>`).join("");
    el._photos = photos; el._label = label;
    if (!el._wired) {
      el._wired = true;
      el.addEventListener("click", e => { const b = e.target.closest("button[data-i]"); if (b) lightbox().open(el._photos, +b.dataset.i, el._label); });
    }
    if (el.nextElementSibling && el.nextElementSibling.classList.contains("more")) el.nextElementSibling.remove();
    if (photos.length > initial) {
      const more = document.createElement("div");
      more.className = "more";
      more.innerHTML = `<button class="btn btn-ghost">Show all ${photos.length} photos</button>`;
      more.firstChild.onclick = () => { el.querySelectorAll(".hide").forEach(b => b.classList.remove("hide")); more.remove(); };
      el.after(more);
    }
  }
  window.VMC = { gallery };

  // Scroll reveal (runs after page scripts have added content)
  function reveal() {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0, rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", reveal); else setTimeout(reveal);

  // The header is injected after load, so re-apply any #anchor in the URL once the page is built
  window.addEventListener("load", () => {
    const t = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (t) t.scrollIntoView({ behavior: "instant", block: "start" });
  });
})();
