const fs = require('fs');

const handleRes = (data) => {
  const arrayData = data.split(' ');
  let result = '';
  for(let i=0; i< arrayData.length; i++) {
    const replaced = arrayData[i].replace('=', '：');
    result += replaced + '\r\n';
  }
  return result;
}

const wfCallback = (err) => {
  if(err) throw(err);
}

const rfCallback = (err, res) => {
  if(err) throw(err);
  const data = handleRes(res);
  fs.writeFile('./assets/成绩-ok.txt', data, 'utf8', wfCallback)
}

fs.readFile('./assets/成绩.txt', 'utf8', rfCallback);