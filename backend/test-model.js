require('dotenv').config({ path: '../.env' });
const token = process.env.HUGGINGFACE_API_KEY || 'your_huggingface_api_key';

async function test() {
  try {
    const res = await axios.post('https://router.huggingface.co/v1/chat/completions', {
      model: 'meta-llama/Llama-4-Scout-17B-16E-Instruct:groq',
      messages: [{ role: 'user', content: 'Say hello in one word.' }],
      max_tokens: 5
    }, {
      headers: { Authorization: `Bearer ${token}` },
      timeout: 15000
    });
    console.log('SUCCESS:', res.data.choices[0].message.content.trim());
  } catch (err) {
    console.log('ERROR:', err.response ? `${err.response.status} - ${JSON.stringify(err.response.data)}` : err.message);
  }
}
test();
