const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    const { userId, productId, quantity, totalPrice } = req.body;
    const newOrder = await Order.create({
      userId,
      productId,
      quantity,
      totalPrice,
    });
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la orden", error });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las órdenes", error });
  }
};
