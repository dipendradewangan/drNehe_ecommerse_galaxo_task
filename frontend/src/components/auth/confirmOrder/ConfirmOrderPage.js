import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ConfirmOrderPage = () => {
    const { isAuthenticated } = useSelector(state => state.user)
    const { cartItems, shippingInfo } = useSelector(state => state.cart)
    console.log(cartItems)
    console.log(shippingInfo)

    const Subtotal = cartItems && cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const shippintCharge = cartItems ? (Subtotal > 500 ? 0 : 200) : 0
    const discountPrice = cartItems ? (Subtotal > 1000 ? 100 : 0) : 0
    const gst = cartItems ? (Subtotal * 0.18) : 0;
    const payableAmount = cartItems ? (Subtotal + shippintCharge + gst - discountPrice) : 0;

    const tax = Subtotal * 0.18;

    const totalPrice = Subtotal + shippintCharge + tax;

    return (
        <div className="bg-white mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-center">
            {
                !isAuthenticated && <Navigate to="/"></Navigate>
            }
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-bold mb-4 text-3xl'>Ready For Order</h1>
                <div className='flex w-full justify-between gap-5'>

                    {/* shippin info`` */}
                    <div style={{ width: "300px" }}>
                        <h1 className='text-lg font-bold '>Shpping info</h1>
                        <div className='border-t-2 my-2 py-2 flex flex-col gap-2'>
                            <h1 className='font-bold'>Name : <span className='font-semibold text-gray-600'>Dipendra Kumar</span></h1>
                            <h1 className='font-bold'>Phone : <span className='font-semibold text-gray-600'>1234567890</span></h1>

                            <div className='flex gap-1'>
                                <h1 className='font-bold'>Address</h1>
                                <h1 className='font-semibold text-gray-600'> : {shippingInfo.address}, {shippingInfo.city} {shippingInfo.state},{shippingInfo.country}, {shippingInfo.pincode}</h1>
                            </div>

                        </div>
                    </div>

                    {/* order item list */}
                    <div style={{ width: "300px" }}>

                        <h1 className='text-lg font-bold'>Your Cart Items</h1>
                        <div className='border-t-2 my-2 py-2 '>
                            {cartItems && cartItems.map((item, index) => {
                                return <div key={index} className='flex gap-4 items-center justify-between mb-3'>
                                    <img src='fjs' alt={item.name} className='w-11' />
                                    <div>
                                        <h1 className='font-semibold text-lg text-wrap'>{item.name}</h1>
                                        <h1 className='font-semibold text-sm'>₹{item.price} x {item.quantity}</h1>
                                    </div>
                                    <div className='w-24'>
                                        <h1 className='font-semibold text-sm'>=  ₹{item.price * item.quantity}</h1>

                                    </div>
                                </div>
                            })}
                        </div>
                    </div>

                    {/* order summery */}
                    <div style={{ width: "300px" }}>

                        <h1 className='text-lg font-bold'>Order Summery</h1>
                        <div className='w-full'>
                            <div className='border-t-2 flex justify-between my-2 py-2'>
                                <div >
                                    <h1 className='font-semibold my-1'>Subtotal : </h1>
                                    <h1 className='font-semibold my-1'>Shipping Charges : </h1>
                                    <h1 className='font-semibold my-1'>GST :  </h1>
                                    <h1 className='font-semibold my-1'>Dicount :  </h1>
                                </div>
                                <div className='text-right'>
                                    <h1 className='font-semibold my-1 text-gray-400'>{Subtotal}</h1>
                                    <h1 className='font-semibold my-1 text-gray-400'>{shippintCharge}</h1>
                                    <h1 className='font-semibold my-1 text-gray-400'>{gst}</h1>
                                    <h1 className='font-semibold my-1 text-gray-400'> - {discountPrice}</h1>
                                </div>
                            </div>
                            <div className=' border-t'>
                                <div className='flex justify-between'>

                                    <h1 className='font-semibold my-1 text-lg'>Total:</h1>
                                    <h1 className='font-semibold my-1 text-lg'>{payableAmount}</h1>
                                </div>
                                <button className='w-full mt-3 p-2 font-bold hover:bg-yellow-600' style={{ background: "#ECD39D" }}>Order Now!</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>

    )
}

export default ConfirmOrderPage
