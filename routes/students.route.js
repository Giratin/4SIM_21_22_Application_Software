const express = require("express");
const router = express.Router();

const studentController = require("../controllers/students.controller");

/**
 * @Path /students
 */

router.route("/")
    .post(studentController.createStudent)
    .get(studentController.getAllStudents)

router.get("/:_id", studentController.getStudentById)


module.exports = router;