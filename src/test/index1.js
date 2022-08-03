/**
 * mac 系统下
 * 1. 在 bash 命令和 npm scripts 中使用 & 来实现并发效果
 * 2. && 串行执行命令，先执行完左侧在执行右侧
 * 
 * windows 系统下上述 & 与 && 一样是串行
 * 需要用到 concurrently 跨平台并发命令
 * 
 * 效果查看：
 * windows 电脑执行 npm run wintest1 和 npm run wintest2
 * mac 电脑执行 npm run mactest1 和 npm run mactest2
 */

console.log(1);

setTimeout(() => {
    console.log(111);
}, 5000)