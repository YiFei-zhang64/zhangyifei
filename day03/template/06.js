var http=require("http")
var ejs=require("ejs")
var fs=require("fs")
http.createServer((req,res)=>{
    fs.readFile("./view/index.ejs",(err,data)=>{
        // var data=ejs.render("./view/index.ejs",list)//两个参数 模板
        // console.log(data.toString)
        var template=data.toString()
        var list=["vue","rect","node"]
        var result=ejs.render(template,{list:list})
    res.end(result)

    })
    // var str=6

}).listen(3000)
