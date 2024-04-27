import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'



import HomePage from './Home/HomePage'
import ProductPage from './products/ProductPage'
import ProductDetail from './products/ProductDetail'
import LoginPage from '../auth/login/LoginPage'
import LogOutPage from '../auth/login/LogOutPage'
import RegisterPage from '../auth/register/RegisterPage'
import CartPage from '../auth/cart/CartPage'
import CheckoutPage from '../auth/checkout/CheckoutPage'
import AboutPage from './about/AboutPage'
import ContactUsPage from './contact/ContectUsPage'
import BlogsPage from './blogs/BlogsPage'
import ProtectedRoute from '../protectedRoute/ProtectedRoute'
import ConfirmOrderPage from '../auth/confirmOrder/ConfirmOrderPage'


const Section = () => {
    return (
        <Fragment>

            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route exact path='/products' element={<ProductPage />} />
                <Route exact path='/product/:id' element={<ProductDetail />} />

                <Route exact path='/about-us' element={<AboutPage />} />
                <Route exact path='/contact-us' element={<ContactUsPage />} />
                <Route exact path='/blogs' element={<BlogsPage />} />

                <Route exact path='/login' element={<LoginPage />} />
                <Route exact path='/Register' element={<RegisterPage />} />

                {/* protected route */}
                <Route exact path='/logout' element={<LogOutPage />} />

                <Route exact path='/cart' element={<CartPage />} />

                <Route exact path='/checkout' element={<CheckoutPage />} />
                
                <Route exact path='/order/confirm' element={<ConfirmOrderPage />} />
            </Routes>


        </Fragment>
    )
}

export default Section
