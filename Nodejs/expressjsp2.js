const e1=require('express')
const app=e1();
const PORT=4000
app.get("/view",(req,res)=>{
    res.set('Content-Type','text/html')
    res.status(200).send("<h1>Welcome to Application</h1>")
});
app.listen(PORT,(error)=>{
    if(!error) console.log(`Server is running on port ${PORT}`)
})