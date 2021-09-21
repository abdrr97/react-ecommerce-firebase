import React from 'react'
import Carrosel from '../components/Carrosel'
import SingleProduct from '../components/products/SingleProduct'

const Home = () => {
  return (
    <>
      <main className='container'>
        <h1>Home</h1>

        <Carrosel />

        <div class='row row-cols-1 row-cols-md-3 g-4'>
          <div class='col'>
            <SingleProduct />
          </div>
          <div class='col'>
            <SingleProduct />
          </div>
          <div class='col'>
            <SingleProduct />
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
