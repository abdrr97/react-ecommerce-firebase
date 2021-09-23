import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authUser } = useAuth()

  return (
    <Route
      {...rest}
      render={(args) => (authUser ? <Component {...args} /> : <Redirect to='/login' />)}
    />
  )
}

export default PrivateRoute
