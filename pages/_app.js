import '../styles/globals.css';
import store from '../redux/store';
import { Provider } from 'react-redux';
import Page from '../components/Page';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </Provider>
  )
}

export default MyApp
