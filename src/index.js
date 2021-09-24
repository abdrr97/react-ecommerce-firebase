import React from 'react'
import ReactDOM from 'react-dom'
import { DataProvider } from './context/data-context'
import { AuthProvider } from './context/auth-context'
import { CartProvider } from 'react-use-cart'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const root = document.getElementById('root')
ReactDOM.render(
  <AuthProvider>
    <DataProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </DataProvider>
  </AuthProvider>,
  root
)
