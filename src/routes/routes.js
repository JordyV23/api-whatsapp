const express = require("express");

const router = express.Router();

const whatsAppController = require("../controllers/whatsappController");

router
  .get("/", whatsAppController.verifyToken)
  .post("/", whatsAppController.receiveMessage)


module.exports = router;