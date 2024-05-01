import React, { Fragment, useState } from 'react'
import profileLogo from '../../../images/profileLogo.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../../../redux/action/userAction'
import { Navigate } from 'react-router-dom'

const UpdateProfile = () => {
    const dispatch = useDispatch()
    const { isAuthenticated } = useSelector((state) => state.user)
    const data = useSelector((state) => state.user)
    console.log(data)
    const [avatarPreview, setAvatarPreview] = useState(profileLogo)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [avatar, setAvatar] = useState()

    const updateProfileSubmit = (e) => {
        e.preventDefault()
        const myForm = new FormData();
        myForm.set("name", name)
        myForm.set("email", email)
        myForm.set("avatar", avatar)
        dispatch(updateProfile())
    }

    const updateProfileDataChange = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatar(reader.result)
                setAvatarPreview(reader.result)
            }
        }

        reader.readAsDataURL(e.target.files[0]);
    }


    return (
        <Fragment>
            {
                !isAuthenticated && <Navigate to='/'></Navigate>
            }
            <div className="bg-white mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
                <div className='mb-3'>
                    <img src={avatarPreview} alt='profile' className="w-72" />
                </div>

                <div>
                    <form className='flex flex-col' onSubmit={updateProfileSubmit}>
                        <label for="profile-pic-input-box" className='font-semibold text-xl mb-2'>Change Profile Picture</label>
                        <div id='profile-pic-input-box' className='relative w-56 flex justify-center items-center h-10 border-2 mb-3' >
                            <labe for='profile-pic-input'>Profile Picture</labe>
                            <input id='profile-pic-input' type='file' className='border-2 p-2 absolute left-0 top-0 w-full h-full opacity-0' onChange={updateProfileDataChange} />
                        </div>
                        <label for="name-input" className='font-semibold text-xl mb-2'>Name</label>
                        <input id='name-input' type='text' className='w-56 flex justify-center items-center h-10 border-2 p-3 mb-3' name="name" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
                        <label for="email-input" className='font-semibold text-xl mb-2'>Email</label>
                        <input id='email-input' type='text' className='w-56 flex justify-center items-center h-10 border-2 p-3 mb-4' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.email)} />

                        <button type='submit' className='w-56 flex justify-center items-center h-10  p-3 bg-orange-200 font-bold'>Save Profile</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default UpdateProfile
