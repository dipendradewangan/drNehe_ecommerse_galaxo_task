import React, { Fragment, useState, useEffect } from 'react'
import profileLogo from '../../../images/profileLogo.jpg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"

import "./profile.css"
import { clearErrors, loadUser } from '../../../redux/action/userAction'
import { UPDATE_PROFILE_RESET } from '../../../redux/constant/userContants'

const Profile = () => {
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.user)



    return (
        <Fragment>
            <div className="bg-white mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
                <h1 className='text-2xl font-bold mb-3'>My Profile</h1>
                <div className="w-full flex justify-center gap-16 mb-6">

                    <div style={{ width: "300px" }} >

                        <img src={profileLogo} alt="profile" className='w-52 h-52 rounded-full mb-4 border ' />
                        <Link to="/update-profile" className='bg-orange-200 p-1 px-5 font-bold text-gray-700 border-2 border-gray-700 transition rounded-lg hover:border-white hover:rounded-none' >Edit Profile Info</Link>

                    </div>

                    <div>
                        <h1 className='text-gray-500 font-bold text-xl'>Full Name</h1>
                        <h1 className='text-gray-700 font-semibold text-sm mb-3'>{user.user.name.toUpperCase()}</h1>

                        <h1 className='text-gray-500 font-bold text-xl'>Email</h1>
                        <h1 className='text-gray-700 font-semibold text-sm mb-3'>{user.user.email}</h1>
                        
                        <h1 className='text-gray-500 font-bold text-xl'>Joined On</h1>
                        <h1 className='text-gray-700 font-semibold text-sm mb-3'>{new Date(user.user.createdAt).getDate()}-{new Date(user.user.createdAt).getMonth() + 1}-{new Date(user.user.createdAt).getFullYear()}</h1>

                    </div>


                </div>
                <div className='flex gap-6 mb-10'>

                </div>

                <Link to="/" className='bg-black mb-3 w-96 p-1 px-5 font-bold text-white border-2 border-gray-700 transition rounded-lg text-center hover:bg-gray-600'>My Order</Link>
                <Link to="/" className='bg-black mb-3 w-96 p-1 px-5 font-bold text-white border-2 border-gray-700 transition rounded-lg text-center hover:bg-gray-600'>Change Password</Link>
            </div>
        </Fragment>
    )
}

export default Profile
