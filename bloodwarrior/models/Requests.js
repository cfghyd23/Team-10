const mongoose=require("mongoose")


// Define BloodRequest schema
const bloodRequestSchema = new mongoose.Schema({
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



const bloodReqModel=mongoose.model("BloodRequests",bloodRequestSchema);
module.exports=bloodReqModel