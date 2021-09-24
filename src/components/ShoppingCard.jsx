import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'

const ShoppingCart = () => {
  const { emptyCart, isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem, cartTotal } =
    useCart()

  if (isEmpty)
    return (
      <>
        <section className='text-center'>
          <h1 className='display-3'>Your cart is empty</h1>
          <Link className=' btn btn-info' to='/'>
            Fill Your Cart
          </Link>
        </section>
      </>
    )

  return (
    <>
      <h1 className='display-5'>Cart ({totalUniqueItems})</h1>

      <ul className='list-group'>
        {items.map((item) => (
          <li
            className='list-group-item d-flex align-items-center justify-content-between'
            key={item.id}
          >
            <img width='100' src={item.image} alt={item.name} />
            {item.quantity} x {item.name} &mdash;
            <div className='btn-group'>
              <button
                className='btn btn-sm btn-warning'
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <button
                className='btn btn-sm btn-success'
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button className='btn btn-sm btn-outline-danger' onClick={() => removeItem(item.id)}>
                &times;
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Link to='/checkout' className='btn btn-success'>
        Checkout
      </Link>
      <button
        onClick={() => {
          if (window.confirm('Do you really want to empty your cart ?')) emptyCart()
        }}
        className='btn btn-outline-danger mt-3'
      >
        Empty your Cart
      </button>
      <h1 className='display-6'>Total :{cartTotal}$</h1>
    </>
  )
}

export default ShoppingCart
