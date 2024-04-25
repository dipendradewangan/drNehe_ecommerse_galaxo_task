import React, { useEffect } from "react"
import { getProduct } from "../../redux/action/productAction"
import { useDispatch, useSelector } from "react-redux"
import image from "../../images/oilImage.jpg"
import { Link } from "react-router-dom"


const Products = () => {

    const dispatch = useDispatch()

    const data = useSelector((state) => state)
    const { loading, product } = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])


    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {loading ? "this is loading " : product && product.map((prod, index) => (
                        <Link to={`/product/${prod._id}`} key={index}>

                            <div className="group relative cursor-pointer">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        src={prod.images.url === 'sample url' ? image : prod.images.url}
                                        alt={prod.imageAlt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href={prod.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {prod.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{prod.color}</p>
                                    </div>

                                    <p className="text-sm font-medium text-gray-900">{prod.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Products
