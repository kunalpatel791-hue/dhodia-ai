export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Only POST requests allowed" });
    }

    const { message } = req.body || {};

    if (!message) {
      return res.status(400).json({ error: "Message missing" });
    }

    // 🔹 Send request to OpenAI
    const openaiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-5.2-mini",
        input: message
      })
    });

    // 🔹 Read raw text first (prevents JSON crash)
    const raw = await openaiResponse.text();

    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      console.error("Non-JSON response:", raw);
      return res.status(500).json({
        error: "OpenAI returned non-JSON response",
        raw
      });
    }

    // 🔹 If OpenAI returned error
    if (!openaiResponse.ok) {
      console.error("OpenAI API error:", data);
      return res.status(500).json({
        error: "OpenAI request failed",
        details: data
      });
    }

    // 🔹 Extract reply safely
    const reply =
      data.output?.[0]?.content?.[0]?.text ||
      data.output_text?.[0] ||
      "No reply found";

    return res.status(200).json({ reply });

  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: err.message });
  }
}
