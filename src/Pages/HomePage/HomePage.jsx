import React from 'react'
import Navbar from '../../Components/Home-Page/Navigation-bar/Navbar.jsx'
import Featued from '../../Components/Home-Page/Featued-product/Featued.jsx'
import Category from '../../Components/Home-Page/Category/Category.jsx'
import Categorycard from '../../Components/Home-Page/Category-card/Categorycard.jsx'
import Resturantheading from '../../Components/Home-Page/Resturantheading/Resturantheading.jsx'
import Resturantlist from '../../Components/Home-Page/Resturantlist/Resturantlist.jsx'
import Learnmore from '../../Components/Home-Page/Learnmore/Learnmore.jsx'
import Deliciousheading from '../../Components/Home-Page/Delicious/Deliciousheading.jsx'
import Subscribe from '../../Components/Home-Page/Subscribe/Subscribe.jsx'
import Footer from '../../Components/Home-Page/Footer/Footer.jsx'
import data from '../../Data.js'
import Resturantdata from '../../Resturantdata.js'

const HomePage = () =>{
    return(
        <>
        {/* <Navbar /> */}
      <Featued />
      <Category />
      <div className='category-section'>
        {
          data.map((e) => {
            return (
              <Categorycard image={e.image} name={e.name} />

            );
          })
        }
      </div>

      <Resturantheading heading = 'Simple and testy food' description ='Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim '/>
      <div className='resturant-data'>
        {
          Resturantdata.map((e) => {
            return (
              <Resturantlist image={e.image} name={e.name} facilitie1={e.facilitie1} facilitie2={e.facilitie2} />

            );
          })
        }
      </div>
      <Learnmore />
      <Deliciousheading />

      <div className='resturant-data'>
        {
          Resturantdata.map((e) => {
            return (
              <Resturantlist image={e.image} name={e.name} facilitie1={e.facilitie1} facilitie2={e.facilitie2} />

            );
          })
        }
      </div>

      {/* <Subscribe /> */}

        </>
    )
}
export default HomePage;