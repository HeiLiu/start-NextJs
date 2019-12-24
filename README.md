# start-NextJs
getting statrted with Next.js

[Next中文文档](https://nextjs.frontendx.cn/docs/#%E5%AE%89%E8%A3%85) Next.js 是一个轻量级的 React `服务端渲染应用框架`。

## 服务端渲染
服务端渲染的理解：其实很多人接触过服务端渲染，最传统的PHP嵌套静态html页面就是服务端渲染的一种。PHP通过模板引擎把从数据库取到的数据渲染到html种，当前端访问指定路由时，php发送给前台指定的页面，这个页面在浏览器端识别到的是.html 文件（Content-type:text/html）,浏览器按照静态html文件格式解析页面渲染后展示出来，用浏览器查看源代码时就是丰富的html标签还有标签里的文本信息，例如SEO信息，文章标题/内容等。这样的页面搜索引擎就可以很容易抓取到了。Next.js 原理类似，只不过后端的语言是Node而已，在React组件中嵌入getInitialProps方法获取到的服务端动态数据，在服务端把React组件渲染成html页面，发送到前台。  

## 同构  
为什么要同构，因为客户端渲染存在一个缺点，就是首屏加载过大文件或过多文件会变得特别慢，因此可以把首屏放在服务端来渲染来提升首屏速度，首屏加载过后路由开始交给客户端控制，又变成了SPA应用，整个代码都是用JavaScript来编写，服务端采用nodejs。

## 静态资源引用  
静态资源的引用比如图片，你可以使用CDN然后src直接填写url，也可以通过工程内部的静态文件引用。Next同样为我们提供了非常简便的方式，与引用css一样，css是通过Head组件来引入页面的，静态文件next官网推荐我们在根目录新建一个static文件夹(规定文件名必须为static)，然后静态文件放在static文件夹下，引用的时候使用绝对路径的形式，next就会找到它们~就像下面这样：
```html
<img className='logo' alt='logo' src='/static/logo.png' />
```
## 路由  

Link 可以接收路由对象、并且会自动格式化生成 URL 字符串
```html
<Link href={{ pathname: '/tags', query: { tagname: 'Css'}}}>
  <Button className="about" type="danger">Css</Button>
</Link>
```

### 路由事件

- routeChangeStart(url) - 路由开始切换时触发
- routeChangeComplete(url) - 完成路由切换时触发
- routeChangeError(err, url) - 路由切换报错时触发
- beforeHistoryChange(url) - 浏览器 history 模式开始切换时触发
- hashChangeStart(url) - 开始切换 hash 值但是没有切换页面路由时触发
- hashChangeComplete(url) - 完成切换 hash 值但是没有切换页面路由时触发  
这里的url是指显示在浏览器中的 url。如果你用了Router.push(url, as)（或类似的方法），那浏览器中的 url 将会显示 as 的值。

正确使用路由事件的例子：  
```js
const handleRouterChange = url => {
  console.log('App is changing to :', url);
}
Router.events.on('routerChangeStart', handleRouterChange);
// 可以使用.off() 取消监听
```
### 预加载
<Link>添加 prefetch 属性，Next.js 将会在后台预加载这些页面。  

```js
import Link from 'next/link'

// example header component
export default () =>
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  </nav>
```

这个分支上改一点，再把那个已被修改的拿过来

[参考链接]（https://juejin.im/post/5ce77761e51d45775964867d）  
[又一个参考链接](https://juejin.im/post/5b83e1776fb9a01a2022879b)