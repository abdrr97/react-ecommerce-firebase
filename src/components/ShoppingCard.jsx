import React from 'react'
import { useCart } from 'react-use-cart'

const ShoppingCart = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem, cartTotal } = useCart()

  if (isEmpty) return <p>Your cart is empty</p>

  return (
    <>
      <h1 className='display-5'>Cart ({totalUniqueItems})</h1>
      <h1 className='display-5'>Total {cartTotal}$</h1>

      <ul className='list-group'>
        {items.map((item) => (
          <li
            className='list-group-item d-flex align-items-center justify-content-between'
            key={item.id}
          >
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
    </>
  )
}

export default ShoppingCart
