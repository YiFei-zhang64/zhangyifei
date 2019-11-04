//req.url 请求 路径 
var http=require("http")
http.createServer((req,res)=>{
    console.log(req)
    res.end()
}).listen(3000)