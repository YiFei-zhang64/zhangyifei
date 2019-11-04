var seesion=require("express-session")
var cookparser=require("cookie-parser")
var art=require("express-art-template")
var express=require("express")

var app=express()
//设置模板引擎
// app.set("view engine","html")
app.engine("html",art)
// app.use(cookieParser('sessiontest'));
// app.set('trust proxy', 1)   
// app.use(session({
//     secret: 'sessiontest',//与cookieParser中的一致
//     resave: true,
//     saveUninitialized:true
//    }));
//只有 session ID 是保存在 cookie 中，Session 数据本身并不是。Session 数据是存在服务端。
var list=["sdad","asdas","asdas"]
app.get("/",(req,res)=>{
    res.render("home.html",{list:list})
    res.send()
})
app.listen(3000)