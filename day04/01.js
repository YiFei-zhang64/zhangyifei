var http=require("http")
var fs=require("fs")
var art=require("art-template")
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    }
    fs.readFile("./static/index.art",(err,data)=>{
            //获取art-template模板
        var template=data.toString()
        var list=["tom","jack","cc"]
        var tt= art.render(template,{a:list})
        console.log(tt)
        res.end(tt)
    })
}).listen(3000)