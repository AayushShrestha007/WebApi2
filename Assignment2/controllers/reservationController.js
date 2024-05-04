const reservationModel = require('../models/reservationModels')

const makeReservation = async (req, res) => {
    //1. check incoming data
    console.log(req.body);

    //2. Destructure the incoming data
    const { eventDate, userId, numberOfGuests } = req.body;

    //3. Data valiation
    if (!userId || !eventDate || !numberOfGuests || numberOfGuests < 1) {
        return res.json({
            sucesss: false,
            message: "Please Enter all fields",
        });
    }

    try {
        const currentDate = Date();
        if (eventDate < currentDate) {
            return res.json({
                sucess: false,
                message: `Please enter a data in the future. Current date is ${currentDate}`,
            });
        }

        const newReservation = new reservationModel({
            userId: userId,
            eventDate: eventDate,
            numberOfGuests: numberOfGuests,
        });

        await newReservation.save();

        res.json({
            userId: userId,
            eventDate: eventDate,
            numberOfGuests: numberOfGuests,
        });

    } catch (error) {

        console.log(error)
        res.json({
            "success": "false",
            "message": "Internal server error!"
        })

    }
};


//Exporting the function 
module.exports = {
    makeReservation,
};

