import React from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import { useAuth } from '../hooks/use-auth'
import Logout from './Logout'
import { useCart } from 'react-use-cart'

const Navbar = () => {
  const { authUser } = useAuth()
  const { totalUniqueItems } = useCart()
  return (
    <>
      <nav className='fixed-top navbar navbar-light bg-light'>
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand'>
            React E-commerce
          </Link>

          <div className='navbar navbar-expand'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to='/cart' className='btn nav-link'>
                  <span className='badge bg-info'>{totalUniqueItems}</span>
                  <FaShoppingCart />
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/search' className='nav-link'>
                  <BsSearch />
                </Link>
              </li>
              {!authUser ? (
                <>
                  <li className='nav-item'>
                    <Link to='/login' className='nav-link'>
                      Login
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/signup' className='nav-link'>
                      Sign Up
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className='nav-item'>
                    <span className='nav-link'>{authUser.email}</span>
                  </li>
                  <li className='nav-item'>
                    <Logout className='btn nav-link' />
                  </li>
                  <li className='nav-item'>
                    <Link to='/product/create' className='nav-link'>
                      + Create Product
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
