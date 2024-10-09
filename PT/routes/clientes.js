const express = require("express");
const router = express.Router();
const ClientController = require("../controllers/ClientController");

router.post("/", ClientController.createClient);
router.get("/", ClientController.getAllClients);
router.get("/:id", ClientController.getClientById);
router.put("/:id", ClientController.updateClient);
router.delete("/:id", ClientController.deleteClient);

module.exports = router;
