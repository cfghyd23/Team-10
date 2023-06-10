const mongoose=require("mongoose")

const DonationSchema=new mongoose.Schema({
    donorId:{
        type:String,
        required:true
    },
    patientId:{
        type:Number,
        required:true
    },
    bloodBankID:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})

const donationModel=mongoose.model("Donation",BuyReqSchema)
module.exports=donationModel