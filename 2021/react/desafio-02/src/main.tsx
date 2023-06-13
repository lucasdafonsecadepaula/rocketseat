import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartProvider } from './contexts/CartContext.tsx'
import './index.css'
import { AppRouter } from './router/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <AppRouter />
    </CartProvider>
  </React.StrictMode>,
)
