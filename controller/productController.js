const Product = require("../models/productModel");


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
    console.error("Create Product Error:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};
