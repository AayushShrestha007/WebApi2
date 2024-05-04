const router = require("express").Router();

const appointmentController = require("../controllers/appointmentController");

router.post("/book-appointment", appointmentController.bookAppointment);

module.exports = router;