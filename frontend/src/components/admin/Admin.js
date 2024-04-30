import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Admin = () => {
    const { user, isAuthenticated } = useSelector((state) => state.user)
    return (
        <Fragment>
            {
                !isAuthenticated ? <Navigate to="/login" /> : (!user.user.role === "admin" && <Navigate to="/"></Navigate>)
            }
            this is admin
        </Fragment>
    )
}

export default Admin
