# Node
学习node

## fs
readFile(path[, 编码格式], callback)

writeFile(path, data[, 编码格式], callback)

## __dirname 当前文件所在的目录，它是绝对路径。

## path
resolve(path1, path2[, path3, ...])
将多个路径拼接起来。如果第二个参数是 `..` ,说明返回path1的上一级目录

join(path1, path2[, path3, ...])
将多个路径拼接起来