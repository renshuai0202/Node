const path = require('path');

const pathStr = '/a/b/c/index.html';

const extname = path.extname(pathStr);

console.log(extname); // .html