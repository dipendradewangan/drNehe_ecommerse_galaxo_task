import React, { useEffect, useState } from 'react'
import Header from '../../Homepage/Header/Header'
import Footer from '../../Homepage/Footer/Footer'
import Cart from './Cart'
import { useDispatch, useSelector } from 'react-redux'


const CartPage = () => {

    const cartItems = useSelector(state=>state.cart.cartItems)
    
    return (
        <div>
            <Header />


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
                    <button className="text-sm py-2 px-4 bg-green-700 text-white  rounded-xl hover:bg-green-500">Checkout</button>
                </div>

            </div>


            <Footer />
        </div>
    )
}

export default CartPage
