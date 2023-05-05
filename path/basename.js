const path = require('path');

const pathStr = __dirname + '/assets/demo.js';

const fileNameWithEnd = path.basename(pathStr);
const fileNameNotEnd = path.basename(pathStr, '.js');
console.log(fileNameWithEnd, fileNameNotEnd);
