const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const SimSchema=new Schema({
    simNumber:{
        type: String,
        required:true,
        unique:true,
    },
    phoneNumber:{
        type:String,
        unique:true,
    },
    status:{
        type:String
    },
    activationDate:{
        type:Date,
    }
})

const SimModel=mongoose.model('Sim',SimSchema)
module.exports= SimModel;