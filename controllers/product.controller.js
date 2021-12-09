const { Product } = require("../models/product.model");

module.exports = {
    showCreateProduct: (req, res) => {
        res.render("createProduct");
    },
    createProduct: async (req, res) => {
        const { label, price, description } = req.body;
        const product = new Product({ label, price, description });

        if (req.file) {
            let imagePath = req.file.path.replace("public", "");
            product.image = imagePath;
        }

        await product.save();
        res.redirect("/products/all")

    },
    showAllProducts: async (req, res) => {
        const products = await Product.find();
        res.render("showAll", { products })
    },
    showProductById: async (req, res) => {
        const { _id } = req.params;
        const product = await Product.findById(_id);
        res.render("showProduct", { product })
    },
}