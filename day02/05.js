var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
        if(req.url=="/favicon.ico"){
            return
        }
        fs.readdir("./static/",(err,files)=>{
                for(i in files){
                    // if(i == files.length){
                    //     console.log(wenjianjia);
                    //     return;
                    // }
                    fs.stat("./static/",(err,stats)=>{
                        console.log(stats.isFile(files))
                    })
                }  
           
        })

        res.end("1")
}).listen(3000)