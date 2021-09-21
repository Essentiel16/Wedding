import Head from 'next/head';

const HeadTag = ({ title }) => (
  <Head>
    <title>
      { title }
    </title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="icon" type="image/svg" href="/vercel.svg" />
  </Head>
);
export default HeadTag;
