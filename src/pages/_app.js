import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import * as gtag from '../lib/gtag'
import Analytics from '../components/Analytics'
import GlobalStyles from '../../styles/global'
import Layout from '../components/Layout'


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
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00447d" />
        <link rel="apple-touch-icon" href="/alfa-96x96.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#00447d" />
      </Head>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  )
}

export default App
