var querystring=require("querystring")
var obj=querystring.parse("name=tom&sex=0")                         //反序列化
var obj1=querystring.stringify({ name: 'tom', sex: '0' })           //序列化
var obj2=querystring.escape("name=张意斐")                          //进行编码
var obj3=querystring.unescape("name%3D%E5%BC%A0%E6%84%8F%E6%96%90") //解码
console.log(obj)