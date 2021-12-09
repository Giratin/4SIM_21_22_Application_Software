
module.exports = {
    createUser: async (req, res, next) => {
        const { authorization } = req;
        res.json({ created: true, file: req.file, body: req.body, authorization })
    }
}