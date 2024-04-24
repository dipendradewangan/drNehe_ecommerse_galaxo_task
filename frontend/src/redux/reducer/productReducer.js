import {ALL_PRDOUCT_FAIL, ALL_PRDOUCT_REQUEST, ALL_PRDOUCT_SUCCESS, CLEAR_ERRORS} from '../constant/productConstant';

export const productReducer = (state = { products: [] }, action) => {
    switch(action.type){
        case ALL_PRDOUCT_REQUEST:
            return {
                loading : true,
                product : []
            };
        case ALL_PRDOUCT_SUCCESS:
            return {
                laoding : false,
                product : action.payload.products,
                productsCount : action.payload.productCount
            };
        case ALL_PRDOUCT_FAIL:
            return {
                loading : false,
                error : action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error : null
            };
        default: 
            return state;
    }
}