import { Fragment } from 'react';
import Head from 'next/head';
import Header from './Header';

export default ({title, children }) => (
  <Fragment>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width initial-scale=1' />
      <title>Next Start</title>
    </Head>

    <style jsx global>{
      `body {
        backgroud: red;
      }

      `
    }</style>
    <Header title={title}/>
    <div className='content-container'>
      {children}
    </div>  
  </Fragment>
)