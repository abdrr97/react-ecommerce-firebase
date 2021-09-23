import React from 'react'
import { useAuth } from '../hooks/use-auth'

const Logout = ({ className }) => {
  const { signout } = useAuth()
  return (
    <>
      <button onClick={signout} className={className}>
        Logout
      </button>
    </>
  )
}

export default Logout
