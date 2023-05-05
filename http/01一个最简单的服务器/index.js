const http = require('http');

// 创建服务器实例
const server = http.createServer();

// 有程序访问，就会触发回调事件
server.on('request', function() {
  // if(err) throw(err);
  console.log('有程序访问我的服务了');
})

// 启动服务
server.listen('80', function(err) {
  if(err) throw(err);
  console.log('服务启动成功！');
})