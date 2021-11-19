const { Student } = require("../models/student.model");

module.exports = {
    createStudent: async (req, res) => {

        // console.log(req.body)
        // console.log("============");

        const { firstName, lastName, email, password, skills } = req.body;

        const isUserFound = await Student.findOne({ email });

        if (isUserFound) {
            return res.status(404).json({ created: false, message: "Email already exists" });
        }

        const student = new Student({ firstName, lastName, email, password, skills });
        await student.save();
        res.json({ created: true, student });
    },
    getAllStudents: async function (req, res) {
        const students = await Student.find();
        res.json(students);
    },
    getStudentById: async function (req, res) {
        const { _id } = req.params
        const student = await Student.findById(_id);
        res.json(student);
    },
}