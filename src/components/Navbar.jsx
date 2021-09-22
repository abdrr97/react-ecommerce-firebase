import React from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-light bg-light'>
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand'>
            React E-commerce
          </Link>

          <div className='navbar navbar-expand'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to='/checkout' className='btn nav-link'>
                  <FaShoppingCart />
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/search' className='nav-link'>
                  <BsSearch />
                </Link>
              </li>
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
              <li className='nav-item'>
                <Link to='/product/create' className='nav-link'>
                  + Create Product
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
