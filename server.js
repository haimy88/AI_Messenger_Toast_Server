require("dotenv").config(); // This loads the .env file into process.env
const express = require("express");
const OpenAI = require("openai");
const app = express();

app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const PORT = process.env.PORT || 3000;

app.post("/toast", async (req, res) => {
  const { username } = req.body; // Assuming the client sends a username

  if (!username) {
    return res.status(400).json({ error: "Username is required!" });
  }

  try {
    const prompt = `Welcome our new user ${username} to our site.`; // Personalized message

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-4",
    });

    const aiResponse = chatCompletion.choices[0].message.content;

    return res.status(200).json({ toast: `AI Response: ${aiResponse}` });
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return res.status(500).json({ error: "Error calling OpenAI API" });
  }
});

app.listen(PORT, () => {
  console.log(`Toast Server is running on http://localhost:${PORT}`);
});
