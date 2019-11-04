var express=require("express")
var path=require("path")
var cookie=require("cookie-parser")
var app=express()
app.use(cookie())
var static=path.resolve(__dirname,"public")
app.use(express.static(static))
app.get("/",(req,res)=>{
    res.send({"data":"首页获取到的"+req.cookies})
})
    app.get("/login",(req,res)=>{
        var obj=req.query.username
        res.cookie("username",obj,{maxAge:90000,httpOnly:true})

        res.send({"data":obj})
        // req.cookies.cookiename=obj
        // 设置cookie maxAge 过去时长 HTTponly 只允许在服务端修改cookie
})
    app.get("/list",(req,res)=>{
        res.send()
    })
    /**
     * 什么是cookie 
     * cookie是存在于访问者计算机中的一个变量  便于访问同一域名  或服务器存储的用户信息
     * cookie优缺点 存储大小4Kb  
     * 优点：
     * 协助服务端承载压力
     * 存在过期时间 不便于攻击者攻击
     * 缺点
     * 长度限制 安全性低
     * 存储量少
     * cookie安全性   安全性相对比较低  如何解决：生成签名
     * cookie特点:
     * cookie是保存在浏览器本地
     * cookie是默认不加密 用户可以直接看到
     * cookie支持被删除
     * cookie便于用于攻击 
     * cookie易被篡改
     **/
app.listen(3000)