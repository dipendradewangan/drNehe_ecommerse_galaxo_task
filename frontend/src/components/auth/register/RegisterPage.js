import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Header from '../../Homepage/Header/Header'

import Footer from '../../Homepage/Footer/Footer'
import { Link } from 'react-router-dom'
const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [registerData, setRegisteData] = useState({})
    const resiterSubmit = (data) => {
        console.log(data)
        if(data.password === data.confirmPassword){
            setRegisteData(data)
            
        }
    }
    console.log(registerData)

    
    return (
        <div>
            <Header />

            {/* register box */}
            <div className="bg-white mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-center">

                <div className='border-gray-200 border-1 flex flex-col justify-center items-center p-4 login-form'>
                    <h1 className='font-bold text-2xl mb-3 text-gray-800'>Register </h1>
                    <form className='registerForm flex flex-col' onSubmit={handleSubmit((data)=>resiterSubmit(data))} >

                        {errors.name && `${errors.name.message}`}
                        <input
                            {...register("name", { required: ["Enter your full name"] })}
                            placeholder='full name'
                            type='text'
                            className='login-input outline-none'
                        />

                        {errors.email && `${errors.email.message}`}
                        <input
                            {...register("email", { required: "Enter your email" })}
                            placeholder='Enter Your Email'
                            type='text'
                            className='login-input outline-none'
                        />

                        {errors.phone && `${errors.phone.message}`}
                        <input
                            {...register("phone", { required: "Enter your Mobile Number" })}
                            placeholder='Enter Your Mobile'
                            type='text'
                            className='login-input outline-none'
                        />


                        {errors.password && `${errors.password.message}`}
                        <input
                            {...register("password", { required: "Enter your password" })}
                            placeholder='password'
                            type='password'
                            className='login-input outline-none'
                        />


                        {errors.confirmPassword && `${errors.confirmPassword.message}`}
                        <input
                            {...register("confirmPassword", { required: "Enter your cofirm password" })}
                            placeholder='Confim Password'
                            type='password'
                            className='login-input outline-none'
                        />


                        <button className='login-now-btn text-white px-3 py-2 rounded-3xl mb-3' type='submit'>Register Now !</button>
                        <div className='flex justify-center w-full'>
                            <h1 className='cursor-pointer text-sm'>Allready Registered? <Link className='text-blue-500' to="/Login">Login Now!</Link></h1>

                        </div>
                    </form>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default RegisterPage
