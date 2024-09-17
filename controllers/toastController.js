const { createToastMessage } = require("../services/openaiService");

const createToast = async (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: "Username is required!" });
  }

  try {
    const aiResponse = await createToastMessage(username);
    return res.status(200).json({ toast: `${aiResponse}` });
  } catch (error) {
    console.error("Error creating toast message:", error);
    return res.status(500).json({ error: "Error calling OpenAI API" });
  }
};

module.exports = { createToast };
