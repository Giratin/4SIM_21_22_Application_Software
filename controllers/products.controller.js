const { Product } = require("../models/product.model");

module.exports = {
    createProduct: async (req, res) => {
        const product = new Product(
            {
                ...req.body
            }
        );

        if (req.file) {
            product.image = req.file.path.replace("public", "")
        }
        await product.save();
        res.redirect("/products/all");
    },
    testProduct: async (req, res) => {
        console.log(req.headers)
        const { authorization } = req.headers;
        res.json({ ...req.body, authorization })
    },
    showCreateProduct: (req, res) => {
        res.render("create");
    },
    getAll: async (req, res) => {
        const products = await Product.find();
        res.render("list", { products });
    },
    getById: async (req, res) => {
        const { _id } = req.params;
        const product = await Product.findById(_id);
        res.render("details", { product });
    }
}