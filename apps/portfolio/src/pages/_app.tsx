import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Footer, Header } from '../components';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to portfolio!</title>
      </Head>
      <Header />
      <main className="app">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default CustomApp;
