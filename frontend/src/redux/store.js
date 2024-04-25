import {composeWithDevTools} from "redux-devtools-extension"
import {thunk} from "redux-thunk"
import { applyMiddleware, combineReducers, createStore } from "redux";
import { productDetailsReducer, productReducer } from "./reducer/productReducer";


let initialState = {}

const reducer = combineReducers({
    product : productReducer,
    productDetails : productDetailsReducer,
})

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)))


export default store;