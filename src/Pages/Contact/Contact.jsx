import React from 'react'
import Subscribe from '../../Components/Home-Page/Subscribe/Subscribe'
import Resturantlist from '../../Components/Home-Page/Resturantlist/Resturantlist'
import Resturantheading from '../../Components/Home-Page/Resturantheading/Resturantheading.jsx'
import Contacttfood from '../../About-foodlist'
import '../Contact/Contact.css'
import Contact1 from '../../Components/Contact/Contact1.jsx'
const Contact = () => {
    return (
        <>
            <Contact1/>
            <Subscribe />
            <div className='contact-delicious-heading' >
            </div>
            <Resturantheading heading = 'Check out the delicious recipe'/>
            <div className='resturant-data'>
                {
                    Contacttfood.map((e) => {
                        return (
                            <Resturantlist image={e.image} name={e.name} facilitie1={e.facilitie1} facilitie2={e.facilitie2} />
                        )
                    })
                }
            </div>


        </>
    )
}

export default Contact