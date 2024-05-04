const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
    eventDate: {
        type: Date,
        required: true,
    },
    userId: {
        type: Number,
        required: true,
        unique: true,
    },
    numberOfGuests: {
        type: Number,
        required: true,
    }
})

const Reservation = mongoose.model('Reservation Schema', reservationSchema)
module.exports = Reservation;