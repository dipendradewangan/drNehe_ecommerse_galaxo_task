import React from 'react'
import './LowerHeader.css'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
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
                        <li className='relative oils-menu'>
                            <Link to='/category/oil' className='menu-link'>Oils <i className="fa-solid fa-caret-down icon-menu"></i></Link>
                            <div className='oils-submenu submenu-container absolute  flex-col bg-black font-sans text-white font-normal top-12 left-3 w-32 hidden z-10 '>
                                <Link to='/' className='border-b border-white px-3 py-1'>Hair Oils</Link>
                                <Link to='/' className='border-b border-white px-3 py-1'>Joint Pain Oils</Link>
                            </div>
                        </li>
                        <li>
                            <Link to='/products' className='menu-link'>All Products<i className="fa-solid fa-caret-down icon-menu"></i></Link>
                        </li>
                        <li className='relative facecare-menu'>
                            <Link to='/category/face-care' className='menu-link'>Face Care <i className="fa-solid fa-caret-down icon-menu"></i></Link>
                            <div className='facecare-submenu submenu-container absolute flex-col font-sans text-white font-normal top-12 left-3 w-32 z-10 hidden'>
                                <Link to='/' className='border-b border-white px-3 py-1 bg-black'>Face Care</Link>
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
