// Global styles
import '../styles/global/globals.css'
import '../styles/scss/index.scss'

// Components
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
