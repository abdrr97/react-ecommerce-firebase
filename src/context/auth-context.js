import React, { useState, useEffect, createContext } from 'react'
import { auth } from '../.firebase'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [authUser, setAuthUser] = useState(null)

  const signup = async (email, password) => {
    try {
      setLoading(true)
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      // setting error
      setError({
        errorCode,
        errorMessage,
      })
      setLoading(false)
    }
  }
  const signin = async (email, password) => {
    try {
      setLoading(true)
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      // setting error
      setError({
        errorCode,
        errorMessage,
        error,
      })
      setLoading(false)
    }
  }
  const signout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      // setting error
      setError({
        errorCode,
        errorMessage,
      })
      setLoading(false)
    }
  }

  useEffect(() => {
    setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthUser(user ? user : null)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const values = {
    signup, // register
    signin, // login
    signout, // logout
    authUser, // authenticated user (current user)
    error,
    loading, // error
  }

  return <AuthContext.Provider value={values} children={children} />
}

export { AuthContext, AuthProvider }
