const mongoose=require("mongoose")


// Define BloodRequest schema
const UserSchema = new mongoose.Schema({
  name: String,
  userId:String,
  bloodGroup: String,
  location: String,
  unitsRequired: Number,
  contact: {
    phone: String,
    email: String,
  },
  urgency: String,
});


const UserModel=mongoose.model("Users",UserSchema);
module.exports=UserModel