import React from 'react'
import CusomerReviews from './homepage/CusomerReviews'
import HeroSection from './homepage/HeroSection'
import ProductsHomePage from './homepage/ProductsHomePage'
import { Route, Routes } from 'react-router-dom'
import Login from '../auth/Login'
import Register from '../auth/Register'

const Section = () => {
    return (
        <div>
            <Routes>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
            </Routes>

            <HeroSection></HeroSection>
            <ProductsHomePage></ProductsHomePage>
            <CusomerReviews></CusomerReviews>
        </div>
    )
}

export default Section
