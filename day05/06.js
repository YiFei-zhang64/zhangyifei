var express = require('express');
var bodyParser = require('body-parser');//引入此中间件解析表单post来的数据
var session = require('express-session');//引入此中间件设置session
var cookieParser = require('cookie-parser');//引入此中间件设置cookie
var app = express()
var router = express.Router();//建一个路由 路由中间件
app.use(router)
// 验证码接口 
router.get("/",(req,res)=>{
    res.send("luq")
})
router.get("/code",(req,res)=>{
    /**
     *  随机数 Math.Random 0-1
     *  
     */
    res.header('Access-Control-Allow-Origin', '*');

    var RandomNum=function(min,max){
        return Math.floor(Math.random()*(max-min)+min)
    }
    var str='ASDFGHJKL312313254654D6AS4DAS4D6AS54D65AS4D65AS46D5A4S6D54AS65D4SA65D46AS54D65AS4D65AS4D6A5S4D'
    var result=""
    for(var i=0;i<4;i++){
        result+=str[RandomNum(0,str.length-1)]
    }
    res.send({"success":"请求成功","data":result}) 
})
app.listen(3000)