# Node
学习node

## fs
readFile(path[, 编码格式], callback)

writeFile(path, data[, 编码格式], callback)

## __dirname 当前文件所在的目录，它是绝对路径。

## path
resolve(path1, path2[, path3, ...])
将多个路径拼接起来。如果第二个参数是 `..` ,说明返回path1的上一级目录

join(path1, path2[, path3, ...])
将多个路径拼接起来

basename(path[, 带点的文件后缀名])

extname(path)
文件后缀（包括点）

## http
开发期间，本地运行node服务器  IP地址为127.0.0.1 域名为localhost
每台电脑中可以运行N多个服务器，每个端口号对应一个服务器。 80端口号可以被省略

const http = require('http');

// 创建服务实例
const server = http.createServer();

server.on('request', (req, res) => {
  // 获取请求信息
  const url = res.url;
  const method = req.method;
  // 解决中文响应内容乱码 😨注意分号和空格，否则还是乱码
  res.setHeader('Content-Type', 'text/html; charset= utf-8');
  // 发送给客户端信息，并结束此次请求
  res.end(`The request url is ${url} 请求方法是 ${method}.`)
})

// 启动服务
server.listen('80', () => {
  console.log('服务启动成功.');
})