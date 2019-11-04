//接受psot传输的数据
//中间件
var express=require("express")
var bodyParser=require("body-parser")
var app=express()

//使用中间件 use
app.use(bodyParser.json())                           //处理json数据
app.use(bodyParser.urlencoded({extended:false}))       //处理字符串 
app.get("/",(req,res)=>{
    res.send("首页")
})
app.post("/dopost",(req,res)=>{
    console.log(req)
    res.send({"data":"接收到的数据为:"+req.body.username})
})
app.listen(3000)