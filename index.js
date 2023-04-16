const mongoose = require("mongoose");
//mongoose.connect("mongodb://127.0.0.1:27017/treasurehunt");

mongoose.connect("mongodb+srv://shmall212020:treasurehuntgame@treasurehuntgame.y0ags4n.mongodb.net/?retryWrites=true&w=majority");



const express = require('express');
const app = express();

//for user route
const userRoute = require('./routes/userRoute');

app.use('/', userRoute);


app.listen(3000,function(){
    console.log("Server is running....");
});
