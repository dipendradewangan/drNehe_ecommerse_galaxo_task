import React from 'react'
import './LowerHeader.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const LowerHeader = () => {


    const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
    console.log(isAuthenticated)
    return (
        <>
            <div className='lowerHeader'>
                <div className='category-button-container'>
                    <i className="fa-solid fa-bars"></i> CATEGORIES
                    <div className='category-container'>
                        <Link className='link' to='/category/oil'>Oil</Link>
                        <Link className='link' to='/category/face-care'>Face Care</Link>
                        <Link className='link' to='/category/teech-care'>Teeth Care</Link>
                    </div>
                </div>
                <div className='search-container'>
                    <i className="fas fa-search search-icon"></i>
                    <input type='text' className='search-input' />
                    <button>Search</button>
                </div>

                {
                    isAuthenticated ? (
                        <div className='auth-container'>

                            <Link to='/logout' className='btn login-btn' >
                                <i className="fa-solid fa-right-to-bracket"></i> Logout
                            </Link >


                            <Link to='/my-wishlist' className='btn wishlist-btn'>
                                <i className="fa-solid fa-heart"></i>
                            </Link>

                            <Link to='/cart' className='btn cart-btn'>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </Link>
                        </div >
                    ) : (<div className='auth-container'>

                        <Link to='/login' className='btn login-btn' >
                            <i className="fa-solid fa-right-to-bracket"></i> Log In
                        </Link >

                        <Link to='/Register' className='btn login-btn'>
                            <i className="fa-solid fa-user-plus"></i> Register as a new user
                        </Link>
                    </div >)
                }

            </div >
        </>
    )
}

export default LowerHeader
