## webpack5 脚手架

您可以使用它快速开始一个新项目，不过目前只支持react，您可以在此基础上很容易地进行扩展。希望能够稍稍地帮到你一点，如果觉得还不错的话可以给个`star`，祝您食用愉快。

### 架构支持的特性

- [x] Webpack5
- [x] 命令行友好提示
- [x] es6+
- [x] React
- [x] Typescript
- [x] PostCSS + cssnext
- [x] HMR
- [x] 使用rem方案自适应，并使用PostCSS插件自动将px转换成rem（设计稿是1920*1080，直接写设计稿上的尺寸即可）
- [x] 开发环境及生产环境优化

### 如何使用？

**开发环境**

```shell
yarn run start
```

启动后可以在浏览器地址栏输入`http://localhost:8082/`访问页面，以下是预览效果图：

![项目预览](https://tva1.sinaimg.cn/large/0081Kckwly1gm07vgj7pej31gr0u0npe.jpg)

**生产环境**

```
yarn run build
```