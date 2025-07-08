import axios from 'axios';
import jiraissues from '../models/jiraissues.js'


export const callJiraConnectAPI = async (req, res) => {
  try {
    const { jira_email, jira_domain, jira_api_key } = req.body;
    const userId = req.user?.id; 

        if (!userId) {
      return res.status(400).json({ error: 'userid required ' });
    }

    if (!jira_email || !jira_domain || !jira_api_key ) {
      return res.status(400).json({ error: 'Missing jira required fields' });
    }

    const response = await axios.post(
      'https://mnr-pppvue-jira-backend.onrender.com/api/jira/connect',
      {
        jira_email,
        jira_domain,
        jira_api_key,
        user_id: userId, 
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${req.headers.authorization?.split(' ')[1]}`, // optional if the external API needs token
        },
      }
    );

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('❌ Error calling Jira Connect API:', error.message);

    if (error.response) {
      return res
        .status(error.response.status)
        .json({ error: error.response.data || 'API call failed' });
    }

    res.status(500).json({ error: 'Internal server error' });
  }
};


// ✅ Get all Jira Issues (optionally filter by user ID, project, etc.)
export const getAllJiraIssues = async (req, res) => {
  try {
    // Optional: Filter by logged-in user if needed
    // const userId = req.user?._id;
    // const issues = await JiraIssue.find({ user: userId });

    const issues = await jiraissues.find(); // fetch all issues
    res.status(200).json(issues);
  } catch (error) {
    console.error("❌ Error fetching Jira issues:", error.message);
    res.status(500).json({ error: "Failed to fetch Jira issues" });
  }
};
