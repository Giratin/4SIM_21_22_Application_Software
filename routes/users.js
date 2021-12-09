var express = require('express');
var router = express.Router();
const userController = require("../controllers/user.controller");
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

const verifyIdentity = function (req, res, next) {
  const { authorization } = req.headers;
  if (authorization) {
    req.authorization = authorization;
    return next();
  }
  res.status(403).end();
}


router.post('/', verifyIdentity, upload.single("avatar"), userController.createUser);

module.exports = router;
