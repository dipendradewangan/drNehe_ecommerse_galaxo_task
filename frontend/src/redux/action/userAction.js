import { ADD_SHIPPING_DETAILS, ADD_SHIPPING_DETAILS_REQUEST, CLEAR_ERRORS, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCEESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../constant/userContants"

import axios from "axios"

export const userLogin = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOGIN_REQUEST })
            const config = { heades: { "Content-Type": "applicatiion/json" } };
            const { data } = await axios.post(
                `/api/v1/login`,
                { email, password },
                config
            )
            dispatch({ type: LOGIN_SUCCESS, payload: data })
        }
        catch (error) {
            dispatch({ type: LOGIN_FAIL, payload: error.response.data.message })
        }
    }
}

// regiser user
export const registerUser = (name, email, password, phone) => async (dispatch) => {
    console.log(name, email, password)
    try {
        dispatch({ type: REGISTER_USER_REQUEST })
        const config = { headers: { "Content-Type": "application/json" } }

        const { data } = await axios.post(`/api/v1/register`, { name, email, password }, config)
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data })

    }
    catch (error) {
        dispatch({ type: REGISTER_USER_FAIL, payload: error.response.data })
    }
}


// load user
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST })
        const { data } = await axios.get(`/api/v1/me`)
        dispatch({ type: LOAD_USER_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message })
    }
}


// logout 
export const logout = () => async (dispatch) => {
    try {
        await axios.get(`/api/v1/logout`);
        dispatch({ type: LOGOUT_SUCEESS })
    }
    catch (error) {
        dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message })
    }
}


// add shipping details
export const addShippingDetails = (shippingData, userData) => async (dispatch) => {
    console.log(shippingData)
    console.log(userData)
    const config = { headers: { "Content-Type": "application/json" } }
    const {data} = await axios.put('/api/v1/me/update', config, shippingData)
    dispatch({ type: ADD_SHIPPING_DETAILS, payload: data })
}


export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}


