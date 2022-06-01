import type { AppProps } from 'next/app'
import { AppProvider } from '../hooks'
import { CompanyStyles } from '../styles/company'
import { GlobalStyle } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <GlobalStyle/>
      <CompanyStyles />
    </AppProvider>
  )
}

export default MyApp
