# 学习 nodemon 实现原理

nodemon

1. 当代码改变的时候

- fs.watch()
- chokidar

2. 重新的启动服务(kill 之前服务)

- node main.js -> 重新指令命令 command
- nodejs -> 可通过 exec || spawn 这两个库来实现

exec: 同步执行: 等所有脚本都执行完成后再进行回调

```javascript
exec("node test.js", (err, stdout) => {
	console.log(stdout);
});
```

spawn 基于流的形式 执行完就通过流的方式把数据发过来 不需要等待所有都执行完

```javascript
spawn("node", ["test.js"], {});
```
