require("dotenv").config();

const config = {
  port: process.env.PORT || 8000,
  openaiApiKey: process.env.OPENAI_API_KEY,
};

module.exports = config;
