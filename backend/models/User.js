// Import the Mongoose library
const mongoose = require("mongoose");

// Define the user schema using the Mongoose Schema constructor
const userSchema = new mongoose.Schema(
  {
    // Define the name field with type String, required, and trimmed
    name: {
      type: String,
      required: true,
      trim: true,
    },
    // Define the email field with type String, required, and trimmed
    email: {
      type: String,
      required: true,
      trim: true,
    },

    // Define the password field with type String and required
    password: {
      type: String,
      required: true,
    },
    // Define the role field with type String and enum values of "Admin", "Student", or "Visitor"
    role: {
      type: String,
      enum: ["Admin", "User"],
      required: true,
    },
    image: {
      type: String,
    },
    token: {
      type: String,
    },
    lastActive: {
      type: Date,
      default: Date.now,
    },
    resetPasswordExpires: {
      type: Date,
    },
    credentials: { type: mongoose.Schema.Types.ObjectId, ref: 'credentials', required: true }

  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
