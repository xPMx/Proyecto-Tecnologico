const express = require("express");
const router = express.Router();
const { createOrder, getOrders } = require("../controllers/OrderController");

router.post("/", createOrder);
router.get("/", getOrders);
module.exports = router;
