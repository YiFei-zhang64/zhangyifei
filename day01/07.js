var http=require("http")
var url=require("url")
http.createServer((req,res)=>{
    res.writeHead(200, { "Content-type": "text/html;charset=utf-8" })
    // var obj = url.parse(req.url, true).query
    var result="http://localhost:3000/?username=asdas&password=asda"
    var obj=url.parse(result)
    // var obj=url.format({})
}).listen(3000)