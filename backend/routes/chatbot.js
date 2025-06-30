// Import the required modules
const express = require("express")
const { chatbotHandler } = require("../controllers/ChatBotController")
const router = express.Router()

router.post("/chatbot",chatbotHandler)

module.exports = router
