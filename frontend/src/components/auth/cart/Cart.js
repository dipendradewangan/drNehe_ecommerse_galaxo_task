import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cartData = useSelector(state => state.cart.cartItems)
    console.log(cartData)
    
    return (
        <div>
            {
                cartData && cartData.map((item, index) => {
                    return <CartItem key={index} item={item} />
                })
            }
        </div>
    )
}

export default Cart
