const axios = require("axios");

exports.chatbotHandler = async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ success: false, message: "Query is required" });
  }

  try {
    const response = await axios.post(
      "https://pm-ai-tool-backend-vb5y.onrender.com/chatbot",
      { query },
      { headers: { "Content-Type": "application/json" } }
    );

    const data = response.data;

    return res.status(200).json({
      success: true,
      response: data.response,
    });
  } catch (error) {
    console.error("Chatbot Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to get chatbot response",
      error: error?.response?.data || error.message,
    });
  }
};
