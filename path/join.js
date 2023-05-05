const path = require('path');

const pathStr = path.join('/a', '/b', '/c/d', '../', './e', '/f');
console.log(pathStr);