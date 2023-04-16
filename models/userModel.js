const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
   name:{
      type:String,
      required:true
   },
   email:{
      type:String,
      required:true
   },
   password:{
      type:String,
      required:true
   },
   treasure_hunt_id:{
      type:String,
      required:true
   },
   score:{
      type:Number,
      required:true
   },
   game_time:{
      type:Number,
      required:true
   }
});

module.exports = mongoose.model('User' , userSchema);