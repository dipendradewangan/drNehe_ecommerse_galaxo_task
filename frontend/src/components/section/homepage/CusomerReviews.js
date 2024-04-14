import React from 'react'
import dpLogo from '../../../images/dp-logo.jpg'
import './CusomerReviews.css'

const CusomerReviews = () => {
    return (
        <>
            {/* customer reviews */}
            <div className="cusotmer-review">
                <h1><span style={{color: '#ECD39C'}}>What</span> Customer Say</h1>
                <div className='container'>
                    <button className='scroll-btn'>prev</button>
                    <div className="customer-review-container">

                        {/* all reviews */}
                        <div className="review-container">
                            <div className="review-dp-container">
                                <img src={dpLogo} alt='logo'/>
                            </div>
                            <div className="review-description-container">
                                <h3 className='review-user-name'>Karuna Thakur</h3>
                                <p className='review-description'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                            </div>
                        </div>


                    </div>

                    <button className='scroll-btn'>Next</button>
                </div>
            </div>
        </>
    )
}

export default CusomerReviews
