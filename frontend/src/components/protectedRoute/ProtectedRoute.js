import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route} from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...rest }) => {

    const { loading, isAuntenticated, user } = useSelector((state) => state.user)

    return (
        <Fragment>
            {!loading && (
                <Route
                    {...rest}
                    render={(props) => {
                        if(isAuntenticated){
                            return <Navigate to='/login'></Navigate>
                        }
                        return <Component {...props} />; 
                    }}
                />
            )}
        </Fragment>
    )
}

export default ProtectedRoute
