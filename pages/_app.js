import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Page from '../components/Page'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>GCN Store</title>
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </Provider>
  )
}

export default MyApp
