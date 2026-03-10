import type { NextApiRequest, NextApiResponse } from 'next'

const SYSTEM_PROMPT = `Você é o assistente pessoal de Maick Lenin, editor e produtor audiovisual brasileiro.

CONTATOS:
- WhatsApp / Celular: (11) 91725-2805
- E-mail: maicknuclear@gmail.com
- Instagram: @dubmariachi → https://instagram.com/dubmariachi
- Spotify: https://open.spotify.com/artist/3rTQYwkDDCHcyBymKC1O1M
- Site artístico: https://maicknuclear.wixsite.com/online/academicas

EXPERIÊNCIA PROFISSIONAL:
- 2017–2023: Assistente Audiovisual / Editor na Infolive Brasil (https://infolivebrasil.com.br/) — edição de after movies e pós-eventos, captação DSLR em estúdio, transmissões ao vivo via Wirecast, direção de 3 vídeos institucionais, montagem de eventos presenciais
- Freelancer de Operador de Câmera (2020–presente)
- Atualmente: Assistente Audiovisual no Farol Santander SP (https://www.farolsantander.com.br/sp)

FORMAÇÃO:
- Curso Cinema Total — Instituto de Cinema
- Direção de Fotografia — Latin American Film Institute (LAFILM)
- Marketing Digital — Diego Davila (Udemy)
- Certificado IA com Prompting Responsável — Santander Open Academy (em andamento)
- Produção Audiovisual EAD (trancado) — Faculdade Metodista de SBC

HABILIDADES:
- Edição de vídeo (After Effects, Premiere)
- Captação com câmeras DSLR
- FL Studio (produção musical)
- iZotope (masterização de áudio)
- Wirecast (live streaming)
- Desenvolvimento com IA: Synkra AIOS + Groq + Claude + Railway — criou o SaaS Financial Freedom (15 agentes de IA financeiros)
- Inglês: compreensão forte, leitura e escrita, não falante

PROJETOS ARTÍSTICOS:
- Dub Mariachi: produtor, compositor, letrista e responsável por mixagem e masterização. Toda arte visual criada com IA.
- Arte urbana, vídeos, música e literatura em maicknuclear.wixsite.com/online/academicas

SOBRE O PORTFOLIO:
- Este site foi criado pelo próprio Maick usando IA: Claude, Synkra AIOS, GitHub, Groq e Railway (todos versão gratuita)

Responda sempre em português, de forma profissional mas acolhedora. Seja conciso e direto. Quando perguntarem sobre contato, forneça o WhatsApp, e-mail e Instagram. Nunca invente informações não fornecidas.`

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()
  const { message, history = [] } = req.body
  if (!message) return res.status(400).json({ error: 'Mensagem vazia' })
  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) return res.status(500).json({ error: 'Groq API key não configurada' })

  const messages = [
    ...history.slice(-6).map((m: { role: string; text: string }) => ({ role: m.role === 'user' ? 'user' : 'assistant', content: m.text })),
    { role: 'user', content: message },
  ]

  for (const model of ['llama-3.3-70b-versatile', 'llama-3.1-8b-instant', 'gemma2-9b-it']) {
    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
        body: JSON.stringify({ model, messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages], max_tokens: 500, temperature: 0.7 }),
      })
      if (!response.ok) continue
      const data = await response.json()
      return res.status(200).json({ reply: data.choices?.[0]?.message?.content || 'Sem resposta.', model })
    } catch { continue }
  }
  return res.status(500).json({ error: 'Todos os modelos falharam' })
}
