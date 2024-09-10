import React from 'react'
import '../Resturantlist/Resturantlist.css'
// import image from '../../../assets/Resturantimages/image1.svg'
const Resturantlist = (props) => {
  return (
    
    <>
    <div className='resturant-list'>
        <div className='food-image'>
            <img src={props.image} alt='food image'/>
        </div>
        <h1>{props.name}</h1>
        <div className='resturant-faci'>
            <p>{props. facilitie1}</p>
            <p>{props. facilitie2}</p>
        </div>
    </div>
    </>
  )
}

export default Resturantlist