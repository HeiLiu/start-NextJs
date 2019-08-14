import React, { Fragment } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

import { Button } from 'antd';

const Home = () => (
  <Layout>
    <Fragment>
      <h1>Next, 轻量级React 服务端渲染框架</h1>
      <Link href='userList'>
        <Button type="primary">用户列表页</Button>
      </Link>
    </Fragment>
    <style jsx global>{
    `
    // 没有生效
    .antd-btn-primary {
      background-color: red;
    }
    `
  }</style>
  </Layout>
  
)

export default Home;