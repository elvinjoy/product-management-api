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
  deleteProduct,
  filterAndSearchProducts 
} = require("../controller/productController");

// Create Product
router.post("/addproduct", protect, upload.single("image"), createProduct);

// Get All Products
router.get("/allproducts", getProducts);

// Get Single Product
router.get("/:id", getProductById);

// Update Product
router.put("/:id", protect, upload.single("image"), updateProduct);

// Delete Product
router.delete("/:id", protect, deleteProduct);

// search and pagination
// router.get("/searchfilter", filterAndSearchProducts);

module.exports = router;