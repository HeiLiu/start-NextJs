import Head from 'next/head';

export default ({ children }) => (
  <div>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width. initial-scale=1' />
      <title>Next Start</title>
    </Head>
    <style jsx global>{
      `body {
        backgroud: red;
      }

      `
    }</style>
    {children}
  </div>
)