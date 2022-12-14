const chokidar = require("chokidar");

const { exec, spawn } = require("child_process");

let childProcess;

let debounceRestart = debounce(restart, 500);

// One-liner for current directory
chokidar.watch(["main.js"]).on("all", (event, path) => {
	console.log(event, path);

	debounceRestart();
});

function restart() {
	console.log("restart");
	childProcess && childProcess.kill();
	childProcess = spawn("node", ["main.js"], {
		stdio: [process.stdin, process.stdout, process.stderr],
	});
}

function debounce(fn, delay) {
	let id;
	return () => {
		clearTimeout(id);
		id = setTimeout(() => {
			fn();
		}, delay);
	};
}

// 同步执行: 等所有脚本都执行完成后再进行回调
// exec("node test.js", (err, stdout) => {
// 	console.log(stdout);
// });

// 基于流的形式 执行完就通过流的方式把数据发过来 不需要等待所有都执行完
// spawn("node", ["test.js"], {
// });
