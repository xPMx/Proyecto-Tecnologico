const express = require("express");
const router = express.Router();
const { createOrder, getOrders } = require("../controllers/OrderController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", createOrder);
router.get("/", authMiddleware, getOrders);
module.exports = router;
