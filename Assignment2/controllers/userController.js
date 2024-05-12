const userModel = require('../models/userModels');

const createUser = async (req, res) => {
    //1. check incoming data
    console.log(req.body);

    //2. destructure the incoming data
    const { name, email, phone } = req.body;

    //3. Validate the data (if empty, stop the process & send res)
    if (!name || !email || !phone) {
        res.json({
            "success": false,
            "message": "Please enter all the details"
        })
    }

    //4. Error handling
    try {
        //check if the user is already registered with the number
        const existingUser = await userModel.findOne({ phone: phone })
        //5.1 If user found-> send response 
        //5.1.1 stop the process
        if (existingUser) {
            return res.json({
                "status": "false",
                "message": "user with this number already exists"
            })
        }
        //5.2 if user is new
        const newUser = new userModel({
            name: name,
            email: email,
            phone: phone,
        })

        //save to database
        await newUser.save()

        //5.2.3 send successful response
        res.json({
            "Success": true,
            "message": `user with name ${name} created successfully`
        }

        )

    } catch (error) {
        console.log(error)
        res.json({
            "success": "false",
            "message": "Internal server error!"
        })
    }
}


//Exporting the function 
module.exports = {
    createUser,
};