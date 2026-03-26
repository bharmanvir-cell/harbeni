import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid payload' });
  }

  const apiKey = process.env.MISTRAL_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'mistral-small-latest',
        max_tokens: 300,
        messages: [
          {
            role: 'system',
            content: `You are the Harbeni AI Assistant. Harbeni is a high-end AI automation and web development agency based in Toronto. Services: Custom AI Agents, High-Conversion Web Dev, Workflow Automation, SaaS Platforms. Pricing: Starter $1,500, Growth $4,000 + $1,200/mo, Elite $20,000 + $2,000/mo. Tone: sophisticated, minimalist, concise. Use "we" when referring to Harbeni. If the user asks about pricing, hiring, or getting started, encourage them to book a free call.`,
          },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Mistral error:', err);
      return res.status(502).json({ error: 'Upstream AI error' });
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content ?? '';
    return res.json({ text });
  } catch (err) {
    console.error('Handler error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
