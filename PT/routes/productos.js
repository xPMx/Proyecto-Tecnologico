const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, ProductController.createProduct);
router.get("/", ProductController.getAllProducts);
router.get("/:id", ProductController.getProductById);
router.put("/:id", authMiddleware, ProductController.updateProduct);
router.delete("/:id", authMiddleware, ProductController.deleteProduct);

module.exports = router;
