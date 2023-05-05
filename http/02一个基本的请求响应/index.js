const http = require('http');

const server = http.createServer();

server.on('request', function(req, res) {
  const url = req.url;
  const method = req.method;
  
  const str = `The request url is ${url}, it's method is ${method}.`;
  // 发送给客户端内容，结束此次请求
  res.end(str);
});

server.listen('80', function(){
  console.log('服务启动成功！');
})