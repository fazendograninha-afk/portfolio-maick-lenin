import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import toast, { Toaster } from 'react-hot-toast'

const VIDEOS = [
  { id: 'Ti9berTfKLU', src: 'youtube', duration: '02:01', title: 'Jantar às Cegas', sub: 'Experiência Gastronômica Inesquecível', cat: 'Pós-Evento', desc: 'Edição dinâmica de after movie para evento gastronômico sensorial.' },
  { id: 'eWAPtLbaQ-I', src: 'youtube', duration: '01:08', title: 'GM Chevrolet TRACKER', sub: 'Session 2020 — Pós-Evento', cat: 'Corporativo', desc: 'Cobertura e edição de vídeo corporativo para evento de lançamento GM Chevrolet.' },
  { id: 'WuZI1ITh-rk', src: 'youtube', duration: '09:13', title: 'Lowrider Brasil', sub: 'Otra Vida Bike Show 5ª Ed. [2024]', cat: 'Cultura & Street', desc: 'Filmagem e edição do evento cultural em Mogi das Cruzes — SP.' },
  { id: 'ZgXfVAwqCIc', src: 'youtube', duration: '00:37', title: 'Teaser Directions', sub: 'Luciano Diremeier da FORD — Startupi', cat: 'Institucional', desc: 'Teaser para programa institucional com diretor da FORD.' },
  { id: 'g4X1x67pbJE', src: 'youtube', duration: '13:24', title: 'Quero ser roteirista', sub: 'Letícia Bulhões — Imprensa Mahon', cat: 'Entrevista', desc: 'Edição de entrevista longa com condução narrativa precisa.' },
  { id: 'BtOR2v6G9Xc', src: 'youtube', duration: '03:21', title: 'Um Dia Com DJ Reggi', sub: 'Documentary Style', cat: 'Mini-Doc', desc: 'Registro documental de um dia na rotina do DJ.' },
  { id: 'OkOcIdo-ok4', src: 'youtube', duration: '00:36', title: 'Vídeo Atualli', sub: 'Reel Institucional', cat: 'Reel', desc: 'Reel institucional com identidade de marca.' },
  { id: 'FKeceeRZ-7k', src: 'youtube', duration: '00:20', title: 'Demo Reel', sub: 'Amostra de Trabalhos', cat: 'Reel', desc: 'Demo reel de trabalhos selecionados.' },
  { id: 'lgcR1d1hkbI', src: 'youtube', duration: '00:34', title: 'Vídeo 1', sub: 'Social Media Cut', cat: 'Reel', desc: 'Corte para redes sociais com ritmo dinâmico.' },
  { id: '2qoSVSW9000', src: 'youtube', duration: '00:30', title: 'Main Women', sub: 'Reel de Conteúdo', cat: 'Reel', desc: 'Peça audiovisual para redes sociais.' },
  { id: 'cz_Ah4WxjAI', src: 'youtube', duration: '00:06', title: 'Main Garotas', sub: 'Short Cut', cat: 'Reel', desc: 'Corte rápido com transições criativas.' },
  { id: '2xU2UfUbAak', src: 'youtube', duration: '00:05', title: 'Main Anime', sub: 'Motion Cut', cat: 'Motion', desc: 'Corte com identidade visual inspirada em motion design.' },
  { id: '695957650', src: 'vimeo', duration: '02:01', title: 'DemoReel Infolive', sub: '2020 — Estúdio & Transmissão', cat: 'Demo Reel', desc: 'Demo reel do estúdio Infolive 2020.' },
  { id: '673646596', src: 'vimeo', duration: '03:18', title: 'Eleonora / Marcos Rojo', sub: 'Barbara — Projeto Artístico', cat: 'Artístico', desc: 'Projeto audiovisual artístico. Direção, filmagem e edição autoral.' },
]

