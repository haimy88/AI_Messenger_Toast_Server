const OpenAI = require("openai");
const config = require("../config/config");

const openai = new OpenAI({
  apiKey: config.openaiApiKey,
});

const createToastMessage = async (username) => {
  const prompt = `Welcome our new user ${username} to our site.`;

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-4",
  });

  return chatCompletion.choices[0].message.content;
};

module.exports = { createToastMessage };
