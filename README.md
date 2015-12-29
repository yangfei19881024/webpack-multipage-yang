#webpack 多页面开发
##实现功能
+ 集成开发环境 浏览器实时刷新，静态文件服务器
+ js,css打包上线,文件指纹
+ 支持 AMD, CMD , es6 模块化
+ ~~js文件按需加载~~
+ es6 语法
+ react

#基本命令

```
开发环境
npm run dev
生产环境
npm run release
```
##handlerbar-loader 几点注意的地方
```
使用 handlerbar时候 需要 安装
npm i handlerbars-loader --save-dev
npm i handerbars --save *[必须要要装]*  不装会报错
```
##postcss-loader 几点注意的地方
```
使用 postcss 需要 安装
npm i postcss-loader --save-dev
npm i postcss --save-dev *[必须要要装]* 不装会报错
npm i autoprefixer --save-dev 自动加上浏览器前缀
npm i precss --save-dev 支持写 sass-like 语法(支持 $声明变量,@defined-mixin,@defined-extend )
```
