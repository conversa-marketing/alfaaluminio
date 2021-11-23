import { useEffect } from 'react'
import { useRouter } from 'next/router'

import '../../styles/globals.css'
import Layout from '../components/Layout'

import * as gtag from '../lib/gtag'

import Head from 'next/head'
import Analytics from '../components/Analytics'

function App({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  )
}

export default App