const SKILLS = [
  { icon: '🎬', label: 'Edição de Vídeo', detail: 'After Movie · Pós-Evento · Institucional' },
  { icon: '📷', label: 'Captação DSLR', detail: 'Câmeras DSLR · Operador de Câmera Freelancer' },
  { icon: '🎥', label: 'Direção', detail: '3 vídeos institucionais dirigidos' },
  { icon: '🔴', label: 'Live Streaming', detail: 'Wirecast — transmissões e lives' },
  { icon: '🔊', label: 'Áudio', detail: 'iZotope · FL Studio — produção musical' },
  { icon: '🎪', label: 'Montagem de Eventos', detail: 'Logística e apoio técnico presencial' },
  { icon: '🤖', label: 'Dev com IA', detail: 'Synkra AIOS + Groq + Claude + Railway' },
  { icon: '🌐', label: 'Inglês', detail: 'Compreensão forte · Não falante' },
  { icon: '📲', label: 'Marketing Digital', detail: 'Diego Davila — Udemy' },
  { icon: '🎓', label: 'IA com Prompting', detail: 'Certificado em andamento — Santander Open Academy' },
  { icon: '🎨', label: 'Arte Urbana & Música', detail: 'Dub Mariachi — Prod. · Compositor · Letrista · Mix/Master' },
  { icon: '💡', label: 'Direção de Fotografia', detail: 'Latin American Film Institute (LAFILM)' },
]

const CATS = ['Todos', 'Pós-Evento', 'Corporativo', 'Institucional', 'Cultura & Street', 'Mini-Doc', 'Reel', 'Demo Reel', 'Artístico', 'Motion', 'Entrevista']

const TIMELINE = [
  { period: '2017 – 2023', role: 'Editor / Produtor Audiovisual', org: 'Infolive Brasil', url: 'https://infolivebrasil.com.br/', desc: 'Edição de vídeos pós-evento e after movies dinâmicos. Captação em estúdio com câmeras DSLR. Transmissões ao vivo via Wirecast. Direção de 3 vídeos institucionais. Captação em eventos corporativos e culturais. Montagem de eventos presenciais.' },
  { period: 'Disponível para', role: 'Freelancer — Operação de Câmera', org: '', url: '', desc: 'Disponível para trabalhos avulsos de operação de câmera em eventos, captações e produções externas. Não possuo câmera própria — atuo com equipamento do cliente ou da produção.' },
  { period: 'Atual', role: 'Assistente Audiovisual', org: 'Farol Santander SP', url: 'https://www.farolsantander.com.br/sp', desc: 'Atuação no espaço cultural Farol Santander São Paulo, apoiando produções audiovisuais e atividades do centro cultural.' },
]

const FORMACAO = [
  { label: 'Cinema Total', org: 'Instituto de Cinema', url: 'https://www.institutodecinema.com.br/' },
  { label: 'Direção de Fotografia', org: 'Latin American Film Institute (LAFILM)', url: 'https://www.instagram.com/lafilmoficial/' },
  { label: 'Marketing Digital', org: 'Diego Davila — Udemy', url: '' },
  { label: 'IA com Prompting Responsável', org: 'Santander Open Academy', url: '', badge: 'Em andamento' },
  { label: 'Prod. Audiovisual EAD (trancado)', org: 'Faculdade Metodista de SBC', url: '' },
]

