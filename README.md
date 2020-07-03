## 命令行工具

- yxd-cli install

###### npx 可以将 node_modules/.bin 的命令直接使用，在执行 npm run 的时候会将 node_modules 下的文件添加到临时的环境变量中。

##### | 安装 babel，转换为 es5 语法，在 www 文件中引用转换后的文件

```shell
  npm install babel-cli babel-env babel-polyfill
```

- 在 package.json 中设置 scripts 和 bin
- npm install commander
