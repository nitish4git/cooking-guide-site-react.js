import React from 'react'
import './../Featued-product/Featued-product.css'
import Featuredimage from '../../../assets/Featured-page/first-food.png'
import user from '../../../assets/Featured-page/profile.png'

const Featued = () => {
  return (
    <>
        <div className='featured-product'>
            <div className="featured-left">
                <div className="featured-left-details">
                    <h1>
                    Spicy delicious chicken wings
                    </h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur blanditiis porro placeat magnam repudiandae excepturi! Ipsum natus vitae quidem.
                    </p>
                    <div className="featued-btn">
                        <button>30 Minutes</button>
                        <button>Chicken</button>
                    </div>

                    <div className="recipes-videos">
                      <img src={user} alt="" />
                      <div className="user-details">
                        <p>Nitish kumar</p>
                        <p>3 Aug 2024</p>
                      </div>
                    </div>

                </div>
            </div>
            <div className="featured-right">
                <img src={Featuredimage} alt="" />
            </div>
        </div>
    </>
  )
}

export default Featued