export default function Portfolio() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [activeVideo, setActiveVideo] = useState<typeof VIDEOS[0] | null>(null)
  const [filter, setFilter] = useState('Todos')
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMsg, setChatMsg] = useState('')
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Olá! Sou o assistente do Maick Lenin. Posso falar sobre seus trabalhos, experiências, formação e contatos. Como posso te ajudar? 🎬' }
  ])
  const [chatLoading, setChatLoading] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)
    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number; pulse: number }[] = []
    for (let i = 0; i < 80; i++) {
      particles.push({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 - 0.1, size: Math.random() * 2 + 0.5, alpha: Math.random() * 0.6 + 0.1, pulse: Math.random() * Math.PI * 2 })
    }
    let animId: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.pulse += 0.02
        const a = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse))
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,255,136,${a})`; ctx.shadowBlur = 6; ctx.shadowColor = 'rgba(0,255,136,0.5)'; ctx.fill(); ctx.shadowBlur = 0
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x; const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) { ctx.beginPath(); ctx.strokeStyle = `rgba(0,255,136,${0.08 * (1 - dist / 100)})`; ctx.lineWidth = 0.5; ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke() }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  useEffect(() => { setTimeout(() => setVisible(true), 100) }, [])
  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [chatHistory])

  const filtered = filter === 'Todos' ? VIDEOS : VIDEOS.filter(v => v.cat === filter)

  const sendChat = async () => {
    if (!chatMsg.trim() || chatLoading) return
    const userMsg = chatMsg.trim(); setChatMsg(''); setChatHistory(h => [...h, { role: 'user', text: userMsg }]); setChatLoading(true)
    try {
      const res = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: userMsg, history: chatHistory }) })
      const data = await res.json()
      setChatHistory(h => [...h, { role: 'ai', text: data.reply }])
    } catch { setChatHistory(h => [...h, { role: 'ai', text: 'Erro de conexão. Tente novamente.' }]) }
    setChatLoading(false)
  }

  const thumb = (v: typeof VIDEOS[0]) => v.src === 'youtube' ? `https://i.ytimg.com/vi/${v.id}/mqdefault.jpg` : `https://i.vimeocdn.com/video/${v.id}-d_320x180`
  const embed = (v: typeof VIDEOS[0]) => v.src === 'youtube' ? `https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0` : `https://player.vimeo.com/video/${v.id}?autoplay=1`

  const G = 'rgba(0,255,136,'
  const gv = (a: number) => `${G}${a})`

  return (
    <>
      <Head>
        <title>Maick Lenin — Editor & Produtor Audiovisual</title>
        <meta name="description" content="Portfólio de Maick Lenin — Editor Audiovisual, Produtor Musical, Street Artist." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="relative min-h-screen" style={{ background: 'var(--void)' }}>
        <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} />
        <div className="cyber-grid" /><div className="scanlines" /><div className="ambient" />
        <Toaster position="bottom-right" toastOptions={{ style: { background: '#060f0b', color: '#e8f5ee', border: `1px solid ${gv(0.2)}` } }} />

        {/* NAV */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
          style={{ background: 'rgba(2,6,8,0.88)', backdropFilter: 'blur(20px)', borderBottom: `1px solid ${gv(0.08)}` }}>
          <span style={{ fontFamily: 'Orbitron,monospace', fontSize: '14px', letterSpacing: '0.15em', color: 'var(--green)', textShadow: '0 0 15px rgba(0,255,136,0.5)' }}>ML</span>
          <div className="hidden sm:flex items-center gap-6">
            {['trabalhos', 'sobre', 'trajetória', 'contato'].map(s => (
              <a key={s} href={`#${s}`} style={{ fontFamily: 'Share Tech Mono,monospace', fontSize: '11px', letterSpacing: '0.2em', color: gv(0.4), textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--green)')}
                onMouseLeave={e => (e.currentTarget.style.color = gv(0.4))}>{s}</a>
            ))}
          </div>
          <button onClick={() => setChatOpen(true)} className="btn-cyber" style={{ fontSize: '11px', padding: '8px 16px' }}>// falar comigo</button>
        </nav>

        {/* HERO */}
        <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16">
          <div className={`transition-all duration-1000 w-full max-w-5xl mx-auto ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Grid: texto + foto */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '48px', alignItems: 'center' }}>
              {/* Texto */}
              <div>
                <p className="fade-in d1" style={{ fontFamily: 'Share Tech Mono,monospace', fontSize: '11px', letterSpacing: '0.2em', color: gv(0.45), marginBottom: '24px' }}>▸ EDITOR · PRODUTOR AUDIOVISUAL · STREET ARTIST</p>
                <h1 className="fade-in d2" style={{ fontFamily: 'Orbitron,monospace', fontSize: 'clamp(2.4rem,8vw,6rem)', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '16px' }}>
                  <span className="text-green-glow">MAICK</span><br />
                  <span style={{ color: 'var(--white)', opacity: 0.9 }}>LENIN</span>
                </h1>
                <div className="divider fade-in d3" style={{ width: '128px', margin: '24px 0' }} />
                <p className="fade-in d4" style={{ color: 'var(--silver)', fontStyle: 'italic', fontWeight: 300, fontSize: '14px', marginBottom: '8px', lineHeight: 1.7 }}>
                  Produtor audiovisual pelo destino. Produtor musical por amor.
                </p>
                <p className="fade-in d4" style={{ fontFamily: 'Share Tech Mono,monospace', fontSize: '12px', color: gv(0.45), marginBottom: '40px' }}>Street Artist porque sim</p>
                <div className="fade-in d5" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
                  <a href="#trabalhos" className="btn-cyber btn-cyber-fill">▸ Ver Portfólio</a>
                  <a href="https://open.spotify.com/artist/3rTQYwkDDCHcyBymKC1O1M" target="_blank" rel="noopener noreferrer" className="btn-cyber">♫ Spotify</a>
                  <a href="https://maicknuclear.wixsite.com/online/academicas" target="_blank" rel="noopener noreferrer" className="btn-cyber">🎨 Arte & Literatura</a>
                </div>
              </div>
              {/* Foto */}
              <div className="fade-in d3 hidden md:block" style={{ position: 'relative', flexShrink: 0 }}>
                {/* Glow aura */}
                <div style={{ position: 'absolute', inset: '-20px', borderRadius: '8px', background: 'radial-gradient(ellipse at center, rgba(0,255,136,0.12) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(15px)' }} />
                {/* Corner decorations */}
                <div style={{ position: 'absolute', top: '-8px', left: '-8px', width: '20px', height: '20px', borderTop: '2px solid rgba(0,255,136,0.6)', borderLeft: '2px solid rgba(0,255,136,0.6)' }} />
                <div style={{ position: 'absolute', top: '-8px', right: '-8px', width: '20px', height: '20px', borderTop: '2px solid rgba(0,255,136,0.6)', borderRight: '2px solid rgba(0,255,136,0.6)' }} />
                <div style={{ position: 'absolute', bottom: '-8px', left: '-8px', width: '20px', height: '20px', borderBottom: '2px solid rgba(0,255,136,0.6)', borderLeft: '2px solid rgba(0,255,136,0.6)' }} />
                <div style={{ position: 'absolute', bottom: '-8px', right: '-8px', width: '20px', height: '20px', borderBottom: '2px solid rgba(0,255,136,0.6)', borderRight: '2px solid rgba(0,255,136,0.6)' }} />
                {/* Photo */}
                <img
                  src="/maick-profile.jpg"
                  alt="Maick Lenin"
                  style={{
                    width: '280px',
                    height: '380px',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    borderRadius: '4px',
                    filter: 'brightness(0.9) contrast(1.1) saturate(0.85)',
                    border: '1px solid rgba(0,255,136,0.2)',
                    display: 'block',
                  }}
                />
                {/* Scanline overlay on photo */}
                <div style={{ position: 'absolute', inset: 0, borderRadius: '4px', background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px)', pointerEvents: 'none' }} />
                {/* Bottom tag */}
                <div style={{ position: 'absolute', bottom: '12px', left: '12px', right: '12px', padding: '6px 10px', background: 'rgba(2,6,8,0.85)', border: '1px solid rgba(0,255,136,0.2)', backdropFilter: 'blur(4px)' }}>
                  <p style={{ fontFamily: 'Share Tech Mono,monospace', fontSize: '10px', color: 'rgba(0,255,136,0.6)', letterSpacing: '0.1em' }}>// MAICK LENIN · SÃO PAULO</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontFamily: 'Share Tech Mono,monospace', fontSize: '10px', letterSpacing: '0.2em', color: gv(0.25) }}>SCROLL</span>
            <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, rgba(0,255,136,0.4), transparent)' }} />
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="relative z-10 max-w-5xl mx-auto px-6 py-24">
          <div className="divider" style={{ marginBottom: '56px' }} />
          <p className="sec-num" style={{ marginBottom: '12px' }}>// 01 — SOBRE</p>
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <h2 style={{ fontFamily: 'Orbitron,monospace', fontSize: '28px', fontWeight: 700, color: 'var(--white)', lineHeight: 1.3, marginBottom: '24px' }}>
                Técnica, criatividade<br /><span className="text-green-glow">e impacto visual.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', lineHeight: '1.7', color: 'var(--silver)', fontWeight: 300 }}>
                <p>🎥 <strong style={{ color: 'var(--white)' }}>Editor e Assistente Audiovisual</strong> — after movies, institucionais e pós-eventos.</p>
                <p>📷 <strong style={{ color: 'var(--white)' }}>Captação com câmeras DSLR</strong> — estúdio e externas, qualidade técnica e estética.</p>
                <p>📽️ <strong style={{ color: 'var(--white)' }}>Direção</strong> de 3 vídeos institucionais + captação em eventos corporativos e culturais.</p>
                <p>🔴 <strong style={{ color: 'var(--white)' }}>Live Streaming</strong> via Wirecast — transmissões e lives em estúdio.</p>
                <p>🔊 <strong style={{ color: 'var(--white)' }}>Áudio:</strong> masterização com iZotope e produção musical com FL Studio.</p>
                <p>🌐 <strong style={{ color: 'var(--white)' }}>Inglês:</strong> compreensão forte, leitura e escrita. Não falante.</p>
                <p>🤖 <strong style={{ color: 'var(--green)' }}>Dev com IA:</strong> criação do SaaS <em>Financial Freedom</em> — 15 agentes de IA financeiros com <strong style={{ color: 'var(--green)' }}>Synkra AIOS + Groq + Claude + Railway</strong>.</p>
                <p>🎨 Arte urbana, vídeos, música e literatura em{' '}
                  <a href="https://maicknuclear.wixsite.com/online/academicas" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)' }}>maicknuclear.wixsite.com/online</a>
                </p>
                <p>🎵 Produtor, compositor, letrista e mix/master do{' '}
                  <a href="https://www.instagram.com/dubmariachi/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)' }}>Dub Mariachi</a> — toda arte visual criada com IA.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <p style={{ fontFamily: 'Share Tech Mono,monospace', fontSize: '11px', color: gv(0.4), letterSpacing: '0.15em', marginBottom: '12px' }}>STACK & FERRAMENTAS</p>
              {[
                { icon: '🤖', label: 'Synkra AIOS + Groq + Claude + Railway' },
                { icon: '✂️', label: 'Adobe Premiere / After Effects' },
                { icon: '🎹', label: 'FL Studio — Produção Musical' },
                { icon: '🔊', label: 'iZotope — Masterização de Áudio' },
                { icon: '🔴', label: 'Wirecast — Live Streaming' },
                { icon: '💻', label: 'GitHub + Next.js + TypeScript' },
              ].map(item => (
                <div key={item.label} className="cyber-card" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 16px', borderRadius: '4px' }}>
                  <span>{item.icon}</span><span style={{ fontSize: '13px', color: 'var(--silver)' }}>{item.label}</span>
                </div>
              ))}
              <div style={{ marginTop: '12px', padding: '16px', borderRadius: '4px', background: gv(0.03), border: `1px solid ${gv(0.15)}` }}>
                <p style={{ fontFamily: 'Share Tech Mono,monospace', fontSize: '11px', color: gv(0.45), marginBottom: '8px' }}>// SOBRE ESTA PÁGINA</p>
                <p style={{ fontSize: '12px', lineHeight: '1.6', color: 'var(--silver)' }}>
                  Criada por mim com IA — <strong style={{ color: 'var(--green)' }}>Claude · Synkra AIOS · GitHub · Groq · Railway</strong> (versão gratuita). Código, design e deploy feitos do zero.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRAJETÓRIA */}
        <section id="trajetória" className="relative z-10 max-w-5xl mx-auto px-6 py-10">
          <div className="divider" style={{ marginBottom: '56px' }} />
          <p className="sec-num" style={{ marginBottom: '12px' }}>// 02 — TRAJETÓRIA</p>
          <h2 style={{ fontFamily: 'Orbitron,monospace', fontSize: '28px', fontWeight: 700, color: 'var(--white)', marginBottom: '40px' }}>
            Experiência & <span className="text-green-glow">Formação</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
            {TIMELINE.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--green)', boxShadow: '0 0 10px rgba(0,255,136,0.6)', flexShrink: 0, marginTop: '4px' }} />
                  {i < TIMELINE.length - 1 && <div style={{ width: '1px', flex: 1, marginTop: '8px', background: 'linear-gradient(to bottom, rgba(0,255,136,0.3), rgba(0,255,136,0.05))' }} />}
                </div>
                <div className="cyber-card" style={{ borderRadius: '4px', padding: '16px', flex: 1, marginBottom: '8px' }}>
                  <p style={{ fontFamily: 'Share Tech Mono,monospace', fontSize: '11px', color: gv(0.45), marginBottom: '4px' }}>{item.period}</p>
                  <p style={{ fontFamily: 'Orbitron,monospace', fontSize: '13px', fontWeight: 700, color: 'var(--white)', marginBottom: '2px' }}>{item.role}</p>
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', color: 'var(--green)', display: 'block', marginBottom: '8px' }}>{item.org}</a>
                  ) : item.org ? (
                    <p style={{ fontSize: '12px', color: 'var(--green)', marginBottom: '8px' }}>{item.org}</p>
                  ) : null}
                  <p style={{ fontSize: '12px', lineHeight: '1.6', color: 'var(--silver)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'Share Tech Mono,monospace', fontSize: '11px', color: gv(0.4), letterSpacing: '0.15em', marginBottom: '16px' }}>FORMAÇÃO & CURSOS</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {FORMACAO.map((f, i) => (
              <div key={i} className="cyber-card" style={{ borderRadius: '4px', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ color: 'var(--green)', fontSize: '16px', flexShrink: 0 }}>◈</span>
                <div>
                  <p style={{ fontSize: '13px', fontWeight: 500, color: 'var(--white)', marginBottom: '4px' }}>
                    {f.label}
                    {f.badge && <span style={{ marginLeft: '8px', fontSize: '10px', padding: '2px 8px', borderRadius: '2px', background: gv(0.1), color: 'var(--green)', fontFamily: 'Share Tech Mono,monospace' }}>{f.badge}</span>}
                  </p>
                  {f.url ? (
                    <a href={f.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '11px', color: gv(0.45) }}>{f.org}</a>
                  ) : (
                    <p style={{ fontSize: '11px', color: gv(0.4) }}>{f.org}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HABILIDADES */}
        <section className="relative z-10 max-w-5xl mx-auto px-6 py-10">
          <div className="divider" style={{ marginBottom: '56px' }} />
          <p className="sec-num" style={{ marginBottom: '12px' }}>// 03 — HABILIDADES</p>
          <h2 style={{ fontFamily: 'Orbitron,monospace', fontSize: '28px', fontWeight: 700, color: 'var(--white)', marginBottom: '40px' }}>
            No que posso <span className="text-green-glow">agregar</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {SKILLS.map(skill => (
              <div key={skill.label} className="cyber-card" style={{ borderRadius: '4px', padding: '16px' }}>
                <div style={{ fontSize: '22px', marginBottom: '8px' }}>{skill.icon}</div>
                <p style={{ fontSize: '13px', fontWeight: 500, color: 'var(--white)', marginBottom: '4px' }}>{skill.label}</p>
                <p style={{ fontSize: '11px', lineHeight: '1.5', color: gv(0.4) }}>{skill.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TRABALHOS */}
        <section id="trabalhos" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="divider" style={{ marginBottom: '56px' }} />
          <p className="sec-num" style={{ marginBottom: '12px' }}>// 04 — TRABALHOS</p>
          <h2 style={{ fontFamily: 'Orbitron,monospace', fontSize: '28px', fontWeight: 700, color: 'var(--white)', marginBottom: '8px' }}>
            Acervo <span className="text-green-glow">audiovisual</span>
          </h2>
          <p style={{ fontFamily: 'Share Tech Mono,monospace', fontSize: '12px', color: gv(0.35), marginBottom: '32px' }}>
            // todos os vídeos editados por mim. alguns dirigi e filmei.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
            {CATS.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} className="skill-tag"
                style={{ background: filter === cat ? gv(0.12) : gv(0.03), borderColor: filter === cat ? gv(0.5) : gv(0.15), color: filter === cat ? 'var(--green)' : gv(0.5), boxShadow: filter === cat ? `0 0 10px ${gv(0.1)}` : 'none' }}>
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(video => (
              <div key={video.id + video.src} className="video-card" style={{ borderRadius: '4px' }} onClick={() => setActiveVideo(video)}>
                <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9' }}>
                  <img src={thumb(video)} alt={video.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.65) saturate(0.8)', transition: 'transform 0.5s' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: gv(0.12), border: `2px solid ${gv(0.5)}`, backdropFilter: 'blur(4px)' }}>
                      <span style={{ color: 'var(--green)', fontSize: '18px', marginLeft: '3px' }}>▶</span>
                    </div>
                  </div>
                  <span style={{ position: 'absolute', bottom: '8px', right: '8px', fontSize: '11px', padding: '2px 8px', borderRadius: '2px', background: 'rgba(2,6,8,0.9)', color: 'var(--white)', fontFamily: 'Share Tech Mono,monospace' }}>{video.duration}</span>
                  <span style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', padding: '2px 8px', borderRadius: '2px', background: gv(0.15), color: 'var(--green)', backdropFilter: 'blur(4px)', fontFamily: 'Share Tech Mono,monospace' }}>{video.cat}</span>
                </div>
                <div style={{ padding: '16px' }}>
                  <h3 style={{ fontFamily: 'Orbitron,monospace', fontWeight: 700, fontSize: '13px', color: 'var(--white)', marginBottom: '4px' }}>{video.title}</h3>
                  <p style={{ fontFamily: 'Share Tech Mono,monospace', fontSize: '11px', color: gv(0.45), marginBottom: '8px' }}>{video.sub}</p>
                  <p style={{ fontSize: '11px', lineHeight: '1.5', color: 'rgba(168,196,176,0.5)' }}>{video.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="divider" style={{ marginBottom: '56px' }} />
          <p className="sec-num" style={{ marginBottom: '12px' }}>// 05 — CONTATO</p>
          <h2 style={{ fontFamily: 'Orbitron,monospace', fontSize: 'clamp(1.8rem,5vw,3rem)', fontWeight: 700, color: 'var(--white)', marginBottom: '16px' }}>
            Vamos criar<br /><span className="text-green-glow">algo juntos?</span>
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--silver)', fontWeight: 300, maxWidth: '400px', margin: '0 auto 40px' }}>
            Aberto a projetos em produtoras, agências, empresas e freelas.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            <a href="https://instagram.com/dubmariachi" target="_blank" rel="noopener noreferrer" className="btn-cyber btn-cyber-fill">📸 @dubmariachi</a>
            <a href="mailto:maicknuclear@gmail.com" className="btn-cyber">✉️ maicknuclear@gmail.com</a>
            <a href="https://wa.me/5511917252805" target="_blank" rel="noopener noreferrer" className="btn-cyber">💬 (11) 91725-2805</a>
          </div>
          <button onClick={() => setChatOpen(true)} className="btn-cyber" style={{ margin: '0 auto' }}>
            🤖 Assistente IA — pergunte sobre meu trabalho
          </button>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginTop: '56px', padding: '12px 24px', borderRadius: '4px', background: gv(0.03), border: `1px solid ${gv(0.1)}` }}>
            <span style={{ color: 'var(--green)' }}>⚡</span>
            <span style={{ fontFamily: 'Share Tech Mono,monospace', fontSize: '11px', color: gv(0.35) }}>
              Site criado por mim com IA: Claude · Synkra AIOS · GitHub · Groq · Railway
            </span>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative z-10 text-center px-6 py-8" style={{ borderTop: `1px solid ${gv(0.08)}` }}>
          <p style={{ fontFamily: 'Orbitron,monospace', fontSize: '12px', letterSpacing: '0.15em', color: 'var(--green)', marginBottom: '4px' }}>MAICK LENIN</p>
          <p style={{ fontFamily: 'Share Tech Mono,monospace', fontSize: '11px', color: gv(0.25) }}>Editor & Produtor Audiovisual · © {new Date().getFullYear()}</p>
          <a href="https://maicknuclear.wixsite.com/online" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Share Tech Mono,monospace', fontSize: '11px', color: gv(0.18), display: 'inline-block', marginTop: '8px' }}>by MaicknucleaR</a>
        </footer>
      </div>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div className="modal-overlay" onClick={() => setActiveVideo(null)}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '896px', margin: '0 16px' }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setActiveVideo(null)} style={{ position: 'absolute', top: '-36px', right: 0, fontFamily: 'Share Tech Mono,monospace', fontSize: '12px', color: gv(0.4), background: 'none', border: 'none', cursor: 'pointer' }}>ESC / FECHAR ✕</button>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#000', border: `1px solid ${gv(0.2)}`, borderRadius: '4px', overflow: 'hidden' }}>
              <iframe src={embed(activeVideo)} style={{ width: '100%', height: '100%' }} allow="autoplay; fullscreen" allowFullScreen />
            </div>
            <div style={{ marginTop: '16px', paddingLeft: '4px' }}>
              <h3 style={{ fontFamily: 'Orbitron,monospace', fontWeight: 700, fontSize: '18px', color: 'var(--white)' }}>{activeVideo.title}</h3>
              <p style={{ fontFamily: 'Share Tech Mono,monospace', fontSize: '12px', color: 'var(--green)', marginTop: '4px' }}>{activeVideo.sub}</p>
              <p style={{ fontSize: '12px', lineHeight: '1.6', color: 'rgba(168,196,176,0.55)', marginTop: '8px' }}>{activeVideo.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* CHAT IA */}
      {chatOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: '16px', background: 'rgba(2,6,8,0.75)', backdropFilter: 'blur(8px)' }}
          onClick={() => setChatOpen(false)}>
          <div style={{ width: '100%', maxWidth: '448px', borderRadius: '4px', background: 'var(--surface)', border: `1px solid ${gv(0.2)}`, maxHeight: '80vh', display: 'flex', flexDirection: 'column', boxShadow: `0 0 40px ${gv(0.08)}` }}
            onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: `1px solid ${gv(0.1)}`, background: gv(0.03) }}>
              <div>
                <p style={{ fontFamily: 'Orbitron,monospace', fontSize: '14px', fontWeight: 700, color: 'var(--green)' }}>Assistente IA</p>
                <p style={{ fontFamily: 'Share Tech Mono,monospace', fontSize: '11px', color: gv(0.35) }}>Maick Lenin · Groq powered</p>
              </div>
              <button onClick={() => setChatOpen(false)} style={{ color: gv(0.4), background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }}>✕</button>
            </div>
            <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', minHeight: '280px' }}>
              {chatHistory.map((msg, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                  <div style={{ maxWidth: '280px', padding: '10px 16px', borderRadius: '4px', fontSize: '13px', lineHeight: '1.5', background: msg.role === 'user' ? gv(0.1) : 'rgba(255,255,255,0.03)', border: `1px solid ${msg.role === 'user' ? gv(0.25) : gv(0.06)}`, color: msg.role === 'user' ? 'var(--green)' : 'var(--silver)', fontFamily: msg.role === 'user' ? 'Share Tech Mono,monospace' : 'DM Sans,sans-serif' }}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {chatLoading && (
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div className="blink" style={{ padding: '10px 16px', borderRadius: '4px', fontSize: '13px', fontFamily: 'Share Tech Mono,monospace', background: gv(0.03), color: gv(0.4), border: `1px solid ${gv(0.06)}` }}>processando</div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
            <div style={{ padding: '16px', borderTop: `1px solid ${gv(0.1)}` }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input value={chatMsg} onChange={e => setChatMsg(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendChat()}
                  placeholder="// pergunte sobre os trabalhos..."
                  className="chat-input" style={{ flex: 1, padding: '10px 12px', borderRadius: '4px' }} />
                <button onClick={sendChat} disabled={chatLoading} className="btn-cyber" style={{ padding: '10px 16px', fontSize: '16px', opacity: chatLoading ? 0.4 : 1 }}>↑</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
