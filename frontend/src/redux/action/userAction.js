import { CLEAR_ERRORS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constant/userContants"

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

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}