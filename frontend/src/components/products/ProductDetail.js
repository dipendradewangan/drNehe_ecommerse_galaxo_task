import React, { useEffect, useState } from 'react'
import Header from '../Homepage/Header/Header'
import Footer from '../Homepage/Footer/Footer'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails } from '../../redux/action/productAction'
import image from '../../images/oilImage.jpg'
import { addItemsToCart } from '../../redux/action/cartActions'
const ProductDetail = () => {
    const params = useParams()
    const [quantity, setQuantity] = useState(1)
    const decreseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const increseQuantity = () => {
        if(product.stock <= quantity){
            alert(`Only ${product.stock} Quantity left in the stock`)
            return;

        }
        setQuantity(quantity + 1)
    }


    const changeQuantity = (e) => {
        setQuantity(Number(e.target.value))
    }


    const dispatch = useDispatch()

    const product = useSelector((state) => state.productDetails.product.product)
    const loading = useSelector((state) => state.productDetails.loading)
    console.log(loading)
    console.log(product)

    useEffect(() => {
        dispatch(getProductDetails(params.id))
    }, [dispatch])


    const addToCartHandler = ()=>{
        dispatch(addItemsToCart(params.id, quantity))
        alert("item added to cart")
    }

    return (
        <div>
            <Header />



            <div className="bg-white mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {
                    loading ? "this is loading " : product && (
                        <div>
                            <div className='flex justify-center items-center gap-6 border-3 p-5'>
                                <div className='w-6/12 flex justify-center items-center '>
                                    <img src={image} alt='image' className='w-full' />
                                </div>
                                <div>
                                    <div className='mb-2'>
                                        <h1 className='font-bold text-3xl'>{product.name}</h1>
                                        <h1 className='font-normal text-lg'>Product : #{product._id}</h1>
                                    </div>

                                    <div className='flex gap-1 items-center mb-2'>
                                        <h1 className='font-normal text-lg'>{product.ratings} Ratings </h1>
                                        <h1 className='font-normal text-sm'>({product.numOfReviews} review)</h1>
                                    </div>
                                    <div>
                                        <div className='flex gap-2 items-center mb-0'>
                                            <h1 className='font-bold text-xl'>₹{product.price - 1}</h1>
                                            <h1 className='font-bold text-sm text-gray-400 line-through'>₹{product.price + (product.price * 50 / 100)}</h1>
                                        </div>
                                        <div className='flex gap-2 items-center mb-3'>
                                            <h1 className='font-bold text-xl'>Quantity</h1>
                                            <div>
                                                <button className='bg-black text-white w-4 border-black border-1' onClick={() => decreseQuantity()}> - </button>
                                                <input type='text' className='border-1 border-black w-9 outline-none text-center' value={quantity} onChange={(e) => changeQuantity(e)}></input>
                                                <button className='bg-black text-white w-4 border-black border-1' onClick={() => increseQuantity()}> + </button>
                                            </div>

                                        </div>
                                        <div className='gap-2 flex mb-3'>
                                            <button className='bg-blue-700 p-1 px-3 text-white rounded-2xl hover:bg-blue-400' onClick={addToCartHandler}>Add to Cart</button>
                                            <button className='bg-green-700 p-1 px-3 text-white rounded-2xl hover:bg-green-400'>Add to Wishlist</button>
                                        </div>
                                        <div className='gap-2 flex mb-3'>
                                            <h1 className='font-bold text-xl text-black'>Status : <span className='font-bold text-green-700'>{'InStock'}</span></h1>
                                        </div>
                                    </div>
                                    <h1 className='font-bold text-2xl'>Description</h1>
                                    <h1 className='font-normal text-sm'>{product.description}</h1>
                                </div>
                            </div>


                            <div className='flex justify-center items-center gap-6 border-3 p-5'>
                                <h1 className='font-bold text-4xl'>Product Reviews</h1>
                            </div>
                        </div>
                    )
                }
                {/* <div>
                    <div className='flex justify-center items-center gap-6 border-3 p-5'>
                        <div className='w-6/12 flex justify-center items-center '>
                            <img src={image} alt='image' className='w-full' />
                        </div>
                        <div>
                            <div className='mb-2'>
                                <h1 className='font-bold text-3xl'>Name</h1>
                                <h1 className='font-normal text-lg'>Product : #{params.id}</h1>
                            </div>

                            <div className='flex gap-1 items-center mb-2'>
                                <h1 className='font-normal text-lg'>Ratings</h1>
                                <h1 className='font-normal text-sm'>(4 review)</h1>
                            </div>
                            <div>
                                <div className='flex gap-2 items-center mb-3'>
                                    <h1 className='font-bold text-xl'>₹10000</h1>
                                    <h1 className='font-bold text-sm text-gray-400 line-through'>₹10000</h1>
                                </div>
                                <div className='gap-2 flex mb-3'>
                                    <button className='bg-blue-700 p-1 px-3 text-white rounded-2xl hover:bg-blue-400'>Add to Cart</button>
                                    <button className='bg-green-700 p-1 px-3 text-white rounded-2xl hover:bg-green-400'>Add to Wishlist</button>
                                </div>
                            </div>
                            <h1 className='font-bold text-2xl'>Description</h1>
                            <h1 className='font-normal text-sm'>Description</h1>
                        </div>
                    </div>


                    <div className='flex justify-center items-center gap-6 border-3 p-5'>
                        <h1 className='font-bold text-4xl'>Product Reviews</h1>
                    </div>
                </div> */}


            </div>




            <Footer />
        </div>
    )
}

export default ProductDetail
