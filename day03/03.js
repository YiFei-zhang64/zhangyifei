/*
    流的类型
    可读流 readable streams
    可写流 writable streams
    转换流 transform
    duplex 双工流（可读可写）
    数据的压缩 zlib
*/
var fs=require("fs") 
var zlib=require("zlib")
var readStream=fs.createReadStream("./static/1.txt")
var writeStream=fs.createWriteStream("./static/1.txt.gz")
// 流支持链式操作  zlib.createGzip() 创建一个压缩包
readStream.pipe(zlib.createGzip()).pipe(writeStream)
