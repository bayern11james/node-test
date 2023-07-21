var module = require("./module.js");
console.log(module.method1())
console.log(module.method2())
console.log(require.cache);
delete require.cache[require.resolve("./module")];
console.log("已卸载模块")
console.log(require.cache);

