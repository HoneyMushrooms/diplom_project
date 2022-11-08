const { register } = require("../controllers/usersController");
console.log('b')
const router = require("express").Router();
console.log('c')
router.post("/register", register);
console.log('d')
module.exports = router;