import { composeWithDevTools } from "redux-devtools-extension"
import { thunk } from "redux-thunk"
import { applyMiddleware, combineReducers, createStore } from "redux";
import { productDetailsReducer, productReducer } from "./reducer/productReducer";
import { userReducer } from "./reducer/userReducer";
import { cartReducer } from "./reducer/cartReducer";


let initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems") 
        ? JSON.parse(localStorage.getItem("cartItems")) 
        : [], 
    },
    shippingInfo : localStorage.getItem("shippingInfo") ? JSON.parse(localStorage.getItem("shippingInfo")) : {}
}

const reducer = combineReducers({
    product: productReducer,
    productDetails: productDetailsReducer,
    user: userReducer,
    cart: cartReducer
})

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)))


export default store;