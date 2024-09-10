import React from 'react'
import HomePage from './Pages/HomePage/HomePage'
import { Blog } from './Pages/BlogPage/Blog'
import Recipie from './Pages/Recipie/Recipie'
import Contact from './Pages/Contact/Contact'
import About from './Pages/AboutPage/About'
import Navbar from './Components/Home-Page/Navigation-bar/Navbar'
import Footer from './Components/Home-Page/Footer/Footer'
import Subscribe from './Components/Home-Page/Subscribe/Subscribe'
import Deliciousheading from './Components/Home-Page/Delicious/Deliciousheading'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Recipie' element={<Recipie/>} />

        </Routes>
        {/* <Subscribe/> */}
        <Footer/>
      </BrowserRouter>


    </>
  )
}

export default App