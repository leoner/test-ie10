#  ie10.0 错误重现 demo

## 重现步骤

 - `npm install express`
 - `node server.js`
 - 使用 ie 10 打开上一步提示的地址
 - 通过在 url 中回车刷新页面即可错误重现.
 
 
## 错误分析 - web 服务器
 - 通过 `python -m SimpleHTTPServer` 测试没有问题
 - 通过 `static` 测试没有问题(`npm install node-static -g`)
 - 目前猜测可能是 `app.use(express.static(process.cwd()))
` 这个静态web 服务的问题.