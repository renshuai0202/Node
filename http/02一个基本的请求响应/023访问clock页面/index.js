const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();

server.on('request', function(req, res) {
  const url = req.url;

  const pathStr = path.join(__dirname, url);

  fs.readFile(pathStr, 'utf-8', function(err, fileStr) {
    if(err) return res.end('404 Not Found!');
    res.setHeader('Content-Type', 'text/html; charset= utf-8');
    res.end(fileStr);
  });
});

server.listen('80', function(){
  console.log('服务启动成功！');
})