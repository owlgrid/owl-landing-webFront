import '../styles/globals.css'

import Layout from '../components/Layout'


import { Inter } from '@next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }) {
  return(
    <>
      {/* Set up inter font */}
      <style jsx global>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
          }
        `}
      </style>

      <Component {...pageProps} />
    </>
  )
}
