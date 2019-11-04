//接受get请求传输参数
var express=require("express")
var app=express()
app.get("/",(req,res)=>{
    res.send("默认请求")
})
app.get("/list",(req,res)=>{
    console.log(req.query)
    res.send({"data":"req.query"})
})
app.get("/getid/:id",(req,res)=>{
    console.log(1)
    res.send("请求成功")
})
app.listen(3000)





// yuxi 静态资源中简介  express.static  模板引擎  express-art-template
// express-session
//cookie=parser
