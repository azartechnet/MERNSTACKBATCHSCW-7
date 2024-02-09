const express=require('express')
const app=express()
const PORT=3000

//Single Routing

const r1=express.Router()

r1.get("/",function(req,res){
    console.log("Routing Working")
})
app.use(r1)

app.listen(PORT,function(err){
    if(err)console.log(err);
    console.log("Server listen")
})