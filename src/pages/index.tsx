import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import toast, { Toaster } from 'react-hot-toast'

// ── VÍDEOS (extraídos do site Wix) ────────────────────────────────────────────
const VIDEOS = [
  {
    id: 'Ti9berTfKLU', src: 'youtube', duration: '02:01',
    title: 'Jantar às Cegas',
    sub: 'Experiência Gastronômica Inesquecível',
    cat: 'Pós-Evento',
    desc: 'Edição dinâmica de after movie para evento gastronômico sensorial. Direção de cortes sincronizados com a narrativa do evento.',
  },
  {
    id: 'eWAPtLbaQ-I', src: 'youtube', duration: '01:08',
    title: 'GM Chevrolet TRACKER',
    sub: 'Session 2020 — Vídeo Pós-Evento',
    cat: 'Corporativo',
    desc: 'Cobertura e edição de vídeo corporativo institucional para evento de lançamento GM Chevrolet.',
  },
  {
    id: 'WuZI1ITh-rk', src: 'youtube', duration: '09:13',
    title: 'Lowrider Brasil',
    sub: 'Otra Vida Bike Show 5ª Edição [2024]',
    cat: 'Cultura & Street',
    desc: 'Filmagem e edição completa do evento cultural. Registro apaixonado da 5ª edição em Mogi das Cruzes — SP.',
  },
  {
    id: 'ZgXfVAwqCIc', src: 'youtube', duration: '00:37',
    title: 'Teaser Directions',
    sub: 'Luciano Diremeier da FORD — Startupi',
    cat: 'Institucional',
    desc: 'Teaser para programa institucional com diretor da FORD. Corte preciso para máximo impacto em formato curto.',
  },
  {
    id: 'g4X1x67pbJE', src: 'youtube', duration: '13:24',
    title: 'Quero ser roteirista',
    sub: 'Letícia Bulhões — Imprensa Mahon',
    cat: 'Entrevista',
    desc: 'Edição de entrevista longa com roteirista Letícia Bulhões. Condução narrativa e ritmo de corte para conteúdo de longa duração.',
  },
  {
    id: 'BtOR2v6G9Xc', src: 'youtube', duration: '03:21',
    title: 'Um Dia Com DJ Reggi',
    sub: 'Documentary Style',
    cat: 'Mini-Doc',
    desc: 'Registro documental de um dia na rotina do DJ. Edição no estilo cinema-vérité com identidade visual marcante.',
  },
  {
    id: 'OkOcIdo-ok4', src: 'youtube', duration: '00:36',
    title: 'Vídeo Atualli',
    sub: 'Reel Institucional',
    cat: 'Reel',
    desc: 'Reel institucional finalizado com identidade de marca. Sintetiza a essência da empresa em menos de 40 segundos.',
  },
  {
    id: 'FKeceeRZ-7k', src: 'youtube', duration: '00:20',
    title: 'Demo Reel',
    sub: 'Amostra de Trabalhos',
    cat: 'Reel',
    desc: 'Demo reel de trabalhos selecionados. Compilação técnica e criativa da produção audiovisual.',
  },
  {
    id: 'lgcR1d1hkbI', src: 'youtube', duration: '00:34',
    title: 'Vídeo 1',
    sub: 'Social Media Cut',
    cat: 'Reel',
    desc: 'Corte para redes sociais com ritmo dinâmico e linguagem visual contemporânea.',
  },
  {
    id: '2qoSVSW9000', src: 'youtube', duration: '00:30',
    title: 'Main Women',
    sub: 'Reel de Conteúdo',
    cat: 'Reel',
    desc: 'Peça audiovisual para redes sociais com narrativa visual impactante.',
  },
  {
    id: 'cz_Ah4WxjAI', src: 'youtube', duration: '00:06',
    title: 'Main Garotas',
    sub: 'Short Cut',
    cat: 'Reel',
    desc: 'Corte rápido com transições criativas para formato short/reels.',
  },
  {
    id: '2xU2UfUbAak', src: 'youtube', duration: '00:05',
    title: 'Main Anime',
    sub: 'Motion Cut',
    cat: 'Motion',
    desc: 'Corte com identidade visual inspirada em motion design e cultura pop.',
  },
  // Vimeo
  {
    id: '695957650', src: 'vimeo', duration: '02:01',
    title: 'DemoReel Infolive',
    sub: '2020 — Estúdio e Transmissão',
    cat: 'Demo Reel',
    desc: 'Demo reel do estúdio Infolive 2020. Compilação de captações em estúdio com câmeras DSLR e transmissões ao vivo via Wirecast.',
  },
  {
    id: '673646596', src: 'vimeo', duration: '03:18',
    title: 'Eleonora / Marcos Rojo',
    sub: 'Barbara — Projeto Artístico',
    cat: 'Artístico',
    desc: 'Produção de projeto audiovisual artístico. Direção, filmagem e edição com linguagem visual autoral.',
  },
]

