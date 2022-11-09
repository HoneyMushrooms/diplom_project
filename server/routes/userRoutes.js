const { register } = require("../controllers/usersController");

// Объекты Router позволяют вам ограничить использование middleware определенным набором маршрутов
const router = require("express").Router();
console.log(2)

router.post("/register", register)

module.exports = router;