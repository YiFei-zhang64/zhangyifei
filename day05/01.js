var express=require("express")
var path=require("path")
var app=express()
// 中简介必须通过use使用 这样才能保证中简介和express进行关联
var static=path.resolve("__dirname","public")
express.static("static")