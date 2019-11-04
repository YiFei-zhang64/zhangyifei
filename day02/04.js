var fs=require("fs")
var http=require("http")
http.createServer((req,res)=>{
    // fs.readFile("./static/1.txt",(err,data)=>{
    //     res.end(data)
    // })
    // fs.writeFile("./static/1.txt","hahahaha",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    //     res.end("吸入成功")
    // })
    //追加内容{flag:a} a:append
    // fs.mkdir("./aa",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("success")
    // })
    //创建文件
    fs.writeFile("./test.txt", "hello world!", function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
    //删除文件
    //删除目录
    //判断文件状态
}).listen(3000)