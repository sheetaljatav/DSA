// // const express = require('express');
// // const cors = require('cors');
// // const fetch = require('node-fetch'); // or use axios

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // const OPENAI_API_KEY = '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'; // Replace with your key

// // app.post('/api/explain', async (req, res) => {
// //   const { prompt } = req.body;
// //   if (!prompt) return res.status(400).json({ error: 'No prompt provided' });

// //   try {
// //     // Call OpenAI API (or any LLM API)
// //     const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
// //       method: 'POST',
// //       headers: {
// //         'Authorization': `Bearer ${OPENAI_API_KEY}`,
// //         'Content-Type': 'application/json'
// //       },
// //       body: JSON.stringify({
// //         model: 'gpt-3.5-turbo', // or 'gpt-4'
// //         messages: [{ role: 'user', content: prompt }],
// //         max_tokens: 300
// //       })
// //     });
// //     const data = await openaiRes.json();
// //     console.log('OpenAI API response:', data); // Log the response for debugging
// //         if (data.error) {
// //       // If OpenAI returns an error, show it in the reply
// //       return res.json({ reply: `OpenAI error: ${data.error.message}` });
// //     }
// //     const reply = data.choices?.[0]?.message?.content || 'No explanation found.';
// //     res.json({ reply });
// //   } catch (err) {
// //     res.status(500).json({ error: 'AI error', details: err.message });
// //   }
// // });

// // app.listen(3001, () => console.log('AI backend running on http://localhost:3001'));

// const express = require('express');
// const cors = require('cors');
// const fetch = require('node-fetch');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const HF_API_KEY = 'xai-fPg5oFStVOZGbWQgBbRyXk9r24euf2YgBSrZkQElyY0KjENgLzXHX8U5rKWhAMW8JzABFgD54pWxgKRg'; // Replace with your key

// app.post('/api/explain', async (req, res) => {
//   const { prompt } = req.body;
//   if (!prompt) return res.status(400).json({ error: 'No prompt provided' });

//   try {
//     const hfRes = await fetch(
//       'https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta',
//       {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${HF_API_KEY}`,
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ inputs: prompt })
//       }
//     );
//     const contentType = hfRes.headers.get('content-type');
//     if (!contentType || !contentType.includes('application/json')) {
//       const text = await hfRes.text();
//       return res.status(502).json({ error: 'HF error', details: text });
//     }
//     const data = await hfRes.json();
//     let reply = '';
//     if (Array.isArray(data)) {
//       reply = data[0]?.generated_text || 'No explanation found.';
//     } else if (data.generated_text) {
//       reply = data.generated_text;
//     } else if (data.error) {
//       reply = `Hugging Face error: ${data.error}`;
//     } else {
//       reply = 'No explanation found.';
//     }
//     res.json({ reply });
//   } catch (err) {
//     res.status(500).json({ error: 'HF error', details: err.message });
//   }
// });

// app.listen(3001, () => console.log('AI backend running on http://localhost:3001'));

const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(express.json());

const OPENROUTER_API_KEY = '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'; // Replace with your OpenRouter API key

app.post('/api/explain', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'No prompt provided' });

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

app.listen(3001, () => console.log('GLM-4.5-Air AI backend running on http://localhost:3001'));

// const express = require('express');
// const cors = require('cors');
// const fetch = require('node-fetch');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const API_KEY = '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'; 

// app.post('/api/explain', async (req, res) => {
//   const { prompt } = req.body;
//   if (!prompt) {
//     return res.status(400).json({ error: 'No prompt provided' });
//   }

//   try {
//     const grokRes = await fetch('https://api.x.ai/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${API_KEY}`,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         model: 'grok-beta',
//         messages: [
//           {
//             role: 'user',
//             content: prompt
//           }
//         ],
//         max_tokens: 1000,
//         temperature: 0.7
//       })
//     });

//     if (!grokRes.ok) {
//       const errorText = await grokRes.text();
//       return res.status(grokRes.status).json({
//         error: 'Grok API error',
//         details: errorText,
//         status: grokRes.status
//       });
//     }

//     const data = await grokRes.json();

//     let reply = '';
//     if (data.choices && data.choices.length > 0) {
//       reply = data.choices[0].message.content || 'No explanation found.';
//     } else if (data.error) {
//       reply = `Grok API error: ${data.error.message || data.error}`;
//     } else {
//       reply = 'No explanation found.';
//     }

//     res.json({ reply });
//   } catch (err) {
//     res.status(500).json({ error: 'Grok API error', details: err.message });
//   }
// });

// app.listen(3001, () => console.log('✅ Grok AI backend running on http://localhost:3001'));
