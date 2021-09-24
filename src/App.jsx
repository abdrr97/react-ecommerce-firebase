import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './routes/private-route'

import Navbar from './components/Navbar'
// pages
import Home from './pages/Home'
import CreateProduct from './pages/products/CreateProduct'
// auth
import Login from './pages/auth/Login'
import { SignUp } from './pages/auth'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import CategoryProducts from './pages/CategoryProducts'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <main style={{ marginTop: '100px' }}>
          <Switch>
            <Route exact path='/' component={Home} />
            {/* auth */}
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
            <Route path='/forgot-password' component={Home} />

            {/* Produits */}
            <Route path='/products' component={Home} />
            <Route path='/products/:id' component={Home} />
            <Route path='/checkout' component={CheckoutPage} />
            <Route path='/cart' component={CartPage} />
            <Route path='/search' component={Home} />

            {/* auth user */}
            <Route exact path='/categories/:id' component={CategoryProducts} />
            <PrivateRoute path='/product/create' component={CreateProduct} />

            <Route path='*'>
              <h1>Page Not Found</h1>
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  )
}

export default App
