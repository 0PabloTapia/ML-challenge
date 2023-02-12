const express = require("express");
const router = express.Router();
// const userController = require("../../controllers/userController");


router
  .get("/", userController.getUser)
  .get("/restrictions/:id", userController.getRestrictions)
  .get("/purchases", userController.getAllPurchases)
  .get("/userlevel/:id", userController.getUserLevel)
  .get("/shipment/:id", userController.getShipment)
  .get("/payments/:id", userController.getPayment);


module.exports = router;
