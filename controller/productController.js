// controllers/productController.js
const Product = require("../models/productModel");
const fs = require("fs");
const path = require("path");

// Create Product (Already implemented)
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;

    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image is required" });
    }

    const product = await Product.create({
      name,
      description,
      price,
      category,
      image: `/public/${req.file.filename}`,
      owner: req.user.id
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// Get All Products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// Get Single Product
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });

    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// Update Product
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });

    if (product.owner.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ success: false, message: "Unauthorized to update this product" });
    }

    if (req.file) {
      const oldImagePath = path.join(__dirname, "..", "uploads", product.image);
      if (fs.existsSync(oldImagePath)) fs.unlinkSync(oldImagePath);
      product.image = `/public/${req.file.filename}`;
    }

    const { name, description, price, category } = req.body;
    if (name) product.name = name;
    if (description) product.description = description;
    if (price) product.price = price;
    if (category) product.category = category;

    await product.save();

    res.status(200).json({ success: true, message: "Product updated successfully", data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });

    if (product.owner.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ success: false, message: "Unauthorized to delete this product" });
    }

    const imagePath = path.join(__dirname, "..", "uploads", product.image);
    if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);

    await product.remove();
    res.status(200).json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};
