
// seeting up database using mongodb
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://lakshya:1234567890@cluster0.9fsw0ra.mongodb.net/groceryAPP?retryWrites=true&w=majority');
// mongodb+srv://lakshya:<password>@cluster0.9fsw0ra.mongodb.net/?retryWrites=true&w=majority
const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error Connecting To Database"));

db.once('open',function(){
    console.log("Database Successfully Connected");
});



module.exports = db;
