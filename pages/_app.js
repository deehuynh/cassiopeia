// Global styles
import '../styles/global/globals.css'
import '../styles/scss/index.scss'
// splidejs
import '@splidejs/splide/dist/css/splide.min.css'
// Using layout for entire pages
import Layout from '../components/layout'
// redux
import store from '../store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
