var express = require("express")
var app = express()
var session = require("express-session")
//使用seesion中间件
app.use(session({
    secret: "safe",//加密字符
    neme: "safe", //返回客户端的ID
    cookie:{maxAge:90000,httpOnly:true},
    resave: true,           //强制初始化
    saveUninitialized: true //保存未初始化的seesion
}));
// 获取seesion 
app.get("/", (req, res) => {
    if(req.session.username){
        res.send("欢迎"+req.session.username+"回来")
    }else{
        res.send("为保存")
    }
})
//设置
app.get("/send", (req, res) => {
    var obj=req.query.username
    req.session.username=obj
    console.log(req.session.username)
    res.send()
})
app.get("/out", (req, res) => {
    req.session.destroy();
    res.redirect('/');
    res.send("注销成功")
})




app.listen(3000)