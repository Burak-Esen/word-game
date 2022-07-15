import Head from 'next/head';


export const NextHead: React.FC = () => {
  return (
    <Head>
      <title>Word Game</title>
      <meta name="description" content="education game" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
