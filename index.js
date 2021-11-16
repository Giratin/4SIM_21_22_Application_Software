const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/db_4sim3")
    .then(function () { console.log("database connected") })
    .catch((function (error) { console.log(error); }));

const usersRouter = require("./routes/users.route");
app.use("/users", usersRouter)

app.listen(PORT, function () {
    console.log(`Server running on port ${PORT}`);
})