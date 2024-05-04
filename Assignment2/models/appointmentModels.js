const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
});

const Appointment = mongoose.model("Appointment Schema", appointmentSchema);

module.exports = Appointment;