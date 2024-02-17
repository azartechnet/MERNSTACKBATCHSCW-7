const express=require('express')
const app=express()
const PORT=3000

//Multiple Routing
const r1=express.Router()
const r2=express.Router()
const r3=express.Router()

r1.get("/user",function(req,res){
    console.log("User Route Called")
})
r2.get("/admin",function(req,res){
    console.log("AdminRouting")
})
r3.get("/student",function(req,res){
    console.log("StudentRouting")
})

app.use(r1)
app.use(r2)
app.use(r3)

app.listen(PORT,function(err){
    if(err)console.log(err);
    console.log("Server listen..")
})
