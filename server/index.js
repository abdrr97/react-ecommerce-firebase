const express = require('express')
const cors = require('cors')
const app = express()
const stripe = require('stripe')('sk_test_zmVjH8GE8GPf9RN6VUH0SJIt00qGOw3mzX')

app.use(express.static('public'))
app.use(express.json())

app.options('*', cors())
app.post('/create-payment-intent', cors(), async (req, res) => {
  try {
    const { cartTotal } = req.body // request data sent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: cartTotal * 100,
      currency: 'usd',
    })

    res.send({
      clientSecret: paymentIntent.client_secret,
    })
  } catch (ex) {}
})

app.listen(4242, () => console.log('nodejs server listen to => http://localhost:4242'))
