import { CLEAR_ERRORS, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCEESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, UPDATE_PROFILE_FAIL, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS } from "../constant/userContants"

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


// update profle

// 
export const updateProfile = (userData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PROFILE_REQUEST })
        const config = { headers: { "Content-Type": "multipart/form-data" } }

        const { data } = await axios.put(`/api/v1/me/update`, userData, config)
        dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success })

    }
    catch (error) {
        dispatch({ type: UPDATE_PROFILE_FAIL, payload: error.response.data })
    }
}




export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}


