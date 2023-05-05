const fs = require('fs');

const wfCallback = (err) => {
  if(err) throw(err);
  console.log('文件写入成功！');
}

fs.writeFile('./assets/demo.txt', 'hi RS!', 'utf8', wfCallback);