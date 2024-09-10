import React from 'react'
import '../Category-card/Categorycard.css'
// import image from '../../../assets/Category/image 25.png'

const Categorycard = (props) => {
  return (
    <>
      <div className="category-card">
        <div className="item">
          <img src={props.image} alt="" />
          <p>{props.name}</p>
        </div>
      </div>
    </>
  )
}

export default Categorycard;