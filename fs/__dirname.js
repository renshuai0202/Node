console.log(__dirname);

const fs = require('fs');

const rfCallback = (err, res) => {
  if(err) {
    throw(err);
  }
  console.log(res);
}
fs.readFile(__dirname + '/assets/demo.txt', 'utf8', rfCallback);