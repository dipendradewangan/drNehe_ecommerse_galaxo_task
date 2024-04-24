import React, { useEffect } from 'react'
import Header from '../Homepage/Header/Header'
import Footer from '../Homepage/Footer/Footer'
import { useSelector, useDispatch } from "react-redux"
import { getProduct } from '../../redux/action/productAction'

const Products = () => {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    const data = useSelector((state) => state.product)
    const {loading, product} = useSelector((state)=>state.product)
    console.log(data)

    
    return (
        <div>
            <Header />
            <div>
                <h1>Products</h1>
                {
                    loading ? "this is loading" : product && product.map((prod,index)=><div key={index}>
                        <img src='samle image' alt="image"/>
                        <p>{prod.name}</p>
                    </div>)
                }

            </div>
            <Footer />
        </div>
    )
}

export default Products
