var e1=require('express')
var app=e1()
//const port=3000
app.get('/',(req,res)=>{
    res.send("Welcome to the express Program")
    }).listen(4000)
console.log("Server Running..")