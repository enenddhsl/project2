import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import '../components/layout/Layout'

import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
