const router = require("express").Router();
const productsController = require("../controllers/products.controller");
const multer = require("multer");

const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // console.log(req)
        console.log(JSON.stringify(req.body))
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        const newFileName = file.originalname.split(".")[0] + "_" + (+new Date()) + path.extname(file.originalname)
        cb(null, newFileName);
    }
})

const upload = multer({ storage })

/**
 * @Path /products
 */
router.route("/")
    .get(productsController.showCreateProduct)
    .post(upload.single("image"), productsController.createProduct)

router.post("/test", upload.single("avatar"), productsController.testProduct)
router.get("/all", productsController.getAll)
router.get("/:_id", productsController.getById)
module.exports = router;