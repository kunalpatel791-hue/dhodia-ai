// ================================
// DHODIA REFERENCE: SENTENCE PATTERNS
// ================================

const SENTENCE_PATTERNS = `
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

Use these patterns strictly.
Do not invent new sentence structures.
`;

// ================================
// DHODIA REFERENCE: NUMBERS
// ================================

const NUMBER_REFERENCE = `
Numbers (Gujarati → Numeric value):

એક = 1
બે = 2
તીન = 3
ચાર = 4
પાચ = 5
છ = 6
હાત = 7
આઠ = 8
નવ = 9
દહ = 10
અગ્યાર = 11
બાર = 12
તેર = 13
ચવુદ = 14
પંદાર = 15
હોલ = 16
હત્તાર = 17
અરાઢ = 18
ઓગણીક = 19
વીહ = 20
એકવીહ = 21
બાવીહ = 22
તેવીહ = 23
ચોવીહ = 24
પચ્ચીહ = 25
છવ્વીહ = 26
હત્તાવીહ = 27
અઠ્ઠાવીહ = 28
ઓગણતીહ = 29
તીહ = 30
એકત્રી = 31
બત્રી = 32
તૈત્રી = 33
ચોત્રી = 34
પાત્રી = 35
છત્રી = 36
હાડત્રી = 37
આડત્રી = 38
ઓગણચાલી = 39
ચાલીહ = 40
એકતાલી = 41
બેતાલી = 42
તૈતાલી = 43
ચુમ્માલી = 44
પીસ્તાલી = 45
છૈતાલી = 46
હુડતાલી = 47
અડતાલી = 48
ઓગણપચા = 49
પચા = 50
એકાવન = 51
બવન = 52
તેપ્પન = 53
ચોપ્પન = 54
પંચાવન = 55
છપ્પન = 56
હત્તાવન = 57
અઠાવન = 58
ઓગણહાટ = 59
હાટ = 60
એકહટ = 61
બેહટ = 62
તૈહટ = 63
ચોહટ = 64
પાહટ = 65
છોહટ = 66
હડહટ = 67
અડહટ = 68
ઓગણાહીત્તેર = 69
હીત્તેર = 70
એકોતેર = 71
બેનેર = 72
તોતેર = 73
ચમોતેર = 74
પચ્ચોતેર = 75
છોતેર = 76
હીત્તોતેર = 77
ઇઠ્ઠોતેર = 78
ઓગણાએહી = 79
એહી = 80
એકયાંહી = 81
બ્યાંહી = 82
ત્યાંહી = 83
ચોર્યાહી = 84
પંચ્યાંહી = 85
છયાંહી = 86
હત્યાંહી = 87
અઠયાહી = 88
નેવચાંહી = 89
નેવું = 90
એકાણું = 91
બાણું = 92
તાણું = 93
ચેરાણું = 94
પંચાણ = 95
છણુ = 96
હત્તાણું = 97
અઠાણ = 98
નવ્વાણું = 99
હો = 100
એક અજાર = 1000
એક લાખ = 100000
એક કરોડ = 10000000
એક અબાજ = 1000000000

When numbers appear:
- Understand the numeric value
- Keep Dhodia spoken form natural
`;


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

${SENTENCE_PATTERNS}

${NUMBER_REFERENCE}

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
