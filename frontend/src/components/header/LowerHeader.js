import React from 'react'
import './LowerHeader.css'
import { Link } from 'react-router-dom'
import Login from '../auth/Login'
const LowerHeader = () => {
    return (
        <>
            <div className='lowerHeader'>
                <div className='category-button-container'>
                    <i class="fa-solid fa-bars"></i> CATEGORIES
                    
                </div>
                <div className='search-container'>
                    <i class="fas fa-search"></i>
                    <input type='text' />
                    <button>Search</button>
                </div>
                <div className='auth-container'>
                    <Link to='/login' element={<Login/>}>
                        <i class="fa-solid fa-right-to-bracket"></i> Log In
                    </Link>
                    <Link to='/Register'>
                        <i class="fa-solid fa-user-plus"></i> Register as a new user
                    </Link>
                    <button>
                        <i class="fa-solid fa-heart"></i>
                    </button>
                    <button>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default LowerHeader
