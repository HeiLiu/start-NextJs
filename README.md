# start-NextJs
getting statrted with Next.js

[Next中文文档](https://nextjs.frontendx.cn/docs/#%E5%AE%89%E8%A3%85) Next.js 是一个轻量级的 React `服务端渲染应用框架`。

## 服务端渲染
服务端渲染的理解：其实很多人接触过服务端渲染，最传统的PHP嵌套静态html页面就是服务端渲染的一种。PHP通过模板引擎把从数据库取到的数据渲染到html种，当前端访问指定路由时，php发送给前台指定的页面，这个页面在浏览器端识别到的是.html 文件（Content-type:text/html）,浏览器按照静态html文件格式解析页面渲染后展示出来，用浏览器查看源代码时就是丰富的html标签还有标签里的文本信息，例如SEO信息，文章标题/内容等。这样的页面搜索引擎就可以很容易抓取到了。Next.js 原理类似，只不过后端的语言是Node而已，在React组件中嵌入getInitialProps方法获取到的服务端动态数据，在服务端把React组件渲染成html页面，发送到前台。  

## 同构  
为什么要同构，因为客户端渲染存在一个缺点，就是首屏加载过大文件或过多文件会变得特别慢，因此可以把首屏放在服务端来渲染来提升首屏速度，首屏加载过后路由开始交给客户端控制，又变成了SPA应用，整个代码都是用JavaScript来编写，服务端采用nodejs。




[参考链接]（https://juejin.im/post/5ce77761e51d45775964867d）
[又一个参考链接](https://juejin.im/post/5b83e1776fb9a01a2022879b)