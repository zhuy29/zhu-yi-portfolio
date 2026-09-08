/**
 * 渲染 + 导航 / 动效
 */
(function () {
  const P = window.PORTFOLIO;
  if (!P) return;

  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };

  const escape = (s) =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  function renderNav() {
    return `
      <header class="site-nav" id="top">
        <a class="brand" href="#top">
          <span class="brand-mark">${escape(P.meta.name.slice(0, 1))}</span>
          <span class="brand-text">
            <strong>${escape(P.meta.name)}</strong>
            <small>${escape(P.meta.nameEn)} · PERSONAL SITE</small>
          </span>
        </a>
        <nav class="nav-links" aria-label="主导航">
          ${P.nav.map((n) => `<a href="${n.href}">${escape(n.label)}</a>`).join("")}
        </nav>
        <a class="btn-resume" href="${P.meta.resumeHref}" target="_blank" rel="noopener">
          查看简历 <span aria-hidden="true">↗</span>
        </a>
        <button class="nav-toggle" type="button" aria-label="打开菜单" id="nav-toggle">
          <span></span><span></span>
        </button>
      </header>
      <div class="nav-drawer" id="nav-drawer" hidden>
        ${P.nav.map((n) => `<a href="${n.href}">${escape(n.label)}</a>`).join("")}
        <a href="${P.meta.resumeHref}" target="_blank" rel="noopener">查看简历 ↗</a>
      </div>
    `;
  }

  function renderHero() {
    const h = P.hero;
    const m = P.meta;
    return `
      <section class="hero" id="hero">
        <div class="hero-copy">
          <p class="kicker">${escape(h.kicker)}</p>
          <h1 class="hero-title">
            <span class="brush">${escape(h.greeting)}</span>
          </h1>
          <div class="hero-intro">
            <p class="intro-path">${escape(h.path)}</p>
            <div class="intro-personality">
              <p class="personality-label">${escape(h.personalityLabel)}</p>
              <p class="personality-desc">${escape(h.personalityDesc)}</p>
            </div>
          </div>
          <blockquote class="hero-quote">${escape(h.quote)}</blockquote>
          <div class="hero-actions">
            <a class="btn-primary" href="${h.primaryCta.href}">
              ${escape(h.primaryCta.label)} <span aria-hidden="true">↓</span>
            </a>
            <a class="btn-text" href="${h.secondaryCta.href}">
              ${escape(h.secondaryCta.label)} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div class="hero-tags">
            ${h.tags.map((t) => `<span>${escape(t)}</span>`).join("")}
          </div>
          <ul class="hero-links">
            ${h.quickLinks
              .map(
                (l) => `
              <li>
                <a href="${l.href}" ${
                  l.href.endsWith(".pdf") || l.href.startsWith("http")
                    ? 'target="_blank" rel="noopener"'
                    : ""
                }${l.action === "下载" ? " download" : ""}>
                  <span class="cl-label">${escape(l.label)}</span>
                  <span class="cl-value">${escape(l.value)}</span>
                  <span class="cl-action" aria-hidden="true">${l.action === "下载" ? "↓" : "↗"}</span>
                </a>
              </li>`
              )
              .join("")}
          </ul>
        </div>
        <div class="hero-visual">
          <div class="orbit" aria-hidden="true"></div>
          <figure class="polaroid reveal">
            <span class="tape">${escape(m.role)}</span>
            <img src="${m.photo}" alt="${escape(m.name)}的个人照片" width="640" height="800" />
            <figcaption class="exp-card">
              <p class="exp-label">${escape(h.experienceCard.title)}</p>
              <ul>
                ${h.experienceCard.items
                  .map(
                    (i) => `
                  <li>
                    <span class="exp-company">${escape(i.company)}</span>
                    <span class="exp-job">${escape(i.role)}</span>
                  </li>`
                  )
                  .join("")}
              </ul>
            </figcaption>
            <aside class="sticky-note">${escape(h.stickyNote)}</aside>
          </figure>
        </div>
      </section>
    `;
  }

  function renderCoordinates() {
    const c = P.coordinates;
    return `
      <section class="section coordinates" id="coordinates">
        <p class="kicker">${escape(c.kicker)}</p>
        <div class="section-head">
          <h2>${escape(c.title)}</h2>
          <p>${escape(c.body)}</p>
        </div>
        <div class="coord-grid">
          ${c.cards
            .map(
              (card) => `
            <a class="coord-card tone-${card.tone}" href="${card.href}">
              <div class="coord-meta">
                <span>${escape(card.no)}</span>
                <span>${escape(card.en)}</span>
              </div>
              <div class="coord-body">
                <h3>${escape(card.title)}</h3>
                <p>${escape(card.desc)}</p>
              </div>
              <div class="coord-rings" aria-hidden="true"></div>
            </a>`
            )
            .join("")}
        </div>
      </section>
    `;
  }

  function renderExperience() {
    const e = P.experience;
    return `
      <section class="section experience" id="experience">
        <div class="exp-layout">
          <aside class="exp-sticky">
            <p class="kicker">${escape(e.kicker)}</p>
            <h2>${escape(e.title)}</h2>
            <blockquote class="exp-quote">${escape(e.body)}</blockquote>
            <div class="mustard-box">${escape(e.stickyQuote)}</div>
          </aside>
          <div class="exp-timeline">
            <div class="timeline-line" aria-hidden="true"></div>
            ${e.items
              .map(
                (item) => `
              <article class="exp-item reveal" id="exp-${item.no}">
                <div class="timeline-node">${escape(item.no)}</div>
                <div class="exp-card-main">
                  <div class="exp-top">
                    <span>${escape(item.date)}</span>
                    <span class="exp-dept">${escape(item.category)}</span>
                  </div>
                  <h3>${escape(item.company)}</h3>
                  <p class="exp-role">${escape(item.role)}</p>
                  <p class="exp-summary">${escape(item.summary)}</p>
                  <div class="metric-row">
                    ${item.metrics
                      .map(
                        (m) => `
                      <div class="metric">
                        <strong>${escape(m.value)}</strong>
                        <span>${escape(m.label)}</span>
                      </div>`
                      )
                      .join("")}
                  </div>
                  <div class="tag-row">
                    ${item.tags.map((t) => `<span>${escape(t)}</span>`).join("")}
                  </div>
                  ${
                    item.links.length
                      ? `<div class="link-row">${item.links
                          .map(
                            (l) =>
                              `<a href="${l.href}" target="_blank" rel="noopener">${escape(l.label)} ↗</a>`
                          )
                          .join("")}</div>`
                      : ""
                  }
                </div>
              </article>`
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderVibe() {
    const v = P.vibe;
    return `
      <section class="section vibe" id="vibe">
        <p class="kicker">${escape(v.kicker)}</p>
        <div class="section-head">
          <h2>${escape(v.title)}</h2>
          <p>${escape(v.body)}</p>
        </div>
        <div class="vibe-columns">
          ${v.columns
            .map(
              (col) => `
            <div class="vibe-col">
              <span class="vibe-no">${escape(col.no)}</span>
              <h3>${escape(col.title)}</h3>
              <p>${escape(col.desc)}</p>
            </div>`
            )
            .join("")}
        </div>
        <div class="demo-grid">
          ${v.demos
            .map(
              (d) => `
            <a class="demo-card" href="${d.href}" target="_blank" rel="noopener">
              <span class="demo-tag">${escape(d.tag)}</span>
              <h3>${escape(d.title)}</h3>
              <p>${escape(d.summary)}</p>
              <span class="demo-go">打开查看 ↗</span>
            </a>`
            )
            .join("")}
        </div>
      </section>
    `;
  }

  function renderThinking() {
    const t = P.thinking;
    return `
      <section class="section thinking" id="thinking">
        <p class="kicker">${escape(t.kicker)}</p>
        <div class="think-grid">
          <div class="think-title">
            <h2>
              ${t.titleLines.map((line) => `<span>${escape(line)}</span>`).join("")}
            </h2>
          </div>
          <div class="bento stats-card">
            ${t.stats
              .map(
                (s) => `
              <div>
                <strong>${escape(s.value)}</strong>
                <span>${escape(s.label)}</span>
              </div>`
              )
              .join("")}
          </div>
          <div class="bento profile-card">
            <div class="avatar-wrap">
              <img src="${t.avatar}" alt="${escape(t.profile.name)}" />
            </div>
            <div>
              <h3>${escape(t.profile.name)}</h3>
              <p class="loc">${escape(t.vibeLine)}</p>
              <ul>
                ${t.profile.bio.map((b) => `<li>${escape(b)}</li>`).join("")}
              </ul>
              <div class="tag-row">
                ${t.profile.skills.map((s) => `<span>${escape(s)}</span>`).join("")}
              </div>
              <p class="awards">${escape(t.awards)}</p>
            </div>
          </div>
          <div class="bento style-card">
            <h3>${escape(t.style.title)}</h3>
            <div class="style-gallery">
              ${t.style.photos
                .map(
                  (src, i) => `
                <figure>
                  <img src="${src}" alt="生活切片 ${i + 1}" loading="lazy" />
                </figure>`
                )
                .join("")}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderContact() {
    const c = P.contact;
    return `
      <section class="section contact" id="contact">
        <div class="contact-inner">
          <div class="contact-copy">
            <p class="kicker light">${escape(c.kicker)}</p>
            <h2>${escape(c.title)}</h2>
            <p>${escape(c.body)}</p>
          </div>
          <ul class="contact-list">
            ${c.links
              .map(
                (l) => `
              <li>
                <a href="${l.href}" ${l.href.startsWith("http") || l.href.endsWith(".pdf") ? 'target="_blank" rel="noopener"' : ""}>
                  <span class="cl-label">${escape(l.label)}</span>
                  <span class="cl-value">${escape(l.value)}</span>
                  <span class="cl-action" aria-hidden="true">${l.action === "下载" ? "↓" : "↗"}</span>
                </a>
              </li>`
              )
              .join("")}
          </ul>
        </div>
        <footer class="site-foot">
          <span>${escape(P.meta.name)}</span>
          <span>${escape(P.meta.tagline)}</span>
        </footer>
      </section>
    `;
  }

  function mount() {
    const root = document.getElementById("app");
    root.innerHTML =
      renderNav() +
      renderHero() +
      renderCoordinates() +
      renderExperience() +
      renderVibe() +
      renderThinking() +
      renderContact();

    bindInteractions();
  }

  function bindInteractions() {
    const toggle = document.getElementById("nav-toggle");
    const drawer = document.getElementById("nav-drawer");
    if (toggle && drawer) {
      toggle.addEventListener("click", () => {
        const open = !drawer.hasAttribute("hidden");
        if (open) drawer.setAttribute("hidden", "");
        else drawer.removeAttribute("hidden");
        toggle.classList.toggle("open", !open);
      });
      drawer.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => {
          drawer.setAttribute("hidden", "");
          toggle.classList.remove("open");
        })
      );
    }

    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const id = a.getAttribute("href");
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    const nav = document.querySelector(".site-nav");
    const onScroll = () => {
      if (!nav) return;
      nav.classList.toggle("scrolled", window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal, .coord-card, .demo-card, .bento, .vibe-col, .style-gallery figure").forEach((n) => {
      n.classList.add("reveal");
      io.observe(n);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
