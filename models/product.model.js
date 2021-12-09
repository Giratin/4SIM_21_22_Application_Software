const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        label: String,
        price: Number,
        image: String,
        description: String
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model("product", productSchema);

module.exports = { Product }