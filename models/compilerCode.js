const mongoose = require("mongoose");

const codeSchema = new mongoose.Schema({
    language:{
        type: String, 
        enum: ['cpp', 'py'],
        required:true,
    },
    filepath:{
        type:String,
        required:true
    },
    submittedAt:{
        type:Date,
        default:Date.now()
    },
    startedAt:{
        type:Date
    },
    completedAt:{
        type:Date
    },
    output:{
        type:String
    },
    status:{
        type:String,
        default:"pending",
        enum:['pending','success','error']
    }                   
},
{
    timestamps: true,
} )



const compilerCode = mongoose.model('compilercode', codeSchema);
module.exports =  compilerCode;