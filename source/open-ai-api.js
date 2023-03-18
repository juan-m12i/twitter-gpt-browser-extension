const OPEN_AI_API_URL = "https://api.openai.com/v1/chat/completions";

console.log('open-ai-api.js loaded');

async function fetchOpenAIResponse(messages) {
  const response = await fetch(OPEN_AI_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${OPEN_AI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: messages,
    }),
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

