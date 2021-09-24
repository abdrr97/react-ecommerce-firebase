import React, { useState } from 'react'
import { useDataContext } from '../../context/data-context'
import { useAuth } from '../../hooks/use-auth'

const CreateProduct = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0.0)
  const [quantity, setQuantity] = useState(0)
  const [stock, setStock] = useState(true)
  const [image, setImage] = useState(null)
  const [category, setCategory] = useState('')
  const { addProduct, categories, uploadProgress } = useDataContext()
  const { authUser } = useAuth()
  const submitHandler = (e) => {
    e.preventDefault()

    const product = {
      name,
      description,
      price,
      quantity,
      stock,
      image,
      category,
      userEmail: authUser.email,
    }

    addProduct(product)
  }

  return (
    <>
      <main className='container'>
        <h1 className='display-3'>Create Product</h1>
        {uploadProgress > 0 && uploadProgress !== 100 && (
          <>
            <h3 className='display-6'>Creating ....</h3>
            <div className='mb-2 progress'>
              <div
                className='progress-bar'
                role='progressbar'
                style={{ width: `${uploadProgress}%` }}
                aria-valuenow={uploadProgress}
                aria-valuemin='0'
                aria-valuemax='100'
              />
            </div>
          </>
        )}
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
            onChange={(e) => setImage(e.target.files[0])}
            className='form-control mb-3'
            type='file'
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
