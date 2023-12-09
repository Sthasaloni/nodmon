const express = require("express")
const app = express()

// ma ejs use garbu ateko xu, talae kk chahine ho env setup garday
app.set("view engine","ejs")


app.get('/',(req,res)=>{
    res.send("Home page")
})

app.get("/about",(req,res)=>{
    res.send("About Page")
})

app.get("/contact",(hello,bye)=>{
    bye.send("from contact page")
})


app.listen(3000,function(){
    console.log("nodenodejs project has been stated")
})