const SKILLS = [
  { icon: '🎬', label: 'Edição de Vídeo', detail: 'After Movie / Pós-Evento / Institucional' },
  { icon: '📷', label: 'Captação DSLR', detail: 'Sony ZV-E10 + Gimbal Scorp C' },
  { icon: '🎬', label: 'Direção', detail: '3 vídeos institucionais dirigidos' },
  { icon: '🔴', label: 'Live Streaming', detail: 'Wirecast — transmissões e lives' },
  { icon: '🔊', label: 'Masterização de Áudio', detail: 'iZotope — pós-produção de áudio' },
  { icon: '🎪', label: 'Montagem de Eventos', detail: 'Logística e apoio técnico presencial' },
  { icon: '📲', label: 'Marketing Digital', detail: 'Formação Diego Davila — Udemy' },
  { icon: '🤖', label: 'Desenvolvimento com IA', detail: 'Financial Freedom SaaS — Next.js + Groq + Supabase' },
]

const CATS = ['Todos', 'Pós-Evento', 'Corporativo', 'Institucional', 'Cultura & Street', 'Mini-Doc', 'Reel', 'Demo Reel', 'Artístico', 'Motion']

export default function Portfolio() {
  const [activeVideo, setActiveVideo] = useState<typeof VIDEOS[0] | null>(null)
  const [filter, setFilter] = useState('Todos')
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMsg, setChatMsg] = useState('')
  const [chatHistory, setChatHistory] = useState<{role:'user'|'ai', text:string}[]>([
    { role: 'ai', text: 'Olá! Sou o assistente do Maick Lenin. Posso falar sobre seus trabalhos, habilidades, disponibilidade e muito mais. Como posso te ajudar? 🎬' }
  ])
  const [chatLoading, setChatLoading] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => { setTimeout(() => setVisible(true), 100) }, [])
  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [chatHistory])

  const filteredVideos = filter === 'Todos' ? VIDEOS : VIDEOS.filter(v => v.cat === filter)

  const sendChat = async () => {
    if (!chatMsg.trim() || chatLoading) return
    const userMsg = chatMsg.trim()
    setChatMsg('')
    setChatHistory(h => [...h, { role: 'user', text: userMsg }])
    setChatLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, history: chatHistory }),
      })
      const data = await res.json()
      setChatHistory(h => [...h, { role: 'ai', text: data.reply }])
    } catch {
      setChatHistory(h => [...h, { role: 'ai', text: 'Erro de conexão. Tente novamente.' }])
    }
    setChatLoading(false)
  }

  const thumbUrl = (v: typeof VIDEOS[0]) =>
    v.src === 'youtube'
      ? `https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`
      : `https://i.vimeocdn.com/video/${v.id}-d_320x180`

  const embedUrl = (v: typeof VIDEOS[0]) =>
    v.src === 'youtube'
      ? `https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0`
      : `https://player.vimeo.com/video/${v.id}?autoplay=1`

  return (
    <>
      <Head>
        <title>Maick Lenin — Editor & Produtor Audiovisual</title>
        <meta name="description" content="Portfolio de Maick Lenin — Editor e Produtor Audiovisual. After movies, institucionais, eventos corporativos." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎬</text></svg>" />
      </Head>

      <div className="relative min-h-screen" style={{ background: 'var(--void)' }}>
        {/* Stars */}
        <div className="stars" />
        {/* Grain */}
        <div className="grain" />

        {/* Ambient glow */}
        <div className="fixed inset-0 pointer-events-none z-0"
          style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,168,76,0.04) 0%, transparent 70%)' }} />

        <Toaster position="bottom-right" toastOptions={{ style: { background: '#0c0c14', color: '#f4f4f8', border: '1px solid rgba(201,168,76,0.2)' } }} />

        {/* ── HERO ────────────────────────────────────────────────────── */}
        <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center"
          style={{ paddingTop: '80px' }}>

          {/* Top nav */}
          <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
            style={{ background: 'rgba(2,2,4,0.8)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(201,168,76,0.08)' }}>
            <span className="font-cinzel text-sm tracking-widest" style={{ color: 'var(--gold)' }}>ML</span>
            <div className="flex items-center gap-6">
              {['Trabalhos', 'Sobre', 'Habilidades', 'Contato'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`}
                  className="text-xs tracking-widest uppercase transition-colors hover:text-yellow-400"
                  style={{ color: 'var(--muted)', fontFamily: 'JetBrains Mono, monospace' }}>
                  {item}
                </a>
              ))}
            </div>
            <button onClick={() => setChatOpen(true)}
              className="btn-contact text-xs py-2 px-4">
              ✦ Falar comigo
            </button>
          </nav>

          {/* Hero content */}
          <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="section-num mb-6 fade-in fade-in-1">✦ PRODUTOR AUDIOVISUAL ✦</p>

            <h1 className="font-cinzel fade-in fade-in-2 mb-4"
              style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.02em' }}>
              <span className="text-gold-shimmer">Maick</span>
              <br />
              <span style={{ color: 'var(--white)' }}>Lenin</span>
            </h1>

            <div className="divider w-24 mx-auto my-6 fade-in fade-in-3" />

            <p className="fade-in fade-in-4 max-w-xl mx-auto text-base leading-relaxed"
              style={{ color: 'var(--silver)', fontStyle: 'italic', fontWeight: 300 }}>
              Editor & Assistente Audiovisual. Produtor Musical. Street Artist.
              <br />
              <span style={{ color: 'var(--gold)', fontSize: '0.9em' }}>Produtor audiovisual pelo destino, musical por amor.</span>
            </p>

            <div className="fade-in fade-in-5 flex items-center justify-center gap-4 mt-10">
              <a href="#trabalhos" className="btn-contact btn-contact-fill">Ver Portfólio →</a>
              <a href="https://open.spotify.com/artist/3rTQYwkDDCHcyBymKC1O1M" target="_blank" rel="noopener noreferrer"
                className="btn-contact">
                ♫ Spotify
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            style={{ color: 'var(--muted)' }}>
            <span className="text-xs tracking-widest" style={{ fontFamily: 'JetBrains Mono' }}>SCROLL</span>
            <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom, rgba(201,168,76,0.4), transparent)' }} />
          </div>
        </section>

        {/* ── SOBRE ───────────────────────────────────────────────────── */}
        <section id="sobre" className="relative z-10 max-w-5xl mx-auto px-6 py-28">
          <div className="divider mb-16" />
          <p className="section-num mb-4">01 — SOBRE</p>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-cinzel text-4xl font-bold mb-6" style={{ color: 'var(--white)' }}>
                Técnica, criatividade<br />
                <span className="text-gold">e impacto visual.</span>
              </h2>
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--silver)', fontWeight: 300 }}>
                <p>
                  🎥 <strong style={{ color: 'var(--white)' }}>Editor e Assistente Audiovisual</strong> com experiência
                  em edição de vídeos, especialmente em <em>after movies</em>, institucionais e conteúdos pós-evento.
                </p>
                <p>
                  📍 <strong style={{ color: 'var(--white)' }}>Estúdio:</strong> captação de áudio e vídeo com câmeras DSLR,
                  assegurando qualidade técnica e estética nas produções.
                </p>
                <p>
                  📽️ <strong style={{ color: 'var(--white)' }}>Externas:</strong> direção de vídeos institucionais e captação em eventos corporativos e culturais.
                  3 vídeos dirigidos.
                </p>
                <p>
                  🔊 Conhecimento em <strong style={{ color: 'var(--white)' }}>masterização de áudio</strong> com iZotope.
                </p>
                <p>
                  🎪 Atuação eventual em <strong style={{ color: 'var(--white)' }}>montagem de eventos presenciais</strong>, com logística e apoio técnico.
                </p>
                <p>
                  🤖 <strong style={{ color: 'var(--gold)' }}>Desenvolvimento com IA:</strong> criação do SaaS
                  <em> Financial Freedom</em> — plataforma com 15 agentes de IA financeiros, desenvolvida com Next.js, Groq API e Supabase.
                  Prova de que técnica audiovisual e tecnologia podem coexistir na mesma mente criativa.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs tracking-widest mb-5" style={{ color: 'var(--muted)', fontFamily: 'JetBrains Mono' }}>
                EQUIPAMENTO & STACK
              </p>
              {[
                { label: 'Sony ZV-E10 + Gimbal Scorp C', icon: '📷' },
                { label: 'Adobe Premiere / After Effects', icon: '🎬' },
                { label: 'iZotope — Masterização de Áudio', icon: '🔊' },
                { label: 'Wirecast — Live Streaming', icon: '🔴' },
                { label: 'Next.js + TypeScript + Groq AI', icon: '⚡' },
                { label: 'Supabase + Railway (Deploy)', icon: '☁️' },
              ].map(item => (
                <div key={item.label}
                  className="flex items-center gap-3 px-4 py-3 rounded"
                  style={{ background: 'rgba(12,12,20,0.8)', border: '1px solid rgba(201,168,76,0.1)' }}>
                  <span>{item.icon}</span>
                  <span className="text-sm" style={{ color: 'var(--silver)' }}>{item.label}</span>
                </div>
              ))}
              <div className="mt-6 p-4 rounded" style={{ background: 'rgba(201,168,76,0.04)', border: '1px solid rgba(201,168,76,0.2)' }}>
                <p className="text-xs" style={{ color: 'var(--muted)', fontFamily: 'JetBrains Mono' }}>FORMAÇÃO COMPLEMENTAR</p>
                <p className="text-sm mt-1" style={{ color: 'var(--silver)' }}>📚 Marketing Digital — Diego Davila (Udemy)</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── HABILIDADES ─────────────────────────────────────────────── */}
        <section id="habilidades" className="relative z-10 max-w-5xl mx-auto px-6 py-10">
          <div className="divider mb-16" />
          <p className="section-num mb-4">02 — HABILIDADES</p>
          <h2 className="font-cinzel text-3xl font-bold mb-10" style={{ color: 'var(--white)' }}>
            O que eu <span className="text-gold">domino</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {SKILLS.map(skill => (
              <div key={skill.label}
                className="p-4 rounded transition-all duration-300 group cursor-default"
                style={{ background: 'var(--surface)', border: '1px solid rgba(201,168,76,0.1)' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,168,76,0.35)'
                  ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,168,76,0.1)'
                  ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                }}>
                <div className="text-2xl mb-2">{skill.icon}</div>
                <p className="text-sm font-medium mb-1" style={{ color: 'var(--white)' }}>{skill.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>{skill.detail}</p>
                {skill.label === 'Desenvolvimento com IA' && (
                  <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded"
                    style={{ background: 'rgba(201,168,76,0.12)', color: 'var(--gold)', fontFamily: 'JetBrains Mono' }}>
                    AI-Powered
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── TRABALHOS ───────────────────────────────────────────────── */}
        <section id="trabalhos" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="divider mb-16" />
          <p className="section-num mb-4">03 — TRABALHOS</p>
          <h2 className="font-cinzel text-3xl font-bold mb-3" style={{ color: 'var(--white)' }}>
            Acervo <span className="text-gold">audiovisual</span>
          </h2>
          <p className="text-sm mb-10" style={{ color: 'var(--muted)' }}>
            Todos os vídeos foram editados por mim. Alguns dirigi e filmei.
          </p>

          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATS.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)}
                className="skill-badge transition-all"
                style={{
                  background: filter === cat ? 'rgba(201,168,76,0.15)' : 'rgba(201,168,76,0.04)',
                  borderColor: filter === cat ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.15)',
                  color: filter === cat ? 'var(--gold-bright)' : 'rgba(201,168,76,0.6)',
                }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredVideos.map(video => (
              <div key={video.id + video.src}
                className="video-card rounded cursor-pointer"
                onClick={() => setActiveVideo(video)}>
                {/* Thumbnail */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <img
                    src={thumbUrl(video)}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{ filter: 'brightness(0.7)' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{ background: 'rgba(201,168,76,0.15)', border: '2px solid rgba(201,168,76,0.5)', backdropFilter: 'blur(4px)' }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLDivElement).style.background = 'rgba(201,168,76,0.35)'
                        ;(e.currentTarget as HTMLDivElement).style.transform = 'scale(1.1)'
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLDivElement).style.background = 'rgba(201,168,76,0.15)'
                        ;(e.currentTarget as HTMLDivElement).style.transform = 'scale(1)'
                      }}>
                      <span style={{ color: 'var(--gold)', fontSize: '18px', marginLeft: '3px' }}>▶</span>
                    </div>
                  </div>
                  {/* Duration */}
                  <span className="absolute bottom-2 right-2 text-xs px-2 py-0.5 rounded"
                    style={{ background: 'rgba(2,2,4,0.85)', color: 'var(--white)', fontFamily: 'JetBrains Mono' }}>
                    {video.duration}
                  </span>
                  {/* Category */}
                  <span className="absolute top-2 left-2 text-xs px-2 py-0.5 rounded"
                    style={{ background: 'rgba(201,168,76,0.2)', color: 'var(--gold)', fontFamily: 'JetBrains Mono', backdropFilter: 'blur(4px)' }}>
                    {video.cat}
                  </span>
                </div>
                {/* Info */}
                <div className="p-4">
                  <h3 className="font-cinzel font-bold text-sm mb-0.5" style={{ color: 'var(--white)' }}>{video.title}</h3>
                  <p className="text-xs mb-2" style={{ color: 'var(--muted)' }}>{video.sub}</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(200,200,212,0.5)' }}>{video.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTATO ─────────────────────────────────────────────────── */}
        <section id="contato" className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
          <div className="divider mb-16" />
          <p className="section-num mb-4">04 — CONTATO</p>
          <h2 className="font-cinzel text-4xl font-bold mb-4" style={{ color: 'var(--white)' }}>
            Vamos criar<br /><span className="text-gold">algo juntos?</span>
          </h2>
          <p className="text-sm mb-10 max-w-md mx-auto" style={{ color: 'var(--muted)', fontWeight: 300 }}>
            Aberto a projetos em produtoras, agências, empresas e freelas.
            100% aberto ao aprendizado e novos desafios.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://instagram.com/dubmariachi" target="_blank" rel="noopener noreferrer"
              className="btn-contact btn-contact-fill">
              📸 @dubmariachi — Instagram
            </a>
            <button onClick={() => setChatOpen(true)} className="btn-contact">
              🤖 Falar com meu Assistente IA
            </button>
          </div>

          {/* AI badge */}
          <div className="inline-flex items-center gap-3 mt-16 px-6 py-3 rounded"
            style={{ background: 'rgba(201,168,76,0.04)', border: '1px solid rgba(201,168,76,0.15)' }}>
            <span style={{ color: 'var(--gold)' }}>⚡</span>
            <span className="text-xs" style={{ color: 'var(--muted)', fontFamily: 'JetBrains Mono' }}>
              Este site + Financial Freedom SaaS — desenvolvidos com IA por MaicknucleaR
            </span>
          </div>
        </section>

        {/* ── FOOTER ──────────────────────────────────────────────────── */}
        <footer className="relative z-10 border-t px-6 py-8 text-center"
          style={{ borderColor: 'rgba(201,168,76,0.1)' }}>
          <p className="font-cinzel text-xs tracking-widest mb-2" style={{ color: 'var(--gold)' }}>MAICK LENIN</p>
          <p className="text-xs" style={{ color: 'var(--muted)', fontFamily: 'JetBrains Mono' }}>
            Editor & Produtor Audiovisual · Portfolio © {new Date().getFullYear()}
          </p>
          <a href="https://maicknuclear.wixsite.com/online" target="_blank" rel="noopener noreferrer"
            className="text-xs mt-2 inline-block hover:underline" style={{ color: 'rgba(201,168,76,0.4)' }}>
            by MaicknucleaR
          </a>
        </footer>
      </div>

      {/* ── VIDEO MODAL ─────────────────────────────────────────────── */}
      {activeVideo && (
        <div className="modal-overlay" onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-4xl mx-4" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-sm transition-colors"
              style={{ color: 'var(--muted)', fontFamily: 'JetBrains Mono' }}>
              ESC / FECHAR ✕
            </button>
            <div className="relative w-full rounded overflow-hidden"
              style={{ aspectRatio: '16/9', background: '#000', border: '1px solid rgba(201,168,76,0.2)' }}>
              <iframe
                src={embedUrl(activeVideo)}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen />
            </div>
            <div className="mt-4 px-1">
              <h3 className="font-cinzel font-bold text-lg" style={{ color: 'var(--white)' }}>{activeVideo.title}</h3>
              <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>{activeVideo.sub}</p>
              <p className="text-xs mt-2 leading-relaxed" style={{ color: 'rgba(200,200,212,0.5)' }}>{activeVideo.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* ── CHAT IA ─────────────────────────────────────────────────── */}
      {chatOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
          style={{ background: 'rgba(2,2,4,0.7)', backdropFilter: 'blur(6px)' }}>
          <div className="w-full max-w-md rounded-lg overflow-hidden"
            style={{ background: 'var(--surface)', border: '1px solid rgba(201,168,76,0.2)', maxHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4"
              style={{ borderBottom: '1px solid rgba(201,168,76,0.1)', background: 'rgba(201,168,76,0.04)' }}>
              <div>
                <p className="font-cinzel text-sm font-bold" style={{ color: 'var(--gold)' }}>Assistente IA — Maick Lenin</p>
                <p className="text-xs" style={{ color: 'var(--muted)', fontFamily: 'JetBrains Mono' }}>Powered by Groq</p>
              </div>
              <button onClick={() => setChatOpen(false)} style={{ color: 'var(--muted)' }}>✕</button>
            </div>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ minHeight: '300px' }}>
              {chatHistory.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className="max-w-xs px-4 py-2.5 rounded text-sm leading-relaxed"
                    style={{
                      background: msg.role === 'user' ? 'rgba(201,168,76,0.12)' : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${msg.role === 'user' ? 'rgba(201,168,76,0.25)' : 'rgba(255,255,255,0.06)'}`,
                      color: msg.role === 'user' ? 'var(--gold-bright)' : 'var(--silver)',
                    }}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {chatLoading && (
                <div className="flex justify-start">
                  <div className="px-4 py-2.5 rounded text-sm" style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--muted)' }}>
                    <span className="cursor-line">Digitando</span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
            {/* Input */}
            <div className="p-4" style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}>
              <div className="flex gap-2">
                <input
                  value={chatMsg}
                  onChange={e => setChatMsg(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && sendChat()}
                  placeholder="Pergunte sobre os trabalhos, disponibilidade..."
                  className="flex-1 px-3 py-2.5 rounded text-sm outline-none"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.15)', color: 'var(--white)' }}
                />
                <button onClick={sendChat} disabled={chatLoading}
                  className="px-4 py-2.5 rounded text-sm font-medium transition-all disabled:opacity-40"
                  style={{ background: 'linear-gradient(135deg, #c9a84c, #a07830)', color: '#0a0a0a' }}>
                  ↑
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
