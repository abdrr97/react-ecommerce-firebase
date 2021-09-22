import React, { useState } from 'react'
import { useDataContext } from '../../context/data-context'

const CreateProduct = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0.0)
  const [quantity, setQuantity] = useState(0)
  const [stock, setStock] = useState(true)
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('')
  const [userName, setUserName] = useState('Abderrahmane')
  const { addProduct, categories } = useDataContext()

  const randomColor = () => {
    let color = ''
    for (let i = 0; i < 6; i++) {
      const random = Math.random()
      const bit = (random * 16) | 0
      color += bit.toString(16)
    }
    return color
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const randHex = randomColor()
    const product = {
      name,
      description,
      price,
      quantity,
      stock,
      image: `https://via.placeholder.com/300.png/${randHex}/fff`,
      category,
      userName,
    }

    addProduct(product)
  }

  return (
    <>
      <main className='container'>
        <h1 className='display-3'>Create Product</h1>

        <form onSubmit={(e) => submitHandler(e)}>
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='form-control mb-3'
            type='text'
          />
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='form-control mb-3'
          />
          <label>Price</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='form-control mb-3'
            type='number'
          />
          <label>Quantity</label>
          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className='form-control mb-3'
            type='number'
          />
          <label>Is in Stock ?</label>
          <input
            checked={stock}
            onChange={(e) => setStock(e.target.checked)}
            className='form-check mb-3'
            type='checkbox'
          />
          <label>Product Image</label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className='form-control mb-3'
            type='url'
          />
          <label>Category</label>

          <select className='form-select mb-3' onChange={(e) => setCategory(e.target.value)}>
            {categories.length > 0 ? (
              categories.map(({ name }, idx) => {
                return (
                  <option key={idx} value={name}>
                    {name}
                  </option>
                )
              })
            ) : (
              <option value={null} disabled selected>
                no categories !!
              </option>
            )}
          </select>
          <button className='btn btn-info'>Add Product</button>
        </form>
      </main>
    </>
  )
}

export default CreateProduct
