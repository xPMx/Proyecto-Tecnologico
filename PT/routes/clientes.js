const express = require("express");
const router = express.Router();
const ClientController = require("../controllers/ClientController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, ClientController.createClient);
router.get("/", ClientController.getAllClients);
router.get("/:id", ClientController.getClientById);
router.put("/:id", authMiddleware, ClientController.updateClient);
router.delete("/:id", authMiddleware, ClientController.deleteClient);

module.exports = router;
