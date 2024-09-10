import React from 'react'
import '../Footer/Footer.css'
import logo from '../../../assets/Navbar/logo.png'
import { FaInstagram , FaFacebook , FaTwitter} from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-left'>
                    <img src={logo} alt='logo' />
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
                </div>
                <div className='footer-right'>
                    <ul>
                        <li>Recipes</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>About us</li>
                    </ul>
                </div>
                
            </div>
            <div className='footer-line'>
                </div>
            <div className='footer-copyright'>
                <p>Made with ❤️. By Developer Nitish</p>
                <ul>
                    <li><FaInstagram /></li>
                    <li><FaFacebook /></li>
                    <li><FaTwitter /></li>
                </ul>
            </div>
        </>
    )
}

export default Footer