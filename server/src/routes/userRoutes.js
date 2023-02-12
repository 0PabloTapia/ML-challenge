const express = require('express');
const router = express.Router()
const userController = require("../controllers/userControllers")
router
      .get("/user", userController.getUser)
      .get("/restrictions/:id", userController.getRestrictions)
      .get("/purchases/:id", userController.allPurchases)
      .get("/level/:type", userController.getLevel)
      .get("/shipment/:id", userController.getShipment)
      .get("/payment/:id", userController.getPayment);

module.exports = router