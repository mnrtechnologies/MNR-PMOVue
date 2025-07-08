// Import the required modules
const express = require("express")

const { auth } = require("../middleware/auth")
const { callJiraConnectAPI, getAllJiraIssues } = require("../controllers/JiraController")
const router = express.Router()

router.post("/jira/connect",auth,callJiraConnectAPI)
router.get("/jira",getAllJiraIssues)

module.exports = router
