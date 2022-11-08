console.log('a')

module.exports.register = (req, res, next) => {
    console.log('a')
    console.log(req.body)
}