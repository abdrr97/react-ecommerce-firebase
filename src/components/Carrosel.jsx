import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Carrosel = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8])

  return (
    <>
      <div className='carousel-wrapper'>
        <Carousel>
          {items.map((item) => (
            <div className='carousel slide'>
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <img
                    src='http://thewowstyle.com/wp-content/uploads/2015/01/nature-image.jpg'
                    className='d-block w-100'
                    alt='...'
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default Carrosel
