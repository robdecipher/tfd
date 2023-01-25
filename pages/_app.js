import Layout from '../components/layout/layout';
import Head from 'next/head';
import { Hanken_Grotesk } from '@next/font/google';

import { Fragment } from 'react';
import '../styles/globals.css';

const hanken = Hanken_Grotesk({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <>
        <style jsx global>{`
          html {
            font-family: ${hanken.style.fontFamily};
          }
        `}</style>
      </>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export function reportWebVitals(metric) {
  if (metric.label === 'web-vital') {
    console.log(metric) // The metric object ({ id, name, startTime, value, label }) is logged to the console
  }
}

export default MyApp
