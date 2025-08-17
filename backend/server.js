const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(express.json());


//const OPENROUTER_API_KEY = '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'; // Replace with your OpenRouter API key

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
app.post('/api/explain', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'No prompt provided' });
  if (!OPENROUTER_API_KEY) return res.status(500).json({ error: 'OpenRouter API key is not set' });

  try {
    const openrouterRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'z-ai/glm-4.5-air:free',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 1000,
        temperature: 0.7
      })
    });

    if (!openrouterRes.ok) {
      const errorText = await openrouterRes.text();
      return res.status(openrouterRes.status).json({ 
        error: 'OpenRouter API error', 
        details: errorText,
        status: openrouterRes.status 
      });
    }

    const data = await openrouterRes.json();

    let reply = '';
    if (data.choices && data.choices.length > 0) {
      reply = data.choices[0].message.content || 'No explanation found.';
    } else if (data.error) {
      reply = `OpenRouter API error: ${data.error.message || data.error}`;
    } else {
      reply = 'No explanation found.';
    }

    res.json({ reply });

  } catch (err) {
    res.status(500).json({ error: 'OpenRouter API error', details: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
