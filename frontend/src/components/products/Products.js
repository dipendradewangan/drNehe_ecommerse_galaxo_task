import React, { useEffect } from 'react'
import Header from '../Homepage/Header/Header'
import Footer from '../Homepage/Footer/Footer'
import { useSelector, useDispatch } from "react-redux"
import { getProduct } from '../../redux/action/productAction'

const Products = () => {
    const dispatch = useDispatch()

    const data = useSelector((state)=>state)

    console.log(data)

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    return (
        <div>
            <Header />
            <div>
                <h1>Products</h1>

            </div>
            <Footer />
        </div>
    )
}

export default Products
