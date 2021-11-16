const { User } = require("../models/user.model");

module.exports = {
    createUser: function (req, res) {
        console.log(req.body)
        const { firstName, lastName, email, password } = req.body;
        const user = new User({ firstName, lastName, email, password });
        user.save().then((doc) => {
            res.json({ created: true, doc })
        }).catch((err) => {
            res.status(400).json({ created: false, err })
        })

    },
    getUsers: async (req, res) => {
        const users = await User.find();
        res.json(users)
        // User.find().then((docs) => {
        //     res.json(docs)
        // }).catch((err) => {
        //     res.status(404).end();
        // })


    }
}