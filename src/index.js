import React from 'react'
import ReactDOM from 'react-dom'
import { DataProvider } from './context/data-context'
import App from './App'
import { CartProvider } from 'react-use-cart'

import 'bootstrap/dist/css/bootstrap.min.css'

const root = document.getElementById('root')
ReactDOM.render(
  <DataProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </DataProvider>,
  root
)
