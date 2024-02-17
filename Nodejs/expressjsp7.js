const express=require('express')
const app=express()

//Setting single locals variable
app.locals.email="demo@gmail.com"
console.log(app.locals.email)

//Setting multiple local variables

app.locals.domain="www.sample.com"
app.locals.age='24'
app.locals.company='ABC ltd'

console.log(app.locals)