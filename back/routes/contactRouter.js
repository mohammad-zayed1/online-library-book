const express = require("express");
const router = express.Router();
const contactRouter = require("../controllers/contactController");

router.post("/sendmessage", contactRouter.sendMessage);
router.get("/getmessages", contactRouter.getMessages);
router.put("/readmessages", contactRouter.readMessage);

module.exports = router;
