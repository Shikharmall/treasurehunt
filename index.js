require("dotenv").config();

const mongoose = require("mongoose");

if (process.env.DATABASE === "MONGODBATLAS") {
  mongoose.connect(process.env.DATABASEURL);
  mongoose.connection.on("error", (err) => {
    console.log("Connection Failed");
  });
  mongoose.connection.on("connected", (connected) => {
    console.log("Connected to MongoDB Atlas.");
  });
} else if (process.env.DATABASE === "MONGODBLOCAL") {
  mongoose.connect("mongodb://127.0.0.1:27017/treasurehunt");
  mongoose.connection.on("error", (err) => {
    console.log("Connection Failed");
  });
  mongoose.connection.on("connected", (connected) => {
    console.log("Connected to MongoDB Atlas.");
  });
} else {
  console.log("No proper ENV.");
}

const express = require("express");
const app = express();

//for user route
const userRoute = require("./routes/userRoute");

app.use("/", userRoute);

app.listen(3000, function () {
  console.log("Server is running....");
});
