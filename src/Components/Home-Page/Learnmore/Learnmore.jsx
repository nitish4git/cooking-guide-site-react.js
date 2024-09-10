import React from 'react'
import '../Learnmore/Learnmore.css'
import chiefImage from '../../../assets/chef.png'
const Learnmore = () => {
    return (
        <>
            <div className='learnmore'>
                <div className='learnmore-left'>
                    <h1>Everyone can be a
                        chef in their own kitchen</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    <a href="#"><button>Learn more</button></a>
                </div>
                <div className='learnmore-right'>
                    <img src={chiefImage} alt='chief image' />
                </div>
            </div>
        </>
    )
}

export default Learnmore