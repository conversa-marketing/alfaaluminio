import '../../styles/globals.css'
import Layout from '../components/Layout'

import Head from 'next/head'
import Analytics from '../components/Analytics'

function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Analytics />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
