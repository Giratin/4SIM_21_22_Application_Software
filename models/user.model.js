const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        firstName: String,
        lastName: {
            type: String
        },
        email: {
            type: String,
            required: true,
            // unique: true,
            // lowercase: true,
            // trim: true
        },
        joindAt: {
            type: Date,
            default: new Date()
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("user", userSchema);

// module.exports.User = User;
// module.exports = { User: User };
module.exports = { User };