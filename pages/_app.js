import '../styles/globals.css'
import { Providers } from '../providers/index';

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default MyApp

