var express=require("express")
// var artplate=require("express-art-template")
// var ejs=require("ejs")
var app=express()
//在express 里面设置模板引擎 叫ejs
app.set("view engine","ejs")
app.get("/",(req,res)=>{
var list=["lise","jjaj","asdas","asdasd"]
res.render("index.ejs",{list:list})
    // res.render()
    res.send()
})




app.listen(3000)