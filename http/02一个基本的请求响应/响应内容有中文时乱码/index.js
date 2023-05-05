const http = require('http');

const server = http.createServer();

server.on('request', function(req, res) {
  const url = req.url;
  const method = req.method;
  
  const str = `本次请求地址是 ${url}, 请求方法是 ${method}.`;
  // 解决中文响应乱码问题，设置响应头Content-Type值为text/html: charset=utf-8
  res.setHeader('Content-Type', 'text/html; charset= utf-8');
  res.end(str);
});

server.listen('80', function(){
  console.log('服务启动成功！');
})