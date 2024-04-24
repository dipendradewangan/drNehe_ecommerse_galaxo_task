import axios from "axios"

import { ALL_PRDOUCT_FAIL, ALL_PRDOUCT_REQUEST, ALL_PRDOUCT_SUCCESS, CLEAR_ERRORS } from "../constant/productConstant"

export const getProduct = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRDOUCT_REQUEST })

        const { data } = await axios.get('/api/v1/products')

        dispatch({
            type: ALL_PRDOUCT_SUCCESS,
            payload: data
        })

    }
    catch (error) {
        dispatch({
            type: ALL_PRDOUCT_FAIL,
            payload: error.response.data.message
        })
    }
}


export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}


// try {
//     dispatch({ type: ALL_PRDOUCT_REQUEST })
//     const { data } = await axios.get('/api/v1/products')
//     dispatch({
//         type: ALL_PRDOUCT_SUCCESS,
//         payload: data
//     })

// }
// catch (error) {
//     dispatch({
//         type: ALL_PRDOUCT_FAIL,
//         payload: error.response.data.message
//     })
// }