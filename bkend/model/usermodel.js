let mongoose=require("mongoose")
let usersch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "pwd":String,
    "gen":String,
    "phno":String,
    "dob":Date,
    "state":String

})
let usermod=mongoose.model("user",usersch)
module.exports=usermod
