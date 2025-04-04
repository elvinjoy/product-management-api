const express = require("express");
const { createProduct } = require("../controller/productController");
const upload = require("../middlewares/uploadMiddleware");
const { protect } = require("../middlewares/auth");

const router = express.Router();

router.post("/addproducts", protect, upload.single("image"), createProduct);

module.exports = router;
