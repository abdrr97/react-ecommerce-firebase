import React from 'react'
import { Link } from 'react-router-dom'
import Carrosel from '../components/Carrosel'
import SingleProduct from '../components/products/SingleProduct'
import { useDataContext } from '../context/data-context'

const Home = () => {
  const { products, categories } = useDataContext()
  return (
    <>
      <main className='container'>
        <Carrosel />

        <h3 className='display-6'>Categories</h3>

        {categories.map(({ docId, name }, idx) => (
          <Link to={`/categories/${docId}`} key={idx} className='badge bg-success mx-1'>
            {name}
          </Link>
        ))}

        <hr />

        <h3 className='display-5'>Products</h3>
        <div class='row row-cols-1 row-cols-md-3 g-4'>
          {products.length > 0 ? (
            products.map((product, idx) => {
              return (
                <div class='col'>
                  <SingleProduct key={idx} product={product} />
                </div>
              )
            })
          ) : (
            <h1>No Products</h1>
          )}
        </div>
      </main>
    </>
  )
}

export default Home
