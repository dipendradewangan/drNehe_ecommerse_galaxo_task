import { ADD_TO_CART } from "../constant/cartConstant";
import axios from 'axios'

export const addItemsToCart = (id, quantity)=> async(dispatch, getState)=>{
    const {data} = await axios.get(`/api/v1/product/${id}`)
    dispatch({
        type : ADD_TO_CART,
        payload : {
            product : data.product._id,
            name : data.product.name,
            price : data.product.price,
            quantity
        },
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

// import axios from "axios"

// import { ADD_TO_CART } from "../constant/cartConstant";


// export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {

//     const { data } = await axios.get(`/api/v1/product/${id}`);
//     dispatch({
//         type: ADD_TO_CART,
//         payload: {
//             product: data.product.id,
//             name: data.product.name,
//             price: data.product.price,
//             stock: data.product.stock,
//             quantity
//         },
//     });

//     localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
// }