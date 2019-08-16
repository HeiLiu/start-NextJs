import React, { Fragment } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Layout from '../components/Layout';

import { Button } from 'antd';

const handler = () => {
  Router.push({
    pathname: '/readmore',
    query: {id: 1}
  })
}

const Home = () => (
  
  <Layout>
    <Fragment>
      <h1>Next, 轻量级React 服务端渲染框架</h1>
      <Link href='/userList'>
        <Button type="primary">用户列表页</Button>
      </Link>
      <Link href='/about'>
        <Button className="about" onClick={handler} type="danger">了解更多</Button>
      </Link>
      {/* Link 可以接收路由对象、并且会自动格式化生成 URL 字符串 */}
      <Link href={{ pathname: '/tags', query: { tagname: 'Css'}}}>
        <Button className="about" type="danger">Css</Button>
      </Link>
    </Fragment>
    <style jsx global>{
    `
    .about {
      margin-left: 5px;
    }
    `
  }</style>
  </Layout>
  
)

export default Home;