const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const mongoose = require("mongoose");

//Mongodb Wire Protocol
mongoose.connect("mongodb://localhost:27017/database_test")
    .then(() => console.log("database is connected"))
    .catch((exc) => console.log(exc))

const studentsRouter = require("./routes/students.route");

app.use(express.json());

app.use("/students", studentsRouter);

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})