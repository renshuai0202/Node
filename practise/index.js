const fs = require('fs');
const path = require('path');

// 正则匹配<style>和</style> <script>和</script>中间的内容
// \s表示空白字符 \S表示非空白字符 *表示匹配任意次 \/表示转义符号/
const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

const pathStr = path.join(__dirname, './index.html');
fs.readFile(pathStr, 'utf8', rfCallback);
function rfCallback (err, htmlStr) {
  if(err) throw(err);
  handleStyle(htmlStr);
  handleScript(htmlStr);
  handleHtml(htmlStr);
}
function handleStyle(htmlStr) {
  const regStyle = /<style>[\s\S]*<\/style>/;
  const style = regStyle.exec(htmlStr);
  if(style) {
    const newCss = style[0].replace('<style>', '').replace('</style>', '');
    const pathStr = path.join(__dirname, './clock/style.css');
    fs.writeFile(pathStr, newCss, function(err) {
      if(err) throw(err);
    });
  }
}

function handleScript(htmlStr) {
  const regScript = /<script>[\s\S]*<\/script>/;
  const res = regScript.exec(htmlStr);
  if(res) {
    const newScript = res[0].replace('<script>', '').replace('</script>', '');
    const pathStr =  path.join(__dirname, './clock/index.js');
    fs.writeFile(pathStr, newScript, function(err) {
      if(err) throw(err);
    })
  }
}

function handleHtml(htmlStr) {
  const regStyle = /<style>[\s\S]*<\/style>/;
  const regScript = /<script>[\s\S]*<\/script>/;
  const newHtml = htmlStr.replace(regStyle, "<link rel='stylesheet' href='./style.css' />").replace(regScript, "<script src='./index.js'></script>")
  const pathStr = path.join(__dirname, './clock/index.html');
  fs.writeFile(pathStr, newHtml, function(err) {
    if(err) throw(err);
  });
}