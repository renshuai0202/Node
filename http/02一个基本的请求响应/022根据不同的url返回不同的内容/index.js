const http = require('http');

const server = http.createServer();

server.on('request', function(req, res) {
  const url = req.url;
  let content = '404 Not Found!'

  if(url === '/' || url === '/index.html') {
    content = '<h1>首页</h1>'
  } else if(url === '/about') {
    content = '<h1>关于</h1>'
  }

  res.setHeader('Content-Type', 'text/html; charset= utf-8');
  res.end(content);
});

server.listen('80', function(){
  console.log('服务启动成功！');
})