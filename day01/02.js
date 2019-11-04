var http=require("http")
http.createServer(function(req,res){
    //设置请求响应 Content-type 文本类型  text/plain 文本
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
        res.end("中国")
}).listen(3000)







//cd 切换目录
//cd.. 回到上一层目录
//ctrl+c 结束当前程序
