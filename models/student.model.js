const mongoose = require("mongoose");

//   YaSSINE.sta@esprit.tn   ==> yassine.sta@esprit.tn
const studentSchema = mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: {
            type: String,
            unique: true,
            lowercase: true,
            trim: true,
            required: true
        },
        password: String,
        skills: [
            {
                title: String,
                description: String
            }
        ]
    },
    {
        timestamps: true
    }
);

// var bcrypt = require('bcryptjs');

// studentSchema.pre("save", function (next) {
//     const user = this;
//     let password = user.password;
//     var salt = bcrypt.genSaltSync(10);
//     let hashedPassword = bcrypt.hashSync(password, salt);
//     user.password = hashedPassword;
//     next();
// })

const Student = mongoose.model("student", studentSchema);
module.exports = { Student };