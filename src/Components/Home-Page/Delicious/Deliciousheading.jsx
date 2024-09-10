import React from 'react'
import '../Delicious/Delicious.css'
const Deliciousheading = () => {
  const heading = "Try this delicious recipe to make your day"
  const discription = "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
  return (
    <>
      <div className='delicious'>
        <h1>{heading}</h1>
        <p>{discription} </p>
      </div>
    </>
  )
}

export default Deliciousheading