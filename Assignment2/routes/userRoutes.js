const router = require('express').Router();
const userControllers = require("../controllers/userController")



//creating user creation route
router.post("/users", userControllers.createUser)

module.exports = router;