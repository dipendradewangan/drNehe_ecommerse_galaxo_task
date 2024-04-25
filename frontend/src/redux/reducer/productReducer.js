import { ALL_PRDOUCT_FAIL, ALL_PRDOUCT_REQUEST, ALL_PRDOUCT_SUCCESS, CLEAR_ERRORS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from '../constant/productConstant';

export const productReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case ALL_PRDOUCT_REQUEST:
            return {
                loading: true,
                product: []
            };
        case ALL_PRDOUCT_SUCCESS:
            return {
                laoding: false,
                product: action.payload.products,
                productsCount: action.payload.productCount
            };
        case ALL_PRDOUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };

        default:
            return state;
    }
}


export const productDetailsReducer = (state = { product: [] }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
                ...state
            };
        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            };
        case PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
} 