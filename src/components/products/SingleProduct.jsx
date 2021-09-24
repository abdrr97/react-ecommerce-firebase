import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import { useCart } from 'react-use-cart'

const SingleProduct = (props) => {
  const { addItem } = useCart()

  const {
    product: { image, name, description, price, category },
  } = props
  return (
    <>
      <div style={{ width: '300px' }} class='card'>
        <img src={image} class='card-img-top' alt='...' />
        <div class='card-body'>
          <h5 class='card-title'>{name}</h5>
          <p class='card-text'>{description} </p>
          <p class='card-text'>
            <small class='text-muted'>{price}$</small>
            <small class='badge bg-secondary'>{category} </small>
          </p>
          <button onClick={() => addItem(props.product)} className='btn btn-sm btn-success'>
            <MdAddShoppingCart />
          </button>
        </div>
      </div>
    </>
  )
}

export default SingleProduct
