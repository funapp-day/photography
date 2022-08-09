import Head from 'next/head';
import { HomeScreen } from 'src/components/templates/HomeScreen';

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Photography</title>
      </Head>
      <HomeScreen />
    </>
  );
};

export default IndexPage;
