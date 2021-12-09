var express = require('express');
var router = express.Router();
const productController = require("../controllers/product.controller");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/')
    },
    filename: function (req, file, cb) {
        const newFileName = (+new Date()) + file.originalname
        cb(null, newFileName);
    }
})

const upload = multer({ storage })


router.route("/")
    .get(productController.showCreateProduct)
    .post(upload.single("image"), productController.createProduct);

router.get("/all", productController.showAllProducts)
router.get("/:_id", productController.showProductById)

module.exports = router;
