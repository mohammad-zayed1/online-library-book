const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// add new product
router.post("/addorder", orderController.addOrder);

// // update product
// router.patch("/updateabout/:id", aboutController.updateAbout);

// // get all products
// router.get("/about", aboutController.showAbout);

router.get('/allorders/:id' , orderController.ordersForUser)
module.exports = router;
