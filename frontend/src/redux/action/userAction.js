import { CLEAR_ERRORS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../constant/userContants"

import axios from "axios"

export const userLogin = (email, password) => {
    return async (dispatch) => {
        console.log(email, password)
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


export const registerUser = (name, email, password) => async (dispatch) => {
    console.log(name, email,  password)
    try {
        dispatch({ type: REGISTER_USER_REQUEST })
        const config = { headers: { "Content-Type": "application/json" } }

        const { data } = await axios.post(`/api/v1/register`, { name, email,  password }, config)
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data})

    }
    catch (error) { 
        dispatch({ type: REGISTER_USER_FAIL, payload: error.response.data })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}