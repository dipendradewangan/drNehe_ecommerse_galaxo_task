import React, { useEffect } from 'react'

import image from "../../../images/oilImage.jpg"

import './ProductHomePage.css'
import bannerImage from '../../../images/bannerImage.jpeg'
import catelogImg1 from '../../../images/catelog1.jpg'
import catelogImg2 from '../../../images/catelog2.jpg'
import catelogImg3 from '../../../images/catelog3.jpg'
import catelogImg4 from '../../../images/catelog4.jpg'
import centerHairOil from '../../../images/center-hair-oil.png'
import { getProduct } from "../../../redux/action/productAction"

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const ProductsHomePage = () => {

    const dispatch = useDispatch()

    const { loading, product } = useSelector((state) => state.product)

    console.log(product)

    
    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])





    return (
        <>
            <div className='product-home-page'>
                {/* featured product start */}
                <div className='featured-category-container'>
                    <h1><span style={{ color: '#ECD39C' }}>Featured</span> Categories</h1>
                    <div className='container'>
                        <button>prev</button>
                        <div className='featured-caterogy-product-list-container'>

                            {/* all featured products list */}
                            {
                                featuredCategories.map((prod, index) =>
                                    <div key={index} className='featured-category-product'>
                                        <div className='product-image-container'>
                                            <img className={image} alt='product' />
                                        </div>
                                        <p className='product-name'>{prod.name}</p>
                                    </div>
                                )
                            }
                        </div>
                        <button>next</button>
                    </div>
                </div>


                {/* all catelog */}
                <div className='catelog-container'>
                    <div className='company-product-catelog-container'>

                        {/* upper catelog */}
                        <div className='upper-catelog-container'>
                            <div className='left-upper-coteglog'>
                                <h3 style={{ color: "#8A8A8B" }}>You already love our products</h3>
                                <h3 style={{ color: "#111111" }}>Experience our Signature products</h3>
                                <div className='underline'></div>
                                <p style={{ fontFamily: 'Calibri' }}>Wondering then how you will make a choice among the spectrum available? Most of our products are purely natural in ingredient, so you can as well check for your favorite ingredient combination. If not sure, we are still here for you. We can help narrow down your options, together with you.</p>

                                <div className='discover-now-btn'>
                                    Discover Now <i className="fa-solid fa-arrow-right"></i>
                                </div>

                            </div>
                            <div className='right-upper-coteglog'>
                                <div className='catelog-images-box catelog-images-box1'>
                                    <img src={catelogImg1} alt='catelog-1' />
                                    <img src={catelogImg2} alt='catelog-2' />
                                </div>
                                <div className='catelog-images-box catelog-images-box2'>
                                    <img src={catelogImg3} alt='catelog-3' />
                                    <img src={catelogImg4} alt='catelog-4' />
                                </div>
                            </div>
                        </div>

                        {/* middle catelog */}
                        <div className='company-info-catelog-container'>
                            <h1>A fearless, original & revolutionary all-round care company</h1>
                            <h1>serving Natural & healthy products</h1>
                        </div>

                        {/* lower catelog */}
                        <div className='lower-catelog-container'>

                            <div className='lower-catelog-col lower-catelog-col-1'>
                                <div className='lower-catelog-col-box-1'>
                                    <p className='heading'>Best In Class</p>
                                </div>
                                <div className='lower-catelog-col-box-2'>
                                    <p className='para'>Our premium products are prepared solely from fresh and natural handpicked elements.</p>
                                    <p className='heading'>100% Authentic</p>
                                </div>
                                <div className='lower-catelog-col-box-3'>
                                    <p className='para'>Dr. Neha's Products won the award for best skin processing company in a business fair.</p>
                                </div>

                            </div>
                            <div className='lower-catelog-col lower-catelog-col-2'>
                                <img src={centerHairOil} alt='center-hair-oil' />
                            </div>
                            <div className='lower-catelog-col lower-catelog-col-3'>
                                <div className='lower-catelog-col-box-1'>
                                    <p className='heading'>Thoughtfully Designed</p>
                                </div>
                                <div className='lower-catelog-col-box-2'>
                                    <p className='para'>Focusing primarily on supporting consumers in providing best and high-quality products.</p>
                                    <p className='heading'>ISO Approved</p>
                                </div>
                                <div className='lower-catelog-col-box-3'>
                                    <p className='para'>Dr. Neha's Products are approved by International Organization for Standardization.</p>
                                </div>

                            </div>

                        </div>

                    </div>
                    <img src={bannerImage} alt='banner' style={{ width: '100%' }} />
                </div>


                {/* top selling start */}
                <div className='top-selling-container'>
                    <h1><span style={{ color: '#ECD39C' }}>Top</span> Selling</h1>
                    <div className='top-sellling-products-container'>
                        <button className='btn-prev'>
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <div className='container'>

                            {/* all product list */}


                            {/* sample */}
                            {
                                topSellingProducts.map((prod, index) => (
                                    <div key={index} className='product-main-box'>
                                        <div className='product-img-box'>
                                            <div className='btns-cart-wishlist'>
                                                <button>
                                                    <i className="fa-regular fa-heart"></i>
                                                </button>
                                                <button>
                                                    <i className="fas fa-shopping-cart"></i>
                                                </button>
                                            </div>
                                            <img className='product-img' src={image} alt='product' />
                                        </div>
                                        <p className='product-name'>Dr. Neha's Teeth Care</p>
                                        <div className='product-price'>
                                            <p className='actual-price'>
                                                <i className="fa-solid fa-indian-rupee-sign"></i> {12345}
                                            </p>
                                            <p className='cancel-price'>
                                                <i className="fa-solid fa-indian-rupee-sign"></i> {12345}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className='product-main-box'>
                                <div className='product-img-box'>
                                    <div className='btns-cart-wishlist'>
                                        <button>
                                            <i className="fa-regular fa-heart"></i>
                                        </button>
                                        <button>
                                            <i className="fas fa-shopping-cart"></i>
                                        </button>
                                    </div>
                                    <img className='product-img' src='https://www.zeldadungeon.net/wiki/images/thumb/f/f5/Link_-_TotK_key_art.png/400px-Link_-_TotK_key_art.png' alt='product' />
                                </div>
                                <p className='product-name'>Dr. Neha's Teeth Care</p>
                                <div className='product-price'>
                                    <p className='actual-price'>
                                        <i className="fa-solid fa-indian-rupee-sign"></i> {12345}
                                    </p>
                                    <p className='cancel-price'>
                                        <i className="fa-solid fa-indian-rupee-sign"></i> {12345}
                                    </p>
                                </div>
                            </div>


                        </div>

                        <button className='btn-next'>
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>

                    </div>
                </div>

                {/* trending , recommend, featured products */}
                <div className='manytype-products-container'>



                    {/* trending products */}
                    <div className='trandingProdBox'>
                        <h1 className='heading'>Trending Products</h1>
                        <div className='all-trending-product-box '>

                            {
                                loading ? "this is loading" : product && product.map((prod, index) => (
                                    <Link to={`/product/${prod._id}`} key={index} className='productBox'>
                                        <div className='imageBox'>
                                            {/* <img src={prod.image.url === "sample url" ? image : prod.image.url} alt={prod.image.url} /> */}
                                            <img src={prod.image.url} alt={prod.image.url} />
                                            
                                        </div>
                                        <div className='productInfoBox'>
                                            <p className='productName'>
                                                {prod.name}
                                            </p>
                                            <div className='priceBox'>
                                                <p className='actual-price f-5'>
                                                    <i className="fa-solid fa-indian-rupee-sign fs-5"></i> {prod.price}
                                                </p>
                                                <p className='cancel-price'>
                                                    <i className="fa-solid fa-indian-rupee-sign fs-7"></i> {300}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>

                                ))
                            }

                        </div>


                    </div>
                    {/* recommended products */}
                    <div>
                        <h1 className='heading'>Recommend Products</h1>
                        <div className='all-trending-product-box '>

                            {
                                loading ? "this is loading" : product && product.map((prod, index) => (
                                    <Link to={`/product/${prod._id}`} key={index} className='productBox'>
                                        <div className='imageBox'>
                                            {/* <img src={prod.image.url === "sample url" ? image : prod.image.url} alt={prod.image.url} /> */}
                                            <img src={prod.image.url} alt={prod.name} />
                                        </div>
                                        <div className='productInfoBox'>
                                            <p className='productName'>
                                                {prod.name}
                                            </p>
                                            <div className='priceBox'>
                                                <p className='actual-price f-5'>
                                                    <i className="fa-solid fa-indian-rupee-sign fs-5"></i> {prod.price}
                                                </p>
                                                <p className='cancel-price'>
                                                    <i className="fa-solid fa-indian-rupee-sign fs-7"></i> {300}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>

                                ))
                            }
                        </div>

                    </div>
                    {/* featured products */}
                    <div>
                        <h1 className='heading'>Featured Products</h1>
                        <div className='all-trending-product-box '>

                            {
                                loading ? "this is loading" : product && product.map((prod, index) => (
                                    <Link to={`/product/${prod._id}`} key={index} className='productBox'>
                                        <div className='imageBox'>
                                            {/* <img src={prod.image.url === "sample url" ? image : prod.image.url} alt={prod.image.url} /> */}
                                            <img src={prod.image.url} alt={prod.image.url} />
                                        </div>
                                        <div className='productInfoBox'>
                                            <p className='productName'>
                                                {prod.name}
                                            </p>
                                            <div className='priceBox'>
                                                <p className='actual-price f-5'>
                                                    <i className="fa-solid fa-indian-rupee-sign fs-5"></i> {prod.price}
                                                </p>
                                                <p className='cancel-price'>
                                                    <i className="fa-solid fa-indian-rupee-sign fs-7"></i> {300}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>

                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductsHomePage









const featuredCategories = [
    {
        name: 'Hair Oil',
        images: "https://media.gettyimages.com/id/155148827/photo/massage-oil-bottles-with-lemons-and-olive-branch.jpg?s=612x612&w=0&k=20&c=ZVKAFqRDpBI-l1QvGQsfS-norS-xtCP0ezsq9iEGeGw="
    },
    {
        name: 'Hair Oil',
        url: "https://cdn.britannica.com/55/157155-050-D07F5610/Containers-olive-oil.jpg"
    },
    {
        name: 'Hair Oil',
        url: "https://www.google.com/imgres?q=hair%20oil&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71FlO3G%2B%2BcL._AC_UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FDabur-Amla-Healthy-Strong-450ml%2Fdp%2FB013UPR9IC&docid=NhuWVkOPG3T5tM&tbnid=R0g3m1USA3knuM&vet=12ahUKEwj7u-j0iryFAxWFcGwGHVA4A8QQM3oECHUQAA..i&w=979&h=1000&hcb=2&ved=2ahUKEwj7u-j0iryFAxWFcGwGHVA4A8QQM3oECHUQAA"
    },
    {
        name: 'Hair Oil',
        url: "https://www.google.com/imgres?q=hair%20oil&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71FlO3G%2B%2BcL._AC_UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FDabur-Amla-Healthy-Strong-450ml%2Fdp%2FB013UPR9IC&docid=NhuWVkOPG3T5tM&tbnid=R0g3m1USA3knuM&vet=12ahUKEwj7u-j0iryFAxWFcGwGHVA4A8QQM3oECHUQAA..i&w=979&h=1000&hcb=2&ved=2ahUKEwj7u-j0iryFAxWFcGwGHVA4A8QQM3oECHUQAA"
    },
    {
        name: 'Hair Oil',
        url: "https://www.google.com/imgres?q=hair%20oil&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71FlO3G%2B%2BcL._AC_UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FDabur-Amla-Healthy-Strong-450ml%2Fdp%2FB013UPR9IC&docid=NhuWVkOPG3T5tM&tbnid=R0g3m1USA3knuM&vet=12ahUKEwj7u-j0iryFAxWFcGwGHVA4A8QQM3oECHUQAA..i&w=979&h=1000&hcb=2&ved=2ahUKEwj7u-j0iryFAxWFcGwGHVA4A8QQM3oECHUQAA"
    },
    {
        name: 'Hair Oil',
        url: "https://www.google.com/imgres?q=hair%20oil&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71FlO3G%2B%2BcL._AC_UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FDabur-Amla-Healthy-Strong-450ml%2Fdp%2FB013UPR9IC&docid=NhuWVkOPG3T5tM&tbnid=R0g3m1USA3knuM&vet=12ahUKEwj7u-j0iryFAxWFcGwGHVA4A8QQM3oECHUQAA..i&w=979&h=1000&hcb=2&ved=2ahUKEwj7u-j0iryFAxWFcGwGHVA4A8QQM3oECHUQAA"
    },
    {
        name: 'Hair Oil',
        url: "https://www.google.com/imgres?q=hair%20oil&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71FlO3G%2B%2BcL._AC_UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FDabur-Amla-Healthy-Strong-450ml%2Fdp%2FB013UPR9IC&docid=NhuWVkOPG3T5tM&tbnid=R0g3m1USA3knuM&vet=12ahUKEwj7u-j0iryFAxWFcGwGHVA4A8QQM3oECHUQAA..i&w=979&h=1000&hcb=2&ved=2ahUKEwj7u-j0iryFAxWFcGwGHVA4A8QQM3oECHUQAA"
    },

]


const topSellingProducts = [
    {
        name: "Dr. Neha's Teeth Care",
        image: "https://cdn.britannica.com/55/157155-050-D07F5610/Containers-olive-oil.jpg",
        actualPrice: "200",
        cancelPrice: "150"
    },
    {
        name: "Dr. Neha's Teeth Care",
        image: "https://cdn.britannica.com/55/157155-050-D07F5610/Containers-olive-oil.jpg",
        actualPrice: "200",
        cancelPrice: "150"
    },
    {
        name: "Dr. Neha's Teeth Care",
        image: "https://cdn.britannica.com/55/157155-050-D07F5610/Containers-olive-oil.jpg",
        actualPrice: "200",
        cancelPrice: "150"
    },
    {
        name: "Dr. Neha's Teeth Care",
        image: "https://cdn.britannica.com/55/157155-050-D07F5610/Containers-olive-oil.jpg",
        actualPrice: "200",
        cancelPrice: "150"
    },
    {
        name: "Dr. Neha's Teeth Care",
        image: "https://cdn.britannica.com/55/157155-050-D07F5610/Containers-olive-oil.jpg",
        actualPrice: "200",
        cancelPrice: "150"
    },
]

// const TrendingProducts = [
//     {
//         name: "Dr. Neha's Teeth Care",
//         image: "https://cdn.britannica.com/55/157155-050-D07F5610/Containers-olive-oil.jpg",
//         actualPrice: "200",
//         cancelPrice: "150"
//     },
//     {
//         name: "Dr. Neha's Teeth Care",
//         image: "https://media.istockphoto.com/id/1490062930/photo/soy-oil-bottle-and-dried-soybeans.webp?b=1&s=170667a&w=0&k=20&c=_FIGeSXowj8RzmTmn3t1wY8FbOy0NhPVGNIQcnBZ_kw=",
//         actualPrice: "200",
//         cancelPrice: "150"
//     },
//     {
//         name: "Dr. Neha's Teeth Care",
//         image: "https://media.gettyimages.com/id/1301011483/photo/mustard-seed-oil.jpg?s=612x612&w=0&k=20&c=iEgjwAVEQRdSMHMuLJ5XhydFa09UCm_odS2G84QTVck=",
//         actualPrice: "200",
//         cancelPrice: "150"
//     },
//     {
//         name: "Dr. Neha's Teeth Care",
//         image: "https://media.gettyimages.com/id/155148827/photo/massage-oil-bottles-with-lemons-and-olive-branch.jpg?s=612x612&w=0&k=20&c=ZVKAFqRDpBI-l1QvGQsfS-norS-xtCP0ezsq9iEGeGw=",
//         actualPrice: "200",
//         cancelPrice: "150"
//     },
// ]

// const RecommendedProducts = [
//     {
//         name: "Dr. Neha's Teeth Care",
//         image: "https://cdn.britannica.com/55/157155-050-D07F5610/Containers-olive-oil.jpg",
//         actualPrice: "200",
//         cancelPrice: "150"
//     },
//     {
//         name: "Dr. Neha's Teeth Care",
//         image: "https://media.gettyimages.com/id/155148827/photo/massage-oil-bottles-with-lemons-and-olive-branch.jpg?s=612x612&w=0&k=20&c=ZVKAFqRDpBI-l1QvGQsfS-norS-xtCP0ezsq9iEGeGw=",
//         actualPrice: "200",
//         cancelPrice: "150"
//     },
//     {
//         name: "Dr. Neha's Teeth Care",
//         image: "https://www.zeldadungeon.net/wiki/images/thumb/f/f5/Link_-_TotK_key_art.png/400px-Link_-_TotK_key_art.png",
//         actualPrice: "200",
//         cancelPrice: "150"
//     },
//     {
//         name: "Dr. Neha's Teeth Care",
//         image: "https://www.zeldadungeon.net/wiki/images/thumb/f/f5/Link_-_TotK_key_art.png/400px-Link_-_TotK_key_art.png",
//         actualPrice: "200",
//         cancelPrice: "150"
//     },
// ]

// const featuredProducts = [
//     {
//         name: "Dr. Neha's Teeth Care",
//         image: "https://www.zeldadungeon.net/wiki/images/thumb/f/f5/Link_-_TotK_key_art.png/400px-Link_-_TotK_key_art.png",
//         actualPrice: "200",
//         cancelPrice: "150"
//     },
//     {
//         name: "Dr. Neha's Teeth Care",
//         image: "https://www.zeldadungeon.net/wiki/images/thumb/f/f5/Link_-_TotK_key_art.png/400px-Link_-_TotK_key_art.png",
//         actualPrice: "200",
//         cancelPrice: "150"
//     },
//     {
//         name: "Dr. Neha's Teeth Care",
//         image: "https://www.zeldadungeon.net/wiki/images/thumb/f/f5/Link_-_TotK_key_art.png/400px-Link_-_TotK_key_art.png",
//         actualPrice: "200",
//         cancelPrice: "150"
//     },
//     {
//         name: "Dr. Neha's Teeth Care",
//         image: "https://www.zeldadungeon.net/wiki/images/thumb/f/f5/Link_-_TotK_key_art.png/400px-Link_-_TotK_key_art.png",
//         actualPrice: "200",
//         cancelPrice: "150"
//     },
// ]