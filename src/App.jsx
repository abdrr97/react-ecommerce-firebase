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

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          {/* auth */}
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route path='/forgot-password' component={Home} />

          {/* Produits */}
          <Route path='/products' component={Home} />
          <Route path='/products/:id' component={Home} />
          <Route path='/checkout' component={Home} />
          <Route path='/search' component={Home} />

          {/* auth user */}
          <PrivateRoute path='/category/create' component={Home} />
          <PrivateRoute path='/product/create' component={CreateProduct} />

          <Route path='*'>
            <h1>Page Not Found</h1>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
