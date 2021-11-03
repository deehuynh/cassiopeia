// Global styles
import '../styles/global/globals.css'
import '../styles/scss/index.scss'
// splidejs
import '@splidejs/splide/dist/css/splide.min.css';

// Using layout for entire pages
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
