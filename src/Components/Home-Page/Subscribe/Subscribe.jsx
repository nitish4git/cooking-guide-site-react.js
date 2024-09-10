import React from 'react'
import '../Subscribe/Subscribe.css'
import plateImage from '../../../assets/Subscribe/plate.png'
import saladImage from '../../../assets/Subscribe/salad.png'
const Subscribe = () => {
  return (
    <>
        <div className='subscribe'>
            <div className='subscribe-details'>
                <h1>Deliciousness to your inbox</h1>
                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <form className='subscribe-form'>
                <input type='email' placeholder='Enter Your Email...' />
                <button>Subscribe</button>
                </form>
            </div>
           
        </div>
    </>
  )
}

export default Subscribe