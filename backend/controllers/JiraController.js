
// import User from "../models/User.js";

// // ✅ Controller to add Jira credentials (only one per user)
// export const addJiraCredential = async (req, res) => {
//   try {
//     const { jira_email, jira_domain, jira_api_key } = req.body;

//     const userId = req.user._id;

//     const user = await User.findById(userId).populate('credentials');
//     if (!user) return res.status(404).json({ error: 'User not found' });

//     // Check if user already has a credential linked
//     if (user.credentials) {
//       return res.status(400).json({ error: 'User already has credentials set' });
//     }

//     //hit api write logic here



//     // Link credential back to user
//     user.credentials = savedCredential._id;
//     await user.save();

//     res.status(201).json({
//       message: 'Credentials saved successfully',
//       credentials: {
//         _id: savedCredential._id,
//         jira_email: savedCredential.jira_email,
//         jira_domain: savedCredential.jira_domain
//       }
//     });
//   } catch (error) {
//     console.error('Add Credential Error:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
