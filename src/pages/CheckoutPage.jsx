import React from 'react'
import CheckoutForm from '../components/CheckoutForm'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
const promise = loadStripe('pk_test_o4s6hprVpP0CKRPVYGT4ns9800VoJwXG4o')

const CheckoutPage = () => {
  return (
    <>
      <main className='container'>
        <h2 className='display-4'> Checkout </h2>

        <Elements stripe={promise}>
          <CheckoutForm />
        </Elements>
      </main>
    </>
  )
}

export default CheckoutPage
