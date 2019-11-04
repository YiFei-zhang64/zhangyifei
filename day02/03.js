/**
 * 1.定义一个路由文件 router.js
 * 2.在router中定义三个路由视图
 * 3.在03.js通过路径进行访问路由视图
 * 
 * 
 * 
 * break
 */
var http=require("http")
var router=require("./static/router")
http.createServer((req,res)=>{
        if(req.url=="/"){
            
        }

        res.end()
}).listen(3000)