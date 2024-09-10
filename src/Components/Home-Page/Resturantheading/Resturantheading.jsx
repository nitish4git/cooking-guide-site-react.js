import React from 'react'
import '../Resturantheading/Resturantheading.css'
const Resturantheading = (props) => {
  return (
    <>
        <div className='heading'>
            <h1>{props.heading}</h1>
            <p>{props.description}</p>
        </div>
    </>
  )
}

export default Resturantheading