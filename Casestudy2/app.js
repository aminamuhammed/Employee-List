// Task1: initiate app and run server at 3000
const express=require("express")
const morgan=require("morgan")
const path=require('path');
require("dotenv").config()
require("./db/dbConnection")

const employeeRoute=require("./route/employeeRoute")
const app=express()
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));
app.use('/api',employeeRoute)


app.use(morgan('dev'))
app.listen(process.env.PORT,()=>{
    console.log(`server is up and listening on port ${process.env.PORT}`)
})

// Task2: create mongoDB connection 


//Task 2 : write api with error handling and appropriate api mentioned in the TODO below







//TODO: get data from db  using api '/api/employeelist'




//TODO: get single data from db  using api '/api/employeelist/:id'





//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}






//TODO: delete a employee data from db by using api '/api/employeelist/:id'





//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}


//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});



