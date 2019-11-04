var http = require("http")
var url = require("url")
http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html;charset=utf-8" })
    var obj = url.parse(req.url, true).query
    res.end("接受username的是:" + obj.username)

}).listen(3000)





//url 获取地址栏
//parse 序列化
//resolve 解析成正确的路径
//format  