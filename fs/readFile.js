const fs = require('fs');

const rfCallback = (err, res) => {
  if(err) {
    throw(err);
  }
  console.log(res);
}
fs.readFile('./assets/demo.txt', 'utf8', rfCallback);