console.log(__dirname);

const fs = require('fs');
const path = require('path');

const rfCallback = (err, res) => {
  if(err) {
    throw(err);
  }
  console.log(res);
}

const target = path.resolve(__dirname, '..')

fs.readFile(target + '/fs/assets/demo.txt', 'utf8', rfCallback);