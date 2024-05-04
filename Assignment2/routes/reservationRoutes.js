const router = require('express').Router();
const reservationControllers = require("../controllers/reservationController")


//creating reservation creation route
router.post("/reservations", reservationControllers.makeReservation)

module.exports = router;
