const mongoose = require("mongoose");

// Define the product schema
const contactSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
    },
    message: {
      type: String,
      required: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Create the product model based on the schema
const Contact = mongoose.model("Contact", contactSchema);

// Export the model
module.exports = Contact;
