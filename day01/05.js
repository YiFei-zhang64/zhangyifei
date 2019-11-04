var http = require("http")
    fs = require("fs")
http.createServer((req, res) => {
    if (req.url == "/favicon.ico") {
        return
    }
    if (req.url == "/" || req.url == "") {
        fs.readFile("./HTML/bar.html", (err, data) => {
            res.end(data)
        })
    } else if (req.url == "/foo") {
        fs.readFile('./HTML/foo.html', (err, data) => {
            res.end(data)
        })
    } else {
        fs.readFile('./1.txt', (err, data) => {
            res.end(data)
        })
    }

}).listen(3000)