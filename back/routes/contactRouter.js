const express = require("express");
const router = express.Router();
const contactRouter = require("../controllers/contactController");

router.post("/sendMessage", contactRouter.sendMessage);
router.get("/getMessages", contactRouter.getMessages);
router.put("/readMessages", contactRouter.readMessage);


module.exports = router;