const mongoose=require("mongoose");
const PatientSchema=new mongoose.Schema({
    patient:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        default:"N/A"
    },
    doa:{
        type:Date,
        required:true
    },
    doctor:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model('Patient',PatientSchema);