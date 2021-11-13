const express = require("express");
const router = express.Router();

const bookController = require("../controllers/book.controller")

/**
 * @Path /books/
 */
router.get("/", bookController.getAllBooks);

/**
 * @Path /books/:book_id
 */
router.get("/:book_id", bookController.getOneBookById);

module.exports = router;