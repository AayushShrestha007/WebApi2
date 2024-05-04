const mongoose = require('mongoose');
const dotenv= require('dotenv');

dotenv.config();

const connectDatabase= ()=>{
    mongoose.connect(process.env.MOGODB_CLOUD).then(()=>{
        console.log("database connected succesfully")
    });
}

//Exporting the connection function
module.exports= connectDatabase;