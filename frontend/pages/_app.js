import '../styles/globals.css'
import { Toaster } from 'react-hot-toast'
import { CartProvider } from '../utils/CartContext'
import { LanguageProvider } from '../utils/LanguageContext'

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <CartProvider>
        <Component {...pageProps} />
        <Toaster
          position="top-left"
          reverseOrder={false}
          toastOptions={{
            duration: 4000,
            style: {
              background: '#07632a',
              color: '#fff',
              fontFamily: 'Tajawal, sans-serif',
              fontSize: '16px',
              borderRadius: '10px',
            },
          }}
        />
      </CartProvider>
    </LanguageProvider>
  )
}

export default MyApp