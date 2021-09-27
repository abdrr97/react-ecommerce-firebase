import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authUser } = useAuth()
  const redirect_to = '/login'
  return (
    <Route
      {...rest}
      render={(args) => (authUser ? <Component {...args} /> : <Redirect to={redirect_to} />)}
    />
  )
}

export default PrivateRoute
