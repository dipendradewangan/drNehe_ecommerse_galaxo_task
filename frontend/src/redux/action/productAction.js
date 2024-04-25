import axios from "axios"

import {
    ALL_PRDOUCT_FAIL,
    ALL_PRDOUCT_REQUEST,
    ALL_PRDOUCT_SUCCESS,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS
} from "../constant/productConstant"



// get all products
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


// get product details
export const getProductDetails = (productId) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/v1/product/${productId}`)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
        
    }
    catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}


// clear error

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}