import React, {Fragment} from 'react';
import Link from 'next/link';

const Home = () => (
  <Fragment>
    <h1>Next, 轻量级React 服务端渲染框架</h1>
    <Link href='userList'>
      <a>用户列表页</a>
    </Link>
  </Fragment>
)

export default Home;