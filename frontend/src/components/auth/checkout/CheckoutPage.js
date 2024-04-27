import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { saveShippingInfo } from '../../../redux/action/cartActions'

const CheckoutPage = () => {
    const history = useNavigate()
    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    const dispatch = useDispatch()
    const userData = useSelector(state => state.user)

    const shippingDetailSubmit = (data) => {
        console.log(data)
        dispatch(saveShippingInfo(data))

        history("/order/confirm")
    }
    return (
        <div>
            {
                userData && !userData.isAuthenticated && (<Navigate to="/"></Navigate>)
            }

            <div className="bg-white mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between">

                <div className='flex justify-between w-full'>
                    <div>
                        <h1>Checkout Details</h1>
                    </div>
                    <div>

                        <h1 className='font-bold text-xl mb-3'>Checkout Details</h1>
                        <form className='flex flex-col gap-2' onSubmit={handleSubmit((data) => shippingDetailSubmit(data))}>
                            <input
                                {...register("name", { required: ["Enter Name"] })}
                                className='border px-2 py-1  outline-none'
                                type='text'
                                id='address'
                                placeholder='Name'
                            />
                            {errors.name && `${errors.name.message}`}
                            <input
                                {...register("address", { required: ["Enter Address"] })}
                                className='border px-2 py-1  outline-none'
                                type='text'
                                id='address'
                                placeholder='Address'
                            />
                            {errors.address && `${errors.address.message}`}
                            <input
                                {...register("city", { required: ["Enter City"] })}
                                className='border px-2 py-1  outline-none'
                                type='text'
                                id='city'
                                placeholder='City'
                            />
                            {errors.city && `${errors.city.message}`}
                            <input
                                {...register("pincode", { required: ["Enter pincode"] })}
                                className='border px-2 py-1  outline-none'
                                type='text'
                                id='pincode'
                                placeholder='pincode'
                            />
                            {errors.pincode && `${errors.pincode.message}`}
                            <input
                                {...register("phone", { required: ["Enter Phone Number"] })}
                                className='border px-2 py-1 outline-none'
                                type='text'
                                id='phoneNumber'
                                placeholder='Phone Number'
                            />
                            {errors.phone && `${errors.phone.message}`}
                            <input
                                {...register("country", { required: ["Enter Country Name"] })}
                                className='border px-2 py-1 outline-none'
                                type='text'
                                id='country'
                                placeholder='Country'
                            />
                            {errors.country && `${errors.country.message}`}
                            <input
                                {...register("state", { required: ["Enter State Name"] })}
                                className='border px-2 py-1  outline-none'
                                type='text'
                                id='state'
                                placeholder='State'
                            />
                            {errors.state && `${errors.state.message}`}
                            <input
                                {...register("district", { required: ["Enter district Name"] })}
                                className='border px-2 py-1  outline-none'
                                type='text'
                                id='district'
                                placeholder='Distict'
                            />
                            {errors.district && `${errors.district.message}`}
                            <button style={{ background: "#ECD39D" }} className='font-bold p-2 rounded-xl'>Add Shipping Info</button>
                        </form>
                    </div>
                    <div>
                        <h1> Chackout Item List</h1>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default CheckoutPage
