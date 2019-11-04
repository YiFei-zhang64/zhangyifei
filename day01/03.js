//fs  file system   文件系统
//require
var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    //读文件 
    fs.readFile("./1.txt",function(err,data){
        console.log(data.toString())
    })
    res.end()
}).listen(3000)