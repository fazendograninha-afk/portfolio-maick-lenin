import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Maick Lenin — Editor & Produtor Audiovisual</title>
        <meta name="description" content="Portfolio de Maick Lenin — Editor, Produtor Audiovisual e Street Artist. São Paulo." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: `<style>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&family=DM+Sans:ital,wght@0,300;0,400;1,300&display=swap");
*{box-sizing:border-box;margin:0;padding:0}
html,body{background:#020608;color:#e8f5ee;font-family:"DM Sans",sans-serif;overflow-x:hidden;width:100%}
a{color:inherit;text-decoration:none}
canvas{position:fixed;inset:0;z-index:0;pointer-events:none}
.grid{position:fixed;inset:0;z-index:0;pointer-events:none;opacity:.04;background-image:linear-gradient(rgba(0,255,136,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,136,1) 1px,transparent 1px);background-size:60px 60px}
.scan{position:fixed;inset:0;z-index:1;pointer-events:none;background:repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,136,.012) 3px,rgba(0,255,136,.012) 4px)}
.amb{position:fixed;inset:0;z-index:0;background:radial-gradient(ellipse 70% 50% at 50% -10%,rgba(0,255,136,.06) 0%,transparent 70%);pointer-events:none}
.wrap{position:relative;z-index:10}
.w{max-width:1100px;margin:0 auto;padding:0 32px}

/* NAV */
nav{position:sticky;top:0;z-index:50;display:flex;align-items:center;justify-content:space-between;padding:14px 32px;background:rgba(2,6,8,.92);backdrop-filter:blur(20px);border-bottom:1px solid rgba(0,255,136,.08)}
.nl{font-family:"Orbitron",monospace;font-size:14px;letter-spacing:.15em;color:#00ff88;text-shadow:0 0 15px rgba(0,255,136,.5)}
.nm{display:flex;gap:24px}
.nm a{font-family:"Share Tech Mono",monospace;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:rgba(0,255,136,.4);transition:color .2s}
.nm a:hover{color:#00ff88}
.nb{font-family:"Share Tech Mono",monospace;font-size:11px;padding:8px 14px;border:1px solid rgba(0,255,136,.4);background:transparent;color:#00ff88;cursor:pointer;transition:all .3s}
.nb:hover{background:rgba(0,255,136,.08)}

/* HERO */
.hero{min-height:90vh;display:flex;align-items:center;padding:72px 32px 56px;max-width:1100px;margin:0 auto}
.hg{display:grid;grid-template-columns:1fr auto;gap:56px;align-items:center;width:100%}
.htag{font-family:"Share Tech Mono",monospace;font-size:11px;letter-spacing:.2em;color:rgba(0,255,136,.45);margin-bottom:22px;line-height:1.6}
.ht{font-family:"Orbitron",monospace;font-size:clamp(2.8rem,8vw,5.5rem);font-weight:900;line-height:1;letter-spacing:-.02em;margin-bottom:14px}
.g{background:linear-gradient(135deg,#00ff88,#00ffcc,#00ff88);background-size:300%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:sh 4s linear infinite;filter:drop-shadow(0 0 8px rgba(0,255,136,.4))}
@keyframes sh{0%{background-position:0%}100%{background-position:300%}}
.hdiv{height:1px;background:linear-gradient(90deg,transparent,rgba(0,255,136,.4),rgba(0,255,204,.3),transparent);margin:22px 0;width:120px}
.hs{color:#a8c4b0;font-style:italic;font-weight:300;font-size:15px;margin-bottom:6px;line-height:1.7}
.hs2{font-family:"Share Tech Mono",monospace;font-size:12px;color:rgba(0,255,136,.45);margin-bottom:36px}
.hbs{display:flex;flex-wrap:wrap;gap:10px}

/* BOTÕES */
.btn{display:inline-flex;align-items:center;gap:8px;padding:12px 22px;border:1px solid rgba(0,255,136,.4);background:transparent;color:#00ff88;font-family:"Share Tech Mono",monospace;font-size:11px;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;transition:all .3s;text-decoration:none;white-space:nowrap}
.btn:hover{background:rgba(0,255,136,.08);border-color:#00ff88}
.btnf{background:rgba(0,255,136,.12);border-color:#00ff88}
.btnf:hover{background:rgba(0,255,136,.2)}

/* FOTO */
.pw{position:relative;flex-shrink:0}
.pa{position:absolute;inset:-18px;border-radius:8px;background:radial-gradient(ellipse at center,rgba(0,255,136,.12) 0%,transparent 70%);pointer-events:none;filter:blur(15px)}
.co{position:absolute;width:18px;height:18px}
.ctlx{top:-7px;left:-7px;border-top:2px solid rgba(0,255,136,.6);border-left:2px solid rgba(0,255,136,.6)}
.ctrx{top:-7px;right:-7px;border-top:2px solid rgba(0,255,136,.6);border-right:2px solid rgba(0,255,136,.6)}
.cblx{bottom:-7px;left:-7px;border-bottom:2px solid rgba(0,255,136,.6);border-left:2px solid rgba(0,255,136,.6)}
.cbrx{bottom:-7px;right:-7px;border-bottom:2px solid rgba(0,255,136,.6);border-right:2px solid rgba(0,255,136,.6)}
.pi{width:240px;height:340px;object-fit:cover;object-position:center top;border-radius:4px;filter:brightness(.9) contrast(1.1) saturate(.85);border:1px solid rgba(0,255,136,.2);display:block}
.psc{position:absolute;inset:0;border-radius:4px;background:repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,.06) 3px,rgba(0,0,0,.06) 4px);pointer-events:none}
.ptag{position:absolute;bottom:10px;left:10px;right:10px;padding:6px 10px;background:rgba(2,6,8,.85);border:1px solid rgba(0,255,136,.2);font-family:"Share Tech Mono",monospace;font-size:10px;color:rgba(0,255,136,.6);letter-spacing:.1em}

/* SEÇÕES */
section{padding:56px 0}
.sec{max-width:1100px;margin:0 auto;padding:0 32px}
.sdiv{height:1px;background:linear-gradient(90deg,transparent,rgba(0,255,136,.35),transparent);margin-bottom:40px}
.sn{font-family:"Share Tech Mono",monospace;font-size:11px;letter-spacing:.2em;color:rgba(0,255,136,.4);margin-bottom:10px}
.st{font-family:"Orbitron",monospace;font-size:clamp(1.5rem,4vw,26px);font-weight:700;color:#e8f5ee;margin-bottom:32px;line-height:1.3}

/* SOBRE */
.sg{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start}
.sp p{font-size:14px;line-height:1.85;color:#a8c4b0;font-weight:300;margin-bottom:11px}
.sp strong{color:#e8f5ee}
.sp a{color:#00ff88;text-decoration:underline}
.stt{font-family:"Share Tech Mono",monospace;font-size:11px;color:rgba(0,255,136,.4);letter-spacing:.15em;margin-bottom:10px}
.si{display:flex;align-items:center;gap:12px;padding:10px 14px;background:rgba(6,15,11,.85);border:1px solid rgba(0,255,136,.1);margin-bottom:6px;font-size:13px;color:#a8c4b0;transition:border-color .3s}
.si:hover{border-color:rgba(0,255,136,.3)}
.ian{margin-top:10px;padding:14px;background:rgba(0,255,136,.03);border:1px solid rgba(0,255,136,.15)}
.int{font-family:"Share Tech Mono",monospace;font-size:11px;color:rgba(0,255,136,.45);margin-bottom:6px}
.ian p{font-size:12px;line-height:1.6;color:#a8c4b0}

/* TIMELINE */
.tl{display:flex;flex-direction:column;gap:18px;margin-bottom:40px}
.ti{display:flex;gap:18px}
.tdw{display:flex;flex-direction:column;align-items:center}
.dot{width:10px;height:10px;border-radius:50%;background:#00ff88;box-shadow:0 0 10px rgba(0,255,136,.6);flex-shrink:0;margin-top:4px}
.tline{width:1px;flex:1;margin-top:6px;background:linear-gradient(to bottom,rgba(0,255,136,.3),rgba(0,255,136,.05))}
.tc{background:rgba(6,15,11,.85);border:1px solid rgba(0,255,136,.1);padding:16px;flex:1;margin-bottom:6px;transition:border-color .3s}
.tc:hover{border-color:rgba(0,255,136,.3)}
.tp{font-family:"Share Tech Mono",monospace;font-size:11px;color:rgba(0,255,136,.45);margin-bottom:3px}
.tr2{font-family:"Orbitron",monospace;font-size:13px;font-weight:700;color:#e8f5ee;margin-bottom:2px}
.to{font-size:12px;color:#00ff88;margin-bottom:7px;display:block}
.tdesc{font-size:13px;line-height:1.65;color:#a8c4b0}

/* FORMAÇÃO */
.fg{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.fc{background:rgba(6,15,11,.85);border:1px solid rgba(0,255,136,.1);padding:13px;display:flex;align-items:flex-start;gap:10px;transition:border-color .3s}
.fc:hover{border-color:rgba(0,255,136,.3)}
.fi{color:#00ff88;font-size:15px;flex-shrink:0;margin-top:1px}
.fl{font-size:13px;font-weight:500;color:#e8f5ee;margin-bottom:3px}
.fbadge{margin-left:6px;font-size:10px;padding:2px 6px;background:rgba(0,255,136,.1);color:#00ff88;font-family:"Share Tech Mono",monospace}
.fo{font-size:11px;color:rgba(0,255,136,.45)}
.fo a{color:rgba(0,255,136,.5)}

/* IA APLICADA */
.iagrid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:8px}
.iacard{background:rgba(6,15,11,.85);border:1px solid rgba(0,255,136,.15);padding:20px;transition:all .35s;position:relative;overflow:hidden}
.iacard::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 50% 0%,rgba(0,255,136,.04) 0%,transparent 70%);pointer-events:none}
.iacard:hover{border-color:rgba(0,255,136,.45);transform:translateY(-3px);box-shadow:0 8px 28px rgba(0,255,136,.08)}
.iatag{font-family:"Share Tech Mono",monospace;font-size:10px;letter-spacing:.15em;color:rgba(0,255,136,.4);margin-bottom:10px}
.iatitle{font-family:"Orbitron",monospace;font-size:14px;font-weight:700;color:#e8f5ee;margin-bottom:8px}
.iadesc{font-size:13px;line-height:1.65;color:#a8c4b0;font-weight:300;margin-bottom:14px}
.iastack{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:16px}
.iastk{font-family:"Share Tech Mono",monospace;font-size:10px;padding:3px 8px;background:rgba(0,255,136,.06);border:1px solid rgba(0,255,136,.15);color:rgba(0,255,136,.55)}
.ialink{display:inline-flex;align-items:center;gap:7px;font-family:"Share Tech Mono",monospace;font-size:11px;color:#00ff88;border:1px solid rgba(0,255,136,.35);padding:8px 14px;transition:all .3s;text-decoration:none}
.ialink:hover{background:rgba(0,255,136,.1);border-color:#00ff88}
@media(max-width:680px){.iagrid{grid-template-columns:1fr}}

/* SKILLS */
.skgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
.sk{background:rgba(6,15,11,.85);border:1px solid rgba(0,255,136,.1);padding:16px;transition:all .3s}
.sk:hover{border-color:rgba(0,255,136,.4);transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,255,136,.07)}
.ski{font-size:22px;margin-bottom:8px}
.skl{font-size:13px;font-weight:500;color:#e8f5ee;margin-bottom:4px}
.skd{font-size:11px;line-height:1.5;color:rgba(0,255,136,.4)}

/* VÍDEOS */
.fb{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:28px}
.fbtn{font-family:"Share Tech Mono",monospace;font-size:11px;padding:6px 12px;border:1px solid rgba(0,255,136,.15);background:rgba(0,255,136,.03);color:rgba(0,255,136,.5);cursor:pointer;transition:all .25s}
.fbtn:hover,.fbtn.act{background:rgba(0,255,136,.12);border-color:rgba(0,255,136,.5);color:#00ff88}
.vg{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.vc{background:#060f0b;border:1px solid rgba(0,255,136,.1);cursor:pointer;transition:all .4s}
.vc:hover{border-color:rgba(0,255,136,.4);transform:translateY(-4px);box-shadow:0 0 25px rgba(0,255,136,.1)}
.vth{position:relative;aspect-ratio:16/9;overflow:hidden}
.vth img{width:100%;height:100%;object-fit:cover;filter:brightness(.65) saturate(.8);transition:transform .5s}
.vc:hover .vth img{transform:scale(1.05)}
.vplay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.vpb{width:46px;height:46px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(0,255,136,.12);border:2px solid rgba(0,255,136,.5);font-size:17px;color:#00ff88;transition:all .3s}
.vc:hover .vpb{background:rgba(0,255,136,.25);transform:scale(1.1)}
.vdur{position:absolute;bottom:7px;right:7px;font-family:"Share Tech Mono",monospace;font-size:10px;padding:2px 7px;background:rgba(2,6,8,.9);color:#e8f5ee}
.vcat{position:absolute;top:7px;left:7px;font-family:"Share Tech Mono",monospace;font-size:10px;padding:2px 7px;background:rgba(0,255,136,.15);color:#00ff88}
.vi{padding:13px}
.vtitle{font-family:"Orbitron",monospace;font-weight:700;font-size:12px;color:#e8f5ee;margin-bottom:3px}
.vsub{font-family:"Share Tech Mono",monospace;font-size:10px;color:rgba(0,255,136,.45);margin-bottom:6px}
.vdesc{font-size:11px;line-height:1.5;color:rgba(168,196,176,.5)}

/* CONTATO */
#contato{text-align:center}
.cbs{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px;margin-bottom:16px}
.stamp{display:inline-flex;align-items:center;gap:10px;margin-top:48px;padding:11px 22px;background:rgba(0,255,136,.03);border:1px solid rgba(0,255,136,.1);font-family:"Share Tech Mono",monospace;font-size:11px;color:rgba(0,255,136,.35)}

/* FOOTER */
footer{position:relative;z-index:10;text-align:center;padding:28px 32px;border-top:1px solid rgba(0,255,136,.08)}
.fn{font-family:"Orbitron",monospace;font-size:12px;letter-spacing:.15em;color:#00ff88;margin-bottom:4px}
.fsub{font-family:"Share Tech Mono",monospace;font-size:11px;color:rgba(0,255,136,.25)}
.fby{font-family:"Share Tech Mono",monospace;font-size:11px;color:rgba(0,255,136,.18);display:inline-block;margin-top:6px}

/* MODAL */
.mo{display:none;position:fixed;inset:0;z-index:999;background:rgba(2,6,8,.96);backdrop-filter:blur(12px);align-items:center;justify-content:center;padding:16px}
.mo.open{display:flex}
.mi{position:relative;width:100%;max-width:860px}
.mcl{position:absolute;top:-34px;right:0;font-family:"Share Tech Mono",monospace;font-size:12px;color:rgba(0,255,136,.4);background:none;border:none;cursor:pointer}
.mcl:hover{color:#00ff88}
.mf{width:100%;aspect-ratio:16/9;background:#000;border:1px solid rgba(0,255,136,.2)}
.mf iframe{width:100%;height:100%}
.mtt{font-family:"Orbitron",monospace;font-weight:700;font-size:17px;color:#e8f5ee;margin-top:14px}
.mss{font-family:"Share Tech Mono",monospace;font-size:12px;color:#00ff88;margin-top:3px}
.mdd{font-size:12px;line-height:1.6;color:rgba(168,196,176,.55);margin-top:6px}

/* CHAT */
.cfab{position:fixed;bottom:24px;right:24px;z-index:150;width:52px;height:52px;border-radius:50%;background:rgba(0,255,136,.15);border:2px solid rgba(0,255,136,.5);display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:20px;box-shadow:0 0 20px rgba(0,255,136,.15);transition:all .3s}
.cfab:hover{background:rgba(0,255,136,.25)}
.cb{display:none;position:fixed;bottom:88px;right:24px;z-index:150;width:340px;max-height:500px;background:#060f0b;border:1px solid rgba(0,255,136,.2);box-shadow:0 0 40px rgba(0,255,136,.08);flex-direction:column}
.cb.open{display:flex}
.ch{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(0,255,136,.1);background:rgba(0,255,136,.03)}
.cht{font-family:"Orbitron",monospace;font-size:13px;font-weight:700;color:#00ff88}
.chs{font-family:"Share Tech Mono",monospace;font-size:10px;color:rgba(0,255,136,.35)}
.cc{background:none;border:none;color:rgba(0,255,136,.4);cursor:pointer;font-size:15px}
.cms{flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:8px;min-height:220px;max-height:300px}
.cm{max-width:85%;padding:9px 13px;font-size:13px;line-height:1.5}
.cm.ai{background:rgba(255,255,255,.03);border:1px solid rgba(0,255,136,.07);color:#a8c4b0;align-self:flex-start}
.cm.user{background:rgba(0,255,136,.1);border:1px solid rgba(0,255,136,.25);color:#00ff88;align-self:flex-end;font-family:"Share Tech Mono",monospace;font-size:11px}
.cft{padding:10px;border-top:1px solid rgba(0,255,136,.1)}
.cir{display:flex;gap:7px}
.ci{flex:1;padding:9px 11px;background:rgba(0,255,136,.03);border:1px solid rgba(0,255,136,.15);color:#e8f5ee;font-family:"Share Tech Mono",monospace;font-size:12px;outline:none;transition:border-color .25s}
.ci:focus{border-color:rgba(0,255,136,.4)}
.ci::placeholder{color:rgba(0,255,136,.25)}
.csend{padding:9px 13px;background:rgba(0,255,136,.12);border:1px solid rgba(0,255,136,.4);color:#00ff88;cursor:pointer;font-size:15px;transition:all .3s}
.csend:hover{background:rgba(0,255,136,.25)}

/* ANIMAÇÃO */
@keyframes fup{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
.fade{opacity:0;animation:fup .7s ease forwards}

/* ===================== RESPONSIVO ===================== */
@media(max-width:900px){
  .skgrid{grid-template-columns:repeat(3,1fr)}
  .vg{grid-template-columns:repeat(2,1fr)}
  .sg{grid-template-columns:1fr}
}
@media(max-width:680px){
  nav{padding:12px 16px}
  .nm{display:none}
  .nb{font-size:10px;padding:7px 12px}
  .hero{padding:72px 20px 40px;min-height:auto}
  .hg{grid-template-columns:1fr}
  .pw{display:none}
  .ht{font-size:clamp(2.4rem,11vw,3.6rem)}
  .htag{font-size:10px;letter-spacing:.12em}
  .hs{font-size:14px}
  .hbs{gap:8px}
  .btn{padding:10px 16px;font-size:10px}
  section{padding:40px 0}
  .sec{padding:0 20px}
  .w{padding:0 20px}
  .st{font-size:22px;margin-bottom:24px}
  .sdiv{margin-bottom:28px}
  .sg{grid-template-columns:1fr;gap:32px}
  .sp p{font-size:13px}
  .fg{grid-template-columns:1fr}
  .skgrid{grid-template-columns:repeat(2,1fr)}
  .vg{grid-template-columns:1fr}
  .fbtn{font-size:10px;padding:5px 9px}
  .tl{gap:12px}
  .tc{padding:12px}
  .tr2{font-size:12px}
  .tdesc{font-size:12px}
  .stamp{font-size:10px;padding:10px 14px;flex-direction:column;text-align:center;gap:6px}
  .cb{width:calc(100vw - 32px);right:16px;bottom:80px}
  .cfab{bottom:16px;right:16px;width:46px;height:46px;font-size:18px}
  footer{padding:24px 20px}
}
@media(max-width:400px){
  .skgrid{grid-template-columns:1fr}
  .ht{font-size:2.2rem}
}
</style>

<canvas id="pc"></canvas>
<div class="grid"></div><div class="scan"></div><div class="amb"></div>

<div class="wrap">

<!-- NAV -->
<nav>
  <span class="nl">ML</span>
  <div class="nm">
    <a href="#sobre">sobre</a>
    <a href="#traj">trajetória</a>
    <a href="#trab">trabalhos</a>
    <a href="#contato">contato</a>
  </div>
  <button class="nb" onclick="toggleChat()">// falar comigo</button>
</nav>

<!-- HERO -->
<div class="hero">
  <div class="hg">
    <div class="fade" style="animation-delay:.1s">
      <p class="htag">▸ EDITOR · PRODUTOR AUDIOVISUAL · STREET ARTIST</p>
      <h1 class="ht"><span class="g">MAICK</span><br><span style="color:#e8f5ee;opacity:.9">LENIN</span></h1>
      <div class="hdiv"></div>
      <p class="hs">Produtor audiovisual pelo destino. Produtor musical por amor.</p>
      <p class="hs2">Street Artist porque sim</p>
      <div class="hbs">
        <a href="#trab" class="btn btnf">▸ Ver Portfólio</a>
        <a href="https://open.spotify.com/artist/3rTQYwkDDCHcyBymKC1O1M" target="_blank" class="btn">♫ Spotify</a>
        <a href="https://maicknuclear.wixsite.com/online/academicas" target="_blank" class="btn">🎨 Arte & Literatura</a>
      </div>
    </div>
    <div class="pw fade" style="animation-delay:.3s">
      <div class="pa"></div>
      <div class="co ctlx"></div><div class="co ctrx"></div>
      <div class="co cblx"></div><div class="co cbrx"></div>
      <img class="pi" src="https://portfolio-maick-lenin-production-eca8.up.railway.app/maick-profile.jpg" alt="Maick Lenin">
      <div class="psc"></div>
      <div class="ptag">// MAICK LENIN · SÃO PAULO</div>
    </div>
  </div>
</div>

<!-- SOBRE -->
<section id="sobre"><div class="sec">
  <div class="sdiv"></div>
  <p class="sn">// 01 — SOBRE</p>
  <div class="sg">
    <div class="sp fade">
      <h2 class="st">Técnica, criatividade<br><span class="g">e impacto visual.</span></h2>
      <p>🎥 <strong>Editor e Assistente Audiovisual</strong> — after movies, institucionais e pós-eventos.</p>
      <p>📷 <strong>Captação com câmeras DSLR</strong> — estúdio e externas, qualidade técnica e estética.</p>
      <p>📽️ <strong>Direção</strong> de 3 vídeos institucionais + captação em eventos corporativos e culturais.</p>
      <p>🔴 <strong>Live Streaming</strong> via Wirecast — transmissões e lives em estúdio.</p>
      <p>🔊 <strong>Áudio:</strong> masterização com iZotope e produção musical com FL Studio.</p>
      <p>🌐 <strong>Inglês:</strong> compreensão forte, leitura e escrita. Não falante.</p>
      <p>🤖 <strong style="color:#00ff88">Dev com IA:</strong> SaaS <em>Financial Freedom</em> com <strong style="color:#00ff88">Synkra AIOS + Groq + Claude + Railway</strong>.</p>
      <p>🎨 Arte urbana, música e literatura: <a href="https://maicknuclear.wixsite.com/online/academicas" target="_blank">maicknuclear.wixsite.com/online</a></p>
      <p>🎵 Produtor, compositor, letrista e mix/master do <a href="https://www.instagram.com/dubmariachi/" target="_blank">Dub Mariachi</a> — arte visual criada com IA.</p>
    </div>
    <div class="fade" style="animation-delay:.2s">
      <p class="stt">STACK & FERRAMENTAS</p>
      <div class="si"><span>🤖</span><span>Synkra AIOS + Groq + Claude + Railway</span></div>
      <div class="si"><span>✂️</span><span>Adobe Premiere / After Effects</span></div>
      <div class="si"><span>🎹</span><span>FL Studio — Produção Musical</span></div>
      <div class="si"><span>🔊</span><span>iZotope — Masterização de Áudio</span></div>
      <div class="si"><span>🔴</span><span>Wirecast — Live Streaming</span></div>
      <div class="si"><span>💻</span><span>GitHub + Next.js + TypeScript</span></div>
      <div class="ian">
        <p class="int">// SOBRE ESTA PÁGINA</p>
        <p>Criada por mim com IA — <strong style="color:#00ff88">Claude · Synkra AIOS · GitHub · Groq · Railway</strong> (versão gratuita). Código, design e deploy feitos do zero.</p>
      </div>
    </div>
  </div>
</div></section>

<!-- TRAJETÓRIA -->
<section id="traj"><div class="sec">
  <div class="sdiv"></div>
  <p class="sn">// 02 — TRAJETÓRIA</p>
  <h2 class="st">Experiência & <span class="g">Formação</span></h2>
  <div class="tl fade">
    <!-- 1º Farol Santander -->
    <div class="ti">
      <div class="tdw"><div class="dot"></div><div class="tline"></div></div>
      <div class="tc">
        <p class="tp">Atual</p>
        <p class="tr2">Assistente Audiovisual</p>
        <a class="to" href="https://www.farolsantander.com.br/sp" target="_blank">Farol Santander SP</a>
        <p class="tdesc">Atuação no espaço cultural Farol Santander São Paulo, apoiando produções audiovisuais e atividades do centro cultural.</p>
      </div>
    </div>
    <!-- 2º Infolive -->
    <div class="ti">
      <div class="tdw"><div class="dot"></div><div class="tline"></div></div>
      <div class="tc">
        <p class="tp">2017 – 2023</p>
        <p class="tr2">Editor / Produtor Audiovisual</p>
        <a class="to" href="https://infolivebrasil.com.br/" target="_blank">Infolive Brasil</a>
        <p class="tdesc">Edição de vídeos pós-evento e after movies dinâmicos. Captação em estúdio com câmeras DSLR. Transmissões ao vivo via Wirecast. Direção de 3 vídeos institucionais. Captação em eventos corporativos e culturais. Montagem de eventos presenciais.</p>
      </div>
    </div>
    <!-- 3º Freelancer -->
    <div class="ti">
      <div class="tdw"><div class="dot"></div></div>
      <div class="tc">
        <p class="tp">Disponível para</p>
        <p class="tr2">Freelancer — Operação de Câmera</p>
        <p class="tdesc">Disponível para trabalhos avulsos de operação de câmera em eventos, captações e produções externas. Não possuo câmera própria — atuo com equipamento do cliente ou da produção.</p>
      </div>
    </div>
  </div>
  <p class="stt" style="margin-bottom:12px">FORMAÇÃO & CURSOS</p>
  <div class="fg fade" style="animation-delay:.2s">
    <div class="fc"><span class="fi">◈</span><div><p class="fl">Cinema Total</p><p class="fo"><a href="https://www.institutodecinema.com.br/" target="_blank">Instituto de Cinema</a></p></div></div>
    <div class="fc"><span class="fi">◈</span><div><p class="fl">Direção de Fotografia</p><p class="fo"><a href="https://www.instagram.com/lafilmoficial/" target="_blank">LAFILM</a></p></div></div>
    <div class="fc"><span class="fi">◈</span><div><p class="fl">Marketing Digital</p><p class="fo">Diego Davila — Udemy</p></div></div>
    <div class="fc"><span class="fi">◈</span><div><p class="fl">Prompting Responsável: IA no Negócio <span class="fbadge" style="background:rgba(0,255,136,.2);color:#00ff88">✓ Concluído</span></p><p class="fo">Santander Open Academy · mar/2026</p></div></div>
    <div class="fc"><span class="fi">◈</span><div><p class="fl">Publicidade Digital: Dados, IA e Legalidade <span class="fbadge" style="background:rgba(0,255,136,.2);color:#00ff88">✓ Concluído</span></p><p class="fo">Santander Open Academy · mar/2026</p></div></div>
    <div class="fc"><span class="fi">◈</span><div><p class="fl">Domine a IA com o Gemini <span class="fbadge" style="background:rgba(0,255,136,.2);color:#00ff88">✓ Concluído</span></p><p class="fo">Santander Open Academy · mar/2026</p></div></div>
    <div class="fc"><span class="fi">◈</span><div><p class="fl">Prod. Audiovisual EAD (trancado)</p><p class="fo">Faculdade Metodista de SBC</p></div></div>
  </div>
</div></section>

<!-- IA APLICADA -->
<section><div class="sec">
  <div class="sdiv"></div>
  <p class="sn">// 03 — IA APLICADA</p>
  <h2 class="st">Projetos que <span class="g">construí com IA</span></h2>
  <p style="font-family:'Share Tech Mono',monospace;font-size:12px;color:rgba(0,255,136,.35);margin-bottom:28px">// aplicações reais desenvolvidas com inteligência artificial — do zero, em produção.</p>
  <div class="iagrid fade">
    <div class="iacard">
      <p class="iatag">▸ FINANÇAS · IA CONVERSACIONAL</p>
      <p class="iatitle">Financial Freedom</p>
      <p class="iadesc">App de educação financeira com assistente IA integrado. Desenvolvido do zero com Next.js, TypeScript e Railway. O chat responde dúvidas sobre finanças pessoais com base em contexto definido por prompting.</p>
      <div class="iastack">
        <span class="iastk">Next.js</span>
        <span class="iastk">TypeScript</span>
        <span class="iastk">Groq API</span>
        <span class="iastk">Railway</span>
        <span class="iastk">Prompt Engineering</span>
      </div>
      <a href="https://financial-freedom-by-maicknuclear.up.railway.app/" target="_blank" class="ialink">▸ Ver projeto ao vivo</a>
    </div>
    <div class="iacard">
      <p class="iatag">▸ ASSISTENTE IA · INTERFACE CONVERSACIONAL</p>
      <p class="iatitle">Nexus Jarvis</p>
      <p class="iadesc">Assistente IA pessoal com interface estilo terminal cyberpunk. Projeto experimental com foco em design de prompt, UX conversacional e deploy em produção via Vercel.</p>
      <div class="iastack">
        <span class="iastk">React</span>
        <span class="iastk">Vercel</span>
        <span class="iastk">LLM API</span>
        <span class="iastk">UI/UX Design</span>
        <span class="iastk">Prompt Engineering</span>
      </div>
      <a href="https://nexus-jarvis-flax.vercel.app/" target="_blank" class="ialink">▸ Ver projeto ao vivo</a>
    </div>
    <div class="iacard">
      <p class="iatag">▸ MÚSICA · IDENTIDADE VISUAL</p>
      <p class="iatitle">Dub Mariachi</p>
      <p class="iadesc">Site do projeto musical autoral Dub Mariachi — produção, composição, letras e mix/master. Arte visual criada com IA. Presença digital construída do zero no Wix.</p>
      <div class="iastack">
        <span class="iastk">Wix</span>
        <span class="iastk">IA Visual</span>
        <span class="iastk">Identidade</span>
        <span class="iastk">Música Autoral</span>
      </div>
      <a href="https://maicknuclear.wixsite.com/dubmariachi" target="_blank" class="ialink">▸ Ver projeto ao vivo</a>
    </div>
    <div class="iacard" style="position:relative">
      <div style="position:absolute;top:12px;right:12px;font-family:'Share Tech Mono',monospace;font-size:9px;padding:2px 8px;background:rgba(255,200,0,.08);border:1px solid rgba(255,200,0,.25);color:rgba(255,200,0,.6)">EM CONSTRUÇÃO</div>
      <p class="iatag">▸ AVALIAÇÕES · PLATAFORMA SaaS</p>
      <p class="iatitle">Review Machine</p>
      <p class="iadesc">Plataforma SaaS para coleta e gestão de avaliações. Projeto em desenvolvimento ativo — autenticação, dashboard e fluxos de usuário em construção.</p>
      <div class="iastack">
        <span class="iastk">Vercel</span>
        <span class="iastk">SaaS</span>
        <span class="iastk">Auth</span>
        <span class="iastk">Em Dev</span>
      </div>
      <a href="https://review-machine-public.vercel.app/login" target="_blank" class="ialink" style="opacity:.7">▸ Ver preview</a>
    </div>
  </div>
</div></section>

<!-- HABILIDADES -->
<section><div class="sec">
  <div class="sdiv"></div>
  <p class="sn">// 04 — HABILIDADES</p>
  <h2 class="st">No que posso <span class="g">agregar</span></h2>
  <div class="skgrid fade">
    <div class="sk"><p class="ski">🎬</p><p class="skl">Edição de Vídeo</p><p class="skd">After Movie · Pós-Evento · Institucional</p></div>
    <div class="sk"><p class="ski">📷</p><p class="skl">Captação DSLR</p><p class="skd">Câmeras DSLR · Operador de Câmera Freelancer</p></div>
    <div class="sk"><p class="ski">🎥</p><p class="skl">Direção</p><p class="skd">3 vídeos institucionais dirigidos</p></div>
    <div class="sk"><p class="ski">🔴</p><p class="skl">Live Streaming</p><p class="skd">Wirecast — transmissões e lives</p></div>
    <div class="sk"><p class="ski">🔊</p><p class="skl">Áudio</p><p class="skd">iZotope · FL Studio — produção musical</p></div>
    <div class="sk"><p class="ski">🎪</p><p class="skl">Montagem de Eventos</p><p class="skd">Logística e apoio técnico presencial</p></div>
    <div class="sk"><p class="ski">🤖</p><p class="skl">Dev com IA</p><p class="skd">Synkra AIOS + Groq + Claude + Railway</p></div>
    <div class="sk"><p class="ski">🌐</p><p class="skl">Inglês</p><p class="skd">Compreensão forte · Não falante</p></div>
    <div class="sk"><p class="ski">📲</p><p class="skl">Marketing Digital</p><p class="skd">Diego Davila — Udemy</p></div>
    <div class="sk"><p class="ski">🎓</p><p class="skl">IA Certificado</p><p class="skd">3 cursos concluídos — Santander Open Academy 2026</p></div>
    <div class="sk"><p class="ski">🎨</p><p class="skl">Arte Urbana & Música</p><p class="skd">Dub Mariachi — Prod. · Compositor · Mix/Master</p></div>
    <div class="sk"><p class="ski">💡</p><p class="skl">Direção de Fotografia</p><p class="skd">Latin American Film Institute (LAFILM)</p></div>
  </div>
</div></section>

<!-- TRABALHOS -->
<section id="trab"><div class="sec">
  <div class="sdiv"></div>
  <p class="sn">// 05 — TRABALHOS</p>
  <h2 class="st">Acervo <span class="g">audiovisual</span></h2>
  <p style="font-family:'Share Tech Mono',monospace;font-size:12px;color:rgba(0,255,136,.35);margin-bottom:28px">// todos os vídeos editados por mim. alguns dirigi e filmei.</p>
  <div class="fb" id="fb"></div>
  <div class="vg" id="vg"></div>
</div></section>

<!-- CONTATO -->
<section id="contato"><div class="sec">
  <div class="sdiv"></div>
  <p class="sn">// 06 — CONTATO</p>
  <h2 class="st" style="font-size:clamp(1.6rem,5vw,2.6rem)">Vamos criar<br><span class="g">algo juntos?</span></h2>
  <p style="font-size:14px;color:#a8c4b0;font-weight:300;max-width:380px;margin:0 auto 36px">Aberto a projetos em produtoras, agências, empresas e freelas.</p>
  <div class="cbs">
    <a href="https://instagram.com/dubmariachi" target="_blank" class="btn btnf">📸 @dubmariachi</a>
    <a href="/cdn-cgi/l/email-protection#0b666a626860657e68676e6a794b6c666a626725686466" class="btn">✉️ <span class="__cf_email__" data-cfemail="3d505c545e5653485e51585c4f7d5a505c5451135e5250">[email&#160;protected]</span></a>
    <a href="https://wa.me/5511917252805" target="_blank" class="btn">💬 (11) 91725-2805</a>
  </div>
  <br>
  <button class="btn" onclick="toggleChat()" style="margin:0 auto">🤖 Assistente IA — pergunte sobre meu trabalho</button>
  <div class="stamp"><span style="color:#00ff88">⚡</span>Site criado com IA: Claude · Synkra AIOS · GitHub · Groq · Railway</div>
</div></section>

</div><!-- /wrap -->

<footer>
  <p class="fn">MAICK LENIN</p>
  <p class="fsub">Editor & Produtor Audiovisual · © 2026</p>
  <a href="https://maicknuclear.wixsite.com/online" target="_blank" class="fby">by MaicknucleaR</a>
</footer>

<!-- MODAL -->
<div class="mo" id="mo" onclick="clModal(event)">
  <div class="mi">
    <button class="mcl" onclick="clModal()">ESC / FECHAR ✕</button>
    <div class="mf"><iframe id="mif" allowfullscreen allow="autoplay; fullscreen"></iframe></div>
    <p class="mtt" id="mtt"></p><p class="mss" id="mss"></p><p class="mdd" id="mdd"></p>
  </div>
</div>

<!-- CHAT FAB -->
<div class="cfab" onclick="toggleChat()">🤖</div>
<div class="cb" id="chatbox">
  <div class="ch">
    <div><p class="cht">Assistente IA</p><p class="chs">Maick Lenin · Groq</p></div>
    <button class="cc" onclick="toggleChat()">✕</button>
  </div>
  <div class="cms" id="msgs">
    <div class="cm ai">Olá! Sou o assistente do Maick. Pergunte sobre seus trabalhos, experiências, formação e contatos. 🎬</div>
  </div>
  <div class="cft">
    <div class="cir">
      <input class="ci" id="inp" placeholder="// pergunte sobre os trabalhos..." onkeydown="if(event.key==='Enter')sendChat()">
      <button class="csend" onclick="sendChat()">↑</button>
    </div>
  </div>
</div>

<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>
// PARTICLES
var c=document.getElementById("pc"),ctx=c.getContext("2d");
function rs(){c.width=window.innerWidth;c.height=window.innerHeight}rs();window.addEventListener("resize",rs);
var pts=[];for(var i=0;i<70;i++)pts.push({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,sz:Math.random()*1.8+.4,a:Math.random()*.5+.1,p:Math.random()*Math.PI*2});
function draw(){ctx.clearRect(0,0,c.width,c.height);pts.forEach(function(p){p.p+=.02;var a=p.a*(.7+.3*Math.sin(p.p));ctx.beginPath();ctx.arc(p.x,p.y,p.sz,0,Math.PI*2);ctx.fillStyle="rgba(0,255,136,"+a+")";ctx.shadowBlur=5;ctx.shadowColor="rgba(0,255,136,.4)";ctx.fill();ctx.shadowBlur=0;p.x+=p.vx;p.y+=p.vy;if(p.x<0)p.x=c.width;if(p.x>c.width)p.x=0;if(p.y<0)p.y=c.height;if(p.y>c.height)p.y=0});for(var i=0;i<pts.length;i++)for(var j=i+1;j<pts.length;j++){var dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<90){ctx.beginPath();ctx.strokeStyle="rgba(0,255,136,"+(0.07*(1-d/90))+")";ctx.lineWidth=.4;ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.stroke()}}requestAnimationFrame(draw)}
draw();

// VIDEOS
var VD=[
  {id:"Ti9berTfKLU",s:"yt",d:"02:01",t:"Jantar às Cegas",sub:"Experiência Gastronômica Inesquecível",c:"Pós-Evento",desc:"Edição dinâmica de after movie para evento gastronômico sensorial."},
  {id:"eWAPtLbaQ-I",s:"yt",d:"01:08",t:"GM Chevrolet TRACKER",sub:"Session 2020 — Pós-Evento",c:"Corporativo",desc:"Cobertura e edição de vídeo corporativo para evento de lançamento GM Chevrolet."},
  {id:"WuZI1ITh-rk",s:"yt",d:"09:13",t:"Lowrider Brasil",sub:"Otra Vida Bike Show 5ª Ed. [2024]",c:"Cultura & Street",desc:"Filmagem e edição do evento cultural em Mogi das Cruzes — SP."},
  {id:"ZgXfVAwqCIc",s:"yt",d:"00:37",t:"Teaser Directions",sub:"Luciano Diremeier da FORD",c:"Institucional",desc:"Teaser para programa institucional com diretor da FORD."},
  {id:"g4X1x67pbJE",s:"yt",d:"13:24",t:"Quero ser roteirista",sub:"Letícia Bulhões — Imprensa Mahon",c:"Entrevista",desc:"Edição de entrevista longa com condução narrativa precisa."},
  {id:"BtOR2v6G9Xc",s:"yt",d:"03:21",t:"Um Dia Com DJ Reggi",sub:"Documentary Style",c:"Mini-Doc",desc:"Registro documental de um dia na rotina do DJ."},
  {id:"OkOcIdo-ok4",s:"yt",d:"00:36",t:"Vídeo Atualli",sub:"Reel Institucional",c:"Reel",desc:"Reel institucional com identidade de marca."},
  {id:"FKeceeRZ-7k",s:"yt",d:"00:20",t:"Demo Reel",sub:"Amostra de Trabalhos",c:"Reel",desc:"Demo reel de trabalhos selecionados."},
  {id:"lgcR1d1hkbI",s:"yt",d:"00:34",t:"Vídeo 1",sub:"Social Media Cut",c:"Reel",desc:"Corte para redes sociais com ritmo dinâmico."},
  {id:"2qoSVSW9000",s:"yt",d:"00:30",t:"Main Women",sub:"Reel de Conteúdo",c:"Reel",desc:"Peça audiovisual para redes sociais."},
  {id:"cz_Ah4WxjAI",s:"yt",d:"00:06",t:"Main Garotas",sub:"Short Cut",c:"Reel",desc:"Corte rápido com transições criativas."},
  {id:"2xU2UfUbAak",s:"yt",d:"00:05",t:"Main Anime",sub:"Motion Cut",c:"Motion",desc:"Corte com identidade visual em motion design."},
  {id:"695957650",s:"vm",d:"02:01",t:"DemoReel Infolive",sub:"2020 — Estúdio & Transmissão",c:"Demo Reel",desc:"Demo reel do estúdio Infolive 2020."},
  {id:"673646596",s:"vm",d:"03:18",t:"Eleonora / Marcos Rojo",sub:"Barbara — Projeto Artístico",c:"Artístico",desc:"Projeto audiovisual artístico. Direção, filmagem e edição autoral."}
];
var CATS=["Todos","Pós-Evento","Corporativo","Institucional","Cultura & Street","Mini-Doc","Reel","Demo Reel","Artístico","Motion","Entrevista"];
var af="Todos";
function th(v){return v.s==="yt"?"https://i.ytimg.com/vi/"+v.id+"/mqdefault.jpg":"https://i.vimeocdn.com/video/"+v.id+"-d_320x180"}
function rF(){var b=document.getElementById("fb");b.innerHTML="";CATS.forEach(function(cat){var btn=document.createElement("button");btn.className="fbtn"+(cat===af?" act":"");btn.textContent=cat;btn.onclick=function(){af=cat;rF();rV()};b.appendChild(btn)})}
function rV(){var g=document.getElementById("vg");var list=af==="Todos"?VD:VD.filter(function(v){return v.c===af});g.innerHTML=list.map(function(v){var t=v.t.replace(/'/g,"\\'"),sub=v.sub.replace(/'/g,"\\'"),desc=v.desc.replace(/'/g,"\\'");return'<div class="vc" onclick="opM(\''+v.id+'\',\''+v.s+'\',\''+t+'\',\''+sub+'\',\''+desc+'\')"><div class="vth"><img src="'+th(v)+'" alt="'+v.t+'" loading="lazy"><div class="vplay"><div class="vpb">▶</div></div><span class="vdur">'+v.d+'</span><span class="vcat">'+v.c+'</span></div><div class="vi"><p class="vtitle">'+v.t+'</p><p class="vsub">'+v.sub+'</p><p class="vdesc">'+v.desc+'</p></div></div>'}).join("")}
rF();rV();

// MODAL
function opM(id,s,t,sub,desc){document.getElementById("mif").src=s==="yt"?"https://www.youtube.com/embed/"+id+"?autoplay=1&rel=0":"https://player.vimeo.com/video/"+id+"?autoplay=1";document.getElementById("mtt").textContent=t;document.getElementById("mss").textContent=sub;document.getElementById("mdd").textContent=desc;document.getElementById("mo").classList.add("open")}
function clModal(e){if(!e||e.target===document.getElementById("mo")||e.currentTarget.tagName==="BUTTON"){document.getElementById("mo").classList.remove("open");document.getElementById("mif").src=""}}
document.addEventListener("keydown",function(e){if(e.key==="Escape")clModal()});

// CHAT
function toggleChat(){document.getElementById("chatbox").classList.toggle("open")}
var ch=[];
async function sendChat(){
  var inp=document.getElementById("inp"),msg=inp.value.trim();if(!msg)return;
  inp.value="";addMsg("user",msg);ch.push({role:"user",text:msg});
  var t=addMsg("ai","processando...");
  try{
    var r=await fetch("https://portfolio-maick-lenin-production-eca8.up.railway.app/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:msg,history:ch.slice(-8)})});
    var d=await r.json();t.remove();
    var rep=d.reply||"Erro ao responder.";addMsg("ai",rep);ch.push({role:"ai",text:rep});
  }catch(e){t.remove();addMsg("ai","Erro de conexão. Contato dire` }} />
    </>
  )
}

export default Home
