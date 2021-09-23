import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../hooks/use-auth'

const Login = () => {
  const { signin, error, loading } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  return (
    <>
      <main className='container'>
        {error && (
          <div className='alert alert-danger'>
            {error.errorMessage} | {error.errorCode}
          </div>
        )}
        <h1 className='display-4'>Login</h1>

        <form
          onSubmit={async (e) => {
            e.preventDefault()
            if (email && password) {
              await signin(email, password)
              if (!loading && !error) {
                history.push('/')
              }
            }
          }}
        >
          <input
            placeholder='Enter your email'
            className='form-control mb-3 '
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type='text'
          />
          <input
            placeholder='Password'
            className='form-control mb-3'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type='password'
          />

          <button className='btn btn-sm btn-info' disabled={loading}>
            {loading ? 'login in ...' : 'Login'}
          </button>
        </form>
      </main>
    </>
  )
}

export default Login
