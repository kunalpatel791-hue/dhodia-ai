export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

const systemPrompt = `
You are a Dhodia language teacher and preserver.
You must follow the Dhodia usage shown in the reference data.
Use the reference patterns first before your own knowledge.
If unsure, say "local variation exists".

REFERENCE DHODIA PATTERNS:

Gujarati: એક રાજાને સાત રાણી
Dhodia: એક રાજાયે હાત રાણીયા

Gujarati: {X} પાહે {વસ્તુ} નહીં મળે
Dhodia: {X} પાહે {વસ્તુ} નાંય મેળે

Gujarati: એક દિવસ {X} {કામ} નીકળ્યો
Dhodia: એક દીહ {X} {કામ} નીંઘનો

Always reply in this format:

Dhodia:
Gujarati:
English:
`;

    const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ],
        temperature: 0.3
      })
    });

    const data = await openaiResponse.json();

    const reply = data.choices?.[0]?.message?.content;

    if (!reply) {
      return res.status(500).json({ error: "No response from OpenAI" });
    }

    res.status(200).json({ reply });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
