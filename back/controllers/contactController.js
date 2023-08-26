const Contact = require("../models/contactModel");

const sendMessage = async (req, res) => {
  try {
    const { email, subject, message } = req.body;

    const newMessage = await Contact({
      email: email,
      subject: subject,
      message: message,
    });

    newMessage.save();

    res.status(200).json("message added successfully");
  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
  }
};

const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find({ isRead: false });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "cannot get products" });
  }
};

const readMessage = async (req, res) => {
  try {
    const messageID = req.params.id;

    const update = await Contact.findOneAndUpdate(
      { _id: messageID },
      {
        isRead: true,
      }
    );

    res.status(201).json("quote updated successfully ");
  } catch (error) {
    res.status(500).json({ error: "Failed to update quote" });
  }
};

module.exports = {
  sendMessage,
  getMessages,
  readMessage,
};
