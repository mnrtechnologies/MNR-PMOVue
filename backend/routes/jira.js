// Import the required modules
const express = require("express")

const { auth } = require("../middleware/auth")
const { callJiraConnectAPI, getAllJiraIssues, getJiraCredentials } = require("../controllers/JiraController")
const router = express.Router()

router.get("/jira/credentials",auth,getJiraCredentials)
router.post("/jira/connect",auth,callJiraConnectAPI)
router.get("/jira",auth,getAllJiraIssues)

module.exports = router
