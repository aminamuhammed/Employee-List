const mongoose=require("mongoose")
const employeeSchema=new mongoose.Schema({
    name:String,
    location:String,
    position:String,
    salary:Number
})
const employeeModel=mongoose.model('employeeList',employeeSchema)
module.exports=employeeModel