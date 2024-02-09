const express=require('express')
const app=express()

app.use(express.raw())
app.post("/",function(req,res){
    console.log("received post request")
    let data=req.body
    //console.log(req.body)
    console.log(data)
    res.end()
}).listen(3000)
console.log("Server is Running..")