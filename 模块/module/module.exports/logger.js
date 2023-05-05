module.exports.username = 'zhangsan';
module.exports.log = function() {
  console.log(this.username);
  return 123;
}

module.exports = {
  username: 'lisi',
  log() {
    console.log(this.username);
    return 456;
  }
}