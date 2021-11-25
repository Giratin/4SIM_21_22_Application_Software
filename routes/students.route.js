const express = require("express");
const router = express.Router();

const studentController = require("../controllers/students.controller");

/**
 * @Path /students
 */

router.route("/")
    .post(studentController.createStudent)
    .get(studentController.getAllStudents);

router.route("/classe")
    .post(studentController.createStudentWithClasse)
    .get(studentController.getStudentWithClasse);


router.route("/mysql")
    .post(studentController.createStudentMysql)
    .get(studentController.getStudents);

router.post("/bulk-create", studentController.bulkCreateStudents)


router.get("/:_id", studentController.getStudentById)


module.exports = router;