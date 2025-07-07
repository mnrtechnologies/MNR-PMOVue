// Import the required modules
const express = require("express")
const { addJiraCredential } = require("../controllers/JiraController")
const { auth } = require("../middleware/auth")
const router = express.Router()

//router.post("/jira/connect",auth,addJiraCredential)

module.exports = router
