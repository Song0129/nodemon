const Koa = require("koa");
const app = new Koa();
app.use(ctx => {
	ctx.body = "hi nodemon123";
});

app.listen(3000);
// nodemon
// 1. 当代码改变的时候
//    - fs.watch()
//    - chokidar
// 2. 重新的启动服务(kill 之前服务)
//    - node main.js -> command
//    - nodejs -> exec || spawn
