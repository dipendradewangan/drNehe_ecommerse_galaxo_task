import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { logout } from '../../../redux/action/userAction'

const LogOutPage = () => {
    const dispatch = useDispatch()

    const isAuthenticated = useSelector((state)=>state.user.isAuthenticated)

    useEffect(()=>{
        dispatch(logout())
    },[dispatch])

   
    return (
        <div>
            {
                isAuthenticated ? "" : <Navigate to="/" /> 
            }
           
        </div>
    )
}

export default LogOutPage
