import React from 'react'
import './LowerHeader.css'
import { Link } from 'react-router-dom'
import logo from '../../../images/logo.png'
import './UpperHeader.css'

const UpperHeader = () => {
    return (
        <>
            <div className='upper-header'>


                
                <div className='logo-container'>
                    <Link to='/' alt='logo'>
                        <img src={logo} alt='logo' />
                    </Link>
                </div>

                <div className='menu-container'>

                    <ul className='menu-list'>
                        <li>
                            <Link to='/category/oil' className='menu-link'>Oils <i className="fa-solid fa-caret-down icon-menu"></i></Link>
                            <div className='submenu-container'>
                                <Link to='/'>Hair Oils</Link>
                                <Link to='/'>Joint Pain Oils</Link>
                            </div>
                        </li>

                        <li>
                            <Link to='/category/face-care' className='menu-link'>Face Care <i className="fa-solid fa-caret-down icon-menu"></i></Link>
                            <div className='submenu-container'>
                                <Link to='/'>Face Care</Link>
                            </div>
                        </li>
                        <li>
                            <Link to='/blogs' className='menu-link'>Blogs</Link>
                        </li>
                        <li>
                            <Link to='/about-us' className='menu-link'>About Dr. Neha's</Link>
                        </li>
                        <li>
                            <Link to='/contact-us' className='menu-link'>Reach us</Link>
                        </li>
                    </ul>
                </div>


                <div className='help-container'>
                    Need help
                    <Link to='/'>+91990712779</Link>
                </div>
            </div>
        </>
    )
}

export default UpperHeader
