var fs=require("fs")


var readline=require("readline")



var readStream=fs.createReadStream("./static/1.txt")
var rl=readline.createInterface({
    input:readStream
})
rl.on("line",(lineData)=>{
   console.log(lineData)
   console.log(new Date()+"linenum执行");
   
    
})
rl.on("close",()=>{
    console.log("line监听完毕");
    
})