import type { NextApiRequest, NextApiResponse } from 'next'

const SYSTEM_PROMPT = `Você é o assistente pessoal de Maick Lenin, editor e produtor audiovisual brasileiro.

SOBRE MAICK LENIN:
- Editor e Assistente Audiovisual com experiência em after movies, vídeos institucionais e conteúdos pós-evento
- Equipamento: Sony ZV-E10 + Gimbal Scorp C
- Experiência em estúdio: captação de vídeo com câmeras DSLR
- Transmissões ao vivo via Wirecast
- Dirigiu 3 vídeos institucionais
- Masterização de áudio com iZotope
- Montagem de eventos presenciais (logística e apoio técnico)
- Formação complementar em Marketing Digital (Diego Davila – Udemy)
- Desenvolveu o SaaS "Financial Freedom" — plataforma com 15 agentes de IA financeiros usando Next.js, Groq API e Supabase
- Instagram: @dubmariachi
- Spotify: https://open.spotify.com/artist/3rTQYwkDDCHcyBymKC1O1M
- Aberto a trabalhos em produtoras, agências, empresas e freelas

PROJETOS EM DESTAQUE:
- Jantar às Cegas (after movie gastronômico)
- GM Chevrolet TRACKER Session 2020 (vídeo corporativo)
- Lowrider Brasil - Otra Vida Bike Show 5ª Edição 2024 (cultura street)
- Teaser Directions – FORD/Startupi (institucional)
- DemoReel Infolive 2020

Responda sempre em português, de forma profissional mas acolhedora. Seja conciso. Se perguntarem sobre contato, indique o Instagram @dubmariachi. Se perguntarem sobre desenvolvimento de software ou IA, mencione o Financial Freedom como projeto. Nunca invente informações que não foram fornecidas.`

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const { message, history = [] } = req.body
  if (!message) return res.status(400).json({ error: 'Mensagem vazia' })

  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) return res.status(500).json({ error: 'Groq API key não configurada' })

  const messages = [
    ...history.slice(-6).map((m: { role: string; text: string }) => ({
      role: m.role === 'user' ? 'user' : 'assistant',
      content: m.text,
    })),
    { role: 'user', content: message },
  ]

  const models = ['llama-3.3-70b-versatile', 'llama-3.1-8b-instant', 'gemma2-9b-it']

  for (const model of models) {
    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
        body: JSON.stringify({ model, messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages], max_tokens: 500, temperature: 0.7 }),
      })
      if (!response.ok) continue
      const data = await response.json()
      const reply = data.choices?.[0]?.message?.content || 'Sem resposta.'
      return res.status(200).json({ reply, model })
    } catch {
      continue
    }
  }

  return res.status(500).json({ error: 'Todos os modelos falharam' })
}
