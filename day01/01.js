var http=require("http")
var server=http.createServer(function(req,res){
    res.end("hello world")
})







server.listen(3000,function(){
    console.log("服务器已经挂起")
})