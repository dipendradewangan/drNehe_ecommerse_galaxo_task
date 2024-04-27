import React, { useEffect } from 'react'
import "./LoginPage.css"
import { Link, } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { clearErrors, userLogin } from '../../../redux/action/userAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Navigate } from 'react-router-dom'




const LoginPage = () => {

    const history = useNavigate()
    const dispatch = useDispatch()
    const { isAuthenticated, error, user } = useSelector((state) => state.user)
    console.log(user)

    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleLogin = ({ email, password }) => {
        dispatch(userLogin(email, password))
    }

    useEffect(() => {
        if (error) {
            dispatch(clearErrors())
        }

        if (isAuthenticated) {
            history('/')
        }
    }, [dispatch, error, history])

    return (
        <div>
            {
                isAuthenticated && <Navigate to="/"></Navigate>
            }
            {/* login box */}
            <div className="bg-white mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-center">

                <div className='border-gray-200 border-1 flex flex-col justify-center items-center p-4 login-form'>
                    <h1 className='font-bold text-2xl text-gray-800'>LOGIN</h1>
                    <h1 className='mb-4 text-gray-500'>Please Enter your Email and Password</h1>
                    <form className='flex flex-col' onSubmit={handleSubmit((data) => handleLogin(data))}>
                        {errors.email && errors.email.message}
                        <input
                            {...register("email", { required: "Enter your email" })}
                            placeholder='Enter your email'
                            type='text'
                            className='login-input outline-none'
                        />

                        {errors.password && errors.password.message}
                        <input
                            {...register("password", { required: "Enter your password" })}
                            placeholder='password'
                            type='password'
                            className='login-input outline-none'
                        />
                        <button type='submit' className='login-now-btn text-white px-3 py-2 rounded-3xl mb-3'>Login Now !</button>
                        <div className='flex justify-between w-full'>
                            <h1 className='cursor-pointer text-sm'>New User? <Link to="/Register" className='text-blue-600'>Register Now!</Link></h1>
                            <h1 className='cursor-pointer text-sm'>Forgot Password</h1>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default LoginPage
