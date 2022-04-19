import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ReactGa from "react-ga"
import { useEffect } from "react"

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    ReactGa.initialize("UA-203733854-1")
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])


  return <Component {...pageProps} />
}
export default MyApp
