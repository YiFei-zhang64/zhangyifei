var http=require("http")
var express=require("express")
var app=express()
app.get("/et",(req,res)=>{
    res.send({"success":"get"})
})
app.post("/list",(req,res)=>{
    res.send({"success":"post请求成功"})
})
app.all("/",(req,res)=>{
    res.send({"success":"hshshhsshshhsh"})
})//代表所有
// 什么情况下使用all 控制全局功能shi需要使用
app.listen(3000)