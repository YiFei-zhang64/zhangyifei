var http = require("http")
var path = require("path")
var form = require("formidable")
var fs = require("fs")
var sd = require("silly-datetime")
http.createServer((req, res) => {
    if (req.url == "/dopost") {
        var fm = form.IncomingForm()
        fm.uploadDir = "./uploads"
        fm.parse(req, function (err, fields, files) {
            var low = files.pic.path
            var extname = path.extname(files.pic.name)
            console.log(extname)
            var time = sd.format(new Date(), "YYYYMMDDHHmmss")
            var fanishon = "./uploads/" + time + extname
            console.log( fm.uploaddir)
            fs.rename(low, fanishon, (err) => {
                if (err) throw err
            })
            res.end("success")

        })
    }

}).listen(3000)