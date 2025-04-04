// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const upload = require("../middlewares/uploadMiddleware");
const { protect } = require("../middlewares/auth");
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require("../controller/productController");

// Create Product
router.post("/", protect, upload.single("image"), createProduct);

// Get All Products
router.get("/", getProducts);

// Get Single Product
router.get("/:id", getProductById);

// Update Product
router.put("/:id", protect, upload.single("image"), updateProduct);

// Delete Product
router.delete("/:id", protect, deleteProduct);

module.exports = router;