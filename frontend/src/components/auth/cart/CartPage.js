import React, { Fragment, useEffect, useState } from 'react'
import Cart from './Cart'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'


const CartPage = () => {

    const cartItems = useSelector(state=>state.cart.cartItems)
    const userData = useSelector(state=>state.user)

    
    return (
        <Fragment>
            {
                userData && !userData.isAuthenticated && (<Navigate to="/"></Navigate>)
            }
            
            <div className="bg-white mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between">
                <Cart/>
                <div className='w-72 px-4'>
                    <h1 className="text-2xl font-bold">Order Summary</h1>
                    <div className="flex justify-between mt-4 flex-col mb-3">
                        <h5>
                            {`Total Price : ${cartItems.reduce((acc, item)=> acc + item.price * item.quantity,0)}`}
                        </h5>
                        <h5>
                            Discount : 100
                        </h5>
                        <h5>
                            Tax : 100
                        </h5>
                        <h5>
                            Shipping : 100
                        </h5>
                        <h1>
                            Gross Total : 1000
                        </h1>
                    </div>
                    <Link to="/checkout" className="text-sm py-2 px-4 bg-green-700 text-white  rounded-xl hover:bg-green-500">Checkout</Link>
                </div>

            </div>            
        </Fragment>
    )
}

export default CartPage
