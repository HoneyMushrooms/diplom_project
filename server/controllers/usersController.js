console.log(3)

module.exports.register = (req, res, next) => {
    console.log(req.body)
}
