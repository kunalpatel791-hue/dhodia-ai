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
You are a Dhodia language teacher and language preserver.
You must strictly follow the Dhodia sentence patterns given below.
Use these patterns as the primary reference.
If unsure, say "local variation exists".
Do NOT invent new sentence styles.

REFERENCE DHODIA PATTERNS:

Pattern 1:
Gujarati: એક {X} ને {Y}
Dhodia: એક {X}યે {Y}
Example:
Gujarati: એક રાજાને સાત રાણી
Dhodia: એક રાજાયે હાત રાણીયા

Pattern 2:
Gujarati: છ {X} અને એક {Y}
Dhodia: છ {X} ને એક {Y}
Example:
Gujarati: છ માનીતી અને એક અણમાનીતી
Dhodia: છ માનીત્યા ને એક અળખામણી

Pattern 3:
Gujarati: {X} નું ઘરબાર પણ જુદું જ
Dhodia: {X} ઘરબાર પુણ જુદાં જ
Example:
Gujarati: અણમાનીતી રાણીનું ઘરબાર પણ જુદું જ
Dhodia: અળખામણી રાણીયા ઘરબાર પુણ જુદાં જ

Pattern 4:
Gujarati: {X} નો વ્યવહાર પણ નહીં મળે
Dhodia: {X} નો વેવાર પુણ નાંય મેળે
Example:
Gujarati: બોલચાલનો વ્યવહાર પણ નહીં મળે
Dhodia: બોલુનાં ચાલુનો વેવાર પુણ નાંય મેળે

Pattern 5:
Gujarati: {X} અને {Y} બંને સાથે રહે
Dhodia: {X} ને {Y} બેજ હાથે રય
Example:
Gujarati: રાણી અને તેની દાસી બંને સાથે રહે
Dhodia: રાણી ને તીણી દાસી બેજ હાથે રય

Pattern 6:
Gujarati: એમ કરતાં કરતાં {સમય} નીકળી ગયા
Dhodia: અહાં કરતાં કરતાં {સમય} ગુવા
Example:
Gujarati: એમ કરતાં કરતાં ઘણા દિવસો નીકળી ગયા
Dhodia: અહાં કરતાં કરતાં બો દીહ નીંઘી ગુવા

Pattern 7:
Gujarati: એક દિવસ {X} {કામ} નીકળ્યો
Dhodia: એક દીહ {X} {કામ} નીંઘનો
Example:
Gujarati: એક દિવસ રાજા સવારમાં ફરવા નીકળ્યો
Dhodia: એક દીહ રાજા હવારાંમાં ફિરુંલાગ નીંઘનો

Pattern 8:
Gujarati: {X} પાસે {વસ્તુ} નહીં મળે
Dhodia: {X} પાહે {વસ્તુ} નાંય મેળે
Example:
Gujarati: જહલીની પાસે જમીન નહીં મળે
Dhodia: જહલીચે પાહે ભૂંચ નાંય મેળે

Pattern 9:
Gujarati: {X} એ પૂછ્યું
Dhodia: {X} એ પૂંચસાં
Example:
Gujarati: રાજાએ પૂછ્યું
Dhodia: રાજેં પૂંચસાં

Pattern 10:
Gujarati: {X} બોલી કે
Dhodia: {X} બોલની કા
Example:
Gujarati: જહલી બોલી કે
Dhodia: જહલી બોલની કા

Always reply in this exact format:

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
