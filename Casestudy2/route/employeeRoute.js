const express=require("express")
const router=express.Router()
router.use(express.json())
const employeeModel=require('../model/employeeModel')


// send data from db
router.post('/employeelist',async(req,res)=>{
    try {
        const employee = new employeeModel(req.body) 
        await employee.save()
        res.status(200).send("Data added successfully!")
    } catch (error) {
        res.status(400).send("Unable to send data")
    }
    
})

// get data from db
router.get('/employeelist',async(req,res)=>{
    try {
        var employee = await employeeModel.find()
        res.status(200).send(employee)
    } catch (error) {
        res.status(400).send("Unable to send")
    }
})

// get single data from db
router.get('/employeelist/:id',async (req,res) => {
    try {
        // console.log(req.params.id)
        const employee = await employeeModel.findById(req.params.id)
        if(!employee){
            req.status(400).send("data not found")
        }
        res.status(200).send(employee)
    } catch (error) {
        res.status(400).send("Data not found")
    }
})

// delete a employee data from db
router.delete('/employeelist/:id', async (req,res) => {
    try {
        await employeeModel.findByIdAndDelete(req.params.id)
        res.status(200).send("Data deleted successfully")
    } catch (error) {
        res.status(400).send("Unable to delete data")
    }
})

// Update  a employee data from db
router.put('/employeelist/:id',async (req,res) => {
    try {
        await employeeModel.findByIdAndUpdate(req.params.id, req.body)
        res.status(400).send("Data updated successfully")
    } catch (error) {
        res.status(400).send("Unable to update data")
    }
    
})

module.exports=router