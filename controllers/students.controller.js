const { Student, Classe } = require("../models/student.model");
const db = require("../config/db");
const util = require("util");
const query = util.promisify(db.query).bind(db);

module.exports = {
    createStudent: async (req, res) => {

        const { firstName, lastName, email, password, skills } = req.body;
        const isUserFound = await Student.findOne({ email });
        if (isUserFound) {
            return res.status(404).json({ created: false, message: "Email already exists" });
        }

        const student = new Student({ firstName, lastName, email, password, skills });
        await student.save();
        res.json({ created: true, student });
    },
    createStudentWithClasse: async (req, res) => {
        const { firstName, lastName, email, password, skills, classe } = req.body;

        let isClasseFound = await Classe.findOne({ label: classe });

        if (!isClasseFound) {
            isClasseFound = new Classe({ label: classe });
            await isClasseFound.save();
        }

        const student = new Student({ firstName, lastName, email, password, skills });
        student.classe = isClasseFound;

        await student.save();
        res.json(student)

    },
    getStudentWithClasse: async (req, res) => {

        const students = await Student.find().populate("classe");
        res.json(students);

    },
    getAllStudents: async function (req, res) {
        const students = await Student.find();
        res.json(students);
    },
    getStudentById: async function (req, res) {
        const { _id } = req.params
        // const student = await Student.findById(_id);
        const student = await Student.findOne({ _id });
        res.json(student);
    },
    createStudentMysql: async function (req, res) {
        const { nom, prenom, classe, email } = req.body;
        const findByEmailQuery = "SELECT * from `student` WHERE `email`=? LIMIT 1";
        const insertQuery = "INSERT INTO `student` (`nom`,`prenom`, `classe`, `email`) VALUES (?,?,?,?)";

        const isUserFound = await query(findByEmailQuery, [email]);
        if (isUserFound.length > 0) {
            return res.status(403).json({ error: "Email already registered" })
        }

        const resultInsert = await query(insertQuery, [nom, prenom, classe, email]);
        res.json(resultInsert)

        // db.query(findByEmailQuery, [email], (err, result) => {
        //     if (result.length > 0) {
        //         return res.status(403).json({ error: "Email already registered" })
        //     }
        //     db.query(insertQuery, [nom, prenom, classe, email], (error, response) => {
        //         if (!error) {
        //             return res.json(response)
        //         }
        //         res.status(406).json({ error })
        //     });
        //     res.json({ message: "OK" })
        // })

    },
    getStudents: async function (req, res) {
        const selectQuery = "SELECT * from `student`";
        const result = await query(selectQuery);
        res.json(result);
    },
    bulkCreateStudents: async function (req, res) {
        const { data } = req.body;
        const insertQuery = "INSERT INTO `student` (`nom`,`prenom`, `classe`, `email`) VALUES ?";
        const resultInsert = await query(insertQuery, [
            data.map((el) => {
                return [el.nom, el.prenom, el.classe, el.email];
            })
        ]);
        res.json(resultInsert);
    }
}

/**
 * Event : {
 *  title: string
 *  startDate: date,
 *  endDate: date
 * }
 *
 * Create Event:
 *  /events
 * get All Events:
 *  /events
 * delete an event
 *  /events/:_id
 * get An event By id
 *  /events/:_id
 */