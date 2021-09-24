import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SingleProduct from '../components/products/SingleProduct'
import { useDataContext } from '../context/data-context'

const CategoryProducts = () => {
  const { id } = useParams()
  const { products } = useDataContext()

  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    setFilteredProducts(products.filter((p) => p.category === id))
  }, [id, products])

  return (
    <>
      <main className='container'>
        <h1>{id}</h1>
        <div class='row '>
          {filteredProducts.length > 0 &&
            filteredProducts.map((p, idx) => {
              return (
                <div class='col'>
                  <SingleProduct key={idx} product={p} />
                </div>
              )
            })}
        </div>
      </main>
    </>
  )
}

export default CategoryProducts
