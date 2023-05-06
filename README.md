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

## 模块化
好处：可复用 可维护性 按需加载 防止污染全局变量

内置模块 Nodejs自带 http fs path
自定义模块 用户的js文件
第三方模块

`require()` 会执行被加载模块中的代码 
加载自定义模块，可以省略 `.js` 后缀
加载某个模块，加载的是 `module.exports` 对象

`module` 每个 `.js`文件都有 `module` 对象，包含模块的信息
  Module {
    path: '',
    filename: '',
    exports: {},
    loaded: false,
    ...
  }

语法：
module.exports.username = 'zhangsan';
module.exports = {
  username: 'lisi'
}
exports.username: 'wangwu'
三种写法同时存在时，以module.exports = {}为准

npm包是第三方模块
npm是包管理工具 Node Package Manager
搜包服务 https://www.npmjs.com
npm默认从 https://registry.npmjs.org/ 服务器下载包 

`npm init -y` 为项目自动创建 `package.json`
`npm install`
`npm uninstall`
`npm install 包名 -D` 安装在 `devDependencies` 对象中
`npm install 包名 --save-dev` 是 `-D` 的全拼
包名和参数顺序无要求
`npm install 包名 -g` 全局安装在电脑的库，例如 `nvm`

`npm config get registry` 查看当前npm源服务器地址
`npm config set registry=https://registry.npm.taobao.org/`

模块加载机制
1. 第一次加载后，后续加载从缓存中加载，require()的代码不会被执行多次
2. Node内置的模块，优先级最高，即使存在同名的第三方模块，也是读取内置模块
3. 加载自定义模块，开头必须是 `./`  `../` 的路径标识符
4. 如果没有指定文件扩展名，Node会依次尝试扩展名 `.js` /`.json` `.node` 进行加载，否则加载失败