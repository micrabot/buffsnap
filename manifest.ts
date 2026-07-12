:root {
  --black: #070707;
  --ink: #121212;
  --muted: #666;
  --line: #dedede;
  --paper: #fff;
  --soft: #f5f5f3;
  --gold: #ffb800;
  --gold-dark: #d69400;
  --max: 1180px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; color: var(--ink); background: var(--paper); font-family: Arial, Helvetica, sans-serif; -webkit-font-smoothing: antialiased; }
a { color: inherit; text-decoration: none; }
svg { width: 1.3em; height: 1.3em; fill: currentColor; }
.shell { width: min(calc(100% - 36px), var(--max)); margin-inline: auto; }

.site-header { position: sticky; top: 0; z-index: 50; background: rgba(7,7,7,.96); color: #fff; border-bottom: 1px solid rgba(255,255,255,.12); backdrop-filter: blur(10px); }
.header-inner { min-height: 76px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
.brand { display: inline-flex; align-items: baseline; font-size: 25px; font-weight: 900; letter-spacing: -1.2px; position: relative; padding-bottom: 17px; }
.brand strong { color: var(--gold); }
.brand small { position: absolute; left: 0; bottom: 3px; color: #cfcfcf; font-size: 10px; font-weight: 600; letter-spacing: .2px; white-space: nowrap; }
.desktop-nav { display: flex; align-items: center; gap: 25px; font-size: 14px; font-weight: 700; }
.desktop-nav a:hover { color: var(--gold); }
.nav-cta { background: var(--gold); color: #000 !important; padding: 12px 18px; border-radius: 7px; }
.mobile-nav { display: none; position: relative; }
.mobile-nav summary { list-style: none; width: 42px; height: 42px; display: grid; place-content: center; gap: 5px; cursor: pointer; }
.mobile-nav summary::-webkit-details-marker { display: none; }
.mobile-nav summary span { width: 23px; height: 2px; background: #fff; display: block; }
.mobile-nav-panel { position: absolute; right: 0; top: 53px; width: min(310px, calc(100vw - 28px)); padding: 16px; background: #111; border: 1px solid #333; border-radius: 10px; box-shadow: 0 15px 45px rgba(0,0,0,.4); display: grid; gap: 6px; }
.mobile-nav-panel a { padding: 13px; border-radius: 6px; font-weight: 700; }

.hero { min-height: 750px; position: relative; color: #fff; display: flex; align-items: center; background-image: url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=88"); background-size: cover; background-position: center; }
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(0,0,0,.93) 0%, rgba(0,0,0,.77) 42%, rgba(0,0,0,.22) 80%), linear-gradient(0deg, rgba(0,0,0,.45), transparent 45%); }
.hero-content { position: relative; padding-block: 85px; }
.eyebrow { color: var(--gold); font-size: 13px; font-weight: 900; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 16px; }
.eyebrow.dark { color: #9a6900; }
h1, h2, h3, p { margin-top: 0; }
h1 { font-size: clamp(48px, 7vw, 84px); line-height: .98; letter-spacing: -4px; max-width: 780px; margin-bottom: 25px; }
h1 em { color: var(--gold); font-style: normal; }
h2 { font-size: clamp(36px, 5vw, 58px); line-height: 1.02; letter-spacing: -2.3px; margin-bottom: 22px; }
h3 { font-size: 24px; letter-spacing: -.7px; }
p { line-height: 1.62; }
.hero-lead { max-width: 625px; font-size: 22px; color: #f2f2f2; }
.proof-card { width: min(100%, 470px); margin: 28px 0; display: flex; align-items: center; gap: 18px; padding: 20px 22px; border: 1px solid rgba(255,255,255,.14); border-radius: 12px; background: rgba(255,255,255,.09); backdrop-filter: blur(8px); }
.proof-mark { width: 58px; height: 58px; border-radius: 50%; display: grid; place-items: center; background: conic-gradient(#4285f4 0 25%, #34a853 0 50%, #fbbc05 0 75%, #ea4335 0); color: white; font-size: 31px; font-weight: 900; border: 6px solid #fff; }
.proof-card strong, .proof-card small { display: block; }
.proof-card strong { font-size: 27px; letter-spacing: -1px; }
.proof-card small { color: #ddd; margin-top: 3px; }
.stat-row { display: grid; grid-template-columns: repeat(3, 1fr); width: min(100%, 700px); margin: 28px 0; }
.stat-row > div { padding: 0 22px; border-right: 1px solid rgba(255,255,255,.22); display: grid; gap: 5px; }
.stat-row > div:first-child { padding-left: 0; }
.stat-row > div:last-child { border-right: 0; }
.stat-row svg { color: var(--gold); font-size: 29px; }
.stat-row strong { text-transform: uppercase; font-size: 13px; }
.stat-row span { color: #c9c9c9; font-size: 12px; }
.button-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
.button { display: inline-flex; justify-content: center; align-items: center; min-height: 52px; padding: 0 25px; border-radius: 7px; text-transform: uppercase; font-size: 13px; font-weight: 900; letter-spacing: .3px; border: 2px solid transparent; cursor: pointer; }
.button.primary { background: linear-gradient(180deg, #ffc72c, var(--gold)); color: #000; box-shadow: 0 10px 25px rgba(255,184,0,.19); }
.button.primary:hover { transform: translateY(-1px); }
.button.outline { border-color: var(--gold); color: #fff; background: rgba(0,0,0,.22); }
.button.wide { width: 100%; }
.text-link { font-weight: 900; color: #8e6100; }

.section { padding: 100px 0; }
.section-lead { font-size: 20px; color: #333; }
.split-grid { display: grid; grid-template-columns: 1.05fr .95fr; gap: clamp(42px, 8vw, 100px); align-items: center; }
.value-section { background: var(--soft); }
.big-callout { padding: 23px; margin: 30px 0 20px; border-left: 5px solid var(--gold); background: #fff; box-shadow: 0 8px 24px rgba(0,0,0,.05); }
.big-callout strong, .big-callout span { display: block; }
.big-callout strong { font-size: 25px; margin-bottom: 5px; }
.fine-print { font-size: 12px; color: #777; }
.benefit-panel { background: #0d0d0d; color: #fff; border-radius: 16px; padding: clamp(28px, 5vw, 48px); box-shadow: 0 24px 70px rgba(0,0,0,.18); }
.benefit-panel h3 { font-size: 30px; }
.check-list { list-style: none; padding: 0; margin: 25px 0; display: grid; gap: 15px; }
.check-list li { display: flex; align-items: flex-start; gap: 12px; line-height: 1.45; }
.check-list li > span { flex: 0 0 25px; width: 25px; height: 25px; border-radius: 50%; display: grid; place-items: center; background: var(--gold); color: #000; margin-top: -1px; }
.check-list li svg { width: 16px; }
.benefit-panel .text-link { color: var(--gold); }
.section-heading { max-width: 760px; margin-bottom: 48px; }
.section-heading.centered { text-align: center; margin-inline: auto; }
.section-heading p { color: var(--muted); font-size: 18px; }
.tech-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 22px; }
.tech-card { display: grid; grid-template-columns: 180px 1fr; gap: 26px; align-items: center; border: 1px solid var(--line); border-radius: 15px; padding: 30px; background: #fff; }
.tech-card.featured { border: 2px solid var(--gold); box-shadow: 0 18px 40px rgba(0,0,0,.08); }
.tech-card.compact { grid-column: 1 / -1; grid-template-columns: 120px 1fr; background: #111; color: #fff; }
.tech-card small { color: #9a6900; font-weight: 900; text-transform: uppercase; letter-spacing: .7px; }
.tech-card h3 { margin: 7px 0 10px; }
.tech-card p { color: #666; margin: 0; }
.tech-card.compact p { color: #bbb; }
.camera-visual { height: 205px; border-radius: 13px; background: linear-gradient(145deg, #282828, #050505); display: grid; place-items: center; position: relative; box-shadow: inset 0 0 0 1px rgba(255,255,255,.12), 0 18px 30px rgba(0,0,0,.18); }
.camera-visual::before { content: ""; position: absolute; top: 28px; width: 88px; height: 45px; border-radius: 6px; background: repeating-linear-gradient(90deg,#0e0e0e 0 12px,#253b44 12px 24px); border: 2px solid #555; }
.camera-visual::after { content: ""; position: absolute; bottom: 29px; width: 58px; height: 58px; border-radius: 50%; border: 8px solid #303030; background: radial-gradient(circle, #2a6370 0 18%, #030506 19% 50%, #151515 51%); box-shadow: 0 0 0 2px #666; }
.camera-visual.pro3 { height: 205px; border-radius: 55px 55px 16px 16px; background: linear-gradient(145deg,#171717,#030303); }
.camera-visual.pro3::before { top: 38px; width: 92px; height: 92px; border-radius: 50%; background: radial-gradient(circle, #264752 0 15%, #050505 16% 45%, #292929 46% 58%, #080808 59%); }
.camera-visual.pro3::after { bottom: 18px; width: 88px; height: 37px; border-radius: 7px; border: 0; background: #111; box-shadow: inset 0 0 0 1px #444; }
.camera-visual span { position: absolute; bottom: 8px; z-index: 2; color: var(--gold); font-size: 10px; font-weight: 900; letter-spacing: 1px; }
.camera-visual.pro3 span { bottom: 27px; }
.round-camera { width: 105px; aspect-ratio: 1; display: grid; place-items: center; border-radius: 50%; background: radial-gradient(circle at 40% 35%, #3b6471 0 10%, #000 11% 34%, #262626 35% 52%, #080808 53%); color: #fff; font-size: 17px; font-weight: 900; border: 2px solid #555; }

.experience-section { background: #080b0c; color: #fff; }
.experience-section h2 { max-width: 650px; }
.experience-section .section-lead { color: #d4d4d4; }
.dark-list li > span { background: transparent; border: 1px solid var(--gold); color: var(--gold); }
.disclosure { color: #999; font-size: 12px; border-top: 1px solid #333; padding-top: 18px; }
.experience-panel { background: linear-gradient(145deg,#181d1f,#0a0c0d); padding: 42px; border: 1px solid #2b3133; border-radius: 16px; display: grid; gap: 6px; }
.experience-panel > svg { color: var(--gold); width: 55px; height: 55px; margin-bottom: 20px; }
.experience-panel strong { color: var(--gold); font-size: 38px; letter-spacing: -1.5px; }
.experience-panel span { color: #c9c9c9; margin-bottom: 15px; }
.experience-panel hr { width: 100%; border: 0; border-top: 1px solid #333; margin: 10px 0 22px; }
.service-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.service-card { padding: 38px; border-radius: 16px; border: 1px solid var(--line); background: #fff; transition: .2s ease; }
.service-card:hover { transform: translateY(-4px); border-color: var(--gold); box-shadow: 0 20px 50px rgba(0,0,0,.09); }
.service-card > svg { width: 50px; height: 50px; color: var(--gold-dark); margin-bottom: 25px; }
.service-card > span { display: block; color: #8d6200; font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: .8px; }
.service-card h3 { font-size: 31px; margin: 9px 0 14px; }
.service-card p { color: var(--muted); }
.service-card strong { color: #8c6000; }
.quote-section { background: linear-gradient(135deg,#090909,#1b1b1b); color: #fff; }
.quote-layout { display: grid; grid-template-columns: .8fr 1.2fr; gap: 70px; align-items: start; }
.quote-layout h2 { font-size: clamp(40px,5vw,64px); }
.quote-layout > div > p { color: #ccc; font-size: 18px; }
.quote-points { display: grid; gap: 10px; color: #e7e7e7; margin-top: 30px; }
.quote-form { background: #fff; color: var(--ink); border-radius: 15px; padding: clamp(24px,4vw,40px); }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 17px; }
.quote-form label { display: grid; gap: 7px; font-size: 13px; font-weight: 800; }
.quote-form input, .quote-form select, .quote-form textarea { width: 100%; border: 1px solid #cfcfcf; border-radius: 7px; padding: 13px; font: inherit; background: #fff; }
.quote-form input:focus, .quote-form select:focus, .quote-form textarea:focus { outline: 3px solid rgba(255,184,0,.22); border-color: var(--gold-dark); }
.full-field { margin-top: 17px; }
.honeypot { position: absolute; left: -9999px; }
.form-note { font-size: 11px; color: #777; text-align: center; margin: 12px 0 0; }
.form-message { padding: 12px; border-radius: 6px; margin: 14px 0 0; font-size: 13px; }
.form-message.success { background: #e9f8ed; color: #145b25; }
.form-message.error { background: #fff0f0; color: #8d1d1d; }

.subhero { min-height: 610px; color: #fff; display: flex; align-items: center; background-size: cover; background-position: center; position: relative; }
.subhero::before { content: ""; position: absolute; inset: 0; background: linear-gradient(90deg,rgba(0,0,0,.92),rgba(0,0,0,.58),rgba(0,0,0,.2)); }
.google-subhero { background-image: url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=88"); }
.commercial-subhero { background-image: url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=88"); }
.subhero-content { position: relative; padding-block: 90px; }
.subhero h1 { max-width: 900px; font-size: clamp(48px,7vw,78px); }
.subhero p { max-width: 730px; font-size: 20px; color: #eee; }
.icon-badge { width: 58px; height: 58px; border-radius: 50%; display: grid; place-items: center; background: var(--gold); color: #000; margin-bottom: 24px; }
.icon-badge svg { width: 30px; height: 30px; }
.metric-panel { border-radius: 16px; background: #101010; color: #fff; padding: 42px; display: grid; }
.metric-panel strong { color: var(--gold); font-size: 50px; letter-spacing: -2px; border-top: 1px solid #333; padding-top: 22px; }
.metric-panel strong:first-child { border-top: 0; padding-top: 0; }
.metric-panel span { color: #bbb; margin-bottom: 23px; }
.alt-section { background: var(--soft); }
.pill-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 13px; max-width: 900px; margin: auto; }
.pill-grid > div { display: flex; align-items: center; gap: 11px; background: #fff; padding: 16px 18px; border: 1px solid var(--line); border-radius: 9px; font-weight: 700; }
.pill-grid span { width: 26px; height: 26px; border-radius: 50%; background: var(--gold); display: grid; place-items: center; }
.steps-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 18px; }
.steps-grid article { padding: 28px; border: 1px solid var(--line); border-radius: 13px; }
.steps-grid b { width: 42px; height: 42px; display: grid; place-items: center; border-radius: 50%; background: var(--gold); font-size: 20px; margin-bottom: 22px; }
.steps-grid h3 { font-size: 20px; }
.steps-grid p { color: var(--muted); font-size: 14px; }
.center-cta { text-align: center; margin-top: 38px; }
.case-panel { background: #0d0d0d; color: #fff; padding: 42px; border-radius: 16px; }
.case-panel > svg { width: 58px; height: 58px; color: var(--gold); }
.case-panel h3 { font-size: 30px; margin-top: 20px; }
.case-panel div { display: grid; border-top: 1px solid #333; padding: 18px 0; }
.case-panel strong { color: var(--gold); font-size: 28px; }
.case-panel span, .case-panel p { color: #bdbdbd; }

.site-footer { background: #050505; color: #fff; padding: 70px 0 28px; }
.footer-grid { display: grid; grid-template-columns: 1.3fr .7fr .8fr; gap: 50px; }
.footer-brand { padding-bottom: 0; margin-bottom: 17px; }
.footer-grid p, .footer-grid a { color: #aaa; font-size: 14px; }
.footer-grid a { display: block; margin-bottom: 10px; }
.footer-grid h3 { font-size: 16px; color: var(--gold); }
.legal-line { border-top: 1px solid #222; margin-top: 45px; padding-top: 22px; display: flex; justify-content: space-between; gap: 20px; color: #777; font-size: 10px; }
.mobile-sticky { display: none; }

@media (max-width: 900px) {
  .desktop-nav { display: none; }
  .mobile-nav { display: block; }
  .hero { min-height: auto; background-position: 62% center; }
  .hero-overlay { background: linear-gradient(0deg,rgba(0,0,0,.97) 0%,rgba(0,0,0,.76) 78%,rgba(0,0,0,.42)); }
  .hero-content { padding-block: 65px 80px; }
  h1 { font-size: clamp(44px,12vw,65px); letter-spacing: -2.5px; }
  h2 { font-size: clamp(34px,9vw,48px); }
  .split-grid, .quote-layout { grid-template-columns: 1fr; gap: 45px; }
  .tech-grid { grid-template-columns: 1fr; }
  .tech-card.compact { grid-column: auto; }
  .service-grid { grid-template-columns: 1fr; }
  .steps-grid { grid-template-columns: repeat(2,1fr); }
  .footer-grid { grid-template-columns: 1fr 1fr; }
  .footer-grid > div:first-child { grid-column: 1 / -1; }
}

@media (max-width: 620px) {
  .shell { width: min(calc(100% - 28px), var(--max)); }
  .header-inner { min-height: 67px; }
  .brand { font-size: 22px; }
  .section { padding: 72px 0; }
  .hero-content { padding-top: 50px; }
  .hero-lead { font-size: 18px; }
  .proof-card { padding: 16px; }
  .proof-mark { width: 49px; height: 49px; font-size: 25px; }
  .proof-card strong { font-size: 22px; }
  .stat-row { grid-template-columns: 1fr; gap: 0; border-top: 1px solid rgba(255,255,255,.18); }
  .stat-row > div, .stat-row > div:first-child { grid-template-columns: 38px 1fr; padding: 15px 0; border-right: 0; border-bottom: 1px solid rgba(255,255,255,.18); }
  .stat-row svg { grid-row: 1 / span 2; align-self: center; }
  .button-row { display: grid; }
  .button { width: 100%; }
  .tech-card, .tech-card.compact { grid-template-columns: 1fr; padding: 22px; }
  .camera-visual { width: 170px; justify-self: center; }
  .round-camera { justify-self: center; }
  .experience-panel { padding: 28px; }
  .service-card { padding: 28px; }
  .form-grid { grid-template-columns: 1fr; }
  .quote-form { padding: 22px; }
  .pill-grid, .steps-grid { grid-template-columns: 1fr; }
  .subhero { min-height: auto; }
  .subhero-content { padding-block: 65px 80px; }
  .subhero h1 { font-size: 46px; letter-spacing: -2.2px; }
  .footer-grid { grid-template-columns: 1fr; }
  .footer-grid > div:first-child { grid-column: auto; }
  .legal-line { flex-direction: column; }
  .mobile-sticky { position: fixed; z-index: 45; bottom: 0; left: 0; right: 0; display: block; padding: 9px 12px calc(9px + env(safe-area-inset-bottom)); background: rgba(0,0,0,.93); border-top: 1px solid #333; backdrop-filter: blur(8px); }
  .mobile-sticky a { display: flex; min-height: 49px; align-items: center; justify-content: center; background: var(--gold); color: #000; border-radius: 7px; font-weight: 900; text-transform: uppercase; font-size: 13px; }
  .site-footer { padding-bottom: 100px; }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { transition: none !important; }
}

/* Accessibility, legal pages, and launch essentials */
.skip-link { position: fixed; left: 12px; top: -80px; z-index: 1000; padding: 12px 16px; border-radius: 7px; background: var(--gold); color: #000; font-weight: 900; transition: top .15s ease; }
.skip-link:focus { top: 12px; }
a:focus-visible, button:focus-visible, summary:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible { outline: 3px solid rgba(255,184,0,.65); outline-offset: 3px; }
.form-note a, .legal-content a, .legal-line a { color: var(--gold-dark); text-decoration: underline; text-underline-offset: 3px; }
.legal-links { display: flex; gap: 14px; white-space: nowrap; }
.legal-page { padding: 85px 0 110px; background: var(--soft); }
.legal-content { max-width: 860px; background: #fff; border: 1px solid var(--line); border-radius: 16px; padding: clamp(28px, 6vw, 64px); box-shadow: 0 20px 55px rgba(0,0,0,.06); }
.legal-content h1 { max-width: none; font-size: clamp(44px, 7vw, 70px); }
.legal-content h2 { font-size: 28px; margin-top: 38px; letter-spacing: -1px; }
.legal-content p { color: #444; }
.not-found-page { min-height: 62vh; display: grid; align-items: center; padding: 90px 0; background: var(--soft); }
.not-found-page h1 { max-width: 750px; }
.not-found-page p { font-size: 19px; color: var(--muted); margin-bottom: 28px; }

@media (max-width: 620px) {
  .legal-page { padding: 48px 0 90px; }
  .legal-content { padding: 25px 20px; }
  .legal-line { gap: 13px; }
  .legal-links { order: 2; }
}


/* Google-described business tour benefits */
.google-claim-strip { padding: 58px 0; background: #fff; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.google-claim-inner { display: grid; grid-template-columns: 1fr 1.25fr auto; gap: 42px; align-items: center; }
.google-claim-inner h2 { font-size: clamp(34px, 4vw, 48px); margin-bottom: 0; }
.google-claim-inner p { margin: 0; color: #444; font-size: 18px; }
.google-proof-section { background: #fff; }
.google-benefit-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
.google-benefit-grid article { border: 1px solid var(--line); border-radius: 15px; padding: 30px; background: var(--soft); }
.google-benefit-grid article > span { width: 42px; height: 42px; border-radius: 50%; display: grid; place-items: center; background: var(--gold); color: #000; margin-bottom: 22px; }
.google-benefit-grid article > span svg { width: 22px; height: 22px; }
.google-benefit-grid h3 { font-size: 23px; margin-bottom: 11px; }
.google-benefit-grid p { margin: 0; color: var(--muted); }
.study-callout { margin-top: 28px; padding: clamp(26px, 5vw, 44px); border-radius: 16px; background: #0d0d0d; color: #fff; border-left: 6px solid var(--gold); }
.study-callout strong { display: block; color: var(--gold); font-size: clamp(24px, 4vw, 38px); letter-spacing: -1px; margin-bottom: 12px; }
.study-callout p { max-width: 900px; font-size: 18px; color: #eee; margin-bottom: 12px; }
.study-callout small { display: block; color: #aaa; line-height: 1.5; margin-bottom: 18px; }
.study-callout a { color: var(--gold); font-weight: 900; }

@media (max-width: 900px) {
  .google-claim-inner { grid-template-columns: 1fr; gap: 20px; }
  .google-claim-inner .button { justify-self: start; }
  .google-benefit-grid { grid-template-columns: 1fr; }
}

@media (max-width: 620px) {
  .google-claim-strip { padding: 48px 0; }
  .google-claim-inner .button { width: 100%; }
  .google-benefit-grid article { padding: 25px; }
}


/* Google Business Profile opportunity section */
.profile-gap-section { background: #fff; }
.profile-gap-grid { display: grid; grid-template-columns: .95fr 1.05fr; gap: clamp(40px, 7vw, 88px); align-items: center; }
.profile-gap-copy h2 { max-width: 740px; }
.gap-callout { margin: 28px 0 18px; padding: 24px 26px; border-left: 6px solid var(--gold); border-radius: 0 12px 12px 0; background: var(--soft); }
.gap-callout strong { display: block; font-size: clamp(24px, 3vw, 34px); letter-spacing: -1px; margin-bottom: 7px; }
.gap-callout span { display: block; color: #444; line-height: 1.6; }
.profile-visual { overflow: hidden; border: 1px solid #dedede; border-radius: 20px; background: #fff; box-shadow: 0 24px 65px rgba(0,0,0,.12); }
.profile-visual-top { display: flex; align-items: center; gap: 13px; padding: 20px 22px 16px; border-bottom: 1px solid #ececec; }
.profile-visual-top div { display: grid; gap: 2px; }
.profile-visual-top strong { font-size: 17px; }
.profile-visual-top small { color: #777; }
.profile-dot { width: 42px; height: 42px; display: grid; place-items: center; border-radius: 50%; background: var(--gold); color: #000; font-weight: 900; }
.profile-tabs { display: flex; gap: 24px; padding: 14px 22px 0; color: #777; font-size: 13px; }
.profile-tabs strong { color: #111; padding-bottom: 12px; border-bottom: 3px solid var(--gold); }
.profile-scenes { display: grid; grid-template-columns: 1fr 38px 1fr; align-items: stretch; padding: 22px; background: #f7f7f7; }
.profile-scene { min-height: 260px; border-radius: 14px; padding: 22px; display: flex; flex-direction: column; justify-content: flex-end; position: relative; overflow: hidden; color: #fff; }
.profile-scene::before { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 25%, rgba(0,0,0,.82)); }
.profile-scene > * { position: relative; z-index: 1; }
.profile-scene small { color: rgba(255,255,255,.78); text-transform: uppercase; font-weight: 800; letter-spacing: .7px; margin-bottom: 7px; }
.profile-scene strong { font-size: clamp(24px, 3vw, 34px); line-height: 1.02; letter-spacing: -1px; margin-bottom: 8px; }
.profile-scene span { font-size: 13px; color: rgba(255,255,255,.82); }
.outside-scene { background: linear-gradient(135deg,#6c8498,#c8d3dc 55%,#596b5d); }
.outside-scene::after { content: ""; position: absolute; left: -10%; right: -10%; bottom: 28%; height: 28%; transform: skewY(-5deg); background: rgba(50,50,50,.42); border-top: 7px solid rgba(255,255,255,.55); }
.inside-scene { background: linear-gradient(135deg,#55391d,#d2954d 45%,#171717); }
.inside-scene::after { content: ""; position: absolute; inset: 14% 10% 33%; border: 2px solid rgba(255,255,255,.34); border-radius: 4px; box-shadow: inset 0 0 0 999px rgba(255,255,255,.04); }
.profile-arrow { display: grid; place-items: center; font-size: 31px; color: #111; font-weight: 900; }
.tour-page-gap { background: var(--soft); }
.tour-page-gap .profile-visual { background: #fff; }

@media (max-width: 900px) {
  .profile-gap-grid { grid-template-columns: 1fr; }
  .profile-gap-copy { order: 1; }
  .profile-visual { order: 2; }
}

@media (max-width: 620px) {
  .profile-scenes { grid-template-columns: 1fr; gap: 12px; padding: 14px; }
  .profile-arrow { transform: rotate(90deg); min-height: 26px; }
  .profile-scene { min-height: 220px; }
  .profile-tabs { overflow-x: auto; white-space: nowrap; }
  .gap-callout { padding: 21px 20px; }
}
