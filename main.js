const Koa = require("koa");
const app = new Koa();
app.use(ctx => {
	ctx.body = "hi nodemon";
});

app.listen(3000);
