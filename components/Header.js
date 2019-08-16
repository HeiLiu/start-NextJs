import React, { Component } from 'react';
import Link from 'next/Link';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    };
  }
  render() {
    const {title} = this.state;
    return (
      <div className='header-container'>
        <Link href='/'>
          <div className='logo-container'>
            <img className='logo' alt='logo' src='https://nextjs.frontendx.cn/static/favicon/favicon.ico' />
            <span className='sys-name'>Next.js</span>
          </div>
        </Link>
        <h2>{title}</h2>
        <style jsx>{`
          .header-container {
            height: 60px;
            background-color: #1890ff;
            border: 1px solid #1890ff;
            margin-bottom: 10px;
          }
          h2 {
            text-align: center;
            line-height: 60px;
            font-size: 1.6rem;
            font-weight: 500;
            color: #fff;
          }
          .logo-container {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 15px;
            left: 20px;
            cursor: pointer;
          }
          .sys-name {
            display: inline-block;
            margin-left: 10px;
            font-size: 20px;
            color: #fff;
            font-weight: 600;
          }
          .logo {
            width: 30px;
            height: 30px;
          }
        `}</style>
      </div>
    )
  }
}

export default Header